let cx,
    cy,
    cvx,
    cvy,
    cw,
    ch,
    rw,
    rg;

function setup() {
    createCanvas(800,600);

    cx=random(0,width);
    cy=0;
    cvx=-3;
    cvy=3;
    cw=50;
    ch=50;
    rw=70;
    rh=25;

};

function draw() {
    background(60);

    ellipse(cx,cy,cw,ch);
   cx+=cvx;
   cy+=cvy;

   if(cx>width || cx<0){
       cvx*=-1;
   };
   if(cy<0){
       cvy*=-1;
   };
   if (cy>height) {
       cy=0;
       cx=random(0,width);
   };
   if (cy>=height-45 && cx>=mouseX-rw/2 && cx<=mouseX+rw/2) {
       cvy*=-1;
   };
   
   
   rectMode(CENTER);
   rect(mouseX,height-20,rw,rh);
    
};

