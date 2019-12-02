const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const mime = require('./mime');
const compress = require('./compress');
const range = require('./range');
const isFresh=require('./cache');

//tplPath='../template/dir.tpl',不可以，不同启动目录下..不同
//处理路径尽量用绝对路径
//__dirname,返回的是被执行文件的绝对路径
const tplPath = path.join(__dirname, '../template/dir.tpl');
//同步方法，下面的东西必须等待这个结果，且只需启动一次template就可以
//fs文件读出的是buffer
const source = fs.readFileSync(tplPath, 'utf-8');
//生成template
const template = handlebars.compile(source.toString());
// 找到pic目录
const picPath = path.join(__dirname, '../pic');
// console.log(path.relative(config.root, picPath));



module.exports = async function (req, res, filePath,config) {
    try {
        const stats = await stat(filePath);
        if (stats.isFile()) {
            const contentType = mime(filePath).text;
            res.setHeader('Content-Type', contentType);
            if(isFresh(stats,req,res)){
                console.log('304');
                
                res.statusCode=304;
                res.end();
                return;
            }
            let rs;
            const { code, start, end } = range(stats.size, req, res);
            if (code === 200) {
                res.statusCode = 200;
                rs = fs.createReadStream(filePath);
                // rs = fs.createReadStream(filePath, 'utf-8');
            } else {
                res.statusCode = 206;
                rs = fs.createReadStream(filePath, { start, end });
                // rs = fs.createReadStream(filePath, { start, end, encoding: 'utf-8' });
            }
            if (filePath.match(config.compress)) {
                rs = compress(rs, req, res);
            }
            rs.pipe(res);
        } else if (stats.isDirectory()) {
            const files = await readdir(filePath);
            const dir = path.relative(config.root, filePath);
            //const icon = path.join(path.relative(config.root, picPath) ,mime(filePath).icon);
            // console.log('icon：'+icon);
            // //怎么浏览获取每个文件的路径？
            // console.log('mime:'+mime(filePath).icon);
            // console.log('rel:'+path.relative(config.root,picPath));
            
            const data = {
                //path.basename,返回path的最后一部分
                title: path.basename(filePath),
                //relative,从root到filepath的相对路径
                //文件的路径
                dir: dir ? `/${dir}` : '',
                files: files.map(file => {
                    // console.log(file);
                    const iconPath=mime(file).icon;
                    // console.log(iconPath);
                    
                    return {
                        file,
                        icon: iconPath
                    }
                })
            };
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(template(data));
        }
    } catch (ex) {
        console.log(ex);
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`${filePath}is not a directory or file.\n ${ex}`);
    }
};

