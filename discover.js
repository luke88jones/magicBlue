var connect = require('./connect'),
    noble = require('noble'),
    peripheralId = require('./config').getBulbId();

module.exports = function(peripheral) {
    console.log('Found device with local name: ' + peripheral.advertisement.localName);
    console.log('advertising the following service uuid\'s: ' + peripheral.advertisement.serviceUuids);
    console.log();
    if (peripheral.advertisement.localName.indexOf(peripheralId) > -1 ) {
        noble.stopScanning();
        console.log('Connecting to peripheral');
        connect(peripheral);
    }
};