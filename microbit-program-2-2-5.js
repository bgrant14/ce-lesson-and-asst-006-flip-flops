basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) pins.digitalWritePin(DigitalPin.P12, 1)
    else pins.digitalWritePin(DigitalPin.P12, 0)
})
