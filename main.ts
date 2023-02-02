input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    basic.clearScreen()
    yy = randint(0, 5)
    xx = randint(0, 5)
    led.plot(xx, yy)
})
let xx = 0
let yy = 0
let score = 0
let x = 0
led.plot(x, 0)
let y = 0
led.plot(y, 0)
yy = 9999
xx = 9999
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 200) {
        led.unplot(x, y)
        while (input.acceleration(Dimension.X) > 200) {
            if (x >= 0 && x < 4) {
                x += 1
            }
            led.plot(x, y)
            basic.pause(500)
            led.unplot(x, y)
        }
    }
    if (input.acceleration(Dimension.X) < -200) {
        led.unplot(x, y)
        while (input.acceleration(Dimension.X) < -200) {
            if (x > 0 && x <= 4) {
                x += -1
            }
            led.plot(x, y)
            basic.pause(500)
            led.unplot(x, y)
        }
    }
    if (input.acceleration(Dimension.Y) < -200) {
        led.unplot(x, y)
        while (input.acceleration(Dimension.Y) < -200) {
            if (y > 0 && y <= 4) {
                y += -1
            }
            led.plot(x, y)
            basic.pause(500)
            led.unplot(x, y)
        }
    }
    if (input.acceleration(Dimension.Y) > 200) {
        led.unplot(x, y)
        while (input.acceleration(Dimension.Y) > 200) {
            if (y >= 0 && y < 4) {
                y += 1
            }
            led.plot(x, y)
            basic.pause(500)
            led.unplot(x, y)
        }
    }
    led.plot(x, y)
})
basic.forever(function () {
    if (x == xx && y == yy) {
        for (let index = 0; index < 2; index++) {
            music.playTone(262, music.beat(BeatFraction.Quarter))
            basic.clearScreen()
            basic.pause(200)
            basic.showIcon(IconNames.Heart)
        }
        basic.clearScreen()
        if (score == 2) {
            music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
            for (let index = 0; index < 6; index++) {
                basic.clearScreen()
                basic.pause(100)
                basic.showIcon(IconNames.Heart)
                basic.clearScreen()
                basic.pause(100)
                basic.showIcon(IconNames.SmallHeart)
            }
        } else {
            score += 1
            basic.showNumber(score)
            basic.clearScreen()
            x = 0
            y = 0
            yy = randint(0, 5)
            xx = randint(0, 5)
            led.plot(xx, yy)
        }
    }
})
