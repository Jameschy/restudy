
/**
 * Create By admins on 2020/9/27.
 */
/*
@name:堆栈
@description:堆栈案例示范
@author: chig
@time: 2020-09-27 11:26:20
*/

const bar =() =>console.log('bar')
const baz =() =>console.log('baz')

// const foo =() =>{
//     console.log('foo')
//     bar();
//     baz();
// }

const foo =() =>{
    console.log('foo')
    setTimeout(bar,0);
    baz();
}
foo();