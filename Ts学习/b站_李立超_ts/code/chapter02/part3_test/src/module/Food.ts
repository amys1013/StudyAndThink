// 定义类
class Food {
    element: HTMLElement;
    constructor() { 
        // !表示一定非空
        this.element = document.querySelector('#food')!;
    
    }

    // 定义一个获取实物X坐标的方法
    get X() { 
        return this.element.offsetLeft;
    }

    get Y() { 
        return this.element.offsetTop;
    }
    //修改实物的方位
    // 其它的位置应该是10的倍数，且范围0-290；能取到0,290

    change() { 
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.top = top + 'px';
        this.element.style.left = left + 'px';

    }
}

export default Food;