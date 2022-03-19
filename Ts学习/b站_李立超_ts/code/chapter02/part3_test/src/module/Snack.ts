class Snack {
  // 表示蛇的元素
  snackEle: HTMLElement;
  head: HTMLElement;
  bodies: HTMLCollection;

  constructor() {
    this.snackEle = document.querySelector("#snack")!;
    this.head = document.querySelector("#snack > div") as HTMLElement;
    this.bodies = this.snackEle!.getElementsByTagName("div");
  }

  // 获取蛇头的坐标
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }

  set X(value: number) {
    if (value < 0 || value > 290) {
      throw Error("蛇撞墙了");
    }
    

      //设置的水平修改坐标，在左移动的时候，禁止右
      //如何知道掉头了？判断舌头和第二节是否一样---先判断有没有第二节
      if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
          // 直接将游戏结束
          // 应该将蛇朝反方向继续移动
          if (value > this.X)//证明是向右走,应该发生掉头，使蛇继续按照左走；
          {
              value = this.X - 10;
          } else { 
            value = this.X + 10;
          }
    }
    
    
        this.moveBody();
    this.head.style.left = value + "px";
    this.checkHeadBody();
      
  
  }

  set Y(value: number) {
    if (value < 0 || value > 290) {
      throw Error("蛇撞墙了");
      }
      if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
        // 直接将游戏结束
        // 应该将蛇朝反方向继续移动
        if (value > this.Y)//证明是向右走,应该发生掉头，使蛇继续按照左走；
        {
            value = this.Y - 10;
        } else { 
          value = this.Y + 10;
        }
    }
    this.moveBody();
    this.head.style.top = value + "px";
    this.checkHeadBody();
  }
  // 蛇增加身体---向snack里面添加div
  addBody() {
    // "beforeend": 位置
    // 就在元素内部，在它的最后一个子元素之后。
    this.snackEle.insertAdjacentHTML("beforeend", "<div></div>");
  }

  // 蛇身体移动的方法
  // 下一截都要移动到前一截的位置；（要从后往前改）
  moveBody() {
    //   这里做一个类型断言，因为报错offsetLeft不存在Element中，，this.bodies[i - 1]里面的类型是element
    // 理解为TS的缺点，也是优点，避免出错；
    for (let i = this.bodies.length - 1; i > 0; i--) {
      (this.bodies[i] as HTMLElement).style.top =
        (this.bodies[i - 1] as HTMLElement).offsetTop + "px";
      (this.bodies[i] as HTMLElement).style.left =
        (this.bodies[i - 1] as HTMLElement).offsetLeft + "px";
    }
  }


  // 检查头和身体有没有相撞
  checkHeadBody() { 
    // 获取所有的身体，判断是否和蛇头产生重叠；

    let flag = false;
    for (let i = 1; i < this.bodies.length; i++) { 
      if (((this.bodies[i] as HTMLElement).offsetLeft === this.X) && ((this.bodies[i] as HTMLElement).offsetTop === this.Y)) { 
        flag = true;
        throw Error('撞到自己了。')
      }
    }
    
  
    
    // const flag = this.bodies.find((item as HTMLElement) => { 
    //   return item.offsetTop === this.X;
    // })
    // console.log(`flag`, flag);
  }
}

export default Snack;
