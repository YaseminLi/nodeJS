//多个事件都可以触发，但处理程序只进行一次
const EventEmitter=require('events');
 
class CustomEmitter extends EventEmitter{};

const ce=new CustomEmitter();

ce.once('test',()=>{
    console.log('test');
});

setInterval(()=>{
    ce.emit('test');
},500);