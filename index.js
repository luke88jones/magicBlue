var noble = require('noble'),
    argv = require('minimist')(process.argv.slice(2)),
    config = require('./config');

if (argv.hasOwnProperty('c') || argv.hasOwnProperty('colour')) {
    let c = argv.c || argv.colour;
    console.log(`Setting colour to ${c}`);
    config.setColour(c);
}

if (argv.hasOwnProperty('random')) {
    config.setRandomColour();
}

if (argv.hasOwnProperty('u') || argv.hasOwnProperty('uuid')) {
    let id = argv.u || argv.uuid;
    config.setBuldId(id);
}

require('./scan')();

