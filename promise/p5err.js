/**
 * Create By admins on 2020/9/27.
 */

new Promise((resolve,reject)=>{
    throw new Error('错误?')
}).catch(err=>{
    console.error(err)
})
// 或者

new Promise((resolve,reject)=>{
    reject('错误！')
}).catch(err=>{
    console.error(err)
})

// 级联错误

new Promise((resolve,reject)=>{
    throw new Error('错误555')
})
.catch(err=>{
    throw new Error('错误66')
})
.catch(err=>{
    console.error(err)
})

