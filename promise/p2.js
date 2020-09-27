/**
 * Create By admins on 2020/9/27.
 */

const fs = require('fs')
const getFile = (fileName)=>{
    return new Promise((resole,reject)=>{
        fs.readFile(fileName,(err,data)=>{
            if (err){
                reject(err);
                return;
            }
            resolve(data)
        })
    })
}

getFile('/etc/passwd')
.then(data=>console.log(data))
.catch(err=>console.error(err))