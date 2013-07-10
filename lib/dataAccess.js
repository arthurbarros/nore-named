var FactoryRecords = require('./FactoryRecords.js');
FactoryRecords = new FactoryRecords();

var DataAccess = function(redis, dns){
	this.redis = redis;
	this.dns = dns;
}
module.exports = DataAccess;

DataAccess.prototype.buildAnswer = function(query, callback){
	var self = this;
	self.getDomain(query.name(), function(domain){
		var domain = domain;
		FactoryRecords.build(domain, function(record){
			query.addAnswer(domain.nome, record, domain.properties.ttl || 400);
			callback(query);
		});
	});
}

DataAccess.prototype.getDomain = function(name, callback){
	var self = this;
	self.redis.get('dns:domains:' + name, function(error, data){
		var domain = JSON.parse(data);
		callback(domain);
	});
}

DataAccess.prototype.register_domain_test = function(){
	var self = this;
	self.redis.set('dns:domains:google.com', JSON.stringify({
	  	nome: 'google.com',
	  	properties: {
	  		typo: 'A',  
	  		resolve_to: '8.8.8.8',
	  		ttl: 400
	  	} 
	  })
  );
}

