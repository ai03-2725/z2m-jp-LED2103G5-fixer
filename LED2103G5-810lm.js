const {identify} = require('zigbee-herdsman-converters/lib/modernExtend');
const {addCustomClusterManuSpecificIkeaUnknown, ikeaLight} = require('zigbee-herdsman-converters/lib/ikea');

const definition = {
    zigbeeModel: ['TRADFRI bulb E26 WW globe 810lm'],
    model: 'LED2103G5',
    vendor: 'IKEA',
    description: 'TRADFRI bulb E26, warm white, globe, 810 lumen',
    extend: [addCustomClusterManuSpecificIkeaUnknown(), ikeaLight(), identify()],
};

module.exports = definition;
