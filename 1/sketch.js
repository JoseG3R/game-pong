let ball,
    cx,
    cy,
    cvx,
    cvy,
    cw,
    ch,
    recta,
    rw,
    rg;

function setup() {
    createCanvas(800,600);

    cx=random(0,width);
    cy=random(0,height);
    cvx=3;
    cvy=3;
    cw=50;
    ch=50;
    rw=70;
    rh=25;

    ball=new Circle(cx,cy,cvx,cvy,cw,ch);

};

function draw() {
    background(60);

    // ball.bounce();
    ellipse(cx,cy,cw,ch);
    
            cx =cx+cvx;
            cy =cy+cvy;
        
            if(cx>=width || cx<=0){
                cvx*=-1;
            };
            if (cy<=0+25) {
                cy*=-1;
            };
            if(cy>height){
                cx=random(25,width);
            };
            if (cy>=height-45 && cx < mouseX+rw/2 && cx>mouseX-rw/2) {
                cvy*=-1;   
        }
    

    rectMode(CENTER);
    rect(mouseX,height-20,rw,rh);
    
};

