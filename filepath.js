/**
 * Create By admins on 2020/9/27.
 */

// 读取路径
const path = require('path')
const notes = '/Users/joe/test.txt'

const a=path.dirname(notes) // /users/joe
var b=path.basename(notes) // notes.txt
var c=path.extname(notes) // .txt

console.log(a);
console.log(b);
console.log(c);