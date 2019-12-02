const fs=require('fs');

fs.readFile('./32_readfile.js','utf8',(err,data)=>{
    if(err) throw err;

    console.log(data);
    
});
//同步先执行，结束后异步再有可能执行，异步优先，高并发时    
const data=fs.readFileSync('./01_run.js','utf8');
console.log(data);
