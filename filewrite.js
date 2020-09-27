/**
 * Create By admins on 2020/9/27.
 */
const fs = require('fs')

const content = '一些内容abcd'

fs.writeFile('/Users/abc/test.txt', content, err => {
    if (err) {
        console.error(err)
        return
    }
    //文件写入成功。
    console.log('写入成功！')
})