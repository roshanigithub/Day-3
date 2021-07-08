class Shape{

    Area:Number;
constructor(a:Number){

    this.Area=a;
}
}
class circle extends Shape{

    Display():void{
console.log("Area"+this.Area);

    }
}

var objs=new circle(2);
objs.Display();