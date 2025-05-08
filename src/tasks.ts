//1-task
// const sum = (x: number, y: number): number => x + y;
// console.log(sum(3, 2));

//2-task
// const minut = (m: number): number => m * 60;
// console.log(minut(3));

//3-task
// const son = (s: number): number => s + 1;
// console.log(son(6));

// 4-task
// const burchak = (asos: number, baland: number): number => (asos * baland) / 2;
// console.log(burchak(10, 10));

// 5-task
// const age = (d: number): number => d * 365;
// console.log(age(15));

//6-task
// const kub = (k: number): number => k * k * k;
// console.log(kub(3));

//7-task
// const first = (arr: number[]): number | undefined => arr[0];
// console.log(first([80, 5, 100]));

//8-task
// const increase = (a: number, b: number): number => a * b;
// console.log(increase(7, 7));

//9-task
// const soat = (s: number): number => s * 3600;
// console.log(soat(2));

//10-task
// const tomon = (t1: number, t2: number): number => t1 + t2 - 1;
// console.log(tomon(5, 7));

//11-task
// const bolish = (son1: number, son2: number): number => son1 / son2;
// console.log(bolish(3, 4));

//12-task
// const yuzi = (boyi: number, eni: number): number => boyi * eni;
// console.log(yuzi(4, 5));

//13-task
// let str = "Something";
// const harf = (a: string): string => (str += " " + a);
// console.log(harf("is better than nothing"));

//14-task

// const kv = (n: number): number => n * n;
// console.log(kv(9));

//15-task

// function son(s: number) {
//   if (s <= 0) {
//     return true;
//   } else if (s > 0) {
//     return false;
//   }
// }
// console.log(son(-2));

//16-task

// const burchak = (n: number): number => (n - 2) * 180;
// console.log(burchak(6));

//17-task

// const achko = (ball2: number, ball3: number): number => ball2 * 2 + ball3 * 3;
// console.log(achko(1, 1));

//18-task
// let e = "Edabit";
// const qoshish = (s: string): string => (s += e);
// console.log(qoshish("Mubashir"));

//19-task
// function kichik(s1: number, s2: number) {
//   if (s1 + s2 < 100) {
//     return true;
//   } else if (s1 + s2 > 100) {
//     return false;
//   }
// }
// console.log(kichik(22, 22));

//20-task
// function array(n: number) {
//   let result: number[] = [];
//   for (let i = 0; i <= n; i++) {
//     result.push(i);
//   }
//   return result;
// }
// console.log(array(5));

//21-task
// const oyoqlar = (tovuq: number, qoy: number, sigir: number): number =>
//   tovuq * 2 + qoy * 4 + sigir * 4;
// console.log(oyoqlar(2, 2, 2));

//22-task
// const operator = (a: boolean, b: boolean): boolean => a && b;
// console.log(operator(true, true));

//23-task
// const tengmi = (a: number, b: number): boolean => a == b;
// console.log(tengmi(2, 2));

//24-task
// const fudbol = (yutish: number, durrang: number, maglub: number): number =>
//   yutish * 3 + durrang * 1 + maglub * 0;
// console.log(fudbol(3, 4, 2));

//25-task
// const sekund = (soat: number, minut: number): number =>
//   soat * 3600 + minut * 60;
// console.log(sekund(1, 3));

//26-task
// const son = (a: number): boolean => a == 7;
// console.log(son(9));

//27-task
// const tengMi = (a: any, b: any): boolean => a == b && a === b;
// console.log(tengMi(1, true));

//28-task
// const str = (v: boolean): string => (v ? "true" : "false");
// console.log(str(true));

//29-task
// const arrow = (v: any): any => v;
// console.log(arrow(5));

//30-task
// function frame(minutes: number, frame: number): number {
//   const Second = minutes * 60;
//   const totalFrames = Second * frame;
//   return totalFrames;
// }
// console.log(frame(5, 30));

//31-task
// const num = (a: number, b: number): number => a + b;
// console.log(num(2, 3));

//32-task
// function tengMi(a: number, b: number) {
//   if (a == 10) {
//     return true;
//   } else if (b == 10) {
//     return true;
//   } else if (a + b == 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(tengMi(9, 1));

//33-task
// const litr = (m: number): number => m * 10;
// console.log(litr(16));

//34-task
// function katta(n: number, m: number) {
//   if (n > m) {
//     return n;
//   } else if (m > n) {
//     return m;
//   }
// }
// console.log(katta(3, 7));

//35-task
// function make(a: any, b: any): any[] {
//   return [a, b];
// }
// console.log(3, 4);

//36-task
// function isSame(str1: string, str2: string): boolean {
//     return str1.length === str2.length;
//   }

//37-task
// function boshMi(a: string) {
//   if (a == " ") {
//     return true;
//   } else if (a == "") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(boshMi(" "));

//38-task
// function bolinsin(n: number) {
//   if (n % 5 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(bolinsin(55));

//39-task
// function bolinsin100(n: number) {
//   if (n % 100 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(bolinsin100(200));

//40-task
// function count(str: string, index: number = 0): number {
//   if (str[index] === undefined) {
//     return 0;
//   }
//   return 1 + count(str, index + 1);
// }

//41-task
// function bolish(x: number, y: number) {
//   if (x % y == 0) {
//     return true;
//   } else {
//     false;
//   }
// }
// console.log(bolish(9, 2));

//42-task
// function stringToNumber(str: string): number {
//     return Number(str);
//   }

//43-task
// function yuz(l: number, w: number): number {
//   if (l <= 0 || w <= 0) {
//     return -1;
//   }
//   return l * w;
// }

//44-task
// function fullName(firstName: string, lastName: string): string {
//     return `${firstName}, ${lastName}`;
//   }

//45-task
// function bug(isSad: boolean): string {
//   if (isSad) {
//     return "sad days";
//   } else {
//     return "it's a good day";
//   }
// }
