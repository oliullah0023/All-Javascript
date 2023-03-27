const secondsEl = document.getElementById('second')
const tensEl = document.getElementById('tens')
const StartButton = document.getElementById('StartButton')
const resetButton = document.getElementById('resetButton')
const stopButton = document.getElementById('stopButton')

let ten = 0;
let second = 0;
let myInterval;

StartButton.onclick = () => {
  clearInterval(myInterval)
   myInterval = setInterval(timer,10)

}
 


stopButton.onclick = () => {
  clearInterval(myInterval)
}


resetButton.onclick = () => {
  clearInterval(myInterval)
ten = 0
second = 0
secondsEl.innerHTML = `0${ten}`
tensEl.innerHTML = `0${second}`
}

const timer = () => {
ten ++
if (Number(ten <= 9)){
  tensEl.innerHTML = `0${ten}`
}
if (Number(ten > 9)){
  tensEl.innerHTML = ten
}
if(Number(ten > 99)){
  second++
  secondsEl.innerHTML = `0${second}`
  ten = 0
  tensEl.innerHTML =`0${ten}`
}if (Number(second > 9)){
  secondsEl.innerHTML = second
}

}