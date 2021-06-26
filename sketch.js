var pacman, pacmanImg;
var g1, g1Img;
var g2, g2Img;
var g3, g3Img;
var g4, g4Img;
var dotImg;
var SpDot;
var pacmanU, pacmanL, pacmanD;
var edges;
var score1 = 0;
var start = 0, play = 1, end = 2, win = 3, restart = 4;
var gameState = start;
var L1, L2;
var levels;
var l1 = 01, l2 = 02;


function preload() {

    pacmanImg = loadAnimation("pacman1.png", "pacman2.png");
    pacmanU = loadAnimation("pacmanU.png", "pacman2.png");
    pacmanD = loadAnimation("pacmanD.png", "pacman2.png");
    pacmanL = loadAnimation("pacmanL.png", "pacman2.png");
    blueG = loadAnimation("blue.png")

    SpDot = loadAnimation("power1.png", "power2.png", "power3.png");

    g1Img = loadImage("G1.png");
    g2Img = loadImage("G2.png");
    g3Img = loadImage("G3.png");
    g4Img = loadImage("G4.png");

    dotImg = loadImage("Coins.png");

}
function setup() {
    createCanvas(1700, 800);
    b = createSprite(1600, 400, 200, 800)
    b.shapeColor = "white   ";


    pacman = createSprite(140, 760, 40, 40);
    pacman.addAnimation("pacman", pacmanImg);
    pacman.addAnimation("pacmanU", pacmanU);
    pacman.addAnimation("pacmanL", pacmanL);
    pacman.addAnimation("pacmanD", pacmanD);
    pacman.scale = 0.6

    blue1 = createSprite(20000, 20000, 50, 50);
    blue1.scale - 0.15;
    blue2 = createSprite(-20000, -20000, 50, 50);
    blue2.scale - 0.15;
    blue3 = createSprite(20000, 20000, 50, 50);
    blue3.scale - 0.15;
    blue4 = createSprite(20000, 20000, 50, 50);
    blue4.scale - 0.15;
    blue1.debug = true;
    blue2.debug = true;
    blue3.debug = true;
    blue4.debug = true;





    g1 = createSprite(820, 400, 40, 40);
    g1.addImage(g1Img);
    g1.scale = 0.2;

    g2 = createSprite(740, 400, 40, 40);
    g2.addImage(g2Img);
    g2.scale = 0.2;

    g3 = createSprite(650, 400, 40, 40);
    g3.addImage(g3Img);
    g3.scale = 0.2;

    g4 = createSprite(890, 400, 40, 40);
    g4.addImage(g4Img);
    g4.scale = 0.2;



    //LEFT SIDE DOTS
    d1 = createSprite(140, 140, 20, 20);
    d1.addImage(dotImg);

    d2 = createSprite(140, 200, 20, 20);
    d2.addImage(dotImg);

    d3 = createSprite(140, 260, 20, 20);
    d3.addImage(dotImg);

    d4 = createSprite(140, 320, 20, 20);
    d4.addImage(dotImg);

    d5 = createSprite(140, 380, 20, 20);
    d5.addImage(dotImg);

    d6 = createSprite(140, 440, 20, 20);
    d6.addImage(dotImg);

    d7 = createSprite(140, 500, 20, 20);
    d7.addImage(dotImg);

    d8 = createSprite(140, 560, 20, 20);
    d8.addImage(dotImg);

    d9 = createSprite(140, 620, 20, 20);
    d9.addImage(dotImg);

    d10 = createSprite(140, 680, 20, 20);
    d10.addImage(dotImg);


    //RIGHT SIDE DOTS
    d11 = createSprite(1460, 140, 20, 20);
    d11.addImage(dotImg);

    d12 = createSprite(1460, 200, 20, 20);
    d12.addImage(dotImg);

    d13 = createSprite(1460, 260, 20, 20);
    d13.addImage(dotImg);

    d14 = createSprite(1460, 320, 20, 20);
    d14.addImage(dotImg);

    d15 = createSprite(1460, 380, 20, 20);
    d15.addImage(dotImg);

    d16 = createSprite(1460, 440, 20, 20);
    d16.addImage(dotImg);

    d17 = createSprite(1460, 500, 20, 20);
    d17.addImage(dotImg);

    d18 = createSprite(1460, 560, 20, 20);
    d18.addImage(dotImg);

    d19 = createSprite(1460, 620, 20, 20);
    d19.addImage(dotImg);

    d20 = createSprite(1460, 680, 20, 20);
    d20.addImage(dotImg);


    //TOP DOTS
    d21 = createSprite(280, 40, 20, 20);
    d21.addImage(dotImg);

    d22 = createSprite(340, 40, 20, 20);
    d22.addImage(dotImg);

    d23 = createSprite(400, 40, 20, 20);
    d23.addImage(dotImg);

    d24 = createSprite(460, 40, 20, 20);
    d24.addImage(dotImg);

    d25 = createSprite(520, 40, 20, 20);
    d25.addImage(dotImg);

    d26 = createSprite(580, 40, 20, 20);
    d26.addImage(dotImg);

    d27 = createSprite(640, 40, 20, 20);
    d27.addImage(dotImg);

    d28 = createSprite(720, 40, 20, 20);
    d28.addImage(dotImg);

    d29 = createSprite(780, 40, 20, 20);
    d29.addImage(dotImg);

    d30 = createSprite(840, 40, 20, 20);
    d30.addImage(dotImg);

    d31 = createSprite(900, 40, 20, 20);
    d31.addImage(dotImg);

    d32 = createSprite(960, 40, 20, 20);
    d32.addImage(dotImg);

    d33 = createSprite(1020, 40, 20, 20);
    d33.addImage(dotImg);

    d34 = createSprite(1080, 40, 20, 20);
    d34.addImage(dotImg);

    d35 = createSprite(1140, 40, 20, 20);
    d35.addImage(dotImg);

    d36 = createSprite(1200, 40, 20, 20);
    d36.addImage(dotImg);

    d37 = createSprite(1260, 40, 20, 20);
    d37.addImage(dotImg);

    d38 = createSprite(1320, 40, 20, 20);
    d38.addImage(dotImg);


    //BOTTOM DOTS
    d39 = createSprite(280, 760, 20, 20);
    d39.addImage(dotImg);

    d40 = createSprite(340, 760, 20, 20);
    d40.addImage(dotImg);

    d41 = createSprite(400, 760, 20, 20);
    d41.addImage(dotImg);

    d42 = createSprite(460, 760, 20, 20);
    d42.addImage(dotImg);

    d43 = createSprite(520, 760, 20, 20);
    d43.addImage(dotImg);

    d44 = createSprite(580, 760, 20, 20);
    d44.addImage(dotImg);

    d45 = createSprite(640, 760, 20, 20);
    d45.addImage(dotImg);

    d46 = createSprite(720, 760, 20, 20);
    d46.addImage(dotImg);

    d47 = createSprite(780, 760, 20, 20);
    d47.addImage(dotImg);

    d48 = createSprite(840, 760, 20, 20);
    d48.addImage(dotImg);

    d49 = createSprite(900, 760, 20, 20);
    d49.addImage(dotImg);

    d50 = createSprite(960, 760, 20, 20);
    d50.addImage(dotImg);

    d51 = createSprite(1020, 760, 20, 20);
    d51.addImage(dotImg);

    d52 = createSprite(1080, 760, 20, 20);
    d52.addImage(dotImg);

    d53 = createSprite(1140, 760, 20, 20);
    d53.addImage(dotImg);

    d54 = createSprite(1200, 760, 20, 20);
    d54.addImage(dotImg);

    d55 = createSprite(1260, 760, 20, 20);
    d55.addImage(dotImg);

    d56 = createSprite(1320, 760, 20, 20);
    d56.addImage(dotImg);


    //LEFT SIDE :2
    d57 = createSprite(290, 140, 20, 20);
    d57.addImage(dotImg);

    d58 = createSprite(290, 200, 20, 20);
    d58.addImage(dotImg);

    d59 = createSprite(290, 260, 20, 20);
    d59.addImage(dotImg);

    d60 = createSprite(290, 320, 20, 20);
    d60.addImage(dotImg);

    d61 = createSprite(290, 380, 20, 20);
    d61.addImage(dotImg);

    d62 = createSprite(290, 440, 20, 20);
    d62.addImage(dotImg);

    d63 = createSprite(290, 500, 20, 20);
    d63.addImage(dotImg);

    d64 = createSprite(290, 560, 20, 20);
    d64.addImage(dotImg);

    d65 = createSprite(290, 620, 20, 20);
    d65.addImage(dotImg);

    d66 = createSprite(290, 680, 20, 20);
    d66.addImage(dotImg);


    //RIGHT SIDE DOTS:2
    d67 = createSprite(1310, 140, 20, 20);
    d67.addImage(dotImg);

    d68 = createSprite(1310, 200, 20, 20);
    d68.addImage(dotImg);

    d69 = createSprite(1310, 260, 20, 20);
    d69.addImage(dotImg);

    d70 = createSprite(1310, 320, 20, 20);
    d70.addImage(dotImg);

    d71 = createSprite(1310, 380, 20, 20);
    d71.addImage(dotImg);

    d72 = createSprite(1310, 440, 20, 20);
    d72.addImage(dotImg);

    d73 = createSprite(1310, 500, 20, 20);
    d73.addImage(dotImg);

    d74 = createSprite(1310, 560, 20, 20);
    d74.addImage(dotImg);

    d75 = createSprite(1310, 620, 20, 20);
    d75.addImage(dotImg);

    d76 = createSprite(1310, 680, 20, 20);
    d76.addImage(dotImg);


    //LEFT SIDE DOTS:3
    d77 = createSprite(440, 200, 20, 20);
    d77.addImage(dotImg);

    d78 = createSprite(440, 260, 20, 20);
    d78.addImage(dotImg);

    d79 = createSprite(440, 320, 20, 20);
    d79.addImage(dotImg);

    d80 = createSprite(440, 380, 20, 20);
    d80.addImage(dotImg);

    d81 = createSprite(440, 440, 20, 20);
    d81.addImage(dotImg);

    d82 = createSprite(440, 500, 20, 20);
    d82.addImage(dotImg);

    d83 = createSprite(440, 560, 20, 20);
    d83.addImage(dotImg);

    d84 = createSprite(440, 620, 20, 20);
    d84.addImage(dotImg);

    //RIGHT SIDE DOTS:3
    d85 = createSprite(1160, 200, 20, 20);
    d85.addImage(dotImg);

    d86 = createSprite(1160, 260, 20, 20);
    d86.addImage(dotImg);

    d87 = createSprite(1160, 320, 20, 20);
    d87.addImage(dotImg);

    d88 = createSprite(1160, 380, 20, 20);
    d88.addImage(dotImg);

    d89 = createSprite(1160, 440, 20, 20);
    d89.addImage(dotImg);

    d90 = createSprite(1160, 500, 20, 20);
    d90.addImage(dotImg);

    d91 = createSprite(1160, 560, 20, 20);
    d91.addImage(dotImg);

    d92 = createSprite(1160, 620, 20, 20);
    d92.addImage(dotImg);

    //TOP SIDE DOTS:2
    d93 = createSprite(520, 120, 20, 20);
    d93.addImage(dotImg);

    d94 = createSprite(580, 120, 20, 20);
    d94.addImage(dotImg);

    d95 = createSprite(640, 120, 20, 20);
    d95.addImage(dotImg);

    d96 = createSprite(720, 120, 20, 20);
    d96.addImage(dotImg);

    d97 = createSprite(780, 120, 20, 20);
    d97.addImage(dotImg);

    d98 = createSprite(840, 120, 20, 20);
    d98.addImage(dotImg);

    d99 = createSprite(900, 120, 20, 20);
    d99.addImage(dotImg);

    d100 = createSprite(960, 120, 20, 20);
    d100.addImage(dotImg);

    d101 = createSprite(1020, 120, 20, 20);
    d101.addImage(dotImg);


    //BOTTOM DOTS :3
    d102 = createSprite(520, 680, 20, 20);
    d102.addImage(dotImg);

    d103 = createSprite(580, 680, 20, 20);
    d103.addImage(dotImg);

    d104 = createSprite(640, 680, 20, 20);
    d104.addImage(dotImg);

    d105 = createSprite(720, 680, 20, 20);
    d105.addImage(dotImg);

    d106 = createSprite(780, 680, 20, 20);
    d106.addImage(dotImg);

    d107 = createSprite(840, 680, 20, 20);
    d107.addImage(dotImg);

    d108 = createSprite(900, 680, 20, 20);
    d108.addImage(dotImg);

    d109 = createSprite(960, 680, 20, 20);
    d109.addImage(dotImg);

    d110 = createSprite(1020, 680, 20, 20);
    d110.addImage(dotImg);


    //SPECIAL DOTS

    s1 = createSprite(130, 40, 30, 30);
    s1.addAnimation("SpDot", SpDot)
    s1.scale = 0.6;

    s2 = createSprite(1470, 40, 30, 30);
    s2.addAnimation("SpDot", SpDot)
    s2.scale = 0.6;

    s3 = createSprite(1460, 760, 30, 30);
    s3.addAnimation("SpDot", SpDot)
    s3.scale = 0.6;

    //extra dots
    d111 = createSprite(220, 140, 20, 20);
    d111.addImage(dotImg);

    d112 = createSprite(220, 200, 20, 20);
    d112.addImage(dotImg);

    d113 = createSprite(220, 260, 20, 20);
    d113.addImage(dotImg);

    d114 = createSprite(220, 320, 20, 20);
    d114.addImage(dotImg);

    d115 = createSprite(220, 380, 20, 20);
    d115.addImage(dotImg);

    d116 = createSprite(220, 440, 20, 20);
    d116.addImage(dotImg);

    d117 = createSprite(220, 500, 20, 20);
    d117.addImage(dotImg);

    d118 = createSprite(220, 560, 20, 20);
    d118.addImage(dotImg);

    d119 = createSprite(220, 620, 20, 20);
    d119.addImage(dotImg);

    d120 = createSprite(220, 680, 20, 20);
    d120.addImage(dotImg);

    d121 = createSprite(360, 140, 20, 20);
    d121.addImage(dotImg);

    d122 = createSprite(360, 200, 20, 20);
    d122.addImage(dotImg);

    d123 = createSprite(360, 260, 20, 20);
    d123.addImage(dotImg);

    d124 = createSprite(360, 320, 20, 20);
    d124.addImage(dotImg);

    d125 = createSprite(360, 380, 20, 20);
    d125.addImage(dotImg);

    d126 = createSprite(360, 440, 20, 20);
    d126.addImage(dotImg);

    d127 = createSprite(360, 500, 20, 20);
    d127.addImage(dotImg);

    d128 = createSprite(360, 560, 20, 20);
    d128.addImage(dotImg);

    d129 = createSprite(360, 620, 20, 20);
    d129.addImage(dotImg);

    d130 = createSprite(360, 680, 20, 20);
    d130.addImage(dotImg);



    d131 = createSprite(1380, 140, 20, 20);
    d131.addImage(dotImg);

    d132 = createSprite(1380, 200, 20, 20);
    d132.addImage(dotImg);

    d133 = createSprite(1380, 260, 20, 20);
    d133.addImage(dotImg);

    d134 = createSprite(1380, 320, 20, 20);
    d134.addImage(dotImg);

    d135 = createSprite(1380, 380, 20, 20);
    d135.addImage(dotImg);

    d136 = createSprite(1380, 440, 20, 20);
    d136.addImage(dotImg);

    d137 = createSprite(1380, 500, 20, 20);
    d137.addImage(dotImg);

    d138 = createSprite(1380, 560, 20, 20);
    d138.addImage(dotImg);

    d139 = createSprite(1380, 620, 20, 20);
    d139.addImage(dotImg);

    d140 = createSprite(1380, 680, 20, 20);
    d140.addImage(dotImg);

    d141 = createSprite(1240, 140, 20, 20);
    d141.addImage(dotImg);

    d142 = createSprite(1240, 200, 20, 20);
    d142.addImage(dotImg);

    d143 = createSprite(1240, 260, 20, 20);
    d143.addImage(dotImg);

    d144 = createSprite(1240, 320, 20, 20);
    d144.addImage(dotImg);

    d145 = createSprite(1240, 380, 20, 20);
    d145.addImage(dotImg);

    d146 = createSprite(1240, 440, 20, 20);
    d146.addImage(dotImg);

    d147 = createSprite(1240, 500, 20, 20);
    d147.addImage(dotImg);

    d148 = createSprite(1240, 560, 20, 20);
    d148.addImage(dotImg);

    d149 = createSprite(1240, 620, 20, 20);
    d149.addImage(dotImg);

    d150 = createSprite(1240, 680, 20, 20);
    d150.addImage(dotImg);



    w1 = createSprite(100, 400, 10, 800);

    w2 = createSprite(1500, 400, 10, 800);

    w3 = createSprite(800, 795, 1400, 10);

    w4 = createSprite(800, 5, 1400, 10);

    //top second layer
    w5 = createSprite(750, 80, 700, 10);

    //bottom second layer 
    w6 = createSprite(800, 720, 800, 10);

    //left side second layer
    w7 = createSprite(400, 400, 10, 650);


    //right side second layer
    w8 = createSprite(1200, 400, 10, 650);


    //top layer third layer
    w9 = createSprite(800, 160, 630, 10);

    //left side third layer
    w10 = createSprite(480, 400, 10, 490);

    //right side third layer 
    w11 = createSprite(1120, 400, 10, 490);

    //bottom  third layer
    w12 = createSprite(760, 640, 550, 10);

    w13 = createSprite(180, 400, 10, 650);

    w14 = createSprite(1420, 400, 10, 650);

    w15 = createSprite(260, 400, 10, 650);

    w16 = createSprite(1340, 400, 10, 650);

    w17 = createSprite(330, 400, 10, 650);

    w18 = createSprite(1270, 400, 10, 650);


}

