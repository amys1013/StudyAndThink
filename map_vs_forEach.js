/**
 * 结论：map比forEach内存和时间更快
 * 疑问：为啥？
 * 返回不包含item的数组
 * @param {*} arr
 * @param {*} item
 * @returns
 */

function remove1(arr, item) {
  //0.6ms
  var newarr = [];
  arr.map((ele) => {
    if (ele != item) {
      newarr.push(ele);
    }
  });
  return newarr;
}
const arr = [2, 1, 2];

console.time("test");
const res = remove(arr, 2);
console.timeEnd("test");
console.log("arr: ", arr);

function remove(arr, item) {
  // 12.625ms :
  // 先拷贝：注意：先深拷贝一份
  let res = JSON.parse(JSON.stringify(arr));
  arr.map((ele, i) => {
    if (ele != item) {
      res.splice(i, 1);
    }
  });
  //   for (let i = 0; i < res.length; i++) {
  //     if (res[i] === item) {
  //       res.splice(i, 1);
  //     }
  //   }
  return res;
}
