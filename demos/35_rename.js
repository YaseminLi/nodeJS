//修改文件名字
const fs=require('fs');
fs.rename('./text.js','test.txt',err=>{
    if(err) throw err;

    console.log('done');
});