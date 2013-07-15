var assert = require('assert'), 
    FactoryRecords = require('../lib/FactoryRecords.js'),
    ARecord = require('../node_modules/node-named/lib/records/a.js'),
    SOARecord = require('../node_modules/node-named/lib/records/soa.js'),
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