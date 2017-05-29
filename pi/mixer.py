# Mixer
import pygame
import os.path

class Mixer:

    # Constructor
    def __init__(self):
        pygame.init()
        self.mixer = pygame.mixer
        self.channels = dict()                      # Dictionary of channel names with sound object tied to them
        #pygame.display.set_mode((200,100))          # Only necessary to run on Windows. Stupid.
        print("Mixer initialized")
    
    # Changes a sound to play in the given volume.
    # If the sound is not played yet, playback is started
    # If the volume is 0, playback will be stopped and the channel removed
    def play(self, sound, volume):
        if self.checkfile(sound) and self.checkvolume(volume):
            sound = sound + ".wav"
            volume = float(volume)
            volume /= 100
            if volume == 0:
                if sound in self.channels:
                    self.channels[sound].stop()
                    del self.channels[sound]
                    print("Stopped playback and removed " + sound + " from channels")
                else:
                    print("Can't stop playback or remove " + sound + " from channels: Has no channel yet")
            else: 
                if sound in self.channels:
                    self.channels[sound].set_volume(volume)
                    print("Changing the volume of channel " + sound + " to " + str(volume))
                else:
                    newsound = self.mixer.Sound(sound)
                    newsound.set_volume(volume)
                    newsound.play(-1)
                    self.channels[sound] = newsound
                    print("Created new channel for " + sound + " and set volume to " + str(volume))
    
    # Checks if a given filename exists as a .wav file
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
        # Check if integer is between 0 and 100
        if not 0 <= value <= 100:
            print ("Error: " + str(value) + " is not a value between 0 and 100")
            return False
        return True
