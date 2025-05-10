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

//46-task
// function tushir(arr: number[], num: number) {
//   return arr.slice(num);
// }
// console.log(tushir([1, 2, 3, 4, 5], 1));

//47-task
// function ovozlar(obj: { upvotes: number; downvotes: number }): number {
//   return obj.upvotes - obj.downvotes;
// }

// console.log(ovozlar({ upvotes: 13, downvotes: 0 }));

//48-task
// function negative(num: number) {
//   if (num > 0) {
//     return num * -1;
//   } else {
//     return num;
//   }
// }
// console.log(negative(-4));

//49-task
// function teskariMassiv(massiv) {
//   return massiv.reverse();
// }

// console.log(teskariMassiv([1, 2, 3, 4, 5]));

//50-task
// function kinoKirishYokiYoq(yosh: number, otaOnasiBilan: boolean): boolean {
//   return yosh >= 15 && otaOnasiBilan;
// }

//51-task
// function birQosh(massiv: number[]): number[] {
//   return massiv.map((son) => son + 1);
// }

//52-task
// const ism: string = "Ali";
// const yosh: number = 18;

// const matn: string = `Salom, mening ismim ${ism} va men ${yosh} yoshdaman.`;

// console.log(matn);

//53-task
// let yosh = 18;
// let natija: string = yosh >= 18 ? "Katta yoshdagilar" : "Voyaga yetmaganlar";

//54-task
// function uzunligiJuftmi(matn: string): boolean {
//     return matn.length % 2 === 0 ? true : false;
//   }

//55-task
// const daraja = (n: number, m: number): number => n ^ m;
// console.log(daraja(2, 3));

//56-task
// function songiElement<T>(massiv: T[]): T | undefined {
//     return massiv[massiv.length - 1];
//   }

//57-task
// function kabisaYilmi(yil: number): boolean {
//     return (yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0);
//   }

//58-task
// function birinchiHarfiniOlmasdanSoz(soz: string): string {
//     return soz.slice(1);
//   }

//59-task
// function teskariBoolean(qiymat: boolean): boolean {
//     return !qiymat;
//   }

//60-task
// function sonlar(n: number): string {
//   if (n % 2 == 0) {
//     return "juft";
//   } else {
//     return "toq";
//   }
// }

//61-task
// function qutilarSoniniTop(qavat: number): number {
//     let total = 0;
//     for (let i = 1; i <= qavat; i++) {
//       total += (i * (i + 1)) / 2;
//     }
//     return total;
//   }

//62-task
// function massivniStringgaOzgartir(massiv: (string | number)[]): string {
//     return massiv.join(' ');
//   }
//63-task

// function massivBirlashtir(massiv1: number[], massiv2: number[]): number[] {
//     return [...massiv1, ...massiv2];
//   }

//64-task
// function elementIndexiniTop(massiv: (string | number)[], element: string | number): number {
//     return massiv.indexOf(element);
//   }

//65-task
// function indexdagiElement(massiv: (string | number)[], index: number): string | number {
//     const yaxlitlanganIndex = Math.floor(index);
//     return massiv[yaxlitlanganIndex];
//   }

//66-task
// function massivYigindisi(massiv: number[]): number {
//     return massiv.reduce((yigindi, element) => yigindi + element, 0);
//   }

//67-task
// function sozdanRaqamga(soz: string): number | undefined {
//     const raqamlar: { [key: string]: number } = {
//       "bir": 1,
//       "ikki": 2,
//       "uch": 3,
//       "to’rt": 4,
//       "besh": 5,
//       "olti": 6,
//       "yetti": 7,
//       "sakkiz": 8,
//       "to’qqiz": 9
//     };

//     return raqamlar[soz.toLowerCase()];
//   }

//68-task
// function massivdaMiqyosBormi(massiv: number[], son: number): boolean {
//     return massiv.includes(son);
//   }

