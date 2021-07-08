var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    //function
    Car.prototype.display = function () {
        console.log("engine is" + this.engine);
    };
    return Car;
}());
var obj = new Car("R1456");
console.log(obj.engine);
console.log(obj.display());
