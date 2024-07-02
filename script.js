
const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.querySelector('.nav-links');
const navbar = document.getElementById('navbar');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});
function playSound(soundFile) {
    const audio = document.getElementById('audio');
    audio.src = soundFile;
    audio.play();
  }
  function playSound(soundId) {
    var audio = document.getElementById(soundId);
    audio.play();
}

function stopSound(soundId) {
    var audio = document.getElementById(soundId);
    audio.pause();
    audio.currentTime = 0;
}
