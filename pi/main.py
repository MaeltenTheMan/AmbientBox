# Entry point of the program - initializes mixer and client
# Also for basic settings

from mixer import Mixer
from client import Client

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

# Mixer Settings
loopThreshold = 10	# Sounds shorter than this (seconds) will not be looped nonstop but rather be played in intervals depending on the volume of the channel
maxLoopLength = 30	# Short sounds (see above) may be repeated at least every amount of seconds this is set to

mixer = Mixer(loopThreshold, maxLoopLength)
Client(url, topic, user, pw, mixer)