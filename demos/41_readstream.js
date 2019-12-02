//stream有方向的数据流，3升桶接5升水；小内存电脑看电影

const fs=require('fs');

const rs=fs.ReadStream('./41_readstream.js');//创建流，数据是传入的文件

rs.pipe(process.stdout);//流的方向，控制流向将数据流入流向控制台
