class block{
constructor(x,y){
var options={
'restitution':0.9,
'friction':1.0,
'density':1.0

}
this.body=Bodies.rectangle(x,y,50,30,options);
this.width=50;
this.height=30;
World.add(world,this.body)


}

display(){

if(this.body.speed<3){

super.display()

}

else{

World.remove(world,this.body)
push()
this.visibility=this.visibility-5

tint(255,this.visibility)
pop()



}

var pos=this.body.position;
rectMode(CENTER)
rect(this.body,this.body.position.x,this.body.position.y)

}


}