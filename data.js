// function foo() {
//     console.log('this: ', this);
// }
// const test = 'abc'
// 双指针类型题目练习
/**
 *
 * @param {*} height 传入的木棍的高度数组
 * @returns 最大盛水面积
 * 最大盛水面积：maxArea = min(height[i],height[j]) * (j - i)
 */
function maxArea(height) {
  let left = 0;
  let right = height.length;
  let maxValue = 0;

  while (left < right) {
    // 盛水取决于最短的一边
    let hei = height[left] < height[right] ? height[left] : height[right];
    let value = hei * (right - left);

    maxValue = maxValue > value ? maxValue : value;

    // 若调整高的那边，则 min(height[i],height[j])会变得更小，则调整矮的那边；
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxValue;
}
const res = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log("res: ", res);

/**
 * leetcode-167
 * @param {*} numbers
 * @param {*} target
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  console.log("right: ", right);
  const resArr = [];

  while (left < right) {
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else if (numbers[left] + numbers[right] < target) {
      left++;
    } else if (numbers[left] + numbers[right] === target) {
      resArr.push(++left);
      resArr.push(++right);
      break;
    }
  }
  return resArr;
};

const res1 = twoSum([2, 3, 4, 5], 8);
console.log("res1: ", res1);
// var shan = foo.bind(test);

// shan();

// const array = [
//   {
//     slotId: null,
//     name: "mao",
//   },
//   { slotId: 0, name: "mao" },
// ];

// console.log("res: ", res);

// var a = () => {
//   console.log(this);
// };

// var obj = {
//   foo: a,
// };
// a();
// a.call("123");
// // obj.foo()

// var name = "mao";

// function test(name) {
//   this.name = name;
//   this.foo = () => {
//     console.log(this.name);
//   };
// }

// var tt1 = new test("person1");
// var tt2 = new test("person2");

// tt1.foo.call(tt2);

// const shan = [1, 2, 3];

// shan.forEach((item) => {
//   console.log("item: ", item);
//   console.log("this: ", this);
// });

// var test = () => {
//   console.log("test-this", this);
// };

// function testaaa() {
//   function aaa() {
//     console.log("aaa-this", this);
//   }
//   aaa();
//   console.log("s", this);
// }

// testaaa();
