/**
 * Create By admins on 2020/9/27.
 */
//setinterval定时循环执行

setInterval(()=>{
console.log('每s执行一次');
},2000)

//定时循环函数，为避免回调时与前一函数重叠，可使用settimeout
