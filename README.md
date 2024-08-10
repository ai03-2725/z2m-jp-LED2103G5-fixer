# z2m-jp-LED2103G5-fixer

Zigbee2MQTT external converter which adds proper detection for the [Japanese variant of the Ikea LED2103G5](https://www.ikea.com/jp/en/p/tradfri-led-bulb-e26-810-lumen-smart-wireless-dimmable-warm-white-globe-30541515/).  
This variant shows up as a 810 lumen bulb unlike the LED2103G5 from other regions rated for 806lm, which throws off detection in Zigbee2MQTT.  


## Installation instructions
1. Download the `LED2103G5-810lm.js` file from this repository, and place it where your Zigbee2MQTT `configuration.yaml` file is located (`/usr/share/hassio/homeassistant/zigbee2mqtt/` for a Supervised install).  
2. From the Home Assistant UI, open the Zigbee2MQTT settings menu, then navigate to Settings -> External converters.
3. Add a new entry for the file `LED2103G5-810lm.js`, submit, and reload.  
