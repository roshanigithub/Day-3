interface Iperson
{
firstname:string;
lastname:String;
sayhello:()=>string
}
var customer:Iperson={
firstname:"tom",
lastname:"gr",
sayhello:():string=>{return "i'm hete"}
}
console.log(customer.firstname);
console.log(customer.lastname);
console.log(customer.sayhello());

