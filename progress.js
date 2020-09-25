/**
 * Create By admins on 2020/9/25.
 */
// 创建进度条
const ProgressBar = require('progress')
const bar = new ProgressBar(':bar',{total:10})
const timer = setInterval(()=>{
    bar.tick()
    if (bar.complete){
        clearInterval(timer)
        console.log("进度已完成！");
    }
},500)
