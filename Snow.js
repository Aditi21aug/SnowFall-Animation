class Snow
{
    constructor(x,y,radius)
    {
        var options =
        {
            restitution: 0.4,
            friction: 0
        }
        this.snowImage = loadImage("snow4.webp")
        this.body = Bodies.circle(x,y,radius,options);
        
        this.radius = radius;
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
       
        
        
        
        imageMode(CENTER)
        image(this.snowImage,this.body.position.x,this.body.position.y,this.radius,this.radius)
        
    
        
    }
}