# MQTT client to get inputs.
# Webinterface: http://www.hivemq.com/demos/websocket-client/

import paho.mqtt.client as mqtt

class Client:

    # Constructor
    def __init__(self, url, topic, user, pw, mixer):
        self.url = url
        self.topic = topic
        self.mixer = mixer
        print("Client initialized")
        client = mqtt.Client()
        client.on_connect = self.on_connect
        client.on_message = self.on_message
        if (user and pw):
            client.username_pw_set(user, password=pw)
        client.connect(url, 1883, 60)
        self.mixer.playjingle()
        client.loop_forever()

    # Called when client connects to server
    def on_connect(self, client, userdata, flags, rc):
        print("Connected to " + self.url + " with result code "+str(rc))
        client.subscribe(self.topic)
        print("Subscribed to " + self.topic)

    # Called whenever a new message is published
    def on_message(self, client, userdata, msg):
        payload = msg.payload.decode('utf-8')
        print("\nReceived new message: " + payload)
        arguments = payload.split()
        if 1 <= len(arguments) <= 2:
            self.mixer.playsound(arguments)
        else:
            print("Message invalid: Needs to contain exactly 1 or 2 arguemtents")
