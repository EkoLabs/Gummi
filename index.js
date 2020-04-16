'use strict';
var path = require('path');

var getPath = function(dir) {
    return path.join(__dirname, 'src', dir);
};

module.exports = {
    locations: {
        templates: getPath('templates')
    }
};