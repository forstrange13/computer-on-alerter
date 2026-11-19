input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.showLeds(`
            . # # # .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(120)
        basic.showLeds(`
            . . # # #
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(120)
        basic.showLeds(`
            . . . # #
            . . . . #
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(120)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . # . #
            . . . . .
            . . . . .
            `)
        basic.pause(120)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . # . #
            . . . . #
            . . . . .
            `)
        basic.pause(120)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . #
            . . . . #
            . . . . #
            `)
        basic.pause(120)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . #
            . . . # #
            `)
        basic.pause(120)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . # # #
            `)
        basic.pause(120)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . # # # .
            `)
        basic.pause(120)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            # # # . .
            `)
        basic.pause(120)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            # . . . .
            # # . . .
            `)
        basic.pause(120)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . .
            # . . . .
            # . . . .
            `)
        basic.pause(120)
        basic.showLeds(`
            . . . . .
            # . . . .
            # . # . .
            # . . . .
            . . . . .
            `)
        basic.pause(120)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(120)
        basic.showLeds(`
            # # . . .
            # . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(120)
        basic.showLeds(`
            # # # . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(120)
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        basic.clearScreen()
    }
})
music.setVolume(52)
basic.showLeds(`
    # . . . .
    . . . # .
    . . # . .
    . # . . .
    . . . . #
    `)
music.play(music.stringPlayable("C F D G E A F C5 ", 200), music.PlaybackMode.UntilDone)
