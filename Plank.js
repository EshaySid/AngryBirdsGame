class Plank{

    constructor(x,y,w,h,a){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
    
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic:false,
        }
            this.plank=Bodies.rectangle(x,y,w,h,options);
            Matter.Body.setAngle(this.plank,a);
            World.add(world,this.plank);

            this.plankImage=loadImage("assets/wood2.png");
    }
    
    display(){
      var angle=this.plank.angle;
      var pos=this.plank.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.plankImage,0,0,this.w,this.h);
      pop();
    }
    }