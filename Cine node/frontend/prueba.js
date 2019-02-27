   class Pelicula {

     // El constructor siempre debe ser la primera funcion justo debajo de pelicula

constructor(_id,  //  El ID es otorgado por MongoDB
NOMBRE,
DURACIONMINUTOS,
GENERO,
IDIOMAAUDIO,
IDIOMASUB,
SINOPSIS,
CLASIFICACION,
PRECIO,
HORAINICIO,
FECHA,
MINUTOINICIO,
ASIENTOS,
IMAGEN,
ESTADO
) {  // Atributos de la clase
  this._id=_id;
this.NOMBRE =NOMBRE;
this.DURACIONMINUTOS=DURACIONMINUTOS;
this.GENERO=GENERO;
this.IDIOMAAUDIO=IDIOMAAUDIO;
this.IDIOMASUB=IDIOMASUB;
this.SINOPSIS=SINOPSIS;
this.CLASIFICACION=CLASIFICACION;
this.PRECIO=PRECIO;
this.HORAINICIO=HORAINICIO;
this.FECHA=FECHA;
this.MINUTOINICIO=MINUTOINICIO;
this.ASIENTOS=ASIENTOS;
this.IMAGEN=IMAGEN;
this.ESTADO=ESTADO;
}
Guardar() { //  Guarda los valores de cada atributo
var objetoaenviar = this; //  Guarda la clase
// Return a new promise.
return new Promise(function(resolve, reject) {  //  Promesa
// Do the usual XHR stuff

 try {

          var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/Nuevapelicula');  //  Abre el link con al atributo nueva pelicula
xhr.setRequestHeader('Content-Type', 'application/json'); //  Formato JSON
xhr.onload = function() {
if (xhr.status === 200) {
   resolve(JSON.parse(xhr.responseText));
}
else
   {
      reject(xhr);
   }
};
xhr.send(JSON.stringify(objetoaenviar));  //  Convierte la promesa en tipo texto



}
catch(err) {
reject(err.message);

}
});
}

Modificar() { //  Las mismas cosas que guardar pero cambia el link al atributo modificar

  var objetoaenviar = this;
// Return a new promise.
return new Promise(function(resolve, reject) {
// Do the usual XHR stuff

 try {

          var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/Modificapelicula');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
if (xhr.status === 200) {
   resolve(JSON.parse(xhr.responseText));
}
else
   {
      reject(xhr);
   }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
reject(err.message);

}
});


}

Eliminar() {  //  Las mismas cosas que guardar pero cambia el link al atributo eliminar

  var objetoaenviar = this;
// Return a new promise.
return new Promise(function(resolve, reject) {
// Do the usual XHR stuff

 try {

          var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/Eliminapelicula');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
if (xhr.status === 200) {
   resolve(JSON.parse(xhr.responseText));
}
else
   {
      reject(xhr);
   }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
reject(err.message);

}
});


}
Seleccionartodos() {  //  Las mismas cosas que guardar pero cambia el link al atributo seleccionartodos

  var objetoaenviar = this;
// Return a new promise.
return new Promise(function(resolve, reject) {
// Do the usual XHR stuff

 try {

          var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionartodos');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
if (xhr.status === 200) {
   resolve(JSON.parse(xhr.responseText));
}
else
   {
      reject(xhr);
   }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
reject(err.message);

}
});


}

Seleccionarporfecha() { //  Las mismas cosas que guardar pero cambia el link al atributo seleccionar por fecha

  var objetoaenviar = this;
// Return a new promise.
return new Promise(function(resolve, reject) {
// Do the usual XHR stuff

 try {

          var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarporfecha');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
if (xhr.status === 200) {
   resolve(JSON.parse(xhr.responseText));
}
else
   {
      reject(xhr);
   }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
reject(err.message);

}
});


}

Seleccionarporid() {  //  Las mismas cosas que guardar pero cambia el link al atributo seleccionarporid

 var objetoaenviar = this;
// Return a new promise.
return new Promise(function(resolve, reject) {
// Do the usual XHR stuff

 try {

          var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarporid');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
if (xhr.status === 200) {
   resolve(JSON.parse(xhr.responseText));
}
else
   {
      reject(xhr);
   }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
reject(err.message);

}
});

}

Seleccionarpornombre() {  //  Las mismas cosas que guardar pero cambia el link al atributo seleccionarpornombre



 var objetoaenviar = this;
// Return a new promise.
return new Promise(function(resolve, reject) {
// Do the usual XHR stuff

 try {

          var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarpornombre');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
if (xhr.status === 200) {
   resolve(JSON.parse(xhr.responseText));
}
else
   {
      reject(xhr);
   }
};
xhr.send(JSON.stringify(objetoaenviar));



}
catch(err) {
reject(err.message);

}
});

}


