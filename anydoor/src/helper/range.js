//totalSize,所有的字节数 
module.exports = (totalSize, req, res) => {
    const range = req.headers['range'];
    if (!range) {
        return {
            code: 200
        }
    };
    //match得到的是一个数组，bytes=,start,end
    const sizes = range.match(/bytes=(\d*)-(\d*)/);
    const end = sizes[2] || totalSize - 1;
    const start = sizes[1] || totalSize - end - 1;

    //判断一些非法条件
    if (start > end || end > totalSize || start < 0) {
        return { code: 200 };
    }

    res.setHeader('Accept-Ranges', 'bytes');
    res.setHeader('Content-Range', `bytes ${start}-${end}/${totalSize}`);
    res.setHeader('Content-Length', end - start);
    return {
        code: 206,
        start: parseInt(start),
        end: parseInt(end)
    }
};