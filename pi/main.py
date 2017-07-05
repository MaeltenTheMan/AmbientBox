from mixer import Mixer
from client import Client
import time

mixer = Mixer()
url = "broker.mqttdashboard.com"
topic = "haw/dmi/mt/its/ss17/ambientbox"
mixer.play(["sounda","100"])
time.sleep(1)
mixer.play(["soundb","50"])
time.sleep(5)
mixer.reset()
time.sleep(5)
#Client(url, topic, mixer)