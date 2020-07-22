class grav{
    constructor(x,y,radius){
        var options={
            isStatic : true,
            friction : 0.5,
            restitution : 1.2,
            friction : 0.5
        }
    this.body = Matter.circle(x,y,radius,options);
    this.radius = radius;
    this.image = "pixil-pixil-frame-0 (5).png"    
    World.add(world, this.body);
}
display(){
    var pos = this.body.position();
    rectMode(CENTER);
    image(this.image,helicopter.x, helicopter.y, 10,10 );
 }
}