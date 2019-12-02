const mod=require("./09_global");
console.log(mod.testVar);//100
//console.log(testVar);//undefined,testVar is not defined
console.log(testVar2);//200，全局变量
console.log(mod.testVar2);//undefined，定义在全局变量上了