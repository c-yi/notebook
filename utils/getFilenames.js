/*获取目录下的所有文件名*/
const {readdir, writeFile} = require('fs');
const {resolve} = require('path');

const FOLDERPATH = 'D:\\WWW\\notebook\\docs\\note\\tools\\mysql';
readdir(FOLDERPATH, (err, files) => {
    let fileNames = [];
    let temp = false;
    files = Array.from(files);
    files.map(file => {
        if (file === 'README.md') {
            temp = true
        } else {
            file = file.replace('.md', '');
            fileNames.push(`'${file}'`);
        }
    });
    if (temp) {
        fileNames.unshift(`''`);
    }
    console.log(fileNames);
    writeFile(resolve(__dirname, './filename.js'), `module.exports =[${[...fileNames]}];`, () => {
        console.log('获取文件名成功')
    })
});

