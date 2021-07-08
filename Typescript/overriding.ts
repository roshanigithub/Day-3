class Printerclass{
doPrint():void{
    console.log("parent class is called");
}

}

class StringPrinter extends Printerclass{
    doPrint():void{
    super.doPrint();
    console.log("Child class is called");}
}

var season=new StringPrinter();
season.doPrint();  