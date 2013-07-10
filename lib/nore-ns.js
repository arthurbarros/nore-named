var named = require('node-named').createServer(),
	redis = require('redis').createClient(),
    dataAccess = require('./dataAccess');

var NoreNS = function(options){
	var self = this;
	self._loadOptions(options);
	self.dataAccess = new dataAccess(redis, named);
	
}
module.exports = NoreNS;

NoreNS.prototype.createServer = function(){
	var self = this;

	named.listen(self.port, function() {
		self.dataAccess.register_domain_test();
		console.log('Nore is listening on port: '.concat(self.port));
	});

	named.on('query', function(query) {
		self.dataAccess.buildAnswer( query, function(built_answer){
			named.send(built_answer);
		});
	});
}

NoreNS.prototype._loadOptions = function (option){
	var self = this;
	self.port = option.port || 9999;
}





