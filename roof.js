class roof{
    constructor(x,y) {
        var options={
            isStatic : true, 
        }
        this.body = Bodies.rectangle(x,y,100,30,options);
        this.width = 100;
        this.heigh = 30;
        World.add(world,this.body);  
    }
    display(){
        var pos = this.body.position;
        fill("green");
        strokeWeight(3);
        stroke("yellow");
        rect(pos.x, pos.y, 400,30);
    }
}