var fs = require('fs');
var path = require('path');
var exp = module.exports = {};

exp.read = function (dir, ext, cbk) {

    fs.readdir(dir, function (err, list) {

        if (err)
            return cbk(err);

        var ret = list.filter(function (file) {
            return path.extname(file) == '.' + ext;
        });

        cbk(null, ret);

    });
};