const obj = {
  name: "mao",
  age: 19,
  sing: function () {
    console.log("5");
  },
  friends: ["li", "sjdak"],
  info: {
    address: "cq",
    base: {
      sheng: "cq",
      xian: "fengjie",
    },
  },
};
// 类型为function,数组、对象类型的object，则不能直接进行赋值，这样只是浅拷贝;

/**
 * 经常需要用到的函数：判断是否是对象类型
 *1.对对象如何处理？
  2.对数组如何处理？
  3.对函数如何处理？-函数的目的是为了复用，为啥还要重新存储？
  4.***循环引用如何处理？若不处理，则会栈溢出；->map->如何将map设为局部变量，而不是全局变量
   WeakMap,若没有引用的时候，则会被垃圾回收；
 */
function isObject(value) {
  const valueType = typeof value;
  return value !== null && (valueType === "object" || valueType === "function");
}

/**
 *
 * @param {*} originValue
 * @param {*} map 将map作为参数，则函数内每次传入map参数，则将上一次的map传入；没有设置参数的时候默认是new map
 * @returns
 */
// const map = new Map();
function cloneDeep(originValue, map = new WeakMap()) {
  // 判断如果是set类型--对象很少用--类似的还有Map类型--这里只做了浅拷贝；
  if (originValue instanceof Set) {
    return new Set([...originValue]);
  }

  if (typeof originValue === "function") {
    return originValue;
  }
  // 从一开始就判断传入的值是否为对象类型，如果不是，将原来的值进行返回就行；
  if (!isObject(originValue)) {
    return originValue;
  }

  // 防止循环引用一直递归；
  if (map.has(originValue)) {
    return map.get(originValue);
  }

  const newValue = Array.isArray(originValue) ? [] : {};
  map.set(originValue, newValue);

  for (const key in originValue) {
    newValue[key] = cloneDeep(originValue[key], map);
  }
  return newValue;
}
obj.circle = obj;
const res = cloneDeep(obj);
console.log("res: ", res);

// 判断数组2： Object.prototype.toString.call(arrayObj) === '[object Array]'
const result = Object.prototype.toString.call([]) === "[object Array]";
