namespace SpriteKind {
    export const block = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level5`)
    Tommy.setPosition(1, 5)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    up_down_force = -2
    pause(200)
    up_down_force = 1
})
function Checkfordeath1stlevel () {
    if (Tommy.tileKindAt(TileDirection.Center, assets.tile`myTile7`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    if (Tommy.tileKindAt(TileDirection.Center, assets.tile`myTile0`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    if (Tommy.tileKindAt(TileDirection.Center, assets.tile`myTile11`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    if (Tommy.tileKindAt(TileDirection.Center, assets.tile`myTile10`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    if (Tommy.tileKindAt(TileDirection.Top, assets.tile`myTile14`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    if (Tommy.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
    Tommy.setStayInScreen(true)
}
function applyGravity () {
    Tommy.y += up_down_force
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Tommy.x += -10
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Tommy.x += 10
})
function Checkfordeath2ndlevel () {
    if (Tommy.tileKindAt(TileDirection.Center, assets.tile`myTile21`)) {
        Tommy.sayText("Game over")
        game.over(false)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Tommy.y += 10
})
function set_up_score () {
    textSprite2 = textsprite.create(convertToText(score_counter))
    textSprite2.setPosition(scene.cameraProperty(CameraProperty.Left) + 15, scene.cameraProperty(CameraProperty.Top) + 15)
}
function updateCurrentScore () {
    score_counter += 1
    textSprite2.setText(convertToText(score_counter))
}
let score_counter = 0
let textSprite2: TextSprite = null
let Tommy: Sprite = null
let up_down_force = 0
tiles.setCurrentTilemap(tilemap`level1`)
set_up_score()
let up_right_button = 1
up_down_force = 1
Tommy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . . 5 d d d . . . . . . 
    . . . . . . d f d f . . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . . d d d 3 . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . 8 9 8 8 . . . . . . 
    . . . . . . 8 9 8 8 . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . . 9 9 . . . . . . . 
    . . . . . . . e e . . . . . . . 
    `, SpriteKind.Player)
Tommy.setPosition(10, 37)
scene.cameraFollowSprite(Tommy)
Tommy.setStayInScreen(true)
forever(function () {
    updateCurrentScore()
    applyGravity()
    Checkfordeath1stlevel()
    Checkfordeath2ndlevel()
})
forever(function () {
    music.playMelody("C5 G A F B C5 E C ", 120)
    music.playMelody("F G E G B F C E ", 120)
    music.playMelody("C E F D A E C5 F ", 120)
    music.playMelody("C5 G A F B G - C5 ", 120)
})
