const buttonPlay = document.querySelector('.pause')
buttonPlay.addEventListener('click', () => play())

function play () {
  const pauseIcon = document.querySelector('.pauseIcon')
  const playIcon = document.querySelector('.playIcon')
  if (pauseIcon.classList.contains('inactive')) {
    pauseIcon.classList.remove('inactive')
    playIcon.classList.add('inactive')
    console.log('RODANDO')
  } else {
    playIcon.classList.remove('inactive')
    pauseIcon.classList.add('inactive')
    console.log('PAUSANDO')
  }
}
