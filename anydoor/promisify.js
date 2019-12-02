//promisify原理
//为什么不在promisify传入两个参数呢？
function promisify(asyncfunc){
    return function(...argument){
        return new Promise((resole,reject)=>{
            asyncfunc(...arguments,(err,...other)=>{
                if(err){
                    reject();
                }else{
                    resolve(...other);
                }
            });
        });
    }
};