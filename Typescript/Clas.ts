class Car{
engine:string;
constructor(engine:string){
    this.engine=engine;
}
//function

display():void{
console.log("engine is"+this.engine);

}
}
var obj=new Car("R1456");
console.log(obj.engine);
console.log(obj.display());

