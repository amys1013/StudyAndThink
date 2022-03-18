define("m", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hi = void 0;
    exports.hi = '你好';
    let b = 20;
    let c = 'hello';
    console.log(b, c);
});
define("app", ["require", "exports", "m"], function (require, exports, m_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let a = 10;
    console.log(m_js_1.hi);
    console.log(a);
    console.log(`22`);
    let shan = 1000;
    function fn(a, b) {
        return a + b;
    }
    function fn2() {
        alert(this);
    }
    let box1 = document.getElementById('box1');
    box1 === null || box1 === void 0 ? void 0 : box1.addEventListener('click', function () {
        alert('hello');
    });
});
