//exportsweimodule.exports的快捷方式
// const exports=module.exports;
// (
//    function(exports,require,module) 
// );

// ok,添加exports的属性
//exports.test=100; 

//将对象直接赋值给exports,改变了exports的指针，不再指向module.exports
// exports={
//     a:1,
//     b:2
// };

//ok
// module.exports={
//     a:1,
//     b:2,
// }
