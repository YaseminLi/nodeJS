const http = require('http');
const chalk = require('chalk');
const path = require('path');
const conf = require('./config/defaultConfig');
const route=require('./helper/route');
const open=require('./helper/open');

class Server{
    constructor(config){
        //合并
        this.conf=Object.assign({},conf,config);
    }
    start(){
        const server = http.createServer((req, res) => {
            const url = req.url;
            const filePath = path.join(this.conf.root, url);
            route(req,res,filePath,this.conf);
        });
        server.listen(this.conf.port, this.conf.hostname, () => {
            const addr = `http://${this.conf.hostname}:${this.conf.port}`;
            console.log(`Sever started at ${chalk.green(addr)}`);
        open(addr);
        });
    }
}
module.exports=Server;


        //demo2
        // //拿到路径，之后，是文件返回内容，文件夹就返回列表
        // //获取文件状态
        // fs.stat(filePath, (err, stats) => {
        //     if (err) {
        //         res.statusCode = 404;
        //         res.setHeader('Content-Type', 'text/plain');
        //         res.end(`${filePath}is not a directory or file.`);
        //         return;//记得return 出去
        //     }
        //     if(stats.isFile()){
        //         res.statusCode = 200;
        //         res.setHeader('Content-Type', 'text/plain');
        //         //creatReadStream(path)打开可读的文件流，返回fs.readstream对象
        //         //pipe(res)通过流的方式一点点吐回给客户端
        //         //不用fs.readFile(),它是缓冲整个文件，会比creat慢很多
        //         fs.createReadStream(filePath).pipe(res);
        //     }else if(stats.isDirectory()){
        //         //文件夹
        //         //读取文件夹内容，files为文件名数组
        //         fs.readdir(filePath,(err,files)=>{
        //             res.statusCode = 200;
        //             res.end(files.join(','));
        //         });

        //     }
        // });
        //demo1
        // res.statusCode = 200;
        // res.setHeader('Content-Type', 'text/html');
        // res.end(filePath);
        // res.write('<html>');
        // res.write('<body>');
        // res.write('hello xiaoming!');
        // res.write('</body>'); 
        // res.end('<html');
  