//69-task
// function sonlarniStringgaOzgartir(massiv: (number | string)[]): (string | string[])[] {
//     return massiv.map(element => typeof element === 'number' ? element.toString() : element);
//   }

//70-task
// function kubikchalarSoni(qator: number): number {
//   return Math.pow(qator, 3);
// }

//71-task
// function avtomobillarSoni(odamlarSon: number): number {
//   return Math.ceil(odamlarSon / 5);
// }

//72-task
// function boshJoyMavjudmi(soz: string): boolean {
//   return soz.includes(" ");
// }

//73-task
// function hajmHisobla(quti: { balandlik: number, eni: number, uzunlik: number }): number {
//     return quti.balandlik * quti.eni * quti.uzunlik;
//   }

//74-task
// function ajratibOl(son1: number, son2: number, massiv: number[]): number[] {
//     return massiv.filter(son => son > son1 && son < son2);
//   }

//75-task
// function elementTurlari(massiv: any[]): string[] {
//   return massiv.map((element) => typeof element);
// }
//76-task
// function qaytaYoz(soz: string, mqt: number): string {
//     return soz.repeat(mqt);
//   }

//77-task
// function koplikdaMi(soz: string): boolean {
//   return soz.endsWith("lar") || soz.endsWith("er");
// }

//78-task
// function boshVaOxirgiHarf(soz: string): string {
//   return soz[0] + soz[soz.length - 1];
// }
//79-task
// function talaffuzQiyin(soz: string): string {
//   const boshHarflar = soz.slice(0, 2);
//   const qolganSoz = soz.slice(2);
//   return `${boshHarflar}... ${boshHarflar}... ${qolganSoz}`;
// }

//80-task
// function ahvol(soz: string = "neutral"): string {
//     return `Today, I am feeling ${soz}`;
//   }

//81-task
// function boginSoni(soz: string): number {
//   const unlilar: string[] = ["a", "e", "i", "o", "u", "ö", "ü"];
//   let soni = 0;

//   for (let harf of soz.toLowerCase()) {
//     if (unlilar.includes(harf)) {
//       soni++;
//     }
//   }

//   return soni;
// }

//82-task
// function asciiKodniQaytar(belgi: string): number {
//   if (belgi.length !== 1) {
//     throw new Error("Faqat bitta belgi kiriting.");
//   }
//   return belgi.charCodeAt(0);
// }

//83-task
// function sozlarTengmi(soz1: string, soz2: string): boolean {
//   return soz1.toLowerCase() === soz2.toLowerCase();
// }

//84-task
// function sozUzunligi(soz: string): number {
//   let sanoq = 0;
//   for (const _ of soz) {
//     sanoq++;
//   }
//   return sanoq;
// }

//85-task
// function endCorona(
//   healPerDay: number,
//   newCasesPerDay: number,
//   activeCases: number
// ): number {
//   let kunlar = 0;

//   while (activeCases > 0) {
//     activeCases += newCasesPerDay - healPerDay;
//     kunlar++;
//   }

//   return kunlar;
// }
//86-task
// function namuna(massiv: number[]): number[] {
//   return massiv.map((son) => son * 2);
// }

//87-task
// function sozUzunliklari(sozlar: string[]): number[] {
//   return sozlar.map((soz) => {
//     let uzunlik = 0;
//     for (const _ of soz) {
//       uzunlik++;
//     }
//     return uzunlik;
//   });
// }

//88-task
// function kilometrHisobla(summa: number): number {
//   if (summa < 4000) {
//     return 0;
//   }

//   let qolganSumma = summa - 4000;
//   let qoshimchaKM = Math.floor(qolganSumma / 1000);

//   return 1 + qoshimchaKM;
// }
//89-task
// function dHarfiniHisobla(matn: string): number {
//   let soni = 0;
//   for (const harf of matn.toLowerCase()) {
//     if (harf === "d") {
//       soni++;
//     }
//   }
//   return soni;
// }

