var controllerpelicula = require('./controllerpelicula.js');
var controllerAdministrador = require('./controlleradministrador.js');

module.exports = function(app) {
  var clasepelicula = new controllerpelicula(); //  Muestra el response segun el request del usuario
  app.post('/api/nuevapelicula' , clasepelicula.Guardar); //  Muestra el response segun el request del usuario
  app.post('/api/modificapelicula' , clasepelicula.Modificar);  //  Muestra el response segun el request del usuario
  app.post('/api/eliminapelicula' , clasepelicula.Eliminar);  //  Muestra el response segun el request del usuario
  app.post('/api/seleccionapelicula' , clasepelicula.Seleccionartodos); //  Muestra el response segun el request del usuario
  app.post('/api/seleccionarpeliculaporfecha' , clasepelicula.Seleccionarporfecha); //  Muestra el response segun el request del usuario
  app.post('/api/seleccionarporid' , clasepelicula.Seleccionarporid);
  app.post('/api/seleccionarpeliculapornombre' , clasepelicula.Seleccionarpornombre); //  Muestra el response segun el request del usuario


   var claseadm-new controllerAdministrador();
   app.post('/api/nuevoadmin', claseadm.Guardar);
   app.post('/api/loginadmin', claseadm.Login);



  app.get('*' , function(req , res) { //  localhost 8080
    res.sendfile('./login.html'); //  Carga unica de la vista
  });
}
