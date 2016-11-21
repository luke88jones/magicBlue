var noble = require('noble'),
    discover = require('./discover');

module.exports = function() {
    noble.on('stateChange', function(state) {
    if (state === 'poweredOn') {
        console.log('Starting scan...');
        noble.startScanning();
    } else {
        noble.stopScanning();
    }
    });
    
    noble.on('discover', discover);
}
