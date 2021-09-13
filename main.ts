let count = 0
let rows = 0
basic.forever(function () {
    led.plot(count, rows)
    if (count >= 4) {
        if (rows >= 4) {
            rows = 0
            basic.pause(200)
            basic.clearScreen()
        } else {
            rows = rows + 1
        }
        count = 0
    } else {
        count = count + 1
        basic.pause(100)
    }
})
