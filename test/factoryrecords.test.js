var assert = require('assert'), 
    FactoryRecords = require('../lib/FactoryRecords.js'),
    ARecord = require('../node_modules/node-named/lib/records/a.js'),
    AAAARecord = require('../node_modules/node-named/lib/records/aaaa.js'),
    SOARecord = require('../node_modules/node-named/lib/records/soa.js'),
    TXTRecord = require('../node_modules/node-named/lib/records/txt.js'),
    CNAMERecord = require('../node_modules/node-named/lib/records/cname.js'),
    MXRecord = require('../node_modules/node-named/lib/records/mx.js'),
    SRVRecord = require('../node_modules/node-named/lib/records/srv.js'),
    path = require('path');

describe('FactoryRecords', function(){
    describe('#build()', function(){
        it('should return ARecord instance', function(){

            var factory = new FactoryRecords();
            var aRecord = new ARecord('8.8.8.8');
            var buildObject = { 
                name: 'google.com',
                type: 'A',
                ttl: 400,
                properties: {
                    resolution: '8.8.8.8'
                }
            };

            factory.build(buildObject, function(record){
                assert.deepEqual(aRecord, record);
            });
        });
    });
});

describe('FactoryRecords', function(){
    describe('#path()', function(){
        it('should return a.js literal path', function(){

            var factory = new FactoryRecords();

            assert.equal(
                factory.path('a'), 
                path.join(__dirname, '../node_modules/node-named/lib/records/a')
            );
        });
    });
});

describe('FactoryRecords', function(){
    describe('#configuration()', function(){
        it('should return SOARecord valid instance', function(){
            var factory = new FactoryRecords();
            var buildObject = { 
                name: 'google.com',
                type: 'SOA',
                ttl: 400,
                properties: {
                    serial: '8.8.8.8'
                }
            };
            var result = factory.configuration(buildObject);
            var soaRecord = new SOARecord('google.com',{serial: '8.8.8.8'});
            assert.deepEqual(result , soaRecord);
        });
    });
});

describe('FactoryRecords', function(){
    describe('#configuration()', function(){
        it('should return ARecord valid instance', function(){
            var factory = new FactoryRecords();
            var buildObject = { 
                name: 'google.com',
                type: 'A',
                ttl: 400,
                properties: {
                    resolution: '8.8.8.8'
                }
            };
            var result = factory.configuration(buildObject);
            var aRecord = new ARecord('8.8.8.8');
            assert.deepEqual(result , aRecord);
        });
    });
});

describe('FactoryRecords', function(){
    describe('#configuration()', function(){
        it('should return TXTRecord valid instance', function(){
            var factory = new FactoryRecords();
            var buildObject = { 
                name: 'google.com',
                type: 'TXT',
                ttl: 400,
                properties: {
                    txt: 'google-uid-8946431631'
                }
            };
            var result = factory.configuration(buildObject);
            var txtRecord = new TXTRecord('google-uid-8946431631');
            assert.deepEqual(result , txtRecord);
        });
    });
});

describe('FactoryRecords', function(){
    describe('#configuration()', function(){
        it('should return CNAMERecord valid instance', function(){
            var factory = new FactoryRecords();
            var buildObject = { 
                name: 'google.com',
                type: 'CNAME',
                ttl: 400,
                properties: {
                    cname: 'srv-01.appengine.google.com'
                }
            };
            var result = factory.configuration(buildObject);
            var cnameRecord = new CNAMERecord('srv-01.appengine.google.com');
            assert.deepEqual(result , cnameRecord);
        });
    });
});

describe('FactoryRecords', function(){
    describe('#configuration()', function(){
        it('should return AAAARecord valid instance', function(){
            var factory = new FactoryRecords();
            var buildObject = { 
                name: 'google.com',
                type: 'AAAA',
                ttl: 400,
                properties: {
                    resolution: '8.8.8.8'
                }
            };
            var result = factory.configuration(buildObject);
            var aaaaRecord = new AAAARecord('8.8.8.8');
            assert.deepEqual(result , aaaaRecord);
        });
    });
});

describe('FactoryRecords', function(){
    describe('#configuration()', function(){
        it('should return MXRecord valid instance', function(){
            var factory = new FactoryRecords();
            var buildObject = { 
                name: 'google.com',
                type: 'MX',
                properties: {
                    priority: 0,
                    ttl: 600,
                    exchange: 'mail.google.com'
                }
            };
            var result = factory.configuration(buildObject);
            var mxRecord = new MXRecord('mail.google.com', {priority: 0,ttl: 600});
            assert.deepEqual(result , mxRecord);
        });
    });
});

describe('FactoryRecords', function(){
    describe('#configuration()', function(){
        it('should return MXRecord valid instance', function(){
            var factory = new FactoryRecords();
            var buildObject = { 
                name: 'google.com',
                type: 'SRV',
                properties: {
                    priority: 5,
                    weight: 10,
                    port: 8864,
                    resolution:'8.8.8.8'
                }
            };
            var result = factory.configuration(buildObject);
            var srvRecord = new MXRecord('8.8.8.8', 8864, {priority: 0, weight: 10});
            assert.deepEqual(result , srvRecord);
        });
    });
});