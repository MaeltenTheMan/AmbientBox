		  === AMBIENTBOX 1.0 ===
== discover the soundtrack of your life ==


= What is this? =
Ambientbox is a small program designed to run on a Raspberry Pi and in your browser. Using Ambientbox, you can design your own soundscape for your home. All you need is a RPi and some speakers. Feel free to check out the documentation files for more info.


= FAQ =

1. Why is an useless window opening when I'm running this on Windows?
If you are running this on a non-Windows machine, you can comment the line "pygame.display.set_mode((200,100))" in /pi/mixer.py out, so that it doesn't display the annoying window. Opening this window is only necessary for the pygame engine to run properly under Windows.

2. Where are the sound files?
As this is pushed to a public Github repository, we were not able to include our own audio files (they are huge!)
However, you can download the sound library using this link:
https://www.dropbox.com/sh/mfhphd7nhwuoejv/AAAT-aL58k6UnCqMdF_myA7ta?dl=0
You may also use your own audio files, remember that you will have to change the sliders in the web/index.html to your file names accordingly, though. Oh, and the files need to be 16bit 44.1khz .wav files.


= Enjoy! =