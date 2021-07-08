class PhotoBook{

 numPages:number;
    GetnumberPages:()=>number;
    constructor(b:number){

        this.numPages=b;
    }
}

class BigPhotoBook extends PhotoBook{
Display():void{
    console.log("Number of Photobook pages:"+this.numPages);
}

}

var objss= new BigPhotoBook(8);
objss.Display();