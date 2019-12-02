const {parse,format}=require('path');
const filePath='/usr/file/my/no.text';
const add=parse(filePath);
console.log(add);
console.log(add.name);
add.base='yes';
console.log(add.base);
console.log(add);
console.log(format(add));
