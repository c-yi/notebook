const fs = require('fs');
const path = require('path');
const nav = require('./config');
const readPwd = 'D:\\NOTEBOOK\\docs\\';
//const readPwd = path.resolve('../../docs');


// 临时容器
let container = {}
// 获取文件目录
const getDir = function (dir) {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, data) => {
            err && reject(err)
            resolve(data)
        })
    })
};

async function generate(con) {
    const {type, childrenTitle, redDir} = con;
    let newPath = path.join(readPwd, redDir)
    let file = await getDir(newPath);

    let newChildren = file.map(item => {
        if (item === 'README.md') {
            return redDir + '/'
        } else {
            return (redDir + '/' + item).replace('.md', '')
        }
    }).sort();
// 存储到临时容器里面
    if (container.hasOwnProperty(type)) {
        let hasThis = container[type].map((item, index) => {
            if (item.title === childrenTitle) {
                return index
            } else {
                return false
            }
        })[0]
        //判断是否有子属性 , 有 替换 ,没有 添加
        if (hasThis === false) {
            container[type].push({'title': childrenTitle, 'children': newChildren})
        } else {
            container[type][hasThis]['children'] = newChildren
        }
    } else {
        container[type] = [
            {
                title: childrenTitle,
                children: newChildren
            }
        ]
    }
}

for (let navKey in nav) {
    let n = nav[navKey]
    n.map((items) => {
        items.children.map(item => {
            let con = {
                type: items.path,
                childrenTitle: item,
                redDir: (items.path + item)
            }
            generate(con)
        })
    })
}

setTimeout(() => {
    const text = `module.exports = ${JSON.stringify(container)}`;
    console.log(text);
    fs.writeFile('D:\\NOTEBOOK\\config\\sidebar\\index.js', text, () => {
    })
}, 100)


