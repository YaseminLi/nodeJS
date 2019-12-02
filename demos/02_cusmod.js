console.log('this is a module');
const testVar=100;
function test() {
    console.log(testVar);
}
//对外输出
module.exports.testVar=testVar;
module.exports.testFn=test;