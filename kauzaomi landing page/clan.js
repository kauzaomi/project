function Bird() {
  
    this.show = function() {

      if(windowWidth<windowHeight){
        cx=windowWidth/2;
        cy=windowHeight-150;
      }else{
        cx=windowWidth - windowWidth/4/2;
        cy=windowHeight-150;
      }

          fill(250,250,250,150);
          textSize(20);
          text('WELCOME TO KAUZAOMI CLAN\n kauzaomi is an eth 8888 pfp\nNFT project\njoin our Discord\nand\nturn on our twitter notificatio.',cx-165,50+height/2);
          

          
        fill(250,250,250);
       rect(cx-155,cy-85,320,70,50);
  fill(0);
  textSize(22);
  text('Go to Opeansea',cx-78,cy-40);

//set ix and iy
if(windowWidth<windowHeight){
  ix=windowWidth/2;
  iy=40;
  px=ix/2
  py=((windowHeight/2)-ix);
}else{
  ix=windowHeight;
  iy=40;
  px= (((windowWidth - windowWidth/4)/2)-ix/2);
  py=0;
}
  // show image
  image(nft[nn],px,py);
  nft[nn].resize(ix,ix);




  //show discord 
  dx=windowWidth-135;
  dy=50;
  noStroke();
  fill(250,250,250,80);
  rect(dx-15,dy-25,80,200,30);
// discord twitter bg
  image(discord,dx,dy);
  discord.resize(50,50);

 //show twitter
 tx=windowWidth-150;
 ty=130;
   image(twitter,tx,ty);
 twitter.resize(80,80);
 


    }
    
    this.clicked =function() { 
  //buy on opensea
  opx=cx-155+160;
  opy=cy-85+35;
  var opd= dist(mouseX,mouseY,opx,opy);
if(opd<162){
  window.location='https://www.opeansea.com';
}
  //discord
  ddx=dx+25;
  ddy=dy+25;
  var ddd= dist(mouseX,mouseY,ddx,ddy);
if(ddd<25){
  window.location='https://www.discord.gg/jjwjqw7nv6';
}
  //twitter
  ttx=tx+25;
  tty=ty+25;
  var ttd= dist(mouseX,mouseY,ttx,tty);
if(ttd<40){
  window.location='https://www.twitter.com/kauzaomi'
}


    }

}