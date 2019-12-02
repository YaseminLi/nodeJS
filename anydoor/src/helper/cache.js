//根据配置分析响应
    const {cache}=require('../config/defaultConfig');
    //refreshRes
    //stats 储存修改时间
    function refreshRes(stats,res){
        const {maxAge,expires,cacheControl,lastModified,etag}=cache;

        //设置未来过期时间
        if(expires){
            //maxAge 为秒
            res.setHeader('Expires',(new Date(Date.now()+maxAge*1000)).toUTCString());
        }
        //缓存的相应指令
        //public:响应可以被被任何对象缓存
        //max-age:缓存存储的最大周期，单位秒，相对于请求的时间
        if(cacheControl){
            res.setHeader('Cache-Control',`public,max-age=${maxAge}`);
        }
        if(lastModified){
            res.setHeader('LastModified',stats.mtime.toUTCString());
        }

        if(etag){
            res.setHeader('ETag',`${stats.size}-${stats.mtime}`);
        }
    };

    module.exports=function isFresh(stats,req,res){
        refreshRes(stats,res);
        const lastModified=req.headers['if-modified-since'];
        const etag=req.headers['if-none-match'];

        //如果最后一次修改和etag在req中都不存在，返回缓存不新鲜
        if(!lastModified&&!etag){
            return false;
        }

        if(lastModified&&lastModified!==res.getHeaders('LastModified')){
            return false;
        }

        if(etag&&etag!==res.getHeaders('ETag')){
            return false;
        }

        //否则可以用缓存
        return true;
    };