function draw() {
    background("black");
    if (gameState === start) {
        var heading = createElement("h1")
        heading.position(700, 200)
        heading.html("Welcome!")

        var startButton = createButton("PLAY")
        startButton.position(displayWidth / 2, displayHeight / 2)
        startButton.style('background-color', "yellow");


        startButton.mousePressed(() => {
            removeElements();
            frameCount = 0;
            
            gameState = restart;
        })
    }
    if (gameState === restart) {
        var heading = createElement("h1")
        heading.position(700, 200)
        heading.html("Levels")


        fill("white")

        

        L1= createButton("Level1");
        L1.position(400, 400)

      

        L2= createButton("Level2");
        L2.position(1200, 400)

     L1.mousePressed(()=>{
            levels = l1;
            removeElements();
            frameCount = 0;
            setup();
            gameState = play;
            removeElements();
        })
        L2.mousePressed(()=>{
            levels = l2;
            removeElements();
            frameCount = 0;
            setup();
            gameState = play;
            removeElements();
        })
    }
    if (gameState === play) {
        if (levels === l1) {


            
            drawSprites();
            //call the function for level 1
            coinScore();
            pacmanControl()
            GhostTimer();
           
            text(mouseX + ',' + mouseY, mouseX, mouseY)

            fill("black")
            textSize(20)
            text("SCORE :", 1580, 100)
            text(score1, 1615, 130);
            console.log(score1);

        }
        if (levels === l2) {
            L1.visible = false;
            L2.visible = false;
            background("black");
            //call the function for level 2
        }

    }









}
function pacmanControl() {
    edges = createEdgeSprites();




    g1.addSpeed(0.5, 20)
    g2.addSpeed(0.5, 30)
    g3.addSpeed(0.5, 45)
    g4.addSpeed(0.5, 50)


    g1.bounceOff(w1)
    g1.bounceOff(w2)
    g1.bounceOff(w3)
    g1.bounceOff(w4)
    g1.bounceOff(w5)
    g1.bounceOff(w6)
    g1.bounceOff(w7)
    g1.bounceOff(w8)
    g1.bounceOff(w9)
    g1.bounceOff(w10)
    g1.bounceOff(w11)
    g1.bounceOff(w12)
    g1.bounceOff(w13)
    g1.bounceOff(w14)
    g1.bounceOff(w15)
    g1.bounceOff(w16)
    g1.bounceOff(w17)
    g1.bounceOff(w18)
    g1.bounceOff(edges)

    g2.bounceOff(w1)
    g2.bounceOff(w2)
    g2.bounceOff(w3)
    g2.bounceOff(w4)
    g2.bounceOff(w5)
    g2.bounceOff(w6)
    g2.bounceOff(w7)
    g2.bounceOff(w8)
    g2.bounceOff(w9)
    g2.bounceOff(w10)
    g2.bounceOff(w11)
    g2.bounceOff(w12)
    g2.bounceOff(w13)
    g2.bounceOff(w14)
    g2.bounceOff(w15)
    g2.bounceOff(w16)
    g2.bounceOff(w17)
    g2.bounceOff(w18)
    g2.bounceOff(edges)

    g3.bounceOff(w1)
    g3.bounceOff(w2)
    g3.bounceOff(w3)
    g3.bounceOff(w4)
    g3.bounceOff(w5)
    g3.bounceOff(w6)
    g3.bounceOff(w7)
    g3.bounceOff(w8)
    g3.bounceOff(w9)
    g3.bounceOff(w10)
    g3.bounceOff(w11)
    g3.bounceOff(w12)
    g3.bounceOff(w13)
    g3.bounceOff(w14)
    g3.bounceOff(w15)
    g3.bounceOff(w16)
    g3.bounceOff(w17)
    g3.bounceOff(w18)
    g3.bounceOff(edges)

    g4.bounceOff(w1)
    g4.bounceOff(w2)
    g4.bounceOff(w3)
    g4.bounceOff(w4)
    g4.bounceOff(w5)
    g4.bounceOff(w6)
    g4.bounceOff(w7)
    g4.bounceOff(w8)
    g4.bounceOff(w9)
    g4.bounceOff(w10)
    g4.bounceOff(w11)
    g4.bounceOff(w12)
    g4.bounceOff(w13)
    g4.bounceOff(w14)
    g4.bounceOff(w15)
    g4.bounceOff(w16)
    g4.bounceOff(w17)
    g4.bounceOff(w18)
    g4.bounceOff(edges)

    pacman.bounceOff(w1)
    pacman.bounceOff(w2)
    pacman.bounceOff(w3)
    pacman.bounceOff(w4)
    pacman.bounceOff(w5)
    pacman.bounceOff(w6)
    pacman.bounceOff(w7)
    pacman.bounceOff(w8)
    pacman.bounceOff(w9)
    pacman.bounceOff(w10)
    pacman.bounceOff(w11)
    pacman.bounceOff(w12)
    pacman.bounceOff(w13)
    pacman.bounceOff(w14)
    pacman.bounceOff(w15)
    pacman.bounceOff(w16)
    pacman.bounceOff(w17)
    pacman.bounceOff(w18)
    pacman.bounceOff(edges)

    blue1.bounceOff(w1)
    blue1.bounceOff(w2)
    blue1.bounceOff(w3)
    blue1.bounceOff(w4)
    blue1.bounceOff(w5)
    blue1.bounceOff(w6)
    blue1.bounceOff(w7)
    blue1.bounceOff(w8)
    blue1.bounceOff(w9)
    blue1.bounceOff(w10)
    blue1.bounceOff(w11)
    blue1.bounceOff(w12)
    blue1.bounceOff(w13)
    blue1.bounceOff(w14)
    blue1.bounceOff(edges)

    blue2.bounceOff(w1)
    blue2.bounceOff(w2)
    blue2.bounceOff(w3)
    blue2.bounceOff(w4)
    blue2.bounceOff(w5)
    blue2.bounceOff(w6)
    blue2.bounceOff(w7)
    blue2.bounceOff(w8)
    blue2.bounceOff(w9)
    blue2.bounceOff(w10)
    blue2.bounceOff(w11)
    blue2.bounceOff(w12)
    blue2.bounceOff(w13)
    blue2.bounceOff(w14)
    blue2.bounceOff(edges)

    blue3.bounceOff(w1)
    blue3.bounceOff(w2)
    blue3.bounceOff(w3)
    blue3.bounceOff(w4)
    blue3.bounceOff(w5)
    blue3.bounceOff(w6)
    blue3.bounceOff(w7)
    blue3.bounceOff(w8)
    blue3.bounceOff(w9)
    blue3.bounceOff(w10)
    blue3.bounceOff(w11)
    blue3.bounceOff(w12)
    blue3.bounceOff(w13)
    blue3.bounceOff(w14)
    blue3.bounceOff(edges)

    blue4.bounceOff(w1)
    blue4.bounceOff(w2)
    blue4.bounceOff(w3)
    blue4.bounceOff(w4)
    blue4.bounceOff(w5)
    blue4.bounceOff(w6)
    blue4.bounceOff(w7)
    blue4.bounceOff(w8)
    blue4.bounceOff(w9)
    blue4.bounceOff(w10)
    blue4.bounceOff(w11)
    blue4.bounceOff(w12)
    blue4.bounceOff(w13)
    blue4.bounceOff(w14)
    blue4.bounceOff(edges)



    if (keyDown(RIGHT_ARROW)) {
        pacman.x = pacman.x + 6;
        pacman.changeAnimation("pacman", pacmanImg);
    }
    if (keyDown(LEFT_ARROW)) {
        pacman.x = pacman.x - 6;
        pacman.changeAnimation("pacmanL", pacmanL);
    }
    if (keyDown(UP_ARROW)) {
        pacman.y = pacman.y - 6;
        pacman.changeAnimation("pacmanU", pacmanU);
    }
    if (keyDown(DOWN_ARROW)) {
        pacman.y = pacman.y + 6;
        pacman.changeAnimation("pacmanD", pacmanD);
    }

}



