const {createGzip,createDeflate}=require('zlib');
//压缩文件方法
//rs=>reastream
module.exports=(rs,req,res)=>{
//获取浏览器压缩方式
const acceptEncoding=req.headers['aceept-encoding'];
//两种情况不能压缩:不支持任何，或者服务器不支持的
//\b单词边界
if(!acceptEncoding||!acceptEncoding.match(/\b(gzip|deflate)\b/)){
    return rs;//不做任何处理
}else if(acceptEncoding.match(/\bgzip\b/)){
    res.setHeader('Content-Encoding','gzip');
    return rs.pipe(createGzip());
}else if(acceptEncoding.match(/\bdeflate\b/)){
    res.setHeader('Content-Encoding','deflate');
    return rs.pipe(createDeflate());
}
};