peliculapormesyanno(mes,anno) {  // Es un metodo y siempre debe ir con el resto
var objetoaenviar = this;  //  Es una variable con la clase en si
var vectordepeliculasfiltradas = []; // Es un vector con las peliculas en la base de datos
return new Promise(function(resolve, reject) { // Una promesa
try {
var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionapelicula');  //  Abre un link con el atributo seleccionar todos los documentos
xhr.setRequestHeader('Content-Type', 'application/json');  //  Formato JSON
xhr.onload = function() {
  if (xhr.status === 200) {  //  200 si no hay problemas, 404 si no se encuentra
    var peliculas =JSON.parse(xhr.responseText);
for(var elemento in peliculas) { //  Cada elemento dentro de peliculas
var fechadelapelicula = new Date(peliculas[elemento].fecha); //  Nuevo objeto con las fechas
  if((fechadelapelicula.getMonth()+1 == mes) && (fechadelapelicula.getFullYear() == anno)) {
  vectordepeliculasfiltradas.push(peliculas[elemento]);
   } // If
 } //  for
resolve(vectordepeliculasfiltradas);
   } else {
     reject(xhr);
     }
};
xhr.send(JSON.stringify(objetoaenviar)); //  Convierte el contenido de la clase en tip texto
} catch(err) {
reject(err.message);
}
});
}



}

        let imagenenbase64 = "";
 $("#imagen").change(function(){  //  Obtiene la imagen y la cambia a texto
  readURL(this);
});

   function readURL(input) {

               if (input.files && input.files[0]) {
                   var reader = new FileReader();

                   reader.onload = function (e) {

                       imagenenbase64=e.target.result;



                   }

                   reader.readAsDataURL(input.files[0]);
               }
           }




      var asientos = new Object();  //  Los asientos con sus atributos
      //  Fila A
   var asientoA1 = new Object();  //  Cada asiento es un objeto con sus propios atributos
       asientoA1.nombre_estudiante = null;
       asientoA1.seccion=null;
       asientoA1.carne=null;
       asientos.a1= asientoA1;



        var asientoA2 = new Object(); //  Cada asiento es un objeto con sus propios atributos
       asientoA2.NOMBREESTUADIANTE = null;
       asientoA2.SECCION=null;
       asientoA2.CARNET=null;
       asientos.a2= asientoA2;

       var asientoA3 = new Object();  //  Cada asiento es un objeto con sus propios atributos
      asientoA3.NOMBREESTUADIANTE = null;
      asientoA3.SECCION=null;
      asientoA3.CARNET=null;
      asientos.a3= asientoA3;

      var asientoA4 = new Object(); //  Cada asiento es un objeto con sus propios atributos
     asientoA4.NOMBREESTUADIANTE = null;
     asientoA4.SECCION=null;
     asientoA4.CARNET=null;
     asientos.a4= asientoA4;

     var asientoA5 = new Object();  //  Cada asiento es un objeto con sus propios atributos
    asientoA5.NOMBREESTUADIANTE = null;
    asientoA5.SECCION=null;
    asientoA5.CARNET=null;
    asientos.a5= asientoA5;

    var asientoA6 = new Object(); //  Cada asiento es un objeto con sus propios atributos
   asientoA6.NOMBREESTUADIANTE = null;
   asientoA6.SECCION=null;
   asientoA6.CARNET=null;
   asientos.a6= asientoA6;

   // Fila B
   var asientoB1 = new Object();  //  Cada asiento es un objeto con sus propios atributos
       asientoB1.NOMBREESTUADIANTE = null;
       asientoB1.SECCION=null;
       asientoB1.CARNET=null;
       asientos.b1= asientoB1;



        var asientoB2 = new Object(); //  Cada asiento es un objeto con sus propios atributos
       asientoB2.NOMBREESTUADIANTE = null;
       asientoB2.SECCION=null;
       asientoB2.CARNET=null;
       asientos.b2= asientoB2;

       var asientoB3 = new Object();  //  Cada asiento es un objeto con sus propios atributos
      asientoB3.NOMBREESTUADIANTE = null;
      asientoB3.SECCION=null;
      asientoB3.CARNET=null;
      asientos.b3= asientoB3;

      var asientoB4 = new Object(); //  Cada asiento es un objeto con sus propios atributos
     asientoB4.NOMBREESTUADIANTE = null;
     asientoB4.SECCION=null;
     asientoB4.CARNET=null;
     asientos.b4= asientoB4;

     var asientoB5 = new Object();  //  Cada asiento es un objeto con sus propios atributos
    asientoB5.NOMBREESTUADIANTE = null;
    asientoB5.SECCION=null;
    asientoB5.CARNET=null;
    asientos.b5= asientoB5;

    var asientoB6 = new Object(); //  Cada asiento es un objeto con sus propios atributos
   asientoB6.NOMBREESTUADIANTE = null;
   asientoB6.SECCION=null;
   asientoB6.CARNET=null;
   asientos.b6= asientoB6;

   // Fila C
   var asientoC1 = new Object();  //  Cada asiento es un objeto con sus propios atributos
       asientoC1.NOMBREESTUADIANTE = null;
       asientoC1.SECCION=null;
       asientoC1.CARNET=null;
       asientos.c1= asientoC1;



        var asientoC2 = new Object(); //  Cada asiento es un objeto con sus propios atributos
       asientoC2.NOMBREESTUADIANTE = null;
       asientoC2.SECCION=null;
       asientoC2.CARNET=null;
       asientos.c2= asientoC2;

       var asientoC3 = new Object();  //  Cada asiento es un objeto con sus propios atributos
      asientoC3.NOMBREESTUADIANTE = null;
      asientoC3.SECCION=null;
      asientoC3.CARNET=null;
      asientos.c3= asientoC3;

      var asientoC4 = new Object(); //  Cada asiento es un objeto con sus propios atributos
     asientoC4.NOMBREESTUADIANTE = null;
     asientoC4.SECCION=null;
     asientoC4.CARNET=null;
     asientos.c4= asientoC4;

     var asientoC5 = new Object();  //  Cada asiento es un objeto con sus propios atributos
    asientoC5.NOMBREESTUADIANTE = null;
    asientoC5.SECCION=null;
    asientoC5.CARNET=null;
    asientos.c5= asientoC5;

    var asientoC6 = new Object(); //  Cada asiento es un objeto con sus propios atributos
   asientoC6.NOMBREESTUADIANTE = null;
   asientoC6.SECCION=null;
   asientoC6.CARNET=null;
   asientos.c6= asientoC6;

   // Fila D
   var asientoD1 = new Object();  //  Cada asiento es un objeto con sus propios atributos
       asientoD1.NOMBREESTUADIANTE = null;
       asientoD1.SECCION=null;
       asientoD1.CARNET=null;
       asientos.d1= asientoD1;



        var asientoD2 = new Object(); //  Cada asiento es un objeto con sus propios atributos
       asientoD2.NOMBREESTUADIANTE = null;
       asientoD2.SECCION=null;
       asientoD2.CARNET=null;
       asientos.d2= asientoD2;

       var asientoD3 = new Object();  //  Cada asiento es un objeto con sus propios atributos
      asientoD3.NOMBREESTUADIANTE = null;
      asientoD3.SECCION=null;
      asientoD3.CARNET=null;
      asientos.d3= asientoD3;

      var asientoD4 = new Object(); //  Cada asiento es un objeto con sus propios atributos
     asientoD4.NOMBREESTUADIANTE = null;
     asientoD4.SECCION=null;
     asientoD4.CARNET=null;
     asientos.d4= asientoD4;

     var asientoD5 = new Object();  //  Cada asiento es un objeto con sus propios atributos
    asientoD5.NOMBREESTUADIANTE = null;
    asientoD5.SECCION=null;
    asientoD5.CARNET=null;
    asientos.d5= asientoD5;

    // Fila E
    var asientoE1 = new Object(); //  Cada asiento es un objeto con sus propios atributos
        asientoE1.NOMBREESTUADIANTE = null;
        asientoE1.SECCION=null;
        asientoE1.CARNET=null;
        asientos.e1= asientoE1;



         var asientoE2 = new Object();  //  Cada asiento es un objeto con sus propios atributos
        asientoE2.NOMBREESTUADIANTE = null;
        asientoE2.SECCION=null;
        asientoE2.CARNET=null;
        asientos.e2= asientoE2;

        var asientoE3 = new Object(); //  Cada asiento es un objeto con sus propios atributos
       asientoE3.NOMBREESTUADIANTE = null;
       asientoE3.SECCION=null;
       asientoE3.CARNET=null;
       asientos.e3= asientoE3;

       var asientoE4 = new Object();  //  Cada asiento es un objeto con sus propios atributos
      asientoE4.NOMBREESTUADIANTE = null;
      asientoE4.SECCION=null;
      asientoE4.CARNET=null;
      asientos.e4= asientoE4;

      // Fila F
      var asientoF1 = new Object(); //  Cada asiento es un objeto con sus propios atributos
          asientoF1.NOMBREESTUADIANTE = null;
          asientoF1.SECCION=null;
          asientoF1.CARNET=null;
          asientos.f1= asientoF1;



           var asientoF2 = new Object();  //  Cada asiento es un objeto con sus propios atributos
          asientoF2.NOMBREESTUADIANTE = null;
          asientoF2.SECCION=null;
          asientoF2.CARNET=null;
          asientos.f2= asientoF2;

          var asientoF3 = new Object(); //  Cada asiento es un objeto con sus propios atributos
         asientoF3.NOMBREESTUADIANTE = null;
         asientoF3.SECCION=null;
         asientoF3.CARNET=null;
         asientos.f3= asientoF3;

         var asientoF4 = new Object();  //  Cada asiento es un objeto con sus propios atributos
        asientoF4.NOMBREESTUADIANTE = null;
        asientoF4.SECCION=null;
        asientoF4.CARNET=null;
        asientos.f4= asientoF4;

        // Fila G
        var asientoG1 = new Object(); //  Cada asiento es un objeto con sus propios atributos
            asientoG1.NOMBREESTUADIANTE = null;
            asientoG1.SECCION=null;
            asientoG1.CARNET=null;
            asientos.g1= asientoG1;



             var asientoG2 = new Object();  //  Cada asiento es un objeto con sus propios atributos
            asientoG2.NOMBREESTUADIANTE = null;
            asientoG2.SECCION=null;
            asientoG2.CARNET=null;
            asientos.g2= asientoG2;

            var asientoG3 = new Object(); //  Cada asiento es un objeto con sus propios atributos
           asientoG3.NOMBREESTUADIANTE = null;
           asientoG3.SECCION=null;
           asientoG3.CARNET=null;
           asientos.g3= asientoG3;

           var asientoG4 = new Object();  //  Cada asiento es un objeto con sus propios atributos
          asientoG4.NOMBREESTUADIANTE = null;
          asientoG4.SECCION=null;
          asientoG4.CARNET=null;
          asientos.g4= asientoG4;

          // Fila H
          var asientoH1 = new Object(); //  Cada asiento es un objeto con sus propios atributos
              asientoH1.NOMBREESTUADIANTE = null;
              asientoH1.SECCION=null;
              asientoH1.CARNET=null;
              asientos.h1= asientoH1;



               var asientoH2 = new Object();  //  Cada asiento es un objeto con sus propios atributos
              asientoH2.NOMBREESTUADIANTE = null;
              asientoH2.SECCION=null;
              asientoH2.CARNET=null;
              asientos.h2= asientoH2;

              var asientoH3 = new Object(); //  Cada asiento es un objeto con sus propios atributos
             asientoH3.NOMBREESTUADIANTE = null;
             asientoH3.SECCION=null;
             asientoH3.CARNET=null;
             asientos.h3= asientoH3;

             var asientoH4 = new Object();  //  Cada asiento es un objeto con sus propios atributos
            asientoH4.NOMBREESTUADIANTE = null;
            asientoH4.SECCION=null;
            asientoH4.CARNET=null;
            asientos.h4= asientoH4;


   function botonguardarclick() //  Despues de presionar el boton, se viene aqui donde obtiene los valores
       {
           var peliculainstanciada = new Pelicula(0, //  Un objeto con todos los atributos que le agrega el usuario
           document.getElementById("nombre").value,
            document.getElementById("duracion").value,
           document.getElementById("genero").value,
          document.getElementById("idioma_audio").value,
           document.getElementById("idioma_subtitulado").value,
         document.getElementsByClassName('sinopsis').value,
         document.getElementById("clasificacion").value,
         document.getElementById("precio").value,
       document.getElementById("hora_inicio").value,
       document.getElementById("fecha").value,
      document.getElementById("minuto_inicio").value,
    asientos,
     imagenenbase64,
    document.getElementById("select").value
           );

           peliculainstanciada.Guardar().then(function(response) {
console.log("Success!", response);
       alert("Guardado con exito");

}, function(error) {
console.error("Failed!", error);
        alert("Error " + error);

});






       }
