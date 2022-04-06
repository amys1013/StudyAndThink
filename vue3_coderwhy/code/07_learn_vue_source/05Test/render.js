// 渲染函数
// 1.通过h函数来创建一个VNode

const h = (tag, props, children) => {
  // 返回的是一个VNode,就是一个javascript对象
  return {
    tag,
    props,
    children,
  };
};

// 挂载功能 -- 将vnode挂载container元素上面
const mount = (vnode, container) => {
  // vnode->转成真实的element;并且vnode上面会保留一份真实d元素，后面会用到的
  // 由于javascripe语言
  //1.创建出真实元素，并在vnode上面保存一份；
  const { tag, props, children } = vnode;
  const el = (vnode.el = document.createElement(tag));

  //2.处理props
  if (props) {
    for (const key in props) {
      //   有可能value是函数，key是对应元素需要绑定的事件；这边边界判断
      const value = props[key];
      //如果key是以“on”开头的,则给元素添加事件，addEventListner添加事件是没有on的
      if (key.startsWith("on")) {
        el.addEventListener(key.slice(2).toLocaleLowerCase(), value);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  //3.处理children
  if (children) {
    //3.1 如果是字符串类型
    if (typeof children === "string") {
      el.textContent = children;
    } else {
      // 如果是数组形式；
      children.forEach((item) => {
        // 由于你们是挂载在最新创建的el元素上面，则传递el
        mount(item, el);
      });
    }
    }
    

    //4.将el挂载在container中
    container.appendChild(el);
};
