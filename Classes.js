class BaseClass {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/base.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };

class Log extends BaseClass{
    constructor(x, y, height, angle) {
      super(x,y,20,height, angle);
      Matter.Body.setAngle(this.body, angle);
      this.image=loadImage("sprites/wood2.png");
    }
};
class Pig extends BaseClass{
    constructor(x, y) {
      super(x, y,50,50);
      this.image = loadImage("sprites/enemy.png");
    }
  };

  class Box extends BaseClass{
    constructor(x, y, width, height) {
      super(x, y, width, height);
      this.image = loadImage("sprites/wood1.png");
    }
  };


  class Bird extends BaseClass {
    constructor(x, y){
     super(x, y, 50, 50);
     this.image = loadImage("sprites/bird.png");
   }
 
   display(){
     var pos = this.body.position;
       pos.x = mouseX;
       pos.y = mouseY;
       super.display();
   }
 };
 class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };  
  
