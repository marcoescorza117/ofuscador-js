# .JS File Minifier (English)
This minifier is created to automate the process of minifying and obscuring .js files


## Requirements for using this programa
- Have `Nodejs > 13.00` installed in you computer
- Clone this repository with```git clone https://github.com/marcoescorza117/ofuscador-js.git```
- Within the project, install the libraries with the command: `npm install`


## How to use this program
- Throw the folder with the .js files into the project folder. (_Feel free to add an absolute path_)

- Declare the path of you folder inside the `index.js` within the `creatorFiles` function:

```js

    async function creatorFiles() {

    let array = [];
    let data = getDirectoriesRecursive('./"folderName"') 

    data.forEach(element => {
        getFiles(element).forEach(element => {
            array.push(element)
        });
    });
    ...
    ...
    ...
```
- Once you folder is declared, you will need run the program using: ` npm start`.
- You will have to wait from 10 to 40 seconds (_depending on the number of files_) for the files to be converted.

- A folder called `./encodedFiles` will be created within the project,whitch will contain all the minified files of the declared folder

- If any file cannot be minified/obscured, you will have to review the corresponding parameters of the `JavaScriptObfuscator ` library (https://github.com/javascript-obfuscator/javascript-obfuscator.git).



## Libraries used:
- `JavaScriptObfuscator` => https://github.com/javascript-obfuscator/javascript-obfuscator.git
- `fs-extra` => https://github.com/jprichardson/node-fs-extra



## License
Licensed under MIT

Copyrigth (c) 2012 - 2022  [Marco Escorza](https://github.com/marcoescorza117)

<br>

<br>


# Minificador de archivos .JS (Español)
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
