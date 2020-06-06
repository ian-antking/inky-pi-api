
require('dotenv').config()
const mqtt = require('mqtt');

const args = process.argv.slice(2)

const { MQTT_BROKER, MQTT_TOPIC } = process.env;

const client = mqtt.connect(MQTT_BROKER)

const message = {
    text: args[0],
    author: args[1],
    theme: 'dark'
}

client.on('connect', () => {
    client.publish(MQTT_TOPIC, JSON.stringify(message))
    client.end()
})