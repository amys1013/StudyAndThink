// 一、渲染函数
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
  //1.创建出真实元素，并在vnode上面保存一份；//**************************************后面需要使用******************** */
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

//二、
// path函数将新旧VNode进行比较，做diff算法,到底要修改真实dom的哪一个地方；
const patch = (n1, n2) => {
  //1.判断类型是否一样
  if (n1.tag !== n2.tag) {
    //类型不同，要先移除原来的
    const n1EleParent = n1.el.parentElement;
    n1EleParent.removeChild(n1.el);
    mount(n2, n1EleParent);
  } else {
    // 1.先取出虚拟节点上的真实节点；并在n2中进行保存---为什么连等可以？
    const el =n2.el= n1.el;
    

    //2.处理props--类型是一样的，先旧节点的属性已经存在，则替换，没有，则增加属性；
    const oldProps = n1.props || [];

    const newProps = n2.props || [];
    //2.1获取所有的newProps添加到el
    for (const key in newProps) {
      const oldValue = oldProps[key];
      const newValue = newProps[key];
      if (oldValue !== newValue) {
        if (key.startsWith("on")) {
          el.addEventListener(key.slice(2).toLocaleLowerCase(), newValue);
        } else {
          el.setAttribute(key, newValue);
        }
      }
    }
    //2.删除旧的props
    for (const key in oldProps) {
      if (!(key in newProps)) {
        if (key.startsWith("on")) {
          const value = oldProps(key); 
          el.removeEventListener(key.slice(2).toLocaleLowerCase(),value);
        } else {
          el.removeAttribute(key);
        }
      }
    }

    //3.处理children
  }
};
