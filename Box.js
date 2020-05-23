class Box {
    constructor(x, y, width, height, colour1, colour2, colour3) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.colour1 = colour1;
      this.colour2 = colour2;
      this.colour3 = colour3;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.colour1, this.colour2, this.colour3);
      strokeWeight(4);
      stroke("black");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };