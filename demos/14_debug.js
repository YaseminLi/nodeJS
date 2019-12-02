//inspector
// chrome中输入网址chrome://inspect
// 命令行执行node --inspect-brk  index.js
//  回到chrome中，点击对应文件进入调试页面。

//IDE

function test1(){
    const a=parseInt(Math.random()*10);
    const b=parseInt(Math.random()*10);
    const c=test2(a,b);
}

function test2(a,b){
    if(a<=b){
        a+=10;
    }else{
        b-=2;
    }
    return a+b;
}

test1();