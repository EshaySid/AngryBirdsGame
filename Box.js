class Box{

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
        this.box=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.box);

        this.boxImage=loadImage("assets/wood1.png");
}

display(){
  var angle=this.box.angle;
  var pos=this.box.position;
  push();
  translate(pos.x,pos.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.boxImage,0,0,this.w,this.h);
  pop();
}
}