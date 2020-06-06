const mqtt = require('mqtt');

const args = process.argv.slice(2)

const client = mqtt.connect('mqtt://192.168.1.101')

const message = {
    text: args[0],
    author: args[1],
    theme: 'dark'
}

client.on('connect', () => {
    client.publish('test/message', JSON.stringify(message))
    client.end()
})