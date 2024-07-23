//1 - misol
// let son = Number(prompt("Son kiriting"));
// let ones = son % 10;
// let tens = Math.floor((son % 100) / 10); 
// let huns = Math.floor(son / 100); 
// let result = (huns + ones) - tens;
// if( son > 99 || son < 100){
//     console.log(result+" ga katta");
// }
// else if(result == 0){
//     console.log("0 ga teng");
// }
// else{
//     console.log("Qandaydir xatolik bor");
// }

//2 - misol
// let a = parseInt(prompt("sonni kiriting"))
// let sum = 0
// for(let i = 0; i <= a; i++){
//     if(a % i == 0){
//         sum += i
//     }
// }
// console.log(sum);

//3 - misol
// let arr = [true, "Salom", 23, undefined];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//         arr[i] = null;
//     }
// }
// console.log(arr);

//4 - misol
// let arr = [2,3,4,52,2,3,4,53,2,23,43,2];
// let max = arr[0]; 

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log("Eng katta qiymat:", max); 

//5 - misol
// let arr = [54, 32, 76, 12, 22]
// let sum = 0
// for ( let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// console.log("Arrayning elementlari yig'indisi = "+sum);

// 6- misol yoq ekan

//7 - misol
// let arr = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         arr[i] = 0;
//     }
// }
// console.log(arr);

//8 - misol
// let num1 = Number(prompt("1 sonni kiriting"))
// let act = String(prompt("amalni kiriting"))
// let num2 = Number(prompt("2 sonni kiriting"))
// switch(act){
//     case "+":console.log(num1+num2);break;
//     case "-":console.log(num1-num2);break;
//     case "*":console.log(num1*num2);break;
//     case "/":console.log(num1/num2);break;
//     default:console.log("Xatolik bor");
// }

//9 - misol
// let input = String(prompt("Ism kiriting")).toUpperCase(); 
// let arr = ["Nuriddin", "Shaxboz", "Adxam", "Suxrob"];

// let found = false; 
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toUpperCase() === input) {
//         found = true;
//         break; 
//     }
// }

// if (found) {
//     console.log("Bor");
// } else {
//     console.log("Yoq");
// }

//10 - misol
// let input = String(prompt("Ism kiriting"))
// const list = [
//     {
//     id:1,
//     age:20,
//     name:"Nuriddin",
//     gmail:"nuriddin@gmail.com"
// } ,
// {
//     id:2,
//     age:15,
//     name:"Komiljon",
//     gmail:"komiljon@gmail.com"
// },
// {
//     id:3,
//     age:25,
//     name:"Izzatbek",
//     gmail:"izzatbek@gmail.com"
// }]
// for(let value of list){
//     switch(input){
//         case value.name: console.log(value);break;
//     }
// }

//11 - misol
// const list = [
//     {
//     id:1,
//     age:20,
//     name:"Nuriddin",
//     gmail:"nuriddin@gmail.com"
// } ,
// {
//     id:2,
//     age:15,
//     name:"Komiljon",
//     gmail:"komiljon@gmail.com"
// },
// {
//     id:3,
//     age:25,
//     name:"Izzatbek",
//     gmail:"izzatbek@gmail.com"
// }]

// let maxAge = list[0].age;
// for (let i = 1; i < list.length; i++) {
//     if (list[i].age > maxAge) {
//         maxAge = list[i].age;
//     }
// }
// console.log("Eng katta yosh:", maxAge);
//12 - misol
// const list = [
//     {
//     id:1,
//     age:20,
//     name:"Nuriddin",
//     gmail:"nuriddin@gmail.com"
// } ,
// {
//     id:2,
//     age:15,
//     name:"Komiljon",
//     gmail:"komiljon@gmail.com"
// },
// {
//     id:3,
//     age:25,
//     name:"Izzatbek",
//     gmail:"izzatbek@gmail.com"
// }]

// let totalAge = 0;
// for (let i = 0; i < list.length; i++) {
//     totalAge += list[i].age;
// }

// let averageAge = totalAge / list.length;
// console.log("Yoshlarning orta arifmetigi:", averageAge);

//13 - misol
// let arr = [23, 54, 21, 76, 23, 87];
// let firstElement = arr[0];
// let lastElement = arr[arr.length - 1];
// let sum = firstElement + lastElement;

// if (sum % 2 !== 0) { 
//     arr.push(sum);
// } else { 
//     arr.unshift(sum);
// }
// console.log(arr);

//14 - misol
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = [];
// let oddNumbers = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) { 
//         evenNumbers.push(arr[i]);
//     } else { 
//         oddNumbers.push(arr[i]);
//     }
// }
// console.log("Juft sonlar:", evenNumbers);
// console.log("Toq sonlar:", oddNumbers);

//15 - misol
// let arr = [8, 7, 6, 5, 4];

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }
