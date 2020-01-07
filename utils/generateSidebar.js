const path = require('path');
const fs = require('fs');
const p = 'D:\\NOTEBOOK\\docs\\note';
var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readdir(fileName, function (error, data) {
            if (error) reject(error);
            resolve(data);
        });
    });
};

const asyncReadFile = async function () {
    var f1 = await readFile(path.resolve(p));
    let n = {}
    for (let i = 0; i < f1.length; i++) {
        let fPath = (path.join(p, f1[i])).replace(/\\/g, '\\\\');
        let item = await readFile(fPath);
        item.map(it => {
            if (!it.includes('.md')) {
                n[`/note/${f1[i]}/${it}`] = [`${f1[i]}.${it}`]
            }
        })
    }
    console.log(n);
};
asyncReadFile()
