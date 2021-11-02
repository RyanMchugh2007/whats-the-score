input.onButtonPressed(Button.A, function () {
    score += 1
})
input.onButtonPressed(Button.AB, function () {
    score = 0
})
input.onButtonPressed(Button.B, function () {
    score += -1
})
let score = 0
score = 0
basic.forever(function () {
    basic.showNumber(score)
})
