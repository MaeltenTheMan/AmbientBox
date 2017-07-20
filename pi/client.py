# MQTT client to get messages of a given topic.
# Webinterface: http://www.hivemq.com/demos/websocket-client/

import paho.mqtt.client as mqtt

class Client:

    # Constructor
    def __init__(self, url, topic, user, pw, mixer):
        self.url = url
        self.topic = topic
        self.mixer = mixer									# Mixer object that will get messages (orders) sent to
        print("Client initialized")
        client = mqtt.Client()								# Create new client object
        client.on_connect = self.on_connect
        client.on_message = self.on_message
        if (user and pw):									# Only use username/password if they have been set
            client.username_pw_set(user, password=pw)
        client.connect(url, 1883, 60)
        self.mixer.playjingle()								# Play jingle to indicate Ambientbox is ready
        client.loop_forever()

    # Called when client connects to server
    def on_connect(self, client, userdata, flags, rc):
        print("Connected to " + self.url + " with result code "+str(rc))
        client.subscribe(self.topic)						# Subscribe to given topic on connect
        print("Subscribed to " + self.topic)

    # Called whenever a new message is published
    def on_message(self, client, userdata, msg):
        payload = msg.payload.decode('utf-8')
        print("\nReceived new message: " + payload)
        arguments = payload.split()							# Split the payload - each word is considered one argument
        if 1 <= len(arguments) <= 2:						# Only one (reset) or two (soundname, volume) arguments are allowed
            self.mixer.playsound(arguments)					# Call playsound method on mixer using the argument(s)
        else:
            print("Message invalid: Needs to contain exactly 1 or 2 arguemtents")
