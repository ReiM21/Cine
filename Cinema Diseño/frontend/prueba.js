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
       asientoA2.nombre_estudiante = null;
       asientoA2.seccion=null;
       asientoA2.carne=null;
       asientos.a2= asientoA2;

       var asientoA3 = new Object();  //  Cada asiento es un objeto con sus propios atributos
      asientoA3.nombre_estudiante = null;
      asientoA3.seccion=null;
      asientoA3.carne=null;
      asientos.a3= asientoA3;

      var asientoA4 = new Object(); //  Cada asiento es un objeto con sus propios atributos
     asientoA4.nombre_estudiante = null;
     asientoA4.seccion=null;
     asientoA4.carne=null;
     asientos.a4= asientoA4;

     var asientoA5 = new Object();  //  Cada asiento es un objeto con sus propios atributos
    asientoA5.nombre_estudiante = null;
    asientoA5.seccion=null;
    asientoA5.carne=null;
    asientos.a5= asientoA5;

    var asientoA6 = new Object(); //  Cada asiento es un objeto con sus propios atributos
   asientoA6.nombre_estudiante = null;
   asientoA6.seccion=null;
   asientoA6.carne=null;
   asientos.a6= asientoA6;

   // Fila B
   var asientoB1 = new Object();  //  Cada asiento es un objeto con sus propios atributos
       asientoB1.nombre_estudiante = null;
       asientoB1.seccion=null;
       asientoB1.carne=null;
       asientos.b1= asientoB1;



        var asientoB2 = new Object(); //  Cada asiento es un objeto con sus propios atributos
       asientoB2.nombre_estudiante = null;
       asientoB2.seccion=null;
       asientoB2.carne=null;
       asientos.b2= asientoB2;

       var asientoB3 = new Object();  //  Cada asiento es un objeto con sus propios atributos
      asientoB3.nombre_estudiante = null;
      asientoB3.seccion=null;
      asientoB3.carne=null;
      asientos.b3= asientoB3;

      var asientoB4 = new Object(); //  Cada asiento es un objeto con sus propios atributos
     asientoB4.nombre_estudiante = null;
     asientoB4.seccion=null;
     asientoB4.carne=null;
     asientos.b4= asientoB4;

     var asientoB5 = new Object();  //  Cada asiento es un objeto con sus propios atributos
    asientoB5.nombre_estudiante = null;
    asientoB5.seccion=null;
    asientoB5.carne=null;
    asientos.b5= asientoB5;

    var asientoB6 = new Object(); //  Cada asiento es un objeto con sus propios atributos
   asientoB6.nombre_estudiante = null;
   asientoB6.seccion=null;
   asientoB6.carne=null;
   asientos.b6= asientoB6;

   // Fila C
   var asientoC1 = new Object();  //  Cada asiento es un objeto con sus propios atributos
       asientoC1.nombre_estudiante = null;
       asientoC1.seccion=null;
       asientoC1.carne=null;
       asientos.c1= asientoC1;



        var asientoC2 = new Object(); //  Cada asiento es un objeto con sus propios atributos
       asientoC2.nombre_estudiante = null;
       asientoC2.seccion=null;
       asientoC2.carne=null;
       asientos.c2= asientoC2;

       var asientoC3 = new Object();  //  Cada asiento es un objeto con sus propios atributos
      asientoC3.nombre_estudiante = null;
      asientoC3.seccion=null;
      asientoC3.carne=null;
      asientos.c3= asientoC3;

      var asientoC4 = new Object(); //  Cada asiento es un objeto con sus propios atributos
     asientoC4.nombre_estudiante = null;
     asientoC4.seccion=null;
     asientoC4.carne=null;
     asientos.c4= asientoC4;

     var asientoC5 = new Object();  //  Cada asiento es un objeto con sus propios atributos
    asientoC5.nombre_estudiante = null;
    asientoC5.seccion=null;
    asientoC5.carne=null;
    asientos.c5= asientoC5;

    var asientoC6 = new Object(); //  Cada asiento es un objeto con sus propios atributos
   asientoC6.nombre_estudiante = null;
   asientoC6.seccion=null;
   asientoC6.carne=null;
   asientos.c6= asientoC6;

   // Fila D
   var asientoD1 = new Object();  //  Cada asiento es un objeto con sus propios atributos
       asientoD1.nombre_estudiante = null;
       asientoD1.seccion=null;
       asientoD1.carne=null;
       asientos.d1= asientoD1;



        var asientoD2 = new Object(); //  Cada asiento es un objeto con sus propios atributos
       asientoD2.nombre_estudiante = null;
       asientoD2.seccion=null;
       asientoD2.carne=null;
       asientos.d2= asientoD2;

       var asientoD3 = new Object();  //  Cada asiento es un objeto con sus propios atributos
      asientoD3.nombre_estudiante = null;
      asientoD3.seccion=null;
      asientoD3.carne=null;
      asientos.d3= asientoD3;

      var asientoD4 = new Object(); //  Cada asiento es un objeto con sus propios atributos
     asientoD4.nombre_estudiante = null;
     asientoD4.seccion=null;
     asientoD4.carne=null;
     asientos.d4= asientoD4;

     var asientoD5 = new Object();  //  Cada asiento es un objeto con sus propios atributos
    asientoD5.nombre_estudiante = null;
    asientoD5.seccion=null;
    asientoD5.carne=null;
    asientos.d5= asientoD5;

    // Fila E
    var asientoE1 = new Object(); //  Cada asiento es un objeto con sus propios atributos
        asientoE1.nombre_estudiante = null;
        asientoE1.seccion=null;
        asientoE1.carne=null;
        asientos.e1= asientoE1;



         var asientoE2 = new Object();  //  Cada asiento es un objeto con sus propios atributos
        asientoE2.nombre_estudiante = null;
        asientoE2.seccion=null;
        asientoE2.carne=null;
        asientos.e2= asientoE2;

        var asientoE3 = new Object(); //  Cada asiento es un objeto con sus propios atributos
       asientoE3.nombre_estudiante = null;
       asientoE3.seccion=null;
       asientoE3.carne=null;
       asientos.e3= asientoE3;

       var asientoE4 = new Object();  //  Cada asiento es un objeto con sus propios atributos
      asientoE4.nombre_estudiante = null;
      asientoE4.seccion=null;
      asientoE4.carne=null;
      asientos.e4= asientoE4;

      // Fila F
      var asientoF1 = new Object(); //  Cada asiento es un objeto con sus propios atributos
          asientoF1.nombre_estudiante = null;
          asientoF1.seccion=null;
          asientoF1.carne=null;
          asientos.f1= asientoF1;



           var asientoF2 = new Object();  //  Cada asiento es un objeto con sus propios atributos
          asientoF2.nombre_estudiante = null;
          asientoF2.seccion=null;
          asientoF2.carne=null;
          asientos.f2= asientoF2;

          var asientoF3 = new Object(); //  Cada asiento es un objeto con sus propios atributos
         asientoF3.nombre_estudiante = null;
         asientoF3.seccion=null;
         asientoF3.carne=null;
         asientos.f3= asientoF3;

         var asientoF4 = new Object();  //  Cada asiento es un objeto con sus propios atributos
        asientoF4.nombre_estudiante = null;
        asientoF4.seccion=null;
        asientoF4.carne=null;
        asientos.f4= asientoF4;

        // Fila G
        var asientoG1 = new Object(); //  Cada asiento es un objeto con sus propios atributos
            asientoG1.nombre_estudiante = null;
            asientoG1.seccion=null;
            asientoG1.carne=null;
            asientos.g1= asientoG1;



             var asientoG2 = new Object();  //  Cada asiento es un objeto con sus propios atributos
            asientoG2.nombre_estudiante = null;
            asientoG2.seccion=null;
            asientoG2.carne=null;
            asientos.g2= asientoG2;

            var asientoG3 = new Object(); //  Cada asiento es un objeto con sus propios atributos
           asientoG3.nombre_estudiante = null;
           asientoG3.seccion=null;
           asientoG3.carne=null;
           asientos.g3= asientoG3;

           var asientoG4 = new Object();  //  Cada asiento es un objeto con sus propios atributos
          asientoG4.nombre_estudiante = null;
          asientoG4.seccion=null;
          asientoG4.carne=null;
          asientos.g4= asientoG4;

          // Fila H
          var asientoH1 = new Object(); //  Cada asiento es un objeto con sus propios atributos
              asientoH1.nombre_estudiante = null;
              asientoH1.seccion=null;
              asientoH1.carne=null;
              asientos.h1= asientoH1;



               var asientoH2 = new Object();  //  Cada asiento es un objeto con sus propios atributos
              asientoH2.nombre_estudiante = null;
              asientoH2.seccion=null;
              asientoH2.carne=null;
              asientos.h2= asientoH2;

              var asientoH3 = new Object(); //  Cada asiento es un objeto con sus propios atributos
             asientoH3.nombre_estudiante = null;
             asientoH3.seccion=null;
             asientoH3.carne=null;
             asientos.h3= asientoH3;

             var asientoH4 = new Object();  //  Cada asiento es un objeto con sus propios atributos
            asientoH4.nombre_estudiante = null;
            asientoH4.seccion=null;
            asientoH4.carne=null;
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
