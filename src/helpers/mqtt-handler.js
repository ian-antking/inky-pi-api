const mqtt = require('mqtt');

class MqttHandler {
    constructor(broker_url) {
        this.broker_url = broker_url
    }

    connect() {
        this.mqttClient = mqtt.connect(this.broker_url)

        this.mqttClient.on('error', (err) => {
            console.log(err);
            this.mqttClient.end();
        });

        this.mqttClient.on('connect', () => {
            console.log(`mqtt client connected`);
        });
    }

    sendMessage(topic, message) {
        this.mqttClient.publish(topic, message);
    }

    close() {
        this.mqttClient.end()
    }

}

module.exports = MqttHandler