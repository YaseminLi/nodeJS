//node.js 启动脚本相关参数
//argv 进程启动时的命令行参数
//argv0 获取argv[0]的原始值
//execArgv
//execPath argv的第一个参数

const {argv,argv0,execArgv,execPath}=process;//process的属性
argv.forEach(item => {
    console.log(item);    
});
//C:\Program Files\nodejs\node.exe node安装路径 
//C:\Users\26084\Desktop\note\node-learning\demos\10_argv.js 当前文件执行路径
//node .\10_argv.js --test a=1 b=2 可自定义传入参数

console.log(argv0);//C:\Program Files\nodejs\node.exe
console.log(execArgv);//$ node --harmony script.js --version  ['--harmony']
console.log(execPath);//C:\Program Files\nodejs\node.exe  argv0