/**
 * Create By admins on 2020/9/25.
 */

const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

readline.question(`你叫什么名字？`,name=>{
    console.log(`你好 ${name}小崽子!`)
    readline.close()
})