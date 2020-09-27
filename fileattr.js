/**
 * Create By admins on 2020/9/27.
 */

const fs = require('fs')

fs.stat('E:/restudy/test.txt',(err,stats)=>{
    if (err){
        console.error(err)
        return
    }
    stats.isFile()
    stats.isDirectory()
    stats.isSymbolicLink()
    stats.size
})