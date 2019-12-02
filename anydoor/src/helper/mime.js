const path = require('path');
const mimeTypes = {
    "js": {
        text: "text/javascript;charset=utf-8",
        icon: '怎么获取icon的地址'
    },
    "tpl": {
        text: "text/html;charset=utf-8",
        icon: 'tpl.png'
    },
    "json": {
        text: "application/json;charset=utf-8",
        icon: 'json.png'
    },
    "txt": {
        text: "text/plain;charset=utf-8",
        icon: 'txt.png'
    }
    // "ico": {
    //     text: "image/x-icon",
    //     icon: '../pic/document_128px_1230971_easyicon.net.ico'
    // },
    // "png": {
    //     text: "image/png",
    //     icon: '../pic/document_128px_1230971_easyicon.net.ico'
    // },
    // "jpg": {
    //     text: "image/jpeg",
    //     icon: '../pic/document_128px_1230971_easyicon.net.ico'
    // }
};

module.exports = (filePath) => {
    //extname:获取拓展名
    let ext = path.extname(filePath).split('.').pop().toLowerCase();
    if (!ext) {
        ext = filePath;//?
    }
    return mimeTypes[ext] ? mimeTypes[ext] : mimeTypes['txt'];
    // return mimeTypes[ext] ? mimeTypes[ext].text : mimeTypes['txt'].text;

    // if (!mimeTypes[ext]) {
    //     return mimeTypes['txt'].text;
    // } else { 
    //     return mimeTypes[ext].text;
    //  }
    //mimeTypes[ext]可能为undefined
    // return mimeTypes[ext].text || mimeTypes['txt'].text;
};