/**
 * Create By admins on 2020/9/27.
 */
let done = true;

const isItDoneYet = new Promise((resolve,reject)=>{
    if (done){
        const workDone = '这是创建的东西'
        resolve(workDone)
    }else {
        const why='仍然在处理其他的事情'
        reject(why)
    }
})