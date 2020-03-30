class Cap{
    constructor(x,y,width,height){
        var option = {
            restitution : 0.8,
            density : 1,
            friction :1
        }
        this.body = Bodies.circle(x,y,50,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
       push()
       translate(this.body.position.x,this.body.position.y);
       rotate(this.body.angle)
       fill ("green");
       strokeWeight (4); 
       stroke ("black");
       circleMode(CENTER);
       circle(0,0,50)
       pop();
    }
}