let cx,
    cy,
    cvx,
    cvy,
    cw,
    ch,
    rx,
    ry,
    rw,
    rg;

function setup() {
    createCanvas(800,600);

    cx=0;
    cy=random(0,height);
    cvx=3;
    cvy=3;
    cw=50;
    ch=50;
    rx=width-20;
    rw=15;
    rh=70;

};

function draw() {
    background(60);

    ellipse(cx,cy,cw,ch);
    cx+=cvx;
    cy+=cvy;
  
    if (cy>height || cy<0) {
        cvy*=-1;
    };
    if (cx<0) {
        cvx*=-1;
    };
    if (cx>width) {
        cx=0;
        cy=random(0,height);
    };
    if (cx>rx-35 && cy<=mouseY+35 && cy>=mouseY-35) {
        cvx*=-1;
    };
   
   
   
   rectMode(CENTER);
   ry=mouseY;
   rect(rx,ry,rw,rh);
    
};

