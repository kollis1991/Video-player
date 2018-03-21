/* hitta elementen */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
/* bygga funktioner */

function togglePlay(){
  if(video.paused)  {
      video.play();

  }else{
      video.pause();
  }
}
function  updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
    
}
function skip () {
video.currentTime += parseFloat(this.dataset.skip);
}
function handleRangeUpdate() {
    video[this.name] = this.value;
    console.log(this.name);
  }
  function handleProgrees(){
      const percent = (video.currentTime / video.duration) * 100;
      progressBar.style.flexBasis = `${percent}%`;
  }

/* Event-listners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgrees);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

