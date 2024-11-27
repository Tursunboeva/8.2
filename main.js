"use strict";
// 1-misol //prompdan qiymnat kiriting va ularni arrayga jamlang
// bu yerda qiymatlarni kiritib bulgandan sung stop suzini yozing
// let qiymatlar: string[] = [];
// while (true) {
//     const qiymat = prompt("Qiymat kiriting (to'xtatish uchun 'stop' deb yozing :) ");
//     if (qiymat?.toLowerCase() === 'stop') break;
//     if (qiymat) qiymatlar.push(qiymat);
// }
// console.log(qiymatlar);
// 2-misol //Raqamlardan tashkil topgan arrayni function parameterga berib,ichidan max qiymatni toping
// let arr = [1,2,3,4,5]
// function max(arr: number[]) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(max(arr));
// 3-misol stringdan tashkil topgan array mavjud  promptdan kiritilganm suz bor  yoki yuqligini aniqlang bor bulsa true , function yordamida bajarilsin
// let str = prompt ("string kiriting")
// function check(str: string) {
//   if (str.length > 0) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(check(str as string));
// 4-misol  Raqamlarda tashkil topgan arrayni juftlarini alohida arayga solib qaytaring functionda bajarilsin 
// let arr = [1,2,3,4,5]
// function juft(arr: number[]) {
//   let juft = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       juft.push(arr[i]);
//     }
//   }
//   return juft;
// }
// console.log(juft(arr));
// 5-misol raqamlardan tashkil topgan array yarating va ularning yigindisini toping
// let arr = [1,2,3,4,5]
// function sum(arr: number[]) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sum(arr));
// 6-misol objectlardan tashkil topgan userlar ruyxati berilgan ichida id, name , email, password  address mavjud, name bilan emailni qaytaruvchi function yarating
// let user = {
//   id: 1,
//   name: "John Doe",
//   email: "Hs4dP@example.com",
//   password: "password123",
//   address: "123 Main St, Anytown, USA"
// };
//  function getUserEmail(user: { id: number; name: string; email: string; password: string; address: string; }) {
//   return { name: user.name, email: user.email };
// }
// console.log(getUserEmail(user));
// 7-misol  array ichidan id buyicha bitta userni topib addresni returin qilish id va aray functionga beriladi 10 ta user bor
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   address: string;
// }
// let userlar: User[] = [
//   { id: 1, name: "Ali", email: "ali@example.com", password: "password123", address: "Toshkent" },
//   { id: 2, name: "Oya", email: "oya@example.com", password: "password456", address: "Samarkand" },
// //   { id: 3, name: "John", email: "john@example.com", password: "password789", address: "Buxoro" },
//   { id: 4, name: "Dina", email: "dina@example.com", password: "password101", address: "Navoiy" },
//   { id: 5, name: "Javlon", email: "javlon@example.com", password: "password202", address: "Fergana" },
//   { id: 6, name: "Sara", email: "sara@example.com", password: "password303", address: "Andijon" },
//   { id: 7, name: "Bekzod", email: "bekzod@example.com", password: "password404", address: "Jizzax" },
//   { id: 8, name: "Zarina", email: "zarina@example.com", password: "password505", address: "Namangan" },
//   { id: 9, name: "Nodir", email: "nodir@example.com", password: "password606", address: "Qarshi" },
//   { id: 10, name: "Zebo", email: "zebo@example.com", password: "password707", address: "Buxoro" }
// ];
// function getAddressById(id: number, users: User[]): string | undefined {
//   const user = users.find(user => user.id === id);
//   return user?.address;
// }
// const address = getAddressById(5, userlar);
// console.log("Userning addressi:", address);
// 8-msiol function beriladi arr ichidan namelarini alahida arrayga solib return qilish
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   address: string;
// }
// let userlar: User[] = [
//   { id: 1, name: "Ali", email: "ali@example.com", password: "password123", address: "Toshkent" },
//   { id: 2, name: "Oya", email: "oya@example.com", password: "password456", address: "Samarkand" },
//   { id: 3, name: "John", email: "john@example.com", password: "password789", address: "Buxoro" },
//   { id: 4, name: "Dina", email: "dina@example.com", password: "password101", address: "Navoiy" },
// //   { id: 5, name: "Javlon", email: "javlon@example.com", password: "password202", address: "Fergana" },
// //   { id: 6, name: "Sara", email: "sara@example.com", password: "password303", address: "Andijon" },
// //   { id: 7, name: "Bekzod", email: "bekzod@example.com", password: "password404", address: "Jizzax" },
// //   { id: 8, name: "Zarina", email: "zarina@example.com", password: "password505", address: "Namangan" }
// // ];
// // function getUserNames(users: User[]): string[] {
// //   return users.map(user => user.name);
// // }
// // const names = getUserNames(userlar);
// // console.log("Userlarning ismlari:", names);
// // 9-misol  raqamli 2 ta array  bor shularni ichidan eng katta raqamlarni topib boshqa arr ga string kurinishida joylash
// // let array1: number[] = [12, 35, 7, 60, 45];
// // let array2: number[] = [34, 23, 78, 90, 56];
// // function getMaxNumbersAsString(arr1: number[], arr2: number[]): string[] {
// //     let max1 = Math.max(...arr1);
// //     let max2 = Math.max(...arr2);
// //     return [max1.toString(), max2.toString()];
// // }
// // let maxNumbers = getMaxNumbersAsString(array1, array2);
// // console.log("Eng katta raqamlar:", maxNumbers);
// // 10-miosol  musbat va manfiy sonlardan  tashkil topgan array mavjud juftlarini alohida toqlarini alohida arrayga tuplavchi fuction yozing 
// let sonlar: number[] = [12, -7, 35, -8, 22, -15, 17, 9, -3, -50];
// function separateEvenOddNumbers(arr: number[]): { even: number[], odd: number[] } {
//     let evenNumbers: number[] = [];
//     let oddNumbers: number[] = [];
//     for (let num of arr) {
//         if (num % 2 === 0) {
//             evenNumbers.push(num); 
//         } else {
//             oddNumbers.push(num);   
//         }
//     }
//     return { even: evenNumbers, odd: oddNumbers };
// }
// let result = separateEvenOddNumbers(sonlar);
// console.log("Juft sonlar:", result.even);
// console.log("Toq sonlar:", result.odd);
// 1-misol function argumentiga 3 xonali son kiritadi , uni teskari ogirib beradigan function tuzing 
// function reverseNumber(num: number): number {
//   if (num < 100 || num > 999) {
//     throw new Error("Faqat 3 xonali son kiriting!");
//   }
//   const reversed = Number(num.toString().split("").reverse().join(""));
//   return reversed;
// }
// console.log(reverseNumber(123)); 
// 2-misol kiritilgan sonni faktarialini xisoblab beruvchi function yarating
// function factorial(n: number): number {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }
//   console.log(factorial(5)); 
