import sched, time, pygame, threading

class NewMixer:

    # Constructor
    def __init__(self):
        pygame.init()
        self.mixer = pygame.mixer
        self.channels = dict()                      # Dictionary of channel names with sound object tied to them
        #self.scheduler = sched.scheduler(time.time, time.sleep)
        print("Mixer initialized")

    def repeatsound(self, sound):
        self.channels[sound].play(0)
        timetowait = 10 - self.channels[sound].get_volume() * 10 + self.channels[sound].get_length()
        print("Waiting for: " + str(timetowait))
        t = threading.Timer(timetowait, self.repeatsound, [sound])
        t.start()
        #self.scheduler.enter(timetowait, 1, self.repeatsound, [sound])
        #self.scheduler.run()
    
    # Changes a sound to play in the given volume.
    # If the sound is not played yet, playback is started
    # If the volume is 0, playback will be stopped and the channel removed
    def playsound(self, arguments):
        if len(arguments) == 1:
            if arguments[0].lower() == "reset":
                reset()
        else:
            sound = arguments[0]
            volume = arguments[1]
            if True:
                sound = sound + ".wav"
                volume = float(volume)
                volume /= 100
                if volume == 0:
                    if sound in self.channels:
                        self.channels[sound].stop()
                        #scheduler.cancel(WHAT?)
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
                        self.channels[sound] = newsound
                        self.repeatsound(sound)
                        print("Created new channel for " + sound + " and set volume to " + str(volume))

mixer = NewMixer()
while True:
    message = raw_input()
    arguments = message.split()
    mixer.playsound(arguments)