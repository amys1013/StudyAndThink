// 引入样式
import './style/index.less'


console.log(`22`);

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
 
// const food = new Food();
// food.change();
// console.log(food.Y);

// 定义记分牌的类
class ScorePanel { 
    // 用来记录分数和等级
    score = 0;
    level = 1;
    // 分数和等级所在的元素，在构造函数中进行初始化；
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxLevel: number;
    constructor(maxLevel:number = 10) { 
        this.scoreEle = document.querySelector('.score')!;
        this.levelEle = document.querySelector('.level')!;
        this.maxLevel = maxLevel;
    }
    //加分
    addScore() { 
        this.score++;
        // 每10分进行升一级；
        if (this.score % 10 === 0) { 
            this.levelUp();
        }
        this.scoreEle.innerHTML = this.score + '';
    }

    // 加等级
    levelUp() { 
        if (this.level < this.maxLevel) { 
            this.level++;
            this.levelEle.innerHTML = this.level +'';
        }
    }
}

// const scorePanele = new ScorePanel();

// for (let i = 0; i < 31; i++) { 
//     scorePanele.addScore();
// }

// scorePanele.levelUp();
