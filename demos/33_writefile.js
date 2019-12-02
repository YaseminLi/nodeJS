const fs=require('fs');
//直接写字符串
// fs.writeFile('./text.js','this is a test','utf8',err=>{
//     if(err) throw err;

//     console.log('done');
    
// });

//使用buffer
const content=Buffer.from('This is a a test');
fs.writeFile('./text.js',content,err=>{
    if(err) throw err;

    console.log('done');
    
});