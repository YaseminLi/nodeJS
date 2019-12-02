const {join}=require('path');
console.log(join('myfile','huju','demo','..'));
console.log(join('myfile','huju','demo','{}'));
console.log(join('myfile','huju',{},'demo'));