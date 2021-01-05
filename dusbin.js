class dustbin {
    constructor(x,y){
this.body=Bodies.rectangle(x,y)
this.image = loadImage("dustbingreen.png")
this.height=height
this.width=this.width

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 200,200);
        pop();
    }
}
