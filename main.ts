sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    batteries.setPosition(randint(20, 100), randint(20, 100))
})
let batteries: Sprite = null
scene.setBackgroundColor(7)
let KitronikRobot = sprites.create(img`
    ..........................
    ..........................
    ........1111111111........
    .......111111111111.......
    ......11111111111111......
    .....111..........111.....
    .....11...1....1...11.....
    .....11...1....1...11.....
    .....11...........111.....
    ......111........111......
    .......111111111111.......
    ........1111111111........
    .....11.1111111111.11.....
    .....11.111.1..111.11.....
    .....11.111....111.11.....
    .....11.111...1111.11.....
    .....11.111..11111.11.....
    .....11.111...1111.11.....
    .....11.111.1..111.11.....
    .....11.111.11.111.11.....
    ........111111111.........
    ..........111111..........
    .......11..1111..11.......
    ......1111.1111.1111......
    ......1111.1111.1111......
    ......11111....11111......
    .....111111....111111.....
    .....111111....111111.....
    .....111111....111111.....
    ..........................
    ..........................
    ..........................
    `, SpriteKind.Player)
batteries = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
controller.moveSprite(KitronikRobot)
info.startCountdown(10)
