var fs=require('fs');
var http=require('http');

http.createServer(function(req,res){
    //fs.readfile('sample.json',function (err,data){
       // res.writehead(200,{'Content-type':'text/html'});
     //   res.write(data);
//return res.end();

fs.appendfile('sample.txt',"I am content",function (err,data){
    console.log("Saved");
    

    });
}).listen(8081);