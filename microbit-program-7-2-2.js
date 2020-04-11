// this is just a general skeleton for your program
// Global Variables
let pause_us: number = 200   // pause period in microseconds
let a: number, b: number, c: number // numbers to store pulse states

// Event Handling
input.onButtonPressed(Button.A, function () {
    // control the frequency of the square wave
    pause_us *= 2
})
// other button events here...

input.onButtonPressed(Button.B, function () {
    pause_us /= 2
})

pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {
    // take a reading of pin P2 when it is pulsed low
    a = 0
})
// other pin events here...
pins.onPulsed(DigitalPin.P2, PulseValue.High, function () {
    a = 1
})
pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {
    b = 0
})
pins.onPulsed(DigitalPin.P1, PulseValue.High, function () {
    b = 1
})
pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    c = 0
})
pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
    c = 1
})

function bin2dec(q0: number, q1: number, q2: number) {
    let num: number = 0
    if (q0 == 1) num += 1
    if (q1 == 1) num += 2
    if (q2 == 1) num += 4
    basic.showNumber(num)
}

// Repeated Actions
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P12, 1)  // positive edge of clock
    led.plot(0, 0)
    basic.pause(pause_us)
    pins.digitalWritePin(DigitalPin.P12, 0)  // negative edge of clock
    led.unplot(0, 0)
    basic.pause(pause_us)
})
basic.forever(function () {
    bin2dec(a, b, c)
})
