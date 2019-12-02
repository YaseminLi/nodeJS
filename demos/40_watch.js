//监视文件的变化,得到一些通知,构建本地文件非常有用？
const fs=require('fs');
fs.watch('./',
{//监视所有子目录还是仅限当前目录
    recursive:true
},(eventType,filename)=>{
    console.log(eventType,filename);
});



