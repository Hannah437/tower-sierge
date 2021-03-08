class polygon{
    constructor(x, y) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.body = Bodies.rectangle(x, y,30,40, options);
      this.image = loadImage("polygon.png")
      //this.width = width;
      //this.height = height;
      World.add(world, this.body);
    }
  
    display(){
      //var angle = this.body.angle;
      //translate(this.body.position.x, this.body.position.y);
     // rotate(angle);
      var pos =this.body.position;
       imageMode(CENTER);
      
      image(this.image, pos.x, pos.y,30,40);
    }
  }