#!/usr/bin/env node
//const { absolutRoute } = require('./index.js');
let path = require('path');
let fs = require('fs');
let userRoute = process.argv[2]; 
let formatOK = ".md"; 
let colors = require('colors');
let linkFinder = /(https?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/gi;
//expresion regular necesaria para detectar links.
const https = require('https');

//PASO 1
//volver la ruta a relativa para partir
let absolutRoute = () => {
    if(path.isAbsolute(userRoute) === false){
        return path.resolve(userRoute)
    }; 
    return path
};
console.log("Pasando ruta relativa a ruta absoluta: ".bgCyan + path.resolve(userRoute));
    
    let resultAbsolutRoute = absolutRoute(path); 
    let toArr = resultAbsolutRoute.split(",");
    console.log(toArr);

    let extension = path.extname(userRoute);
        if(extension === formatOK){
            console.log('La extención del archivo es .md = '.rainbow + (extension === formatOK));
             
        } else {
            console.log('El formato del archivo no es válido!'.bgYellow);
            };
//PASO 2
function readLinks (){
    return new Promise ((resolve, reject) => {
       let count = [];      
              fs.readFile(userRoute, 'utf-8', (err, data) => {
         if(err) {
      //data es el contenido de la ruta. Links, texto;
      reject (err);
       } else {
      count = data.match(linkFinder);
      console.log('El total de links encontrados es: '.bgYellow, count.length);
      resolve (data.match(linkFinder));
    }
  }); 
  })
}
//hay que pasarla en el then de readlinks, pq ese es el caso de exito al revisar links
const uniqueLinks = (infoLinks) => {
  let unique = 0;
  infoLinks.forEach((link, index) => {
      if(infoLinks.indexOf(link) === index) {
          unique++
      }
  }) 
  return console.log('El total de links únicos encontrados es: '.bgMagenta, unique);
};
//PASO 3
const validLinks = (count) => {
     return count.map(link => {
        return new Promise((resolve, reject) => {
            https.get(link, res => {
                if(res.statusCode === 200) {
                    resolve({
                      //count: process.argv[2], 
                      url: link, 
                      code: res.statusCode, 
                      message: "El link se encuentra OK"
                    })
                } else {
                  reject({
                    count: process.argv[2], 
                    url: link, 
                    code: res.statusCode, 
                    message: "El link no se encuentra"
                  })
                }
              })
        })
    })
};
//PASO 4
readLinks()
  .then((result) => {
    console.log(result);
    uniqueLinks(result); //llamamos la funcion de abajo
    const linkPromises = validLinks(result);
    //console.log(validLinks(result));

    return Promise.allSettled(linkPromises);
  })
  .then((resPromises) => {
    console.log('Verificando el estado de los links:'.red)
    console.log(resPromises);
  })
  .catch((errorcito) => {
    console.log(errorcito);
  }); 


/* 
  module.exports = {
    //
  }; */