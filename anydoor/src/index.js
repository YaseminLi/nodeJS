
const yargs=require('yargs');
const Server=require('./app');
const argv=yargs
        .usage('anywhere [options]')
        .option('p',{
            alias:'port',//alias设置命令的短名称
            describe:'端口号',
            default:8000,
        })
        .option('h',{
            alias:'host',
            describe:'服务器',
            default:'127.0.0.1'
        })
        .option('d',{
            alias:'root',
            describe:'根目录',
            default:process.cwd()
        })
        .version()
        .alias('v','version')
        .help()
        .argv;

        const server=new Server(argv);//实例化server,并传入argv??
        server.start();