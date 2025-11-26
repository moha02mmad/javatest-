// //window.alert("hello world");
// document.write("<h1>this is document.write()</h1>");
// console.log("this is console.log()");
// console.error("this is console.error()");
// console.table(["mohammad", "23" , "amman"]);

sss;
// console.log(typeof 50);
// console.log(typeof "mohammad");
// console.log(typeof true);
// console.log(typeof {name:"mohammad", age:23});
// console.log(typeof [1,2,3,4,5]);
// console.log(typeof undefined);
// console.log(typeof null);

// var name="mohammad";

// var name="ahmad";

// var age=23;

// document.write(name +" "+ age);
// console.log(name);
// console.log(test1);

// test1.innerHTML="hello from \"js\"";

// // first task

// let title="elzero";

// console.log(title);
// let description="elzero web school";
// let date="25/10";

// let card=`<div>
// <h3>${title}</h3>
// <P>${description}</P>
// <span>${date}</span>
// </div>`

// document.write(card.repeat(4));

// console.log("" + 10);

// console.log((100.8).toString());//return string

// console.log((100.868).toFixed(2));//return string 100.87
// console.log((100.868).toFixed(0));//101

// console.log(parseInt("100"));//return number
// console.log(parseFloat("100.5"));//return number float

// console.log(Number("100"));//return number
// console.log(Number("100.5"));//return number float
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number.isInteger(100));//true
// console.log(Number("mohammad"));//NaN not a number

// console.log(isNaN("mohammad"));//true
// console.log(isNaN("100"));//false
// console.log(isNaN(100));//false
// console.log(isNaN(true));//false
// console.log(isNaN(false));//false

// console.log(Math.round(99.2));//99
// console.log(Math.round(99.6));//100

// console.log(Math.min(10,20,30,-5,100));//-5
// console.log(Math.max(10,20,30,-5,100));//100

// console.log(Math.floor(99.9));//99
// console.log(Math.ceil(99.1));  //100

// console.log(Math.pow(2,4));//16

// console.log(Math.trunc(4.8));//4

// //-------------------string methods----------------
//  let myname = "  mohammad";
//  console.log(myname[3]);//o
//  console.log(myname.charAt(3));//o

// console.log(myname.length);//8
// console.log(myname[name.length -1]);//d last char
// console.log(myname.trim());//delete the white spaces

// console.log(myname.toUpperCase());//MOHAMMAD
// console.log(myname.toLowerCase());//mohammad

// console.log(myname.trim().charAt(2).toUpperCase);//H

// console.log(myname.indexOf("m"));//2
// console.log(myname.indexOf("m",2));//2
// console.log(myname.indexOf("m",3));//6

// console.log(myname.lastIndexOf("m"));//6

// console.log(myname.slice(2,6));//moha
// console.log(myname.slice());//

// console.log(myname.slice(-5,-2));//amm

// let fam = "mohammad abu saad"
// console.log(fam.split(" "));//["mohammad","abu","saad"]
// console.log(fam.split("", 8));//

// console.log(myname.substring(2));//moha

// console.log(myname.includes("mma" , 3));//true
// console.log(myname.includes("mma" , 4));//false

// console.log(myname.startsWith("mo"));//true
// console.log(myname.endsWith("mad"));//true

// console.log(10 == "10");//true compare value only
// console.log(10 === "10");//false compare value and type

// //------------------conditionals-------------------

// let hour = 2;
// let student= true;

// if(hour===10){
//     console.log("good morning");
// }
// else if(hour>10 && hour<20){
// console.log("good day");
// }

// if(hour<=10){
//     console.log("good morning");
// }
// else if(hour>10 && hour>20){
//     if(student===true){
//         console.log("good afternoon student");
//     }
// console.log("good day");
// }
// else{
//     console.log("good evening");
// }

// let aage=20;

// switch(aage){

//     case 10:
//     console.log("age is 10");
//     break;

//     case 20:
//     console.log("age is 20");
//     break;

//     case 30:
//     console.log("age is 30");
//     break;

//     default:
//     console.log("age is not 10 ,20 ,30");
// }

// //------------------arrays-------------------

// let myfriends =["mohammad", "ahmad",["rami","samer"] , "ahmad" , "khaled"];
// console.log(`my friends are ${myfriends}`);
// myfriends[1]="ali";
// console.log(myfriends);
// console.log(myfriends[2][0]);//rami
// console.log(myfriends.length);//3
// myfriends[myfriends.length]="saad"; // this how how we add new element
// myfriends[myfriends.length - 1]="sara"; // this how how we edit the last element
// myfriends.unshift("khaled"); //add element to the start of array
// myfriends.push("leena"); //add element to the end of array

// let first = myfriends.shift(); //remove first element from array and save it in variable
// let last = myfriends.pop(); //remove last element from array and save it in variable

