# `async await`

## `async await`

`async`：

`async`，顾名思义，异步。`async`函数是对`Generator`函数的改进，`async`函数必定返回`Promise`，我们把所有返回`Promise`的函数都可以认为是异步函数。特点体现在以下四点：

1. 内置执行器。
2. 更好的语义。
3. 更广的适用性。
4. 返回值是`Promise`。

`await`：

`await`，顾名思义，等待。正常情况下，`await`命令后面是一个`Promise`对象，返回该对象的结果（可能是返回成功的值或者是返回失败的值）。如果不是`Promise`对象，就直接返回对应的值。另一种情况是，`await`命令后面是一个`thenable `对象（即定义`then`方法的对象），那么`await`会将其等同于`Promise`对象。给人的感觉就像里面的操作是同步一样，但其本质`async`还是异步操作。

使用`async await`首先有两个条件：

1. `await`只能放在`async`函数里。
2. `await`后面接一个会`return new promise`的函数并执行它。

`async await`可以让异步代码看起来像同步代码，方便控制顺序。

## `async await`串行与并行

```js
// 线程休眠
function sleep(second) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(second);
    }, second);
  });
}

async function test() {
  console.log("1");
  await sleep(3000);
  console.log("2");
}

test();
```

```js
function sleep(second) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(Math.random());
      resolve(second);
    }, second);
  });
}
// 串行执行
async function chuanxing() {
  await sleep(2000);
  await sleep(2000);
  await sleep(2000);
}

// 并发执行
async function bingxing() {
  let tasks = [];
  for (let i = 0; i < 3; i++) {
    tasks.push(sleep(2000));
  }
  await Promise.all(tasks);
}

chuanxing();
bingxing();
```

## `promise`和`async await`是为了解决什么问题

`promise`和`async await`都是`es6`的新增特性，都是处理异步问题的好办法。
