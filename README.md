# Minificador de archivos .JS
Este minificador se crea para automatizar el proceso de minificación y ofuscación de ficheros .js


## Requisitos para el uso de este programa:
- Tener instalado `Nodejs > 13.00`
- Clonar este repositorio con:  ```git clone https://github.com/marcoescorza117/ofuscador-js.git```
- Dentro del proyecto, instalar las librerias con el comando: `npm install`


## Como usar este programa:
- Arrojar la carpeta con los ficheros .js dentro de la carpeta del proyecto. (_Sientéte libre de agregar una ruta absoluta_)

- Declarar dentro del fichero `index.js` dentro de la funcion `creatorFiles` la ruta de tu carpeta: 

```js

    async function creatorFiles() {

    let array = [];
    let data = getDirectoriesRecursive('./"NOMBRE-DE-TU-CARPETA"') 

    data.forEach(element => {
        getFiles(element).forEach(element => {
            array.push(element)
        });
    });
    ...
    ...
    ...
```
- Una vez declarada tu carpeta, deberas correr el programa usando `npm start`.
- Tendrás que esperar de 10 a 40 segundos (_dependiendo de la cantidad de archivos_) para la conversión de los ficheros.

- Se creara una carpeta llamada `./encodedFiles` dentro de este proyecto, la cual contendrá todos los ficheros minificados y ofuscados para tu proyecto.

- En caso de que algún fichero no pueda ser minificado/ofuscado, se tendrán que revisar los parámetros correspondientes de la libreria `JavaScriptObfuscator ` (https://github.com/javascript-obfuscator/javascript-obfuscator.git).



## Librerias usadas:
- `JavaScriptObfuscator` => https://github.com/javascript-obfuscator/javascript-obfuscator.git
- `fs-extra` => https://github.com/jprichardson/node-fs-extra



## License
Licensed under MIT

Copyrigth (c) 2012 - 2022  [Marco Escorza](https://github.com/marcoescorza117)
