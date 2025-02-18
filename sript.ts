let a:number=55;
console.log(a);
interface studInter{
    Name:String,
    MobNumber:Number,
    Email:String

}

let student:studInter={
    Name:"Girish",
    MobNumber:8586053176,
    Email:"girishk3418@gmail.com"
};
console.log(student);
type common=(p:number,q:number)=>number;
let sum:common=(a,b)=>a+b;
let sub=(a:number,b:number):number=>a-b;
let multi=(a:number,b:number):number=>a*b;
let div=(a:number,b:number):number=>a/b;