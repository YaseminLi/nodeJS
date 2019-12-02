//传入事件处理程序一些参数
const EventEmitter=require('events');

class CustomEmitter extends EventEmitter{};

const ce=new CustomEmitter();

ce.on('error',(err,time)=>{
    console.log(err);
    console.log(time);
});

ce.emit('error',new Error('OPPS!'),Date.now());