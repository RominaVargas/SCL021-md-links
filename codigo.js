#!/usr/bin/env node
//const { absolutRoute } = require('./index.js');
let fs = require('fs');
let path = require('path');
let userRoute = process.argv[2]; 
let formatOK = ".md"; 
let colors = require('colors');
let linkFinder = /(https?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/gi;



//volver la ruta a relativa para partir
let absolutRoute = () => {
    if(path.isAbsolute(userRoute) === false){
        return path.resolve(userRoute)
    }; 
    return path
};
console.log("Pasando ruta relativa a ruta absoluta: ".bgCyan + path.resolve(userRoute));
    
/* let formatValidator = (userRoute, formatOK) => {*/
    let resultAbsolutRoute = absolutRoute(path); 
    let toArr = resultAbsolutRoute.split(",");
    console.log(toArr);

    let extension = path.extname(userRoute);
        if(extension === formatOK){
            console.log('La extención del archivo es .md = '.rainbow + (extension === formatOK));
             
        } else {
            console.log('El formato del archivo no es válido!'.bgYellow);
              
            };
        
    fs.readFile(userRoute, 'utf-8', (err, data) => {
    if(err) {
      console.log('error: ', err);
    } else {
      console.log(data);
    }
  }); 

  


  module.exports = {
    //
  };