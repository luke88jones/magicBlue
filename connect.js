var Promise = require('bluebird'),
    hex = require('./config').getColour();
    
var serviceUUID = 'ffe5';
var characteristicIds = ['ffe9'];

module.exports = function (peripheral) {
    Promise.promisifyAll(peripheral);
    
    peripheral.connectAsync()
        .then(() => {
            console.log('Connected');
            return peripheral.discoverAllServicesAndCharacteristicsAsync();
        })
        .then((services, characteristics) => {
            
            var characteristic = null;
            for (let i = 0; i < services.length; i++) {
                if (services[i].uuid == serviceUUID) {
                    var characteristic = services[i].characteristics[0];
                    break;
                }
            }

            if (characteristic) {
                var write = Promise.promisify(characteristic.write, { context: characteristic } );
                console.log(`Changing colour to ${hex}`)
                var buffer = Buffer.from(hex, 'hex');
                return write(buffer, false);                
            }
        })
        .then(() => {
            console.log('Write Done');
            process.exit(0);
        })
        .catch((err) => {
            console.log(err)
        });
};