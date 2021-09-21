const timeLeft = document.getElementById('time-left')

//date format: MM-DD-YYYY
const birthday = new Date('06/13/2022')
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerId

function countDown() {

    const today = new Date()
    //exact time left from today till birthday in milliseconds
    const timeSpan = birthday - today
    //milliseconds

    //If the day has passed 
    if (timeSpan <= -day) {
        timeLeft.innerHTML = 'I’m so sorry I forgot to remember your birthday.'
        clearInterval(timerId)
        return
    }

    if (timeSpan <= 0) {
        timeLeft.innerHTML = 'Happy Birthday!'
        clearInterval(timerId)
        return
    }
    // converting milliseconds
    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)

    timeLeft.innerHTML =
        days + 'days ' + hours + 'hrs ' + minutes + 'mins ' + seconds + 'secs'

}
//fjds
timerId = setInterval(countDown, second)