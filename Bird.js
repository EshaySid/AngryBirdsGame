class Bird{

    constructor(x,y,w,h){
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
            this.bird=Bodies.rectangle(x,y,w,h,options);
            World.add(world,this.bird);
            this.birdImage=loadImage("assets/bird.png");
    }
    
    display(){
      var angle=this.bird.angle;
      var pos=this.bird.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.birdImage,0,0,this.w,this.h);
      pop();
    }
    }