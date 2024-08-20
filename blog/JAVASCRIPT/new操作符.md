# `new`操作符

`new`操作符的执行过程：

1. 在内存中创建一个新对象`obj`。
2. 将对象的原型指向构造函数的原型。即设置原型链，`obj._proto_ = 构造函数.prototype`。
3. 让构造函数内部的`this`指向创建的新对象`obj`，执行构造函数（为这个新对象添加属性）。
4. 判断构造函数的返回值类型，如果是值类型，返回创建的新对象。如果是引用类型，就返回这个引用类型的对象。

用`js`模拟一个`new`函数：

```js
function _new() {
  // 1. 创建一个对象
  let target = {};
  let [constructor, ...args] = [...arguments]; // 第一个参数是构造函数

  // 2. 原型链连接
  target.__proto__ = constructor.prototype;

  // 3. 将构造函数的属性和方法添加到这个新的空对象上
  let result = constructor.apply(target, args);
  if (result && (typeof result == "object" || typeof result == "function")) {
    // 如果构造函数返回的结果是一个对象，就返回这个对象
    return result;
  }
  // 如果构造函数返回的不是一个对象，就返回创建的新对象。
  return target;
}
let p2 = _new(Person, "小花");
console.log(p2.name); // 小花
console.log(p2 instanceof Person); // true
```

## `new`箭头函数

会报错，箭头函数不能作为构造函数，箭头函数没有`prototype`属性。
