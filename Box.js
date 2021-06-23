class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:0.5
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        this.visibility=255;

        World.add(world,this.body);
    }
    display(){

        console.log(this.body.speed);
        if(this.body.speed <3){
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill(rgb(0,128,128));
            rect(0,0,this.width, this.height);
            pop();
        }
        else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility -20;
            pop();
      
        }
    }
}