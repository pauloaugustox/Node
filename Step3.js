var fs = require('fs');
var file = null;
//console.log(process.argv[2]);

try { file = process.argv[2]; } catch (ex) {}

if(file == null)
    console.log("Anta demoníaca! Escreve o caminho do cu do arquivo, carai!");

console.log(fs.readFileSync(file, 'utf8').split('\n').length - 1);
//console.log(fs.readFileSync(file).toString().split('\n').length - 1);