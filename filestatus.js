/**
 * Create By admins on 2020/9/27.
 */

// const fs=require('fs')
//
// const folderName = '/Users/joe/test'
// try {
//     if (!fs.existsSync(folderName)) {
//         fs.mkdirSync(folderName)
//         console.log(folderName)
//     }
// } catch (err) {
//     console.error(err)
// }

const fs = require('fs')
const path = require('path')

const folderPath = '/Users/joe'

console.log(fs.readdirSync(folderPath))

//获取完整路径
const pathway=fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName)
})

console.log(pathway);

const isFile = fileName => {
    return fs.lstatSync(fileName).isFile()
}
// 过滤结果
const way=fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName)
})
    .filter(isFile)
console.log(way);

