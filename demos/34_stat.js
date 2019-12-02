//和文件信息有关，可以判断文件是否存在
const fs=require('fs');

// fs.stat('./34_stat.js',(err,stats)=>{
//     if(err) throw err;

// console.log(stats.isFile());//是否为文件，true
// console.log(stats.isDirectory());//是否为文件夹,false

// console.log(stats);

// });

fs.stat('./34_stat.jss',(err,stats)=>{
    if(err) {
        console.log('文件不存在');
        
    };

console.log(stats.isFile());//是否为文件，true
console.log(stats.isDirectory());//是否为文件夹,false

console.log(stats);

});