let ball,
    cx,
    cy,
    cvx,
    cvy,
    cw,
    ch,
    racket,
    rx,
    ry,
    rw,
    rh;

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
    rx=mouseX;
    ry=height-20;


    ball=new Ball(cx,cy,cvx,cvy,cw,ch);
    racket=new Racket(rx,ry,rw,rh);

};

function draw() {
    background(60);

    ball.bounce();
    racket.drawRect(mouseX);

/* ellipse(cx,cy,cw,ch);
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
   }; */
   
   
/*    rectMode(CENTER);
   rect(rx,ry,rw,rh); */
    
};

class Ball{
    constructor(cx,cy,cvx,cvy,cw,ch){
        this.cx=cx;
        this.cy=cy;
        this.cw=cw;
        this.ch=ch;
        this.cvx=cvx;
        this.cvy=cvy;
    };
    
    bounce(){
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
        /* if (cy>=height-45 && cx>=mouseX-rw/2 && cx<=mouseX+rw/2) {
        cvy*=-1;
        }; */

        /* if (cy>=height-20 && cy<=height-45) {
            cvy*=-1;
        } */
    }

};

class Racket{
    constructor(rx,ry,rw,rh){
        this.rx=rx;
        this.ry=ry;
        this.rw=rw;
        this.rh=rh;
    };

    drawRect(rx){
        rectMode(CENTER);
        rect(rx,this.ry,this.rw,this.rh);
    }


};

