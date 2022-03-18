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

export default ScorePanel;