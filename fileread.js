/**
 * Create By admins on 2020/9/27.
 */
// 读取文件内容
// const fs = require('fs')
//
// fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data)
// })
//
//
// fs.readFile('/restudy/README.md', 'utf8' , (err, data) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data)
// })

// const fs = require('fs')
//
// try {
//     const data = fs.readFileSync('/Users/joe/test.txt', 'utf8')
//     console.log(data)
// } catch (err) {
//     console.error(err)
// }


const fs = require('fs')

const folderName = '/Users/abc/test'

try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName)
        console.log('新建文件夹成功！')
    }
} catch (err) {
    console.error(err)
}