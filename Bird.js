class Bird extends BaseClass {
  constructor(x,y,angle){
    super(x,y,50,50,angle);
    this.image = loadImage("sprites/bird.png");
    Matter.Body.setAngle(this.body,angle)
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
