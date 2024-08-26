# 手写`diff`算法

搭建环境：

```
npm init -y
cnpm install webpack@5 webpack-cli@3 webpack-dev-server@3 -S
新建webpack.config.js
配置webpack.config.js
```

```js
// webpack.config.js
module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "./js/[name].js",
  },
  devServer: {
    contentBase: "./public",
    inline: true,
  },
};
```

1. 生成虚拟`DOM`：

```js
// dom/h.js
import vnode from "./vnode";
export default function (sel, data, params) {
  // h函数的第三个参数是字符串类型（意味着：它没有子元素）
  if (typeof params == "string") {
    return vnode(sel, data, undefined, params, undefined);
  } else if (Array.isArray(params)) {
    // h函数的第三个参数是数组（意味着：它有子元素）
    let children = [];
    for (let item of params) {
      children.push(item);
    }

    return vnode(sel, data, children, undefined, undefined);
  }
}
```

```js
// dom/vnode.js
export default function (sel, data, children, text, elm) {
  let key = data.key;
  return { sel, data, children, text, elm, key };
}
```

使用：

```js
// index.js
import h from "./dom/h";
let vnode1 = h("div", {}, "你好");
let vnode2 = h("ul", {}, [
  h("li", {}, "a"),
  h("li", {}, "b"),
  h("li", {}, "c"),
]);
```

2. `patch`：遵循`新旧节点替换的规则`。

```js
// dom/patch.js
// oldVnode ===> 旧的虚拟节点
// newVnode ===> 新的虚拟节点
import vnode from "./vnode";
import createElement from "./createElement";
import patchVnode from "./patchVnode";
export default function (oldVnode, newVnode) {
  // 如果oldVnode没有sel，就证明是非虚拟节点（需要把它变成虚拟节点）
  if (oldVnode.sel == undefined) {
    oldVnode = vnode(
      oldVnode.tabName.toLowerCase(), // sel
      {}, // data
      [],
      undefined,
      oldVnode // elm
    );
  }

  // 判断旧的虚拟节点和新的虚拟节点，是不是同一个节点
  if (oldVnode.sel == newVnode.sel) {
    // 判断的条件就复杂了（很多）。
    patchVnode(oldVnode, newVnode);
  } else {
    // 不是同一个节点，那么就暴力删除旧的节点，创建插入新的节点。

    // 把新的虚拟节点创建为dom节点
    let newVnodeElm = createElement(newVnode);
    // 获取旧的虚拟节点的elm就是真正节点
    let oldVnodeElm = oldVnode.elm;
    // 创建新的节点
    if (newVnodeElm) {
      oldVnodeElm.parentNode.insertBefore(newVnodeElm);
    }
    // 删除旧的节点
    oldVnodeElm.parentNode.removeChild(oldVnodeElm);
  }
}
```

```js
// dom/createElement.js
// vnode为新节点，就是要创建的节点
export default function createElement(vnode) {
  // 创建dom节点
  let domNode = document.createElement(vnode.sel);

  // 判断有没有子节点，children是不是为undefined
  if (vnode.children == undefined) {
    donNode.innerText = vnode.text;
  } else if (Array.isArray(vnode.children)) {
    // 新的节点有子节点，需要递归创建节点
    for (let child of vnode.children) {
      let childDom = createElement(child);
      domNode.appendChild(childDom);
    }
  }
  // 补充elm属性
  vnode.elm = domNode;
  return domNode;
}
```

```js
// dom/patchVnode.js
import createElement from "./createElement";
import updateChildren from "./updateChildren";
export default function patchVnode(oldVnode, newVnode) {
  // 判断新的节点有没有children
  if (newVnode.children == undefined) {
    // 新节点没有子节点
    // 新节点的文本和旧节点的文本内容是不是一样的
    if (newVnode.text !== oldVnode.text) {
      oldVnode.elm.innerText = newVnode.text;
    }
  } else {
    // 新节点有子节点

    // 新节点有子节点，旧节点也有子节点
    if (oldVnode.children !== undefined && oldVnode.children.length > 0) {
      // 最复杂的情况，diff算法的核心
      updateChildren(oldVnode.elm, oldVnode.children, newVnode.children);
    } else {
      // 新节点有子节点，旧节点没有子节点

      // 把旧节点的内容清空
      oldVnode.elm.innerHTML = "";

      // 遍历新节点的子节点，创建dom元素，添加到页面中
      for (let child of newVnode.children) {
        let childDom = createElement(child);
        oldVnode.elm.appendChild(childDom);
      }
    }
  }
}
```

