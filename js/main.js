// $(function () {
  
// });


sound.play();

const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const songTitle = document.querySelector('#song-title');

// Song titles
const songs = ['limbo - taxi (sodade)', 'limbo - sodade (sodade)', 'limbo - love (sodade)'];

// Keep track of songs 
let songIndex = 0;

// Initially load song info DOM
loadSong(songs[songIndex]);

// Update the song detail
function loadSong(song) {
  songTitle.innerText = song;
  audio.src = '/music/${song}.mp3';
}

function playSong() {
  musicContainer.classList.add('play')
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play()
}

function pauseSong() {
  musicContainer.classList.remove('play')
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause()

}

//Event Listeners 
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play')

  if (isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})
