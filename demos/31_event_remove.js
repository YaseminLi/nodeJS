const EventEmitter=require('events');

class CustomEmitter extends EventEmitter{};

const ce=new CustomEmitter();

function fn1(){
    console.log('fn1');
};
function fn2(){
    console.log('fn2');
};

ce.on('test',fn1);
ce.on('test',fn2);

setInterval(()=>{
    ce.emit('test')
},500);

setTimeout(()=>{
    //单个移除事件
    // ce.removeListener('test',fn2);
    // ce.removeListener('test',fn1);
    //批量移除
    ce.removeAllListeners('test');
},1500);