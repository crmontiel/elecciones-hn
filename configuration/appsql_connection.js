const sql = require('mssql')
var Connection = require('tedious').Connection;  
// var config = require('../configuration/config')


exports.returnQuery = async function(config,dataQuery) {
    return new Promise(async function(resolve, reject) {
        

const pool = new sql.ConnectionPool(config);

  pool.on('error', err => {
    console.log('sql errors', err);
  });

  try {
    await pool.connect();
    let result = await pool.request().query(dataQuery);
    resolve(result)
  } catch (err) { 
    resolve([]);
  } finally {
    pool.close();
  }

        // await sql.connect(config, err => {
        //     if (err){
        //         reject(err)
        //         sql.close()
        //         return;
        //     }
        //      new sql.Request().query(`${dataQuery}`, (err, result) => {
        //         if (err){
        //             sql.close()
        //             reject(err)
        //             return;
        //         }    
                
        //             sql.close()
        //             resolve(result)
        //          return
        //     })
        // })
             
    });
}



// const rest = new (require('rest-mssql-nodejs'))(config.vHur);

// module.exports = {
//     rest
// }