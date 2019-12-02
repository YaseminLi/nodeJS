//writestream可写流，生产一点写一点
const fs = require('fs');

const rs = fs.createWriteStream('./test.txt');

const rid=setInterval(() => {
    const num = parseInt(Math.random() * 10);
    if (num < 8) {
        console.log(num);
        rs.write(num + '');//num转化为string,write只可写入buffer或者字符串,每次执行会覆盖之前的写入
    } else {
        clearInterval(rid);//清空定时器
        rs.end();
    }
}, 200);
rs.on('finish',()=>{
    console.log('done!');  
});