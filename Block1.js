class Block1  {
  constructor(x, y, w, h) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    this.width = w;
    this.height = h;
    
    World.add(world, this.body);
  }
  display(){
    const pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(0,191,255);
    rect(0, 0, this.width, this.height);
    pop();
  }
};