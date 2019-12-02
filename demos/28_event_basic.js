//基础的event事件
const EventEmitter=require('events');

class CustomEvent extends EventEmitter{};//定义类继承……

const ce=new CustomEvent();//实例化

ce.on('test',()=>{
    console.log('This is test!');
});//监听事件‘test’

setInterval(()=>{ce.emit('test');},500);