class Ground
{
    constructor(xpos,ypos, width,height)
    {
        var snow_options = 
        {
            restitution: 0.3,
            friction: 0.1,
            isStatic : true
        }
     this.image = loadImage("snow5.webp")
     this.body = Bodies.rectangle(xpos,ypos,width,height,snow_options)
     this.width = width;
     this.height = height;
     World.add(world,this.body)   
    }

    display()
    {
      var position = this.body.position;

      ellipseMode(RADIUS);
      rect(position.x,position.y,this.width,this.height)
      //imageMode(CENTER)
     // image(this.image, position.x, position.y, this.radius, this.radius)

    }

    update()
    {
      if(this.body.position.y > height)
      {
        Matter.Body.setPosition(this.body, {x: random(0,900), y: random(0,500)})
      }
    }
}