let freq = 200

input.onButtonPressed(Button.A, function () {
    freq /= 2 //doubles the frequency
})

input.onButtonPressed(Button.B, function () {
    freq *= 2 //halves the frequency
})

basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P12, 1)  // positive edge
    basic.pause(freq)
    pins.digitalWritePin(DigitalPin.P12, 0)  // negative edge
    basic.pause(freq)
})
