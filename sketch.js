var gj, gj1
var gs, gs1
var dr, dr1
var cr, cr1
var tr, tr1
var spooky

var obsGroup
var gameState = "PLAY"


function preload() {
  gj1 = loadImage("ghost-jumping.png")
  gs1 = loadImage("ghost-standing.png")
  dr1 = loadImage("door.png")
  cr1 = loadImage("climber.png")
  tr1 = loadImage("tower.png")
  spooky = loadSound("spooky.wav")
}

function setup() {
  createCanvas(600, 600)

  gj = createSprite(200, 200)
  gj.addImage("ghostjump", gs1)
  gj.scale = 0.5

  tr = createSprite(300, 300, 300, 300)
  tr.addImage("background", tr1)
  obsGroup = new Group();





}

function draw() {
  background(0)




  if (gameState == "PLAY") {

    tr.velocityY = +3
    if (tr.y > 400) {
      tr.y = height / 2;
    }
    spooky.play();

    if (frameCount % 300 == 0) {
      create_obs_and_pause();
    }


    obsGroup.collide(gj);






    gj.velocityY = 1.5;

    if (keyWentDown("space")) {
      gj.velocityY = -20
    }

    if (keyWentUp("space")) {
      gj.velocityY = 5;
    }

    gj.x = mouseX


    if (gj.y > 600) {
      gameState = "END"
    }
  }

  if (gameState == "END") {
    tr.velocityY = 20
    fill("cyan")
    textSize(40)
    text("#GAME OVER#", 150, 300)
    dr.visible = false
    cr.visible = false

  }

  if (obsGroup.isTouching(gj)) {
    gameState = "END"
  }


  gj.depth = tr.depth + 1
  drawSprites();
}

function create_obs_and_pause() {
  dr = createSprite(200, 50, 200, 200)
  dr.addImage("bluething", dr1)
  dr.velocityY = +3

  cr = createSprite(200, 120, 200, 200)
  cr.addImage("climber", cr1)
  cr.velocityY = +3
  obsGroup.add(dr);
  obsGroup.add(cr);
}