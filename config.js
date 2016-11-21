function GetHexColour() {
    let hex = Math.floor(Math.random()*16777215).toString(16);
    return `56${hex}00f0aa`;
}

var colour = null;
var bulbId = 'LEDBLE-';

var setColour = (c) => {
    colour = c;
};

var setRandomColour = () => { colour = GetHexColour() };

var getColour = () => `56${colour}00f0aa` || GetHexColour();

var setBuldId = (id) => { bulbId = id };

var getBulbId = () => bulbId;

module.exports = {
    setColour: setColour,
    getColour: getColour,
    setBuldId: setBuldId,
    getBulbId: getBulbId
};