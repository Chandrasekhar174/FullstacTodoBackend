const mysql=require('mysql2');
const connection=mysql.createConnection({
    host:'shortline.proxy.rlwy.net',
    user:'root',
    port:23854,
    password:'rVDsJwDEotqkRkWoFVEihpArNXjfIdUK',
    database:'railway'
});

connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("MySQL connected.....");

    
});
module.exports=connection;
