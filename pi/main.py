from mixer import Mixer
from client import Client
import time

mixer = Mixer()

# Settings for testing
url = "broker.mqttdashboard.com"
topic = "haw/dmi/mt/its/ss17/ambientbox"
user = ""
pw = ""

# Settings for HAW
#url = "diginet.mt.haw-hamburg.de"
#topic = "ambientbox"
#user = "haw"
#pw = "schuh+-0"

Client(url, topic, user, pw, mixer)