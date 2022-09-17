function playSound(e) {
    // Get the audio data
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Get the diva data
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // Audio Playing
    if (!audio) return; // Stop the function from running alltogether
    audio.currentTime = 0; // dont wait to sound before to stop to start a new one
    audio.play();
    // Add decoration when playing the sound
    key.classList.add('playing');
  }

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;// Only accepts a tranform
    this.classList.remove('playing');
  }

// Remove playing class to every div
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// Execute play sound
window.addEventListener('keydown', playSound);
