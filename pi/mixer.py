# Extended pygame mixer module. Takes care of all audio playback, managing channels and mixing.
# Has a method "playsound" that can be called from outside to play sounds

import os.path, pygame, threading, time

class Mixer:

    # Constructor
    def __init__(self, loopThreshold):
        pygame.init()							# Initialize Pygame
        self.mixer = pygame.mixer				# Create pygame mixer object
        self.channels = dict()              	# Create Dictionary for connecting channel names to sound objects
		self.loopThreshold = loopThreshold		# Sounds shorter than this (seconds) will not be looped nonstop but rather be played in intervals depending on the volume of the channel
        #pygame.display.set_mode((200,100))   	# Only necessary to run on Windows. Stupid.
        print("Mixer initialized")
    
    # Changes a sound to play in the given volume.
    # If the sound is not played yet, a new channel is created and playback is started
    # If the volume is 0, playback will be stopped and the channel removed
	# Can also be used to clear all channels, effectively stopping all playback (reset)
    def playsound(self, arguments):
		# Single arguments go here
        if len(arguments) == 1:
			# Reset
            if arguments[0].lower() == "reset":
                reset()
            else:
                print("Message invalid: Not a recognized command")
		# Double arguments go here - first argument is expected to be the name of the sound requested to play, second argument is expected to be the volume
		else:
            sound = "audio/" + arguments[0] + ".wav"					# Get full path for audio file
            volume = arguments[1]										# Get the requested volume
            if self.checkfile(sound) and self.checkvolume(volume):		# Check if the file is valid and volume is okay
                volume = float(volume)									# Make sure volume is a float value
                volume /= 100											# Pygame sound objects can have a volume between 0 and 1 - website input is between 0 and 100
                if volume == 0:											# If volume = 0, request is to stop playback
                    if sound in self.channels:							# Find the sound in the channels dictionary
                        self.channels[sound].stop()						# Stop playback
                        del self.channels[sound]						# Remove dictionary entry since channel is not active anymore
                        print("Stopped playback and removed " + sound + " from channels")
                    else:												# If sound can't be found in channels dictionary it's not playing anyway
                        print("Can't stop playback or remove " + sound + " from channels: Has no channel yet")
                else:													# If volume != 0, volume of a playing channel must be changed
                    if sound in self.channels:							# Find the sound in the channels dictionary
                        self.channels[sound].set_volume(volume)			# Set volume of sound
                        print("Changing the volume of channel " + sound + " to " + str(volume))
                    else:												# If sound can't be found in channels a new channel has to be created
                        newsound = self.mixer.Sound(sound)				# Create new sound
                        newsound.set_volume(volume)						# Set volume of sound
                        self.channels[sound] = newsound					# Add sound to the channels dictionary
                        print("Created new channel for " + sound + " and set volume to " + str(volume))
                        if (newsound.get_length() >= self.loopThreshold):
                            newsound.play(-1)							# If the sound is at least as long as the loop threshold, play it in a continuous loop
                        else:
                            self.repeatsound(sound)						# If the sound is shorter, play the sound in intervals
    
	# Replays a sound in intervals - length of intervals is depending on sound volume
    def repeatsound(self, sound):
        self.channels[sound].play(0)		# Play the sound
		# 
        timetowait = 10 - self.channels[sound].get_volume() * 10 + self.channels[sound].get_length()
        print("\nPlaying " + sound + " again in " + str(timetowait))
        t = threading.Timer(timetowait, self.repeatsound, [sound])
        t.start()

    # Checks if a file with the given filename exists
    def checkfile(self, filename):
        if not os.path.isfile(filename + ".wav"):
            print("Error: " + filename + ".wav does not exist")
            return False
        return True

    # Checks if a given value is a number and in between 0 and 100
    def checkvolume(self, value):
        try:
            value = int(value)
        except ValueError:
            print("Error: " + value + " is not a number")
            return False
        # Check if number is between 0 and 100
        if not 0 <= value <= 100:
            print ("Error: " + str(value) + " is not a value between 0 and 100")
            return False
        return True
    
	# Stops all playback, effectively resetting the mixer
    def reset(self):
		# Stop playback in all channels, count number of channels stopped
        count = 0
        for channel in self.channels:
            self.channels[channel].stop()
            print("Stopped playback of " + channel)
            count = count + 1
        print("Stopped playback of " + str(count) + " channels")
		# Clear channels dictionary
        self.channels.clear()
        print("All channels cleared. Reset complete")

	# Plays a short jingle (used when ambientbox is connected and ready to take commands - see client)
    def playjingle(self):
        jingle = self.mixer.Sound("audio/jingle.wav")
        jingle.play()
		print("=== Welcome to Ambientbox ===")
