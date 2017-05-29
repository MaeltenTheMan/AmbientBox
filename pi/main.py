from mixer import Mixer
from client import Client

mixer = Mixer()
url = "broker.mqttdashboard.com"
topic = "haw/dmi/mt/its/ss17/ambientbox"
Client(url, topic, mixer)