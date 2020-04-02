let freq = 200

basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P12, 1)  // positive edge
    basic.pause(freq)
    pins.digitalWritePin(DigitalPin.P12, 0)  // negative edge
    basic.pause(freq)
})
