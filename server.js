var noreNS = require('./lib/nore-ns'),
	express = require('express');

noreNS = new noreNS({port: 9999})
noreNS.createServer();

