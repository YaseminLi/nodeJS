//执行顺序
// nextTick  当前队列队尾
// setTimeout 两者之间
// setImmediate 下一个队列队首
setImmediate(()=>{
console.log("setImmediate");
});

setTimeout(() => {
    console.log("setTimeout"); 
}, 0);

//比setImmediate执行早
process.nextTick(()=>{
    console.log("nextTick")
});