// console.log(myfriends.indexOf("khaled"));//4
// console.log(myfriends.lastIndexOf("ahmad"));//3
// console.log(myfriends.lastIndexOf("khaled" , -2));//will search from index 3 to 4

// let secondfriends =["mohammad", "ahmad",["rami","samer"] , "ahmad" , "khaled"];

// console.log(secondfriends.indexOf("ahmad"));
// console.log(secondfriends.lastIndexOf("ahmad"));

// let numbers=[1,10,100,20,200,30,-90,-5];

// console.log(numbers.sort());
// console.log(numbers.reverse());

// let all=myfriends.concat(secondfriends, numbers);
// console.log(all);
// console.log(all.join(" - "));//return string

//-------------------loops-------------------

// let myfriends =["mohammad","ahmad",20,"rami","khaled",10];

// for( let i=0; i<myfriends.length ; i++) {
//     console.log(`My friends are ${myfriends[i]}`);

// }

// for( let i=0; i<myfriends.length ; i++) {
//     if(myfriends[i]==="ahmad"){
//         continue;
//         //break;
//     }
//     console.log(`my friends are ${myfriends[i]}`);
//     ;
// }

// let onlystring =[];
// for(    let i=0; i<myfriends.length ; i++) {
//     if(typeof myfriends[i] == "string"){
//         onlystring.push(myfriends[i]);
//     }
// }
// console.log(onlystring);

// //------ while loop

// let i=0;
// while(i<myfriends.length){
//     console.log(`friend ${i +1 } ${myfriends[i]}`);
//     i++;
// }

// //------do while loop
// let a= 0;
// do {
//     console.log(a);
//     a++;
// } while (a<=3);

//-------------------functions-------------------

// function countyears(start=0 , end=0 , exclude)
// {
//     for(let i=start; i<=end ; i++)
//     {
//         if(i===exclude){
//             continue;
//         }
//         console.log(i);
//     }
// }
// countyears(2000 , 2023 , 2010);

// //rest parameters (...num is array)
// function sum(...num){
//     let result=0;
//     for(let i=0; i<num.length ; i++){
//         result += num[i];
// }
// return `the sum is ${result};`}

// console.log(sum(10,20,30,40,500));

// // nested function
// function sayhello(username, age){
// let msg="hi"
//     function concatmsg(){
//         return `${msg} ${username} you age is ${age}`;
//     }

//     return concatmsg();
// }
// console.log(sayhello("mohammad", 23));

// //arrow function

// let print = function(){
//     return 10;
// }
// console.log(print());

// let print2 = (num)=>
//  num*10;

// console.log(print2(6));

//-------------------high order functions (map)-------------------

//------------------objects-------------------

// let car={
//     type:"Fiat",
//     model:"500",
//     color:"white",
//     skills:["html","css","js"],
//     active:true,
//     idnumber:{
//         first:"079",
//         second:"078",
//         third:"077"
//     },
//     isactive:function(){
//         if(car.active){
//             return "car is active";
//         }
//         else{
//             return "car is not active";
//         }
//     }

// };

// console.log(car.type);
// console.log(car.idnumber.first);
// console.log(car["idnumber"]['second']);

// console.log(car.isactive() );

// let user = new Object();

// user.name= "mohammad";
// user.age = 23;

// user.isadult=function(){
//     if(user.age>=18){
//         return "user is adult";
//     }
//     else{
//         return "user is not adult";
//     }
// }

// console.log(user.name);
// console.log(user.isadult());

// let user2 =object.create(user);// create a new object (user2) that have copy from the last object (user)
// user2.name="rami";
// user2.age=17;

//let user3= Object.assign(user,user2)

//"use strict"; to make sure that we are writing a clear code.

// // ------------------ select element----------------------------

// let h4 = document.querySelector(".test1");
// h4.style.color= "Red";

// let h5 = document.querySelectorAll(".test1")[1];
// h5.style.color="blue";

// let body= document.body;
// body.style.background="gray";
// body.style.cssText =`
// background:blue;
// color:green; `;

// body.style.removeProperty(`color`);

// let image =document.getElementById("image");
// image.alt="skyphoto";
// image.setAttribute("height" , "200px")
// console.log(image.alt);
// console.log(image.attributes[1]);
// image.removeAttribute("width");
// image.style.setProperty(`padding`,`80px`);

// let containerr= document.getElementById("father");
// containerr.outerHTML="<P>hello</P>";
// console.log(containerr.outerHTML);
// console.log(containerr.innerHTML);

//---------Asynchronous vs Synchronous----------

// console.log("1");
// console.log("2");
// setTimeout(()=>console.log("operation"),1000);
// console.log("3");

// console.log("#####");
// console.log("1");
// console.log("2");
// setTimeout(()=>console.log("operation2"),0);
// console.log("3");
//ssssss

let myRequest = new XMLHttpRequest();
myRequest.open("get", "https://api.github.com/users/octocat");
myRequest.send();
console.log(myRequest);
