var fs = require('fs'),
    path = require('path');

var FactoryRecords = function(){}

FactoryRecords.prototype.build = function(resource, callback){
    var self = this;
    var resource = resource;
    var type = resource.properties.typo;
    var record = require(self.path(type));

    if(resource.properties.typo == 'SOA'){
        instance = new record(resource.nome, resource.properties);
    }else{
        instance = new record(resource.properties.resolve_to);
    }
    callback(instance);
}

FactoryRecords.prototype.path = function(name){
    var dir = path.join(__dirname, '../node_modules/node-named/lib/records');
    return path.join(dir, name.toLowerCase());
}

module.exports = FactoryRecords;