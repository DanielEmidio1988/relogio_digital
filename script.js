
function runClock(){
    const hourElement = document.querySelector(".hour")
    const minuteElement = document.querySelector(".minute")
    const secondElement = document.querySelector(".second")

    const dateNow = new Date()
    const hour = dateNow.getHours().toString().padStart(2,'0')
    const minute = dateNow.getMinutes().toString().padStart(2,'0')
    const second = dateNow.getSeconds().toString().padStart(2,'0')

    hourElement.textContent = hour
    minuteElement.textContent = minute
    secondElement.textContent = second
}

setInterval(runClock,1000)
