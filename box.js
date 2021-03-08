class Box{
  constructor(x, y) {
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.Visiblity = 255;
    this.body = Bodies.rectangle(x, y,30,40, options);
    //this.width = width;
    //this.height = height;
    World.add(world, this.body);
  }

  display(){
    //var angle = this.body.angle;
    //translate(this.body.position.x, this.body.position.y);
   // rotate(angle);
    var pos =this.body.position;
     rectMode(CENTER);

    if (this.body.speed>5){
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     pop();
    }
     else{
      rect(pos.x, pos.y,30,40);
     }
    
  }
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }
}