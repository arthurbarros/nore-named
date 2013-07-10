var fs = require('fs'),
	path = require('path'),
	subdir = path.join(__dirname, '../node_modules/node-named/lib/records');

var FactoryRecords = function(){}

FactoryRecords.prototype.build = function(resource, callback){
	var resource = resource;
	if(resource.properties.typo == 'SOA'){
		record = require( path.join(subdir, resource.properties.typo.toLowerCase()) );
		instance = new record(resource.nome, resource.properties);
	}else{
		record = require( path.join(subdir, resource.properties.typo.toLowerCase()) );
		instance = new record(resource.properties.resolve_to);
	}
	callback(instance);
}

module.exports = FactoryRecords;