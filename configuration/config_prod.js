const config = {
  app: {
    port: process.env.PORT_FS,
    host: process.env.HOST_FS,
    key: ""
  },
  accionesDePersonal:{
    user: process.env.FS_SQL_RRHH_USER,
    password: process.env.FS_SQL_RRHH_PASSWORD,
    server: process.env.FS_SQL_ACCIONES_DE_PERSONAL_HOST,
    database: process.env.FS_SQL_ACCIONES_DE_PERSONAL_DB,
    options: { 
      encrypt: false,
  } 
  },
  WebUsers02:{
    user: process.env.FS_SQL_WEB_USERS,
    password: process.env.FS_SQL_WEB_USER_PASSWORD,
    server: process.env.FS_SQL_WEB_USERS_HOST,
    database: process.env.FS_SQL_WEB_USERS_DB,
    options: { 
      encrypt: false,
  } 
  },
  WebUsers:{
    user: 'desarrollo',
    password: 'dsrcorp',
    server: '192.168.9.21',
    database: 'WebUsers',
    options: { 
      encrypt: false,
  } 
  }, 
  vHur:{
    user: process.env.FS_SQL_VHUR_USERS,
    password: process.env.FS_SQL_VHUR_PASSWORD,
    server: process.env.FS_SQL_VHUR_HOST,
    database: process.env.FS_SQL_VHUR,
    options: { 
        encrypt: false,
    } 
  },
  app_mysql:{
    host: process.env.FS_MYSQL_APP_CORPORATIVA_HOST,
    user: process.env.FS_MYSQL_APP_CORPORATIVO_USERS,
    password : process.env.FS_MYSQL_APP_CORPORATIVO_PASSWORD,
    database : process.env.FS_MYSQL_APP_CORPORATIVA_DB,
    connectionLimit : 10,
    }
};

module.exports = config;