function coinScore() {
    if (pacman.isTouching(d1)) {
        d1.visible = false;
        score1 = score1 + 10
        d1.x = -400
        d1.y = -400

    }
    if (pacman.isTouching(d2)) {
        d2.visible = false;
        score1 = score1 + 10
        d2.x = -400
        d2.y = -400

    }
    if (pacman.isTouching(d3)) {
        d3.visible = false;
        score1 = score1 + 10
        d3.x = -400
        d3.y = -400

    }
    if (pacman.isTouching(d4)) {
        d4.visible = false;
        score1 = score1 + 10
        d4.x = -400
        d4.y = -400

    }
    if (pacman.isTouching(d5)) {
        d5.visible = false;
        score1 = score1 + 10
        d5.x = -400
        d5.y = -400

    }
    if (pacman.isTouching(d6)) {
        d6.visible = false;
        score1 = score1 + 10
        d6.x = -400
        d6.y = -400

    }
    if (pacman.isTouching(d7)) {
        d7.visible = false;
        score1 = score1 + 10
        d7.x = -400
        d7.y = -400

    }
    if (pacman.isTouching(d8)) {
        d8.visible = false;
        score1 = score1 + 10
        d8.x = -400
        d8.y = -400
    }

    if (pacman.isTouching(d9)) {
        d9.visible = false;
        score1 = score1 + 10
        d9.x = -400
        d9.y = -400
    }
    if (pacman.isTouching(d10)) {
        d10.visible = false;
        score1 = score1 + 10
        d10.x = -400
        d10.y = -400
    }
    if (pacman.isTouching(d11)) {
        d11.visible = false;
        score1 = score1 + 10
        d11.x = -400
        d11.y = -400
    }
    if (pacman.isTouching(d12)) {
        d12.visible = false;
        score1 = score1 + 10
        d12.x = -400
        d12.y = -400

    }
    if (pacman.isTouching(d13)) {
        d13.visible = false;
        score1 = score1 + 10
        d1.x = -400
        d1.y = -400
    }
    if (pacman.isTouching(d14)) {
        d14.visible = false;
        score1 = score1 + 10
        d14.x = -400
        d14.y = -400
    }

    if (pacman.isTouching(d15)) {
        d15.visible = false;
        score1 = score1 + 10
        d15.x = -400
        d15.y = -400
    }
    if (pacman.isTouching(d16)) {
        d16.visible = false;
        score1 = score1 + 10
        d16.x = -400
        d16.y = -400
    }
    if (pacman.isTouching(d17)) {
        d17.visible = false;
        score1 = score1 + 10
        d17.x = -400
        d17.y = -400
    }
    if (pacman.isTouching(d18)) {
        d18.visible = false;
        score1 = score1 + 10
        d18.x = -400
        d18.y = -400
    }

    if (pacman.isTouching(d19)) {
        d19.visible = false;
        score1 = score1 + 10
        d19.x = -400
        d19.y = -400
    }
    if (pacman.isTouching(d20)) {
        d20.visible = false;
        score1 = score1 + 10
        d20.x = -400
        d20.y = -400
    }
    if (pacman.isTouching(d21)) {
        d21.visible = false;
        score1 = score1 + 10
        d21.x = -400
        d21.y = -400
    }
    if (pacman.isTouching(d22)) {
        d22.visible = false;
        score1 = score1 + 10
        d22.x = -400
        d22.y = -400
    }
    if (pacman.isTouching(d23)) {
        d23.visible = false;
        score1 = score1 + 10
        d23.x = -400
        d23.y = -400
    }
    if (pacman.isTouching(d24)) {
        d24.visible = false;
        score1 = score1 + 10
        d24.x = -400
        d24.y = -400
    }
    if (pacman.isTouching(d25)) {
        d25.visible = false;
        score1 = score1 + 10
        d25.x = -400
        d25.y = -400
    }
    if (pacman.isTouching(d26)) {
        d26.visible = false;
        score1 = score1 + 10
        d26.x = -400
        d26.y = -400
    } if (pacman.isTouching(d27)) {
        d27.visible = false;
        score1 = score1 + 10
        d27.x = -400
        d27.y = -400
    } if (pacman.isTouching(d28)) {
        d28.visible = false;
        score1 = score1 + 10
        d28.x = -400
        d28.y = -400
    } if (pacman.isTouching(d29)) {
        d29.visible = false;
        score1 = score1 + 10
        d29.x = -400
        d29.y = -400
    } if (pacman.isTouching(d30)) {
        d30.visible = false;
        score1 = score1 + 10
        d30.x = -400
        d30.y = -400
    } if (pacman.isTouching(d31)) {
        d31.visible = false;
        score1 = score1 + 10
        d31.x = -400
        d31.y = -400
    } if (pacman.isTouching(d32)) {
        d32.visible = false;
        score1 = score1 + 10
        d32.x = -400
        d32.y = -400
    } if (pacman.isTouching(d33)) {
        d33.visible = false;
        score1 = score1 + 10
        d33.x = -400
        d33.y = -400
    } if (pacman.isTouching(d34)) {
        d34.visible = false;
        score1 = score1 + 10
        d34.x = -400
        d34.y = -400
    }
    if (pacman.isTouching(d35)) {
        d35.visible = false;
        score1 = score1 + 10
        d35.x = -400
        d35.y = -400
    }
    if (pacman.isTouching(d36)) {
        d36.visible = false;
        score1 = score1 + 10
        d36.x = -400
        d36.y = -400
    }
    if (pacman.isTouching(d37)) {
        d37.visible = false;
        score1 = score1 + 10
        d37.x = -400
        d37.y = -400
    }
    if (pacman.isTouching(d38)) {
        d38.visible = false;
        score1 = score1 + 10
        d38.x = -400
        d38.y = -400
    }
    if (pacman.isTouching(d39)) {
        d39.visible = false;
        score1 = score1 + 10
        d39.x = -400
        d39.y = -400
    }
    if (pacman.isTouching(d40)) {
        d40.visible = false;
        score1 = score1 + 10
        d40.x = -400
        d40.y = -400
    }
    if (pacman.isTouching(d41)) {
        d41.visible = false;
        score1 = score1 + 10
        d41.x = -400
        d41.y = -400
    }
    if (pacman.isTouching(d42)) {
        d42.visible = false;
        score1 = score1 + 10
        d42.x = -400
        d42.y = -400
    }
    if (pacman.isTouching(d43)) {
        d43.visible = false;
        score1 = score1 + 10
        d43.x = -400
        d43.y = -400
    }
    if (pacman.isTouching(d44)) {
        d44.visible = false;
        score1 = score1 + 10
        d44.x = -400
        d44.y = -400
    }
    if (pacman.isTouching(d45)) {
        d45.visible = false;
        score1 = score1 + 10
        d45.x = -400
        d45.y = -400
    }
    if (pacman.isTouching(d46)) {
        d46.visible = false;
        score1 = score1 + 10
        d46.x = -400
        d46.y = -400
    }
    if (pacman.isTouching(d47)) {
        d47.visible = false;
        score1 = score1 + 10
        d47.x = -400
        d47.y = -400
    }
    if (pacman.isTouching(d48)) {
        d48.visible = false;
        score1 = score1 + 10
        d48.x = -400
        d48.y = -400
    }
    if (pacman.isTouching(d49)) {
        d49.visible = false;
        score1 = score1 + 10
        d49.x = -400
        d49.y = -400
    }
    if (pacman.isTouching(d50)) {
        d50.visible = false;
        score1 = score1 + 10
        d50.x = -400
        d50.y = -400
    }
    if (pacman.isTouching(d51)) {
        d51.visible = false;
        score1 = score1 + 10
        d51.x = -400
        d51.y = -400
    }
    if (pacman.isTouching(d52)) {
        d52.visible = false;
        score1 = score1 + 10
        d52.x = -400
        d52.y = -400
    }
    if (pacman.isTouching(d53)) {
        d53.visible = false;
        score1 = score1 + 10
        d53.x = -400
        d53.y = -400
    }
    if (pacman.isTouching(d54)) {
        d54.visible = false;
        score1 = score1 + 10
        d54.x = -400
        d54.y = -400
    }
    if (pacman.isTouching(d55)) {
        d55.visible = false;
        score1 = score1 + 10
        d55.x = -400
        d55.y = -400
    }
    if (pacman.isTouching(d56)) {
        d56.visible = false;
        score1 = score1 + 10
        d56.x = -400
        d56.y = -400
    }
    if (pacman.isTouching(d57)) {
        d57.visible = false;
        score1 = score1 + 10
        d57.x = -400
        d57.y = -400
    }

    if (pacman.isTouching(d58)) {
        d58.visible = false;
        score1 = score1 + 10
        d58.x = -400
        d58.y = -400
    }
    if (pacman.isTouching(d59)) {
        d59.visible = false;
        score1 = score1 + 10
        d59.x = -400
        d59.y = -400
    }
    if (pacman.isTouching(d60)) {
        d60.visible = false;
        score1 = score1 + 10
        d60.x = -400
        d60.y = -400
    }
    if (pacman.isTouching(d61)) {
        d61.visible = false;
        score1 = score1 + 10
        d61.x = -400
        d61.y = -400
    }
    if (pacman.isTouching(d62)) {
        d62.visible = false;
        score1 = score1 + 10
        d62.x = -400
        d62.y = -400
    }
    if (pacman.isTouching(d63)) {
        d63.visible = false;
        score1 = score1 + 10
        d63.x = -400
        d63.y = -400
    }
    if (pacman.isTouching(d64)) {
        d64.visible = false;
        score1 = score1 + 10
        d64.x = -400
        d64.y = -400

    } if (pacman.isTouching(d65)) {
        d65.visible = false;
        score1 = score1 + 10
        d65.x = -400
        d65.y = -400
    }
    if (pacman.isTouching(d66)) {
        d66.visible = false;
        score1 = score1 + 10
        d66.x = -400
        d66.y = -400
    }
    if (pacman.isTouching(d67)) {
        d67.visible = false;
        score1 = score1 + 10
        d67.x = -400
        d67.y = -400

    } if (pacman.isTouching(d68)) {
        d68.visible = false;
        score1 = score1 + 10
        d68.x = -400
        d86.y = -400
    }
    if (pacman.isTouching(d69)) {
        d69.visible = false;
        score1 = score1 + 10
        d69.x = -400
        d69.y = -400
    }
    if (pacman.isTouching(d70)) {
        d70.visible = false;
        score1 = score1 + 10
        d70.x = -400
        d70.y = -400
    }
    if (pacman.isTouching(d71)) {
        d71.visible = false;
        score1 = score1 + 10
        d71.x = -400
        d71.y = -400
    }
    if (pacman.isTouching(d72)) {
        d72.visible = false;
        score1 = score1 + 10
        d72.x = -400
        d72.y = -400
    }
    if (pacman.isTouching(d73)) {
        d73.visible = false;
        score1 = score1 + 10
        d73.x = -400
        d73.y = -400
    }
    if (pacman.isTouching(d74)) {
        d74.visible = false;
        score1 = score1 + 10
        d74.x = -400
        d74.y = -400
    }
    if (pacman.isTouching(d75)) {
        d75.visible = false;
        score1 = score1 + 10
        d75.x = -400
        d75.y = -400
    }
    if (pacman.isTouching(d76)) {
        d76.visible = false;
        score1 = score1 + 10
        d76.x = -400
        d76.y = -400
    }
    if (pacman.isTouching(d77)) {
        d77.visible = false;
        score1 = score1 + 10
        d77.x = -400
        d77.y = -400
    }
    if (pacman.isTouching(d78)) {
        d78.visible = false;
        score1 = score1 + 10
        d78.x = -400
        d78.y = -400
    }
    if (pacman.isTouching(d79)) {
        d79.visible = false;
        score1 = score1 + 10
        d79.x = -400
        d79.y = -400
    }
    if (pacman.isTouching(d80)) {
        d80.visible = false;
        score1 = score1 + 10
        d80.x = -400
        d80.y = -400
    }
    if (pacman.isTouching(d81)) {
        d81.visible = false;
        score1 = score1 + 10
        d81.x = -400
        d81.y = -400
    }
    if (pacman.isTouching(d82)) {
        d82.visible = false;
        score1 = score1 + 10
        d82.x = -400
        d82.y = -400
    }
    if (pacman.isTouching(d83)) {
        d83.visible = false;
        score1 = score1 + 10
        d83.x = -400
        d83.y = -400
    }
    if (pacman.isTouching(d84)) {
        d84.visible = false;
        score1 = score1 + 10
        d84.x = -400
        d84.y = -400
    }
    if (pacman.isTouching(d85)) {
        d85.visible = false;
        score1 = score1 + 10
        d85.x = -400
        d85.y = -400
    }
    if (pacman.isTouching(d86)) {
        d86.visible = false;
        score1 = score1 + 10
        d86.x = -400
        d86.y = -400
    }
    if (pacman.isTouching(d87)) {
        d87.visible = false;
        score1 = score1 + 10
        d87.x = -400
        d87.y = -400
    }
    if (pacman.isTouching(d88)) {
        d88.visible = false;
        score1 = score1 + 10
        d88.x = -400
        d88.y = -400
    }
    if (pacman.isTouching(d89)) {
        d89.visible = false;
        score1 = score1 + 10
        d89.x = -400
        d89.y = -400
    }
    if (pacman.isTouching(d90)) {
        d90.visible = false;
        score1 = score1 + 10
        d90.x = -400
        d90.y = -400
    }
    if (pacman.isTouching(d91)) {
        d91.visible = false;
        score1 = score1 + 10
        d91.x = -400
        d91.y = -400
    }
    if (pacman.isTouching(d92)) {
        d92.visible = false;
        score1 = score1 + 10
        d92.x = -400
        d92.y = -400
    }
    if (pacman.isTouching(d93)) {
        d93.visible = false;
        score1 = score1 + 10
        d93.x = -400
        d93.y = -400
    }
    if (pacman.isTouching(d94)) {
        d94.visible = false;
        score1 = score1 + 10
        d94.x = -400
        d94.y = -400
    }

    if (pacman.isTouching(d95)) {
        d95.visible = false;
        score1 = score1 + 10
        d95.x = -400
        d95.y = -400
    }
    if (pacman.isTouching(d96)) {
        d96.visible = false;
        score1 = score1 + 10
        d96.x = -400
        d96.y = -400
    }
    if (pacman.isTouching(d97)) {
        d97.visible = false;
        score1 = score1 + 10
        d97.x = -400
        d97.y = -400
    }
    if (pacman.isTouching(d98)) {
        d98.visible = false;
        score1 = score1 + 10
        d98.x = -400
        d98.y = -400
    }
    if (pacman.isTouching(d99)) {
        d99.visible = false;
        score1 = score1 + 10
        d99.x = -400
        d99.y = -400
    }
    if (pacman.isTouching(d100)) {
        d100.visible = false;
        score1 = score1 + 10
        d100.x = -400
        d100.y = -400
    }
    if (pacman.isTouching(d101)) {
        d101.visible = false;
        score1 = score1 + 10
        d101.x = -400
        d101.y = -400
    }
    if (pacman.isTouching(d102)) {
        d102.visible = false;
        score1 = score1 + 10
        d102.x = -400
        d102.y = -400
    }

    if (pacman.isTouching(d103)) {
        d103.visible = false;
        score1 = score1 + 10
        d103.x = -400
        d103.y = -400
    }
    if (pacman.isTouching(d104)) {
        d104.visible = false;
        score1 = score1 + 10
        d104.x = -400
        d104.y = -400
    }
    if (pacman.isTouching(d105)) {
        d105.visible = false;
        score1 = score1 + 10
        d105.x = -400
        d105.y = -400
    }
    if (pacman.isTouching(d106)) {
        d106.visible = false;
        score1 = score1 + 10
        d106.x = -400
        d106.y = -400
    }

    if (pacman.isTouching(d107)) {
        d107.visible = false;
        score1 = score1 + 10
        d107.x = -400
        d107.y = -400
    }
    if (pacman.isTouching(d108)) {
        d108.visible = false;
        score1 = score1 + 10
        d108.x = -400
        d108.y = -400
    }
    if (pacman.isTouching(d109)) {
        d109.visible = false;
        score1 = score1 + 10
        d109.x = -400
        d109.y = -400
    }
    if (pacman.isTouching(d110)) {
        d110.visible = false;
        score1 = score1 + 10
        d110.x = -400
        d110.y = -400
    }
    if (pacman.isTouching(d111)) {
        d111.visible = false;
        score1 = score1 + 10
        d111.x = -400
        d111.y = -400
    }
    if (pacman.isTouching(d112)) {
        d112.visible = false;
        score1 = score1 + 10
        d112.x = -400
        d112.y = -400
    }
    if (pacman.isTouching(d113)) {
        d113.visible = false;
        score1 = score1 + 10
        d113.x = -400
        d113.y = -400
    }
    if (pacman.isTouching(d114)) {
        d114.visible = false;
        score1 = score1 + 10
        d114.x = -400
        d114.y = -400
    }
    if (pacman.isTouching(d115)) {
        d115.visible = false;
        score1 = score1 + 10
        d115.x = -400
        d115.y = -400
    }
    if (pacman.isTouching(d116)) {
        d116.visible = false;
        score1 = score1 + 10
        d116.x = -400
        d116.y = -400
    }
    if (pacman.isTouching(d117)) {
        d117.visible = false;
        score1 = score1 + 10
        d117.x = -400
        d117.y = -400
    }
    if (pacman.isTouching(d118)) {
        d118.visible = false;
        score1 = score1 + 10
        d118.x = -400
        d118.y = -400
    }
    if (pacman.isTouching(d119)) {
        d119.visible = false;
        score1 = score1 + 10
        d119.x = -400
        d119.y = -400
    }
    if (pacman.isTouching(d120)) {
        d120.visible = false;
        score1 = score1 + 10
        d120.x = -400
        d120.y = -400
    }
    if (pacman.isTouching(d121)) {
        d121.visible = false;
        score1 = score1 + 10
        d121.x = -400
        d122.y = -400
    }
    if (pacman.isTouching(d122)) {
        d122.visible = false;
        score1 = score1 + 10
        d122.x = -400
        d122.y = -400
    }
    if (pacman.isTouching(d123)) {
        d123.visible = false;
        score1 = score1 + 10
        d123.x = -400
        d123.y = -400
    }
    if (pacman.isTouching(d124)) {
        d124.visible = false;
        score1 = score1 + 10
        d124.x = -400
        d124.y = -400
    }
    if (pacman.isTouching(d125)) {
        d125.visible = false;
        score1 = score1 + 10
        d125.x = -400
        d125.y = -400
    }
    if (pacman.isTouching(d126)) {
        d126.visible = false;
        score1 = score1 + 10
        d126.x = -400
        d126.y = -400
    }
    if (pacman.isTouching(d127)) {
        d127.visible = false;
        score1 = score1 + 10
        d127.x = -400
        d127.y = -400
    }
    if (pacman.isTouching(d128)) {
        d128.visible = false;
        score1 = score1 + 10
        d128.x = -400
        d128.y = -400
    }
    if (pacman.isTouching(d129)) {
        d129.visible = false;
        score1 = score1 + 10
        d129.x = -400
        d129.y = -400
    }
    if (pacman.isTouching(d130)) {
        d130.visible = false;
        score1 = score1 + 10
        d130.x = -400
        d130.y = -400
    }
    if (pacman.isTouching(d131)) {
        d131.visible = false;
        score1 = score1 + 10
        d131.x = -400
        d131.y = -400
    }
    if (pacman.isTouching(d132)) {
        d132.visible = false;
        score1 = score1 + 10
        d132.x = -400
        d132.y = -400
    }
    if (pacman.isTouching(d133)) {
        d133.visible = false;
        score1 = score1 + 10
        d133.x = -400
        d133.y = -400
    }
    if (pacman.isTouching(d134)) {
        d134.visible = false;
        score1 = score1 + 10
        d134.x = -400
        d134.y = -400
    }
    if (pacman.isTouching(d135)) {
        d135.visible = false;
        score1 = score1 + 10
        d135.x = -400
        d135.y = -400
    }
    if (pacman.isTouching(d136)) {
        d136.visible = false;
        score1 = score1 + 10
        d136.x = -400
        d136.y = -400
    }
    if (pacman.isTouching(d137)) {
        d137.visible = false;
        score1 = score1 + 10
        d137.x = -400
        d137.y = -400
    }
    if (pacman.isTouching(d138)) {
        d138.visible = false;
        score1 = score1 + 10
        d138.x = -400
        d138.y = -400
    }
    if (pacman.isTouching(d139)) {
        d139.visible = false;
        score1 = score1 + 10
        d139.x = -400
        d139.y = -400
    }
    if (pacman.isTouching(d140)) {
        d140.visible = false;
        score1 = score1 + 10
        d140.x = -400
        d140.y = -400
    }
    if (pacman.isTouching(d141)) {
        d141.visible = false;
        score1 = score1 + 10
        d141.x = -400
        d141.y = -400
    }
    if (pacman.isTouching(d142)) {
        d142.visible = false;
        score1 = score1 + 10
        d142.x = -400
        d142.y = -400
    }
    if (pacman.isTouching(d143)) {
        d143.visible = false;
        score1 = score1 + 10
        d143.x = -400
        d143.y = -400
    }
    if (pacman.isTouching(d144)) {
        d144.visible = false;
        score1 = score1 + 10
        d144.x = -400
        d144.y = -400
    }
    if (pacman.isTouching(d145)) {
        d145.visible = false;
        score1 = score1 + 10
        d145.x = -400
        d145.y = -400
    }
    if (pacman.isTouching(d146)) {
        d146.visible = false;
        score1 = score1 + 10
        d146.x = -400
        d146.y = -400
    }
    if (pacman.isTouching(d147)) {
        d147.visible = false;
        score1 = score1 + 10
        d147.x = -400
        d147.y = -400
    }
    if (pacman.isTouching(d148)) {
        d148.visible = false;
        score1 = score1 + 10
        d148.x = -400
        d148.y = -400
    }
    if (pacman.isTouching(d149)) {
        d149.visible = false;
        score1 = score1 + 10
        d149.x = -400
        d149.y = -400
    }
    if (pacman.isTouching(d150)) {
        d150.visible = false;
        score1 = score1 + 10
        d150.x = -400
        d150.y = -400
    }

}







