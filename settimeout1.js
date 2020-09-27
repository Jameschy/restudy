/**
 * Create By admins on 2020/9/27.
 */
//setinterval定时循环执行

const myFunction=()=>{
    console.log("吱吱吱");
    setTimeout(myFunction,1000);
}

setTimeout(myFunction,1000);

//setImmediate()（相当于使用 setTimeout(() => {}, 0)）