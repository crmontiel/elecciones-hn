var mysql = require('mysql');
var config = require('./config');
var config_prod = require('./config_prod');

exports.returnQuery = async function(dataQuery) {
    return new Promise(async function(resolve, reject) {
        var pool;
        try{
          if(process.env.NODE_ENV=="production"){
            pool  = mysql.createPool(config_prod.app_mysql);
          }else{
            pool  = mysql.createPool(config.app_mysql_dev);
          }
          

        pool.getConnection(function(err, connection) {
            if (err) throw err; // not connected!
           
            // Use the connection
            connection.query(dataQuery, function (error, results, fields) {
                resolve(results)
              // When done with the connection, release it.
              connection.release();
              if (error){
                resolve([])
              }
               // Don't use the connection here, it has been returned to the pool.
            });
          });
        }catch(e){
          resolve([])
        }

        // var connection =await mysql.createConnection(config.app_mysql_dev);
        // await connection.connect();
        // await connection.query(dataQuery, function (error, results, fields) {
        //     if (error) {
        //         console.log(error)
        //         return reject(error);
        //     }
        //     resolve(results);
        //   });
        //   connection.end();
   
    });
}