const time = document.querySelector('#time')
const setTime = document.querySelector('#set')
const setTimeArea = document.querySelector('.showTime')
const inputTime = document.querySelector('#input')
const showHour = document.querySelector('#hour')
const showMinutes = document.querySelector('#minutes')
const showSeconds = document.querySelector('#seconds')

function alarmRinging() {
    

}
// changeBgColor()



function timer() {
    setInterval(() => {
        const currtime = new Date()
        const hour = currtime.getHours()
        const min = currtime.getMinutes()
        const sec = currtime.getSeconds()
        
        if (hour > 12) {
            var newHour = hour - 12
        }
        showHour.innerHTML = '0'+newHour
        showMinutes.innerHTML = min
        showSeconds.innerHTML = sec
        var compareTime = "0"+newHour+":"+min;

    if (inputTime.value == compareTime){
setTimeArea.className = "setAlarmRing"
setTimeout(() => {
setTimeArea.className = "showTime"
}, 60000);
} }, 1000)
        

}
timer()

function handleTimeSubmit() {

    // var alrmTime = inputTime.value
    
    // console.log(tru);
 
}
// console.log(currtime.getHours())