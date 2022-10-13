#!/usr/bin/env node
//const { absolutRoute } = require('./index.js');
const fs = require('fs');
const path = require('path');
const userRoute = process.argv[2]; 
const route = fs.statSync('Pruebas/README.md');

    //PASO 1: INGRESA RUTA.
//revisar si es archivo o directorio
console.log("esto funciona")
console.log ('---- {Reviso si la ruta es un archivo o directorio}');
console.log('Ruta es archivo (file):', route.isFile('Pruebas/README.md'));
console.log(' ');
    //PASO 2: REVISAR TIPO DE RUTA Y DEJAR EN ABSOLUTA.
//ver si la ruta es absoluta con isAbsolute
console.log ('---- {Reviso si la ruta es es absoluta o relativa}');
console.log ('La ruta no es absoluta: da', path.isAbsolute('Pruebas/documentoLinks.txt'));
console.log ('La ruta es absoluta: da', path.isAbsolute('/Users/moonah/Desktop/LABORATORIA/SCL021-md-links/Pruebas/documentoLinks.txt'));
console.log(' ');
//si la ruta es relativa pasar a absoluta con path.resolve
console.log ('----{Pasando la ruta relativa a absoluta}');
console.log(path.resolve('Pruebas/documentoLinks.txt')); 
console.log(' ');
    //PASO 3: REVISAR SI EL ARCHIVO ES MD
//revisar extensión del archivo
console.log('----{Reviso la extensión del archivo}:');
console.log(path.extname('/Users/moonah/Desktop/LABORATORIA/SCL021-md-links/Pruebas/README.md'));
console.log('Formato Válido');
//paso la ruta a array
console.log(' ');
console.log('----{Pasando la ruta a un array}');
console.log(('Pruebas/documentoLinks.txt').split(","));
    //  
    /* fs.readFile(userRoute, 'utf-8', (err, data) => {
        if(err) {
          console.log('error: ', err);
        } else {
          console.log(data);
        }
      }); */

    //PASO 5: CONTAR LINKS UNICOS, 
    
    //PASO 6: CONTAR LINKS VALIDOS Y ROTOS.
