# This class is for publishing MQTT messages for testing - in case MQTT connection via websocket fails

import paho.mqtt.client as mqtt

# Settings for testing
'''
url = "broker.mqttdashboard.com"
topic = "haw/dmi/mt/its/ss17/ambientbox"
user = ""
pw = ""
'''

# Settings for HAW
url = "diginet.mt.haw-hamburg.de"
topic = "ambientbox"
user = "haw"
pw = "schuh+-0"

class MQTTPublisher:

    # Constructor
    def __init__(self, url, topic, user, pw):
        self.url = url
        self.topic = topic
        client = mqtt.Client()
        print("Client initialized")
        client.on_connect = self.on_connect
        if (user or pw):
            client.username_pw_set(user, password=pw)
        client.connect(url, 1883, 60)
        while True:
            message = input()
            client.publish(topic, payload=message, qos=0, retain=False)

    # Called when client connects to server
    def on_connect(self, client, userdata, flags, rc):
        print("Connected to " + url + " with result code " + str(rc))
        client.subscribe(self.topic)
        print("Subscribed to " + topic)

MQTTPublisher(url, topic, user, pw)