```js
// dom/updateChildren.js
import patchVnode from "./patchVnode";
import createElement from "./createElement";
// 判断两个虚拟节点是否为同一个节点
function sameVnode(vNode1, vNode2) {
  return vNode1.key == vNode2.key;
}

// 参数一：真实dom节点
// 参数一：旧的虚拟节点
// 参数一：新的虚拟节点
export default (parentElm, oldCh, newCh) => {
  let oldStartIdx = 0; // 旧前的指针
  let oldEndIdx = oldCh.length - 1; // 旧后的指针
  let newStartIdx = 0; // 新前的指针
  let newEndIdx = newCh.length - 1; // 新后的指针

  let oldStartVnode = oldCh[oldStartIdx]; // 旧前虚拟节点
  let oldEndVnode = oldCh[oldEndIdx]; // 旧后虚拟节点
  let newStartVnode = newCh[newStartIdx]; // 新前虚拟节点
  let newEndVnode = newCh[newEndIdx]; // 新后虚拟节点

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == undefined) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == undefined) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      // 第一种情况：旧前 和 新前
      console.log(1);
      patchVnode(oldStartVnode, newStartVnode);

      if (newStartVnode) {
        newStartVnode.elm = oldStartVnode?.elm;
      }

      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      // 第二种情况：旧后 和 新后
      console.log(2);
      patchVnode(oldEndVnode, newEndVnode);

      if (newEndVnode) {
        newEndVnode.elm = oldEndVnode?.elm;
      }

      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      // 第三种情况：旧前 和 新后
      console.log(3);
      patchVnode(oldStartVnode, newEndVnode);

      if (newEndVnode) {
        newEndVnode.elm = oldStartVnode?.elm;
      }

      // 把旧前指定的节点移动到旧后指向的节点的后面
      parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling);

      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      // 第四种情况：旧后 和 新前
      console.log(4);
      patchVnode(oldEndVnode, newStartVnode);

      if (newStartVnode) {
        newStartVnode.elm = oldEndVnode?.elm;
      }

      // 把旧后指定的节点移动到旧前指向的节点的前面
      parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);

      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      // 第五种情况：以上都不满足条件 --> 查找
      console.log(5);
      // 创建一个对象，存放虚拟节点的（判断新旧有没有相同节点）
      const keyMap = {};
      for (let i = oldStartIdx; i < oldEndIdx; i++) {
        const key = olcCH[i]?.key;
        if (key) {
          keyMap[key] = i;
        }
      }
      // 在旧节点中查找新前指向的节点
      let idxInOld = keyMap[newStartVnode.key];
      if (idxInOld) {
        // 如果有 ===> 说明该数据在新旧虚拟节点中都存在
        const elmMove = oldCh[idxInOld];
        patchVnode(elmMove, newStartVnode);
        // 处理过的节点，在旧虚拟节点数组中设置为undefined
        oldCh[idxInOld] = undefined;
        parentElm.insertBefore(elmMove.elm, oldStartVnode.elm);
      } else {
        // 如果没有找到 ===> 说明是一个新的节点【创建】
        parentElm.insertBefore(createElement(newStartVnode), oldStartVnode.elm);
      }

      // 新数据（指针++）
      newStartVnode = newCh[++newStartIdx];
    }
  }

  // 结束while，只有两种情况（新增和删除）
  // 1. oldStartIdx > oldEndIdx
  // 2. new StartIdx > newEndIdx
  if (oldStartIdx > oldEndIdx) {
    // 进入新增操作
    const before = newCh[newEndIdx + 1] ? newCh[newEndIdx + 1].elm : null;
    for (let i = newStartIdx; i <= newEndIdx; i++) {
      parentElm.insertBefore(createElement(newCh[i]), before);
    }
  } else {
    // 进入删除操作
    for (let i = oldStartIdx; i <= oldEndIdx; i++) {
      parentElm.removeChild(oldCh[i].elm);
    }
  }
};
```

使用：

```js
// index.js
import h from "./dom/h";
import patch from "./dom/patch";

// 获取到了真实的dom节点
let container = document.getElementById("container");

// 虚拟节点
let vnode1 = h("div", {}, "你好");
let vnode2 = h("ul", {}, [
  h("li", { key: "a" }, "a"),
  h("li", { key: "b" }, "b"),
  h("li", { key: "c" }, "c"),
  h("li", { key: "d" }, "d"),
]);

// 3 3 3 1
let vnode3 = h("ul", {}, [
  h("li", { key: "d" }, "d"),
  h("li", { key: "c" }, "c"),
  h("li", { key: "b" }, "b"),
  h("li", { key: "a" }, "a"),
]);

patch(container, vnode1);
// patch(container, vnode2);
```
