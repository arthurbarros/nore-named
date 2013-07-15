var named = require('node-named').createServer(),
	redis = require('redis').createClient(),
    dataAccess = require('./dataAccess');

var NoreNS = function(port){
	var self = this;
	self.port = port;
	self.dataAccess = new dataAccess(redis, named);
	
}
module.exports = NoreNS;
module.exports.createServer = function(port){
	var port = port != undefined ? port : 9999;
	var noreNS = new NoreNS(port);
	noreNS.createServer();
	return noreNS;
}

NoreNS.prototype.createServer = function(){
	var self = this;

	named.listen(self.port, '127.0.0.1', function() {
		self.dataAccess.register_domain_test();
		console.log('Nore is listening on port: '.concat(self.port));
	});

	named.on('query', function(query) {
		self.dataAccess.buildAnswer( query, function(built_answer){
			named.send(built_answer);
		});
	});
}



