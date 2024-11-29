scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    mySprite.setPosition(40, 39)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    pause(100)
    scene.setBackgroundColor(2)
    tiles.setCurrentTilemap(tilemap`level4`)
    mySprite.setPosition(40, 39)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    mySprite.setPosition(40, 39)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.gameOver(true)
})
let mySprite: Sprite = null
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . . f e 4 d d d d 4 e f e . . 
    . . f e f 2 2 2 2 e d d 4 e . . 
    . . e 4 f 2 2 2 2 e d d e . . . 
    . . . . f 4 4 5 5 f e e . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(40, 39)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
