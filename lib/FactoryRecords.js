var fs = require('fs'),
    path = require('path');

var FactoryRecords = function(){}

FactoryRecords.prototype.build = function(resource, callback){
    var self = this;
    callback( self.configuration(resource) );
}

FactoryRecords.prototype.path = function(name){
    var dir = path.join(__dirname, '../node_modules/node-named/lib/records');
    return path.join(dir, name.toLowerCase());
}

FactoryRecords.prototype.configuration = function(resource){
    var self = this;
    var type = resource.type;
    var record = require(self.path(type));
    
    return self.recordCommonInterface[type](record, resource);
}

FactoryRecords.prototype.recordCommonInterface = {
    'SOA': function(record, resource){
        return new record(resource.name, resource.properties);
    },
    'A': function(record, resource){
        return new record(resource.properties.resolution);
    }
}

module.exports = FactoryRecords;

