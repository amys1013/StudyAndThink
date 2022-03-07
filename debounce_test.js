const debounce = function (fn, delay, immediate = false) {
  // 1.定义一个定时器，来保存上一次的定时器对象；
  let timer = null;

  //2.真正执行的函数----若没有传入参数，则inputChange里面输出event为undefined;
  const _debounce = function (...args) {
    // 来第二次的时候，取消第一次的定时；若没有if，则第一次是空，仍然取消timer，会有问题；

    if (timer) clearTimeout(timer);

    // 延迟执行
    timer = setTimeout(() => {
      // ****将fn()传递来的函数绑定到imputEl上面；---箭头函数没有this,则会去上层作用域找，则会
      fn.call(this, args);
    }, delay);
  };

  return _debounce;
};

/**
 * 传入立即执行的参数；
 * @param {*} fn
 * @param {*} delay
 * @param {*} immediate -别修改该参数；
 * @returns
 */
const debounce2 = function (fn, delay, immediate = false) {
  let timer = null;
  let isUse = false; //标志是否立即执行了

  const _debounce = function (...args) {
    if (timer) clearTimeout(timer);

    if (immediate) {
      fn.call(this, args);
      isUse = true; //立即执行后再次触发时就执行else里面的函数；
    } else {
      timer = setTimeout(() => {
        fn.call(this, args);
        isUse = false; // 再次执行后要恢复原始状态；则新的一轮仍然是：立即执行+等待时间后执行；
      }, delay);
    }
  };
  return _debounce;
};
