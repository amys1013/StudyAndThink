// 控制其他的所有的类

import Food from "./Food.ts";
import Snack from "./Snack.ts";
import ScorePanel from "./ScorePanel.ts";

class GameControl {
  // 定义3个属性
  snack: Snack;
  food: Food;
  scorePanel: ScorePanel;
  // 标志蛇往哪个方向走；
  direction: String = "";

  // 创建记录是否结束：撞墙了
  isLive = true;

  constructor() {
    this.snack = new Snack();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }

  // 游戏的初始化方法
  init() {
    // 绑定键盘按键按下的事件；
    // --- 【注意】这里是给document加事件，则this.keydownHandler里面的this是指向document的
    // 这里是回调函数，则用Bind，call会立即执行；
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    this.run();
  }
  /**
   * ArrowUp
   * ArrowDown
   * ArrowLeft
   * ArrowRight
   */
  keydownHandler(event: KeyboardEvent) {
    //   console.log(this);--- 如果上面不加bind，则这里的this应该是document

    this.direction = event.key;
  }
  // 创建蛇移动的方法
  run() {
    /**
     * 根据direction进行移动
     * 向上：top减小
     * 向下：top增大
     * 向左：left减小
     * 向右;left增大
     */

    // 获取蛇现在的坐标
    let X = this.snack.X;
    let Y = this.snack.Y;
    this.isCheckEat(X, Y);

    console.log("this.direction: ", this.direction);
    console.log("Y: ", Y);

    try {
      switch (this.direction) {
        case "ArrowUp":
          this.snack.Y = Y - 10;
          break;
        case "ArrowDown":
          this.snack.Y = Y + 10;
          break;
        case "ArrowLeft":
          this.snack.X = X - 10;
          break;
        case "ArrowRight":
          this.snack.X = X + 10;
          break;
      }
    } catch (e) {
      console.log("接收到错误 ");
      // alert(`撞墙了；${e.message}`)
      alert("撞墙了");
      // isLive应该要也可以放入到snack里面
      this.isLive = false;
    }

    // 开启定时
    //   setTimeout(()=> { this.run(); },300)
    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);

    console.log("Y: ", this.snack.Y);
  }

  // 检查蛇是否吃到了实物,参数为蛇的坐标
  isCheckEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 1.食物位置改变
      this.food.change();

      // 2.分数增加
      this.scorePanel.addScore();

      //3.蛇增加一截；
      this.snack.addBody();
    }
  }
}

export default GameControl;
