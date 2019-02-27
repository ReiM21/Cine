var express  = require('express');
var app      = express(); 					// Utilizamos express
var mongoose = require('mongoose'); 				// mongoose para mongodb
var port  	 = process.env.PORT || 8080; 			// Cogemos el puerto 8080


mongoose.connect('mongodb://localhost:27017/Taquilla'); 	// Hacemos la conexión a la base de datos de Mongo con nombre "MeanExample"
//mongoose.connect('mongodb://mavar84:Candelabro30@ds111589.mlab.com:11589/conflicto'); 
//mongodb://<dbuser>:<dbpassword>@
//mongoose.connect('mongodb://mavar84:Candelabro30@ds139959.mlab.com:39959/pegasus'); 



//mongoose.connect('mongodb://pegasus:Candelabro30@ds061360.mlab.com:61360/pegasus'); 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.configure(function() {
	app.use(express.static(__dirname + '/')); 		
	app.use(express.logger('dev')); 			// activamos el log en modo 'dev'
	//app.use(express.bodyParser());
    //app.use(express.bodyParser.json({limit: '50mb'}));
    //app.use(express.bodyParser.urlencoded({limit: '50mb', extended: true}));
	app.use(express.methodOverride());
//    app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
});
var bodyParser= require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// Cargamos los endpoints
require('./routes.js')(app);

// Cogemos el puerto para escuchar
app.listen(port);
console.log("APP por el puerto " + port);