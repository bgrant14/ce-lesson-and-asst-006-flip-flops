// this is just a general skeleton for your program
//pins.digitalReadPin(DigitalPin.P2)

// Global Variables
let pause_us: number = 200   // pause period in microseconds

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
    led.unplot(0, 1)
})
// other pin events here...

pins.onPulsed(DigitalPin.P2, PulseValue.High, function () {
    led.plot(0, 1)
})

// Repeated Actions
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P12, 1)  // positive edge of clock
    led.plot(0, 0)
    basic.pause(pause_us)
    pins.digitalWritePin(DigitalPin.P12, 0)  // negative edge of clock
    led.unplot(0, 0)
    basic.pause(pause_us)
})
