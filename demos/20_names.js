const {basename,dirname,extname}=require('path');
const filePath='/usr/file/my/no.text';
console.log(basename(filePath));
console.log(dirname(filePath));
console.log(extname(filePath));