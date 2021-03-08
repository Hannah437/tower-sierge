class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);

        this.image1 = loadImage("sprites/sling1.png");
        this.image2= loadImage("sprites/sling2.png");
        this.image3= loadImage("sprites/sling3.png");

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1,200,50,40,170);
        image(this.image2,173,53,40,95);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if (pointA.x < 210){
            stroke(48,22,8)
            strokeWeight(4);
            line(pointA.x-25, pointA.y+10, 188, 77);
            line(pointA.x-25, pointA.y+10, 232, 73);
            image(this.image3,pointA.x-30, pointA.y-10 ,15,30);
            }
            else {
            stroke(48,22,8)
            strokeWeight(4);
            line(pointA.x+25, pointA.y+10, 188, 77);
            line(pointA.x+25, pointA.y+10, 232, 73);
            image(this.image3,pointA.x+25, pointA.y-10 ,15,30);
            }
     
        }
    }
    
}