/**
 * Create By admins on 2020/9/27.
 */

// const fs = require('fs');
// fs.rename('/User/joe','/User/roger',err=>{
//     if (err){
//         console.error(err)
//         return
//     }
// })


// 修改文件名
const fs = require('fs')

try {
    fs.renameSync('/Users/joe', '/Users/roger')
} catch (err) {
    console.error(err)
}