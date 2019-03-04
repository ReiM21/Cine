var Item = require('./pelicula'); //  Requiere la clase pelicula del archivo pelicula.js
module.exports = class _Pelicula {
   constructor( ) { //  No obtiene datos por la version de mongo utilizada

   }
Guardar(req,res) {

  console.log(req.body.ASIENTOS);
	Item.create( //  Permite guardar en la base de datos
			{
    nombre: req.body.NOMBRE,
    duracion_minutos: req.body.DURACIONMINUTOS,
    genero: req.body.GENERO,
    idioma_audio: req.body.IDIOMAAUDIO,
    idioma_sub: req.body.IDIOMASUB,
    sinopsis: req.body.SINOPSIS,
    clasificacion: req.body.CLASIFICACION,
    precio: req.body.PRECIO,
    hora_inicio: req.body.HORAINICIO,
    fecha: req.body.FECHA,
    minuto_inicio: req.body.MINUTOINICIO,
    asientos: req.body.ASIENTOS,
    imagen: req.body.IMAGEN,
    estado: req.body.ESTADO
            },
			function(err, item) {  //  Funcion para mostrarle al usuario los errores
				if (err)
                    {
					res.send(err);}

          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});


          }

			});



}

 Modificar(req,res) {
   console.log(req.body.ASIENTOS);
		Item.update( {_id : req.body._id}, //  Permite cambiar los objetos del documento
					{$set:
			{
        nombre: req.body.NOMBRE,
        duracion_minutos: req.body.DURACIONMINUTOS,
        genero: req.body.GENERO,
        idioma_audio: req.body.IDIOMAAUDIO,
        idioma_sub: req.body.IDIOMASUB,
        sinopsis: req.body.SINOPSIS,
        clasificacion: req.body.CLASIFICACION,
        precio: req.body.PRECIO,
        hora_inicio: req.body.HORAINICIO,
        dia: req.body.FECHA,
        minuto_inicio: req.body.MINUTOINICIO,
        asientos: req.body.ASIENTOS,
        imagen: req.body.IMAGEN,
        estado: req.body.ESTADO
            }},
			function(err, item) {  //  Funcion que determina los errores
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});


          }

			});



}

    Eliminar(req,res) { //  Permite eliminar objetos del documento
	Item.remove({_id : req.body.id},
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});


          }

			});



}
Seleccionartodos(req,res) { //  Perimte seleccionar todos los objetos del documento
		Item.find(
		function(err, item) { //  Funcion que avisa si hay errores
			if (err)

                {
				res.send(err)
                }else{


					res.json(item); // devuelve todas las Personas en JSON

                }
				}
			);



}

    Seleccionarporfecha(req,res) {  //  Permite elegir una pelicula segun la fecha indicada en el front end
	Item.find({FECHA:req.body.FECHA}, function(err, item) {
			if (err){
				res.send(err)}
        else{

					res.json(item); // devuelve todas las Personas en JSON

        }







    }
			);



}

    Seleccionarporid(req,res) { //  El usuario ingresa un ID y puede ver la(s) pelicula(s) de ese ID
	Item.find({_id:req.body._id}, function(err, item) {
			if (err){
				res.send(err)}
        else{

					res.json(item); // devuelve todas las Personas en JSON

        }







    }
			);


}

    Seleccionarpornombre(req,res) { //  El usuario ingresa el nombre de la pelicula y le muestra las peliculas relacionadas
	Item.find({NOMBRE:req.body.NOMBRE}, function(err, item) {
			if (err){
				res.send(err)}
        else{

					res.json(item); // devuelve todas las Personas en JSON

        }







    }
			);



}   //  Seleccionarpornombre
} //  Class pelicula
