class box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    
    World.add(world, this.body);
  }
  display(r,g,b)
  {
    if(this.body.speed<3)
    {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(r,g,b);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else
    {
      World.remove(world,this.body);
    }
  }
};