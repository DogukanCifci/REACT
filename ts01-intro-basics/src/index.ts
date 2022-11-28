export {};
console.log("Hello TypeScript!");
let a = 5;
a = 25;

console.log(a);

let b: number; //Burada tipini string yapsa, altta b =24 'te hata verirdi.
b = 24;

console.log(b);

let something: any; //Her degeri alabilir demek oluyor. Asagidaki gibi hata vermeden calisir.

something = 45;
something = "Merhaba";

//
let numbers: number[] = []; //Bu bir number array'i oldugu icin buraya string deger gönderemeyiz
//numbers.push("3");
console.log(numbers);

//Bu sekilde yaparsak hata vermeyecektir.
let numbers2: string[] = [];
numbers2.push("3");
console.log(numbers2);

let v1: unknown = 5;
let v2: number = v1 as number;

console.log(v1, v2);

//Void deger döndürmeyen fonksiyon tipidir. Eger return ile deger döndüreceksek o zaman dönücek olan degerin type 'i yazilir

let firstName = "Dogu";
let lastName = "Cifci";
function getFullName(): string {
  return firstName + " " + lastName;
}
//return bos döncekse bu sekilde void yazariz.
function getFullName2(): void {
  console.log(firstName + " " + lastName);
  return;
}

//UNION

function RoundUp(deger: string | number): string {
  if (typeof deger === "number") {
    return deger.toFixed(2); // deger. yaptigimizda burda sadece number ile alakali komutlari tavsiye olarak gösterir.
  } else if (typeof deger === "string") {
    return deger.toUpperCase(); //deger. yazinca bize sadece string ile alakali seyleri gösterir ve tavsiye eder.
  } else {
    return "aasdas"; // : string yazdigim icin burda return string bir deger döndürmeli. void yazsaydim return ya olmayacakti ya da bos döndürmesi gerekirdi
  }
}

RoundUp("1234.123123");
console.log(RoundUp(4.3245));
console.log(RoundUp("ali ata bak"));

//
function Greet(message: string, person: string): string {
  return message + " " + person + "!";
}

const gr1 = Greet("Good Night", "Dan Brown");
console.log(gr1);
//const gr2 = Greet("Merhaba"); //tek eleman gönderdigimiz icin hata verir.

// const gr3 = Greet("ali", "Merhaba", "ben geldim"); // Burda da 2 deger istemesine ragemn biz 3 tane gönderdigimiz icin bizi uyarir. Direk js de yazsak burda hata vermez ve calistirmaya calisri ama typescriptte kullaniciyi daha yazma esnasinda uyariyor.

//Kendi tipimizi olusturma

type Control = "user" | "admin" | "moderator";

let c: Control = "admin";

let d = c as Control;
console.log(d);

let f: Control = "user";

type Person = {
  firstName: string;
  lastName: string;
  age?: number;
};
//age'den sonra ? koymasaydim altta age eklemedigim icin hata verirdi. Normalde react'ta olsa altta eksik keyword yazsam bile hata vermezdi.
let people: Person[] = [];

people.push({ firstName: "Dogukan", lastName: "Cifci" });
