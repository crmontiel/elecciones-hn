const config = {
  app: {
    port: "5000",
    host: "0.0.0.0",
    key: ""
  },
  accionesDePersonal:{
    user: 'corporativo',
    password: 'crpfarsiman',
    server: '10.0.0.3',
    database: 'RRHH_Farsiman',
    options: { 
      encrypt: false,
  } 
  },
  WebUsers:{
    user: 'farmacia',
    password: 'farsiman',
    server: '10.0.0.2',
    database: 'WebUsers',
    options: { 
      encrypt: false,
  } 
  },
  WebUsers02:{
    user: 'farmacia',
    password: 'farsiman',
    server: '10.0.0.2',
    database: 'WebUsers',
    options: { 
      encrypt: false,
  } 
  },
  vHur:{
    user: 'corporativo',
    password: 'crpfarsiman',
    server: '192.168.1.42\\VHUR',
    database: 'vhur_farsiman',
    options: { 
        encrypt: false,
    } 
  },
  app_mysql:{
    host: 'mariadb-galera.grupofarsiman.io',
    user: 'corporativo',
    password : '#.coprt9915.',
    database : 'AppCorporativo',
    connectionLimit : 10,
    },
  app_mysql_dev:{
    host: 'mariadb-01.dev.grupofarsiman.io',
    user: 'root',
    password : 'dsrcorp',
    port:'30845',
    database : 'RRHH_AccionesDePersonal',
    connectionLimit : 10,
  }
};

module.exports = config;
