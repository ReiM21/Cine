var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var pelicula = new Schema ({  //  Schema es una palabra reservada de Mongoose para guardarlo en MongoDB

  nombre : String,
  duracion_minutos : Number,
  genero : String,
  idioma_audio : String,
  idioma_sub : String,
  sinopsis : String,
  clasificacion : String,
  precio : Number,
  hora_inicio : Number,
  fecha : Date,
  minuto_inicio : Number,
  asientos : {

    a1 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    a2 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    a3 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    a4 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    a5 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    a6 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },

    b1 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    b2 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    b3 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    b4 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    b5 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    b6 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },

    c1 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    c2 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    c3 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    c4 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    c5 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    c6 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },

    d1 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    d2 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    d3 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    d4 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    d5 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },

    e1 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    e2 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    e3 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    e4 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },

    f1 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    f2 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    f3 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    f4 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },

    g1 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    g2 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    g3 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    g4 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },

    h1 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    h2 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    h3 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },
    h4 : {
      nombre_estudiante : String,
      seccion : String,
      carne : Number
    },

},
  imagen : String,
  estado : Number
});

module.exports = mongoose.model('Pelicula' , pelicula);
