const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

/**
 * 
 * @param {*} lists 
 * @returns 
 */
function flatten(lists) {
    return lists.reduce((a, b) => a.concat(b), []);
}
/**
 * 
 * @param {*} srcpath Path de carpeta
 * @returns Obtiene solo directorios
 */

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath)
        .map(file => path.join(srcpath, file))
        .filter(path => fs.statSync(path).isDirectory());
}

/**
 * 
 * @param {*} srcpath Path de carpeta
 * @returns  ficheros de carpeta (recursivo)
 */
function getDirectoriesRecursive(srcpath) {
    return [srcpath, ...flatten(getDirectories(srcpath).map(getDirectoriesRecursive))];
}

/**
 * 
 * @param {*} srcpath Path de carpeta
 * @returns ficheros de carpeta
 */
function getFiles(srcpath) {
    return fs.readdirSync(srcpath)
        .map(file => path.join(srcpath, file))
        .filter(path => fs.statSync(path).isFile());
}

/**
 * 
 * @param {*} file Fichero de ruta declarada
 * @returns Texto minificado y ofuscado
 */
function convertFileText(file){

    let filePath = `.\\${file}`;
    var JavaScriptObfuscator = require('javascript-obfuscator');
    try {

        let data = fs.readFileSync(filePath, "utf-8")
        var obfuscationResult = JavaScriptObfuscator.obfuscate(data,{
             target: 'browser'
            ,disableConsoleOutput: true
            ,stringArray : true
            ,stringArrayRotate : true
            ,stringArrayShuffle : true
            ,stringArrayThreshold : 0.75
            ,stringArrayIndexShift : true
            ,stringArrayEncoding : ['none']
            ,stringArrayWrappersType: 'function'
            ,identifierNamesGenerator : 'hexadecimal'
            ,compact : true,
            simplify: true
            
        });

        return obfuscationResult.getObfuscatedCode();
    } catch (error) {
        return `console.error("Error en este fichero")`;
    }
}

/**
 * Funcion principal para ejecucion del programa
 * Se declara dentro de directorio ruta relativa de carpeta
 * con ficheros .js
 */
async function creatorFiles() {

    let array = [];
    let data = getDirectoriesRecursive('./cambiosHorarios')

    data.forEach(element => {
        getFiles(element).forEach(element => {
            array.push(element)
        });
    });

    console.log(`Ficheros totales a convertir: ${array.length}`);

    console.log("Convirtiendo archivos... espera un momento por favor")
    array.forEach( async (element)=>{
        await fse.outputFile(`.\\encodedFiles\\${element}`, convertFileText(element));
    })
    console.log("Archivos creados!!!")
}

//console.log(getDirectoriesANDFiles())

creatorFiles()
    .then(() => {
        console.log("Verifique que los archivos funcionen correctamente")
    }).catch(err => {
        console.error(err);
    });