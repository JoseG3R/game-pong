class Circle{
    constructor(cx,cy,cvx,cvy,cw,ch){
        this.x=cx;
        this.y=cy;
        this.w=cw;
        this.h=ch;
        this.vx=cvx;
        this.vy=cvy;
    };
    
    bounce(){
        /* ellipse(this.x,this.y,this.w,this.h);
    
            this.x =this.x+this.cvx;
            this.y =this.y+this.cvy;
        
            if(this.x>=width || this.x<=0){
                this.cvx*=-1;
            };
            if (this.y<0) {
                this.y*=-1;
            };
            if(this.y>width){
                this.x=random(25,width);this.y=25;
            };
            if (this.y>=height-45 && this.x < mouseX+rw/2 && this.x>mouseX-rw/2) {
                this.vy*=-1;   
        } */
    }

// console.log(dist(cx-cw/2,cy-ch/2,cx+cw/2,cy+ch/2));

}