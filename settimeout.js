/**
 * Create By admins on 2020/9/27.
 */

setTimeout(()=>{
    console.log('我定时了，你刚刚说啥？');
},2000);
setTimeout(()=>{
    console.log('我爸爸呢？来了吗？');
},50);

const myFunction=(firstParam,secondParam)=>{
    console.log("这是个定时任务！"+firstParam*secondParam);
}

setTimeout(myFunction,3000,6,5);