function GhostTimer() {
    if (pacman.isTouching(s1)) {
        timer = 5;
        blue1.addAnimation("g1", blueG);
        blue2.addAnimation("g2", blueG);
        blue3.addAnimation("g3", blueG);
        blue4.addAnimation("g4", blueG);

        blue1.scale = 0.12;
        blue2.scale = 0.12;
        blue3.scale = 0.12;
        blue4.scale = 0.12;



        /*blue2.velocityY = 5;
        blue3.velocityY = 5;
         blue4.velocityY = 5;*/


        g1.x = -200
        g1.y = -200
        g2.x = -200
        g2.y = -200
        g3.x = -200
        g3.y = -200
        g4.x = -200
        g4.y = -200

        g1.setVelocity(0, 0);
        g2.setVelocity(0, 0);
        g4.setVelocity(0, 0);
        g1.setVelocity(0, 0);

        blue1.visible = true;
        blue2.visible = true;
        blue3.visible = true;
        blue4.visible = true;

        blue1.x = 438;
        blue1.y = 121;
        blue2.x = 357,
            blue2.y = 741;
        blue3.x = 1370,
            blue3.y = 533;
        blue4.x = 1268,
            blue4.y = 86;

        s1.visible = false;
        score1 = score1 + 100;
        s1.x = -500;
        s1.y = -500;

        if (blue1.y > displayWidth / 2) {
            timer = timer - 1
        }
        if (timer === 0) {
            g1.x = 820;
            g1.y = 400;
            g2.x = 740;
            g2.y = 400;
            g3.x = 650;
            g3.y = 400;
            g4.x = 890;
            g4.y = 400;

            blue1.x = -200;
            blue1.y = -200;

            //fix ghost positions
            blue2.x = -200;
            blue2.y = -200;

            blue3.x = -200;
            blue3.y = -200;

            blue4.x = -200;
            blue4.y = -200;




            //make them invisible
            blue1.visible = false;
            blue2.visible = false;
            blue3.visible = false;
            blue4.visible = false;

        }
        //give a path for each ghost

        blue1.velocityX = 5;

        if (blue1.x > 1144) {
            blue1.velocityX = 0;
            blue1.velocityY = -5
        }




    }
}
