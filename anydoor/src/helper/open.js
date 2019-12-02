//自动打开网页


//child+process进程相关
//exec执行系统的默认命令
const {exec}=require('child_process');

module.exports=url=>{
    switch (process.platform) {
        case 'darwin':
            exec(`open ${url}`);
            break;
    
        case 'win32':
            exec(`start ${url}`);
            break;
    }
};