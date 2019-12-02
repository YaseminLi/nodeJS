const {normalize}=require('path');
//const  normalize=require('path').normalize;
console.log(normalize('user\\..\\myfile'));
console.log(normalize('\\usr\\hu\\..\\myfile'));
