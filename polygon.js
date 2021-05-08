class Polygon{
  constructor(x,y,r){      
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x,this.y,this.r);
      World.add(world,this.body);
  }
   
  display(){
      var pos = this.body.position;
     
      fill("blue");
      ellipseMode(RADIUS);
      ellipse(pos.x , pos.y, this.r,this.r);
  }
}
  