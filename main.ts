let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGBW)
loops.everyInterval(60000, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(1000)
})
basic.forever(function () {
	
})
