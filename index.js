/**
 * Create By admins on 2020/9/25.
 */
/**
 * Create By admins on 2020/9/23.
 */
const Koa = require('koa');
const Router = require('koa-router');
const mysql = require('mysql');

const app = new Koa();
const router = new Router();

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'BrPAgk7txt5WEZN3',
    database:'mysqlkoa'
})

connection.connect(err => {
    if (err) throw err;
    console.log('mysql connected success!');
})

router.get('/', ctx=>{
    ctx.body = 'visit index';
})

//创建数据库 / 数据表 create
router.get('/createdb', ctx => {
    return new Promise(resolve => {
        // const sql = `CREATE DATABASE mysqlkoa`;//创建数据库
        const sql = `CREATE TABLE fe_frame(id INT(11) AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255),author VARCHAR(255))`;//创建数据表
        connection.query(sql, (err) => {
            if (err) throw err;
            ctx.body = {
                code: 200,
                msg: `create database mysqlkoa and table of fe_frame success!`
            }
            resolve();
        });
    })
})


//写入单条数据
router.get('/insert',ctx=>{
    return new Promise(resolve => {
        // 单条
        const sql = `INSERT INTO fe_frame(name,author) VALUES('vue','Evan')`;
        connection.query(sql,[values],(err)=>{
            if (err) throw err;
            ctx.body = {
                code: 200,
                msg: `insert data to fe_frame success!!!`
            }
            resolve();
        })
    })
})

//写入多条数据
router.get('/insertmulti',ctx=>{
    return new Promise(resolve => {

        const sql = `INSERT INTO fe_frame(name,author) VALUES ?`;
        const values = [
            ['React','Facebook1'],
            ['Angular','Google1'],
            ['Vue','Jonh Resig1'],
            ['jQuery','Hisenburg'],
        ];
        connection.query(sql,[values],(err,result)=>{
            if (err) throw err;
            ctx.body = {
                code: 200,
                msg: `insert ${result.affectedRows} data to fe_frame success!!`
            }
            resolve();
        })
    })
})

//删除数据 delete
router.get('/delete',ctx =>{
    return new Promise(resolve => {
        const name = ctx.query.name;
        const sql = `DELETE FROM fe_frame WHERE name = '${name}'`;
        connection.query(sql,(err,result)=>{
            if(err) throw err;
            ctx.body= {
                code:200,
                msg:`delete ${result.affectedRows} data from fe_frame success!`
            };
            resolve();
        })
    })
})

//修改数据
router.get('/update',ctx=>{
    return new Promise(resolve => {
        const sql=`UPDATE fe_frame SET author = 'Evan You' WHERE NAME = 'vue'`;

        connection.query(sql,(err,result)=>{
            if (err) throw err;
            ctx.body = {
                code:200,
                msg:`update ${result.affectedRows} data from fe_frame success!!`
            };
            resolve();
        })
    })
})

//查找数据 search
router.get('/select',ctx =>{
    return new Promise(resolve => {
        let name = ctx.query.name;
        const sql = `SELECT * FROM fe_frame WHERE name ='${name}'`;
        connection.query(sql,(err,result)=>{
            if (err) throw err;
            ctx.body = {
                code:200,
                data:result
            }
            resolve();
        })
    })
})

app.use(router.routes());

app.listen(3000);