/**
 * Create By admins on 2020/9/27.
 */
const path = require('path')
const fs = require('fs-extra')

const folder = '/Users/abc/test'

// 方法一
// fs.remove(folder, err => {
//     console.error(err)
// })


// 方法二
// fs.remove(folder)
//     .then(() => {
//         //完成
//     })
//     .catch(err => {
//         console.error(err)
//     })

// 方法三

async function removeFolder(folder) {
    const fileName=path.basename(folder);
    try {
        await fs.remove(folder)
        //完成
        console.log(`删除文件夹${fileName}成功！`)
    } catch (err) {
        console.error(err)
    }
}

removeFolder(folder)