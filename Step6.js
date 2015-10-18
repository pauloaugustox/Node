var mod = require('./Step6Module')
var dir = process.argv[2]
var ext = process.argv[3]

mod.read(dir, ext, function (err, list) {

    if (err)
        return console.error('ERRO:', err);

    list.forEach(function (file) {
        console.log(file);
    });

});