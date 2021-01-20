input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P0, 668)
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P0, 0)
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 668)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P0, 0)
    basic.pause(1000)
})
