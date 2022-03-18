var person = {
  name: "mao",
};

Object.defineProperty(person, "age", {
  configurable: true,
  value: 18,
});

delete person.age;

console.log("person: ", person.age);

const obj = { name: "mao" };
console.log("obj: ", obj.__proto__); // 查看对象的原型对象；

function s() {
  this.a = "min";
}

//以下情况，p1和p2的friends属性会相互影响；

function ooo() {
  this.sno = 9;
  this.friends = [];
}

var o = new ooo();

function Person() {
  this.name = 19;
}

Person.prototype = o;

var per1 = new Person();

var per2 = new Person();

per1.friends.push("aa");
console.log("per1: ", per1.friends);

console.log("per2: ", per2.friends);

var p = new Person();

// 暂时性死区： 在同一块级作用域中，使用let  const声明的变量，在
// var ttt = 1;
// if(true){
//   console.log(ttt);
//   let ttt = 2;        //在执行这行用let执行之前，都是不能访问的；
// }

const obj1 = {
  name: "maon",
  ag2: 24,
};

const setArr = new Set([10, 20]);

console.log(setArr);

// set类型可以forEach遍历，obj1不能遍历；
setArr.forEach((elemeznt) => {
  console.log("elemeznt: ", elemeznt);
});


const obj3={
  x:{
    name:"mao",
    age:24
  },
  y:{
    name:"mao",
    age:24
  },


}

console.log(Object.values(obj3));
