const request = require('request');
var fs = require('fs');
var data=fs.readFileSync('./datos.json', 'utf8');

exports.elecciones = async function(req, res, next) {
  var datos =await JSON.parse(data)

  console.log(data)
  datos.push(JSON.parse(req.params.dat))
  console.log(datos)

  try{
    fs.writeFileSync('./datos.json', JSON.stringify(datos));
}catch (e){
    console.log("Cannot write file ", e);
}



  res.send(req.params)
}
