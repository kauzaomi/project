let n=1;
let nn=1;
var nft=[];
function setup() {
  bird = new Bird();
  for(let n=1; n<10; n++){
    nft[n] = loadImage('nft/'+n+'.png');
  }
  discord = loadImage('nft/discord.png');
  twitter = loadImage('nft/twitter.png');


}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  if(windowWidth<windowHeight){
    w=windowWidth;
    h=windowHeight-windowHeight/2;
    w2=windowWidth;
    h2=windowHeight/2;
    y=h;
    x=0;
    tx=10;
    ty=h+60;

  }else{
    w=windowWidth - windowWidth/4;
    h=windowHeight;
    w2=windowWidth/4
    h2 =windowHeight;
    x=w;
    y=0;
    tx=w+10;
    ty=200;
  }
  //bigger segment
  fill(150,100,250);
  rect(0,0,w,h);

  fill(250,250,250,150);
  textSize(60);
  textStyle(BOLDITALIC)
  text('Kauzaomi',40,100);
 //smaller segment
 fill(40,40,40);
 rect(x,y,w2,h2);
 
bird.show();

}

//click events
function mousePressed() {
  bird.clicked();
}