//90-task
// function harflarOrasigaBosHov(soz: string): string {
//   return soz.split("").join(" ");
// }
//91-task
// function kattaVaBolinuvchi(a: number, b: number): number {
//   let x = Math.max(a, b) + 1;

//   while (x % b !== 0) {
//     x++;
//   }

//   return x;
// }
//92-task
// function jamiKofe(sotibOlingan: number): number {
//   const tekin = Math.floor(sotibOlingan / 3);
//   return sotibOlingan + tekin;
// }

//93-task
// function namuna(matn: string, n: number): string {
//   if (matn.length === 0 || n <= 0) return matn;

//   const oxirgi = matn[matn.length - 1];
//   return matn + oxirgi.repeat(n - 1);
// }
// console.log(namuna("Hello", 3));

//94-task
// function beshdanKattaYigindi(massiv: number[]): number {
//   let yigindi = 0;
//   for (const son of massiv) {
//     if (son > 5) {
//       yigindi += son;
//     }
//   }
//   return yigindi;
// }
//95-task
// function massivYigindisi(massiv: number[]): number {
//     let yigindi = 0;
//     for (const son of massiv) {
//         yigindi += son;
//     }
//     return yigindi;
// }

//96-task
// function getFilename(path: string): string {
//   const parts = path.split("/");
//   return parts[parts.length - 1];
// }
//97-task
// function qaytishMasofasi(yurishlar: number[]): number {
//   const natija = yurishlar.reduce((jami, masofa) => jami + masofa, 0);
//   return Math.abs(natija);
// }
//98-task
// function uchburchak(a: number, b: number, c: number): boolean {
//   return a + b > c && a + c > b && b + c > a;
// }

//99-task
// function oraliqMassiv(start: number, end: number): number[] {
//   const natija: number[] = [];

//   for (let i = start + 1; i < end; i++) {
//     natija.push(i);
//   }

//   return natija;
// }
//100-task
// function namuna(tugma: string): string {
//   const [tag, count] = tugma.split("*");
//   const son = parseInt(count);
//   return tag.repeat(son).replace(new RegExp(tag, "g"), `<${tag}></${tag}>`);
// }
//101-task
// function yigindi(n: number): number {
//   let toplam = 0;
//   for (let i = 1; i <= n; i++) {
//     toplam += i;
//   }
//   return toplam;
// }
//102-task
// function tekshir(minMax: { min: number; max: number }, son: number): boolean {
//   return son >= minMax.min && son <= minMax.max;
// }
//103-task
// function oxirgiRaQam(son: number): boolean {
//   const kvadrat = son * son;
//   const oxirgiRaQam = kvadrat % 10;
//   return oxirgiRaQam === son % 10;
// }

//104-task
// function indexniQoshish(massiv: number[]): number[] {
//   return massiv.map((element, index) => element + index);
// }

//105-task
// function shakarsizIchimliklar(ichimliklar: string[]): string[] {
//   return ichimliklar.filter(
//     (ichimlik) => ichimlik !== "cola" && ichimlik !== "fanta"
//   );
// }

//106-task
// function raqamlarSoniniHisobla(son: number): number {
//   return son.toString().length;
// }

//107-task
// function engKattaSon(son: number): number {
//   const raqamlar = son.toString().split("");
//   raqamlar.sort((a, b) => b.localeCompare(a));
//   return parseInt(raqamlar.join(""));
// }
//108-task
// function randomSonOraliq(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

//109-task
// function narissistikSon(son: number): boolean {
//   const raqamlar = son.toString().split("");
//   const uzunlik = raqamlar.length;

//   const yigindi = raqamlar.reduce(
//     (sum, raqam) => sum + Math.pow(Number(raqam), uzunlik),
//     0
//   );

//   return yigindi === son;
// }

//110-task
// function kattaHarfSoniniHisobla(str: string): number {
//   return str.split("").filter((raqam) => raqam >= "A" && raqam <= "Z").length;
// }
