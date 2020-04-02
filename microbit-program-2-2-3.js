basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        led.plot(0, 0)
    } else {
        led.unplot(0, 0)
    }
})
