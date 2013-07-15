var assert = require('assert'), 
    FactoryRecords = require('../lib/FactoryRecords.js'),
    ARecord = require('../node_modules/node-named/lib/records/a.js'),
    path = require('path');

describe('FactoryRecords', function(){
    describe('#build()', function(){
        it('should return ARecord instance', function(){

            var factory = new FactoryRecords();
            var aRecord = new ARecord('8.8.8.8');
            var buildObject = { 
            nome: 'google.com',
                properties: {
                    typo: 'A',
                    ttl: 400,
                    resolve_to: '8.8.8.8'
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