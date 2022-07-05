
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

function flatten(lists) {
    return lists.reduce((a, b) => a.concat(b), []);
}

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath)
        .map(file => path.join(srcpath, file))
        .filter(path => fs.statSync(path).isDirectory());
}

function getDirectoriesRecursive(srcpath) {
    return [srcpath, ...flatten(getDirectories(srcpath).map(getDirectoriesRecursive))];
}


function getFiles(srcpath) {
    return fs.readdirSync(srcpath)
        .map(file => path.join(srcpath, file))
        .filter(path => fs.statSync(path).isFile());
}


function convertContextFile(file){

    let filePath = `.\\${file}`;

    var JavaScriptObfuscator = require('javascript-obfuscator');

    try {

        let data = fs.readFileSync(filePath, "utf-8")
        //return data.toString();
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

async function getDirectoriesANDFiles() {

    let array = [];
    let data = getDirectoriesRecursive('./bolsaTrabajo')

    data.forEach(element => {
        getFiles(element).forEach(element => {
            array.push(element)
        });
    });

    console.log(`Ficheros toales a convertir: ${array.length}`);

    console.log("Convirtiendo archivos... espere un momento por favor")
    array.forEach( async (element)=>{
        await fse.outputFile(`.\\encodedFiles\\${element}`, convertContextFile(element));
    })
    console.log("Archivos creados!!!")
}

console.log(getDirectoriesANDFiles())