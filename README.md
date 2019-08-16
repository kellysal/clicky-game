# Clicky Game

Deployed on GitHub Pages: https://kellysal.github.io/clicky-game/

## Overview

I created a memory game with React. This assignment required me to break up my application's UI into components, manage component state, and respond to user events.

![Screenshot](/images/screenshot.png)


1. The application renders different images to the screen. Each image listens for click events.

2. The application keeps track of the user's score. The user's score is incremented when clicking an image for the first time. The user's score is reset to 0 if they click the same image more than once.

3. Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.

4. Once the user's score is reset after an incorrect guess, the game restarts.