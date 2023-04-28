const btnStart = document.querySelector('.start')
const btnReload = document.querySelector('.reload')
const timer = document.querySelector('.time')

let hours = 0
let minutes = 0
let seconds = 0

let leadSeconds = 0
let leadMinutes = 0
let leadHours = 0

let timeInterval = null
let timeStatus = "stoped"

function watchTime() {
  seconds++

  if(seconds === 60) {
    seconds = 0
    minutes ++
  }

  if(minutes === 60) {
    minutes = 0
    hours ++
  }

  if(seconds < 10) {
     leadSeconds = `0${seconds.toString()}`
  } else {
     leadSeconds = `${seconds}`
  }

  if(minutes < 10) {
     leadMinutes = `0${minutes.toString()}`
  } else {
     leadMinutes = `${minutes}`
  }

  if(hours < 10) {
     leadHours = `0${hours.toString()}`
  } else {
     leadHours = `${hours}`
  }

  timer.innerHTML = `${leadHours}:${leadMinutes}:${leadSeconds}`
  
}

btnStart.addEventListener('click', () => {
  if(timeStatus === 'stoped') {
     timeInterval = setInterval(watchTime, 1000)
     btnStart.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>'
     timeStatus = 'running'
   } else {
     clearInterval(timeInterval)
     btnStart.innerHTML = '<i class="fa-solid fa-play" id="play">'
     timeStatus = 'stoped'
   }
})

btnReload.addEventListener('click', () => {
  clearInterval(timeInterval)
  seconds = 0
  minutes = 0
  hours = 0
  timer.innerHTML = '00:00:00'
})

