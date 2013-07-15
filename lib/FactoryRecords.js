var fs = require('fs'),
    path = require('path');

var FactoryRecords = function(){}

FactoryRecords.prototype.build = function(resource, callback){
    var self = this;
    var type = resource.properties.type;
    var record = require(self.path(type));
    callback( self.configuration[type](record, resource) );
}

FactoryRecords.prototype.configuration = {
    'SOA': function(record, resource){
        return new record(resource.nome, resource.properties);
    },
    'A': function(record, resource){
        return new record(resource.properties.resolve_to);
    }
}

FactoryRecords.prototype.path = function(name){
    var dir = path.join(__dirname, '../node_modules/node-named/lib/records');
    return path.join(dir, name.toLowerCase());
}

module.exports = FactoryRecords;