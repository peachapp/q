# ES6

## ECMAScript

**ECMAScript**是一种由[Ecma 国际](https://baike.baidu.com/item/%E6%AC%A7%E6%B4%B2%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%88%B6%E9%80%A0%E5%95%86%E5%8D%8F%E4%BC%9A/2052072?fromtitle=Ecma%E5%9B%BD%E9%99%85&fromid=7769180)（前身为[欧洲计算机制造商协会](https://baike.baidu.com/item/%E6%AC%A7%E6%B4%B2%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%88%B6%E9%80%A0%E5%95%86%E5%8D%8F%E4%BC%9A/2052072)，European Computer Manufacturers Association）通过 ECMA-262 标准化的脚本[程序设计语言](https://baike.baidu.com/item/%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E8%AF%AD%E8%A8%80)。也可以说是**JavaScript 的一个标准**。

在程序员的世界只有两个版本：`ES5`和`ES6`,说是`ES6`，实际上是 2015 年发布的，也是大前端时代正式开始的时间，也就是说以 2015 年为界限，2015 年之前叫`ES5`，2016 年之后则统称`ES6`。关于 ES6 特性的可看看阮一峰老师的[《ES6 标准入门》](https://es6.ruanyifeng.com/)。

## 声明

### let & const

`let`、`const`和`var`之间的区别：

- `var`声明的变量存在变量提升，而`let`、`const`不存在变量提升的问题。变量提升：变量是否可在声明前调用。
- `var`不存在块级作用域，`let`和`const`存在块级作用域。
- `var`可以重复声明变量，`let`和`const`在一个作用域内不允许重复声明，并且`const`声明的是一个**只读**的变量，并且一定要赋值。

另外，当 const 声明了一个对象，对象能的属性可以改变，因为：const 声明的 obj 只保存着其对象的引用地址，只要地址不变，便不会出错。

## 解构赋值

### 数组的解构

- 按次序排列。
- 可以从数组中提取值，按照对应位置，对变量赋值,这种写法属于模式匹配。
- 可以使用`...`进行解构，代表剩余全部。
- 如果原数组没有，则在对应值上可设置默认值，如果不设置，则为`undefined`。

```js
 let [a, b, c] = [1, 2, 3]
 console.log(a, b, c) // 1 2 3

 let [a, , c] = [1, 2, 3]
 console.log(a, , c) // 1 3

 let [a, b, ...c] = [1, 2, 3, 4, 5]
 console.log(a, b, c) // 1 2 [3, 4, 5]

 let [a, b, ...c] = [1]
 console.log(a, b, c) // 1 undefined []

 let [a = 1, b = a] = []
 console.log(a, b) // 1 1

 let [a = 1, b = a] = [2]
 console.log(a, b) // 2 2
```

### 对象的结构

- 无次序行，只需变量与属性名同名即可。
- 如果变量和对象的属性名没有重复，则会导致变量的值为`undefined`。
- 注意，`:`相当于别名。

```js
let { a, b } = { a: 1, b: 2 };
console.log(a, b); // 1 2

let { a } = { b: 2 };
console.log(a); // undefined

let { a, b = 2 } = { a: 1 };
console.log(a, b); // 1 2

let { a: b = 2 } = { a: 1 };
console.log(a); // 不存在 a 这个变量
console.log(b); // 1
```

### 字符串的解构

- 字符串也可以进行解构，它相当于转化为类似数组的对象。
- 自带一个`length`属性，代表个数。

```js
let [a, b, c, d, e] = "hello";
console.log(a, b, c, d, e); // h e l l o

let { length } = "hello";
console.log(length); // 5
```

### 数字和布尔值的解构

- 解构的只要不是对象或数组，都会先将其转化为对象，所以数字类型和布尔类型也转化为对象。

```js
let { toString: s } = 123;
console.log(s === Number.prototype.toString); // true

let { toString: s } = true;
console.log(s === Boolean.prototype.toString); // true
```

### 函数参数的解构

- 函数的参数可以进行解构，也可以带有默认值。
- `undefined`可以触发默认值。
- **注意两种指定默认值的方法，一种是对变量指定，一种是对参数指定，会得到不同的答案**。

```js
let arr = [[1,2], [3, 4]]
let res = arr.map([a, b] => a + b)
console.log(res) // [3, 7]

let arr = [1, undefined, 2]
let res = arr.map((a = 'test') => a);
console.log(res) // [1, 'test', 2]

let func = ({x, y} = {x: 0, y: 0}) => {
  return [x, y]
}
console.log(func(1, 2)) // [undefined, undefined]
console.log(func()) // [0, 0]
console.log(func({})) // [undefined, undefined]
console.log(func({x: 1})) // [1, undefined]


let func = ({x=0, y=0}) => {
  return [x, y]
}

console.log(func({x:1,y:2})) // [1, 2]
console.log(func()) // error
console.log(func({})) // [0, 0]
console.log(func({x: 1})) // [1, 0]
```

## 正则扩展

正则其实是一个非常难懂的知识点，要是有人能完全掌握，那真的是非常厉害，在这里就简单的说下。

首先分为两种风格：`JS风格`和`perl风格`。

JS 风格: RegExp()

```js
let re = new RegExp("a"); //查找一个字符串内是否有a
let re = new RegExp("a", "i"); //第一个是查找的对象，第二个是选项
```

perl 风格： / 规则 /选项,且可以跟多个，不分顺序

```js
let re = /a/; //查找一个字符串内是否有a
let re = /a/i; //第一个是查找的对象，第二个是选项
```

这里介绍一个正则表达式在线测试（附有常见的正则表达式）：[正则在线测试](https://www.jyshare.com/front-end/854/)

## 字符串扩展

### 新增方法

1. `Unicode`： 大括号包含表示 Unicode 字符。
2. `codePointAt()`：返回字符对应码点，与`fromCharCode()`对应。
3. `String.fromCharCode()`：将对对应的码点返回为字符，与`codePointAt()`对应。
4. `String.raw()`：返回把字符串所有变量替换且对斜杠进行转义的结果。
5. `startsWith()`：返回布尔值，表示参数字符串是否在原字符串的头部。
6. `endsWith()`：返回布尔值，表示参数字符串是否在原字符串的尾部。
7. `repeat()`：方法返回一个新字符串，表示将原字符串重复 n 次。
8. `for-of`：遍历。
9. `includes()`：返回布尔值，表示是否找到了参数字符串。
10. `trimStart()`：方法从字符串的开头删除空格。`trimLeft()`是此方法的别名。
11. `trimEnd()`：方法从一个字符串的末端移除空白字符。`trimRight()`是这个方法的别名。

```js
//Unicode
console.log("a", "\u0061"); // a a
console.log("d", "\u{4E25}"); // d 严

let str = "Domesy";

//codePointAt()
console.log(str.codePointAt(0)); // 68

//String.fromCharCode()
console.log(String.fromCharCode(68)); // D

//String.raw()
console.log(String.raw`Hi\n${1 + 2}`); // Hi\n3
console.log(`Hi\n${1 + 2}`); // Hi 3

let str = "Domesy";

//startsWith()
console.log(str.startsWith("D")); // true
console.log(str.startsWith("s")); // false

//endsWith()
console.log(str.endsWith("y")); // true
console.log(str.endsWith("s")); // false

//repeat(): 字符串复制指定次数，如果小数则会向下取整
console.log(str.repeat(2)); // DomesyDomesy
console.log(str.repeat(2.9)); // DomesyDomesy

// 遍历：for-of
for (let code of str) {
  console.log(code); // 一次返回 D o m e s y
}

//includes()
console.log(str.includes("s")); // true
console.log(str.includes("a")); // false

// trimStart()
const string = "   Hello world!   ";
console.log(string.trimStart()); // "Hello world!   "
console.log(string.trimLeft()); // "Hello world!   "

// trimEnd()
const string = "   Hello world!   ";
console.log(string.trimEnd()); // "   Hello world!"
console.log(string.trimRight()); // "   Hello world!"
```

### 字符串模板

使用**`**，可单行可多行插入。

```js
let str = `Dome
    sy`;
console.log(str); //会自动换行

// Dome
// sy
```

### 标签模板

```js
const str = {
  name: "小杜杜",
  info: "大家好",
};

console.log(`${str.info}, 我是${str.name}`); // 大家好，我是小杜杜
```

## 数组扩展

### 新增方法

1. `Array.of()`：将一组值转化为数组，返回一个新数组，并且不考虑参数的数量或类型。
2. `copyWithin()`：把指定位置的成员复制到其他位置，返回原数组。
3. `find()`：返回第一个符合条件的值。
4. `findIndex()`： 返回第一个符合条件的索引。
5. `keys()`：对键名的遍历，返回一个遍历器对象，可用`for-of`循环。
6. `values()`：与`keys()`用法一样，不过是对`键值`的遍历。
7. `entries()`：与`keys()`用法一样，不过是对`键值对`的遍历。
8. `Array.from()`：从一个类似数组或可迭代对象中创建一个新的数组实例。
9. `fill()`：使用制定的元素填充数组，返回原数组。
10. `includes()`：判断是否包含某一元素，返回布尔值，对`NaN`也有效，但不能进行定位。

```js
let arr = [1, 2, 3, 4, 5];

//Array.of()
let arr1 = Array.of(1, 2, 3);
console.log(arr1); // [1, 2, 3]

//copyWithin(): 三个参数 (target, start = 0, end = this.length)
// target: 目标的位置
// start: 开始位置，可以省略，可以是负数。
// end: 结束位置，可以省略，可以是负数，实际位置是end-1。
console.log(arr.copyWithin(0, 3, 5)); // [4, 5, 3, 4, 5]

//find()
console.log(arr.find((item) => item > 3)); // 4

//findIndex()
console.log(arr.findIndex((item) => item > 3)); // 3

// keys()
for (let index of arr.keys()) {
  console.log(index); // 一次返回 0 1 2 3 4
}

// values()
for (let index of arr.values()) {
  console.log(index); // 一次返回 1 2 3 4 5
}

// entries()
for (let index of arr.entries()) {
  console.log(index); // 一次返回 [0, 1] [1, 2] [2, 3] [3, 4] [4, 5]
}

let arr = [1, 2, 3, 4, 5];

// Array.from(): 遍历的可以是伪数组，如 String、Set结构，Node节点
let arr1 = Array.from([1, 3, 5], (item) => {
  return item * 2;
});
console.log(arr1); // [2, 6, 10]

// fill(): 三个参数 (target, start = 0, end = this.length)
// target: 目标的位置
// start: 开始位置，可以省略，可以是负数。
// end: 结束位置，可以省略，可以是负数，实际位置是end-1。
console.log(arr.fill(7)); // [7, 7, 7, 7, 7]
console.log(arr.fill(7, 1, 3)); // [1, 7, 7, 4, 5]

let arr = [1, 2, 3, 4];

//includes()
console.log(arr.includes(3)); // true
console.log([1, 2, NaN].includes(NaN)); // true
```

### 扩展运算符(`...`)

```js
// 其作用为展开数组
let arr = [3, 4, 5];
console.log(...arr); // 3 4 5

let arr1 = [1, 2, ...arr];
console.log(...arr1); // 1 2 3 4 5
```

## 对象扩展

### 新增方法

1. `Object.getPrototypeOf()`：返回对象的原型对象。
2. `Object.setPrototypeOf()`：设置对象的原型对象。
3. `proto`：返回或设置对象的原型对象。
4. `Object.getOwnPropertyNames()`: 返回对象自身`非Symbol`属性键组成的数组。
5. `Object.getOwnPropertySymbols()`: 返回对象自身`Symbol`属性键组成的数组。
6. `Reflect.ownKeys()`: 返回对象自身全部属性键组成的数组。
7. `Object.is()`：判断两个对象是否相等，数组指向的地址不同，所以只要是数组比较，必定为`false`。
8. `for-in`：遍历。
9. `Object.keys()`：返回属性名。
10. `Object.assign()`： 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，返回目标对象,此时的目标对象也会改变。

```js
//Object.is()
console.log(Object.is("abc", "abc")); // true
console.log(Object.is([], [])); // false

//遍历：for-in
let obj = { name: "Domesy", value: "React" };

for (let key in obj) {
  console.log(key); // 依次返回属性值 name value
  console.log(obj[key]); // 依次返回属性值 Domesy React
}

//Object.keys()
console.log(Object.keys(obj)); // ['name', 'value']

//Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const result = Object.assign(target, source);

console.log(result); // {a: 1, b: 4, c: 5}
console.log(target); // {a: 1, b: 4, c: 5}
```

### 简洁表示法

```js
let a = 1;
let b = 2;
let obj = { a, b };
console.log(obj); // { a: 1, b: 2 }

let method = {
  hello() {
    console.log("hello");
  },
};
console.log(method.hello()); // hello
```

### 属性表达式: 直接用变量或者表达式来定义 Object 的 key

```js
let a = "b";
let obj = {
  [a]: "c",
};
console.log(obj); // {b : "c"}
```

### 扩展运算符(`...`)

```js
// 其作用为展开数组
let { a, b, ...c } = { a: 1, b: 2, c: 3, d: 4 };
console.log(c); // {c: 3, d: 4}

let obj1 = { c: 3 };
let obj = { a: 1, b: 2, ...obj1 };
console.log(obj); // { a: 1, b: 2, c: 3}
```

## 数值扩展

1. 二进制：`0b`或`0B`开头，表示二进制。
2. 八进制：`00`或`0O`开头，表示二进制。
3. `Number.isFinite()`：用来检查一个数值是否有限的，返回布尔值。
4. `Number.isNaN()`：用来检查一个数值是否是`NaN`，返回布尔值。
5. `Number.isInteger()`：用来检查一个数值是否是整数，返回布尔值。
6. `Number.isSafeInteger()`：用来检查一个数值是否是“安全整数”（`safe integer`），返回布尔值。
7. `Math.cbrt()`：返回立方根。
8. `Math.abrt()`：返回立方根。
9. `Math.cbrt()`：返回立方根。
10. `Math.clz32()`：返回数值的 32 位无符号整数形式。
11. `Math.imul()`：返回两个数值相乘。
12. `Math.fround()`：返回数值的 32 位单精度浮点数形式。
13. `Math.hypot()`：返回所有数值平方和的平方根。
14. `Math.expm1()`：返回`e^n - 1`。
15. `Math.log1p()`：返回`1 + n`的自然对数(`Math.log(1 + n)`)。
16. `Math.log10()`：返回以 10 为底的 n 的对数。
17. `Math.log2()`：返回以 2 为底的 n 的对数。
18. `Math.trunc()`：将数字的小数部分去掉，只保留整数部分。
19. `Math.sign()`：返回数值类型 正数为 1、负数为-1、正零 0、负零 -0、NaN。
20. `Math.abrt()`：返回立方根。
21. `Math.sinh()`：返回双曲正弦。
22. `Math.cosh()`：返回双曲余弦。
23. `Math.tanh()`：返回双曲正切。
24. `Math.asinh()`：返回反双曲正弦。
25. `Math.acosh()`：返回反双曲余弦。
26. `Math.atanh()`：返回反双曲正切。
27. `Number.parseInt()`：返回值的整数部分，此方法等价于`parseInt`。
28. `Number.parseFloat()`：返回值得浮点数部分，此方法等价于`parseFloat`。

```js
//二进制
console.log(0b101); // 5
console.log(0o151); //105

//Number.isFinite()
console.log(Number.isFinite(7)); // true
console.log(Number.isFinite(true)); // false

//Number.isNaN()
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("true" / 0)); // true
console.log(Number.isNaN(true)); // false

//Number.isInteger()
console.log(Number.isInteger(17)); // true
console.log(Number.isInteger(17.58)); // false

//Number.isSafeInteger()
console.log(Number.isSafeInteger(3)); // true
console.log(Number.isSafeInteger(3.0)); // true
console.log(Number.isSafeInteger("3")); // false
console.log(Number.isSafeInteger(3.1)); // false

//Math.trunc()
console.log(Math.trunc(13.71)); // 13
console.log(Math.trunc(0)); // 0
console.log(Math.trunc(true)); // 1
console.log(Math.trunc(false)); // 0

//Math.sign()
console.log(Math.sign(3)); // 1
console.log(Math.sign(-3)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(-0)); // -0
console.log(Math.sign(NaN)); // NaN
console.log(Math.sign(true)); // 1
console.log(Math.sign(false)); // 0

//Math.abrt()
console.log(Math.cbrt(8)); // 2

//Number.parseInt()
console.log(Number.parseInt("6.71")); // 6
console.log(parseInt("6.71")); // 6

//Number.parseFloat()
console.log(Number.parseFloat("6.71@")); // 6.71
console.log(parseFloat("6.71@")); // 6.71
```

## 函数扩展

1. 函数参数尾逗号：允许函数最后一个参数有尾逗号。
2. 参数默认赋值具体的数值。

```js
//参数默认赋值具体的数值
let x = 1;
function fun(x, y = x) {
  console.log(x, y);
}
function fun1(c, y = x) {
  console.log(c, x, y);
}
fun(2); //2 2
fun1(1); //1 1 1
```

### Rest 参数：扩展运算符(...)

```js
function fun(...arg) {
  console.log(arg); // [1, 2, 3, 4]
}

fun(1, 2, 3, 4);
```

### 箭头函数

箭头函数是以`=>`定义的函数。

箭头函数与普通函数的区别：

- 箭头函数和普通函数的样式不同，箭头函数语法更加简洁、清晰，箭头函数是`=>`定义函数,普通函数是`function`定义函数。
- 箭头函数其实是没有`this`的，箭头函数中的`this`只取决包裹箭头函数的第一个普通函数的`this`。
- 箭头函数没有自己的`arguments`。在箭头函数中访问`arguments`实际上获得的是外层局部（函数）执行环境中的值。
- `call`、`apply`、`bind`并不会影响其`this`的指向。
- 箭头函数的`this`指向上下文 ，而普通函数的`this`并非指向上下文，需要时加入`bind(this)`。

```js
let arrow = (v) => v + 2;
console.log(arrow(1)); // 3
```

## Set

`Set`是 ES6 中新的数据结构，是类似数组，但成员的值是唯一的，没有重复的值。（`Set`没有键只有值，可以认为 键和值 都一样）

声明：

`const set = new Set()`。

属性：

- `constructor`：构造函数，返回`Set`。
- `size`：返回`Set`对象中值的个数。

方法：

- `add()`：在`Set`对象尾部添加一个元素。返回该`Set`对象。
- `delete()`：移除`Set`的中与这个值相等的元素，有则返回`true`，无则返回`false`。
- `clear()`：清除`Set`的所有元素。
- `has()`：是否存在这个值，如果存在为`true`，否则为`false`。
- `keys()`：以属性值遍历器的对象。
- `values()`：以属性值遍历器的对象。
- `entries()`：以属性值和属性值遍历器的对象。
- `forEach()`：遍历每个元素。

特别注意：

- 遍历器为`iterator`对象，按插入顺序，为`[Key, Value]`形式。
- 加入`Set`的值不会发生类型转化，所以 1 和“1”是两个不同的值。
- 在`Set`内部是通过`===`来判断，也就是说，两个对象永远不可能相同，原因是地址不同。
- 唯一的区别是`NaN`。

```js
let list = new Set();

//add()
list.add("1");
list.add(1);
console(list); // Set(2) {1, "1"}

//size
console(list.size); // 2

//delete()
list.delete("1");
console(list); // Set(1) {1}

//has()
list.has(1); // true
list.has(3); // false

//clear()
list.clear();
console(list); // Set(0) {}

let arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
let list = new Set(arr);

// keys()
for (let key of list.keys()) {
  console.log(key); // 以此打印：{id: 1} {id: 2} {id: 3}
}

//values()
for (let key of list.values()) {
  console.log(key); // 以此打印：{id: 1} {id: 2} {id: 3}
}

//entries()
for (let data of list.entries()) {
  console.log(data); // 以此打印：[{id: 1},{id: 1}] [{id: 2},{id: 2}] [{id: 3},{id: 3}]
}

//forEach
list.forEach((item) => {
  console.log(item); // 以此打印：{id: 1} {id: 2} {id: 3}
});
```

应用：

### 数组去重

需要注意一点的是`new Set`无法去重对象。

```js
let arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
];

console.log([...new Set(arr)]);
//或
console.log(Array.from(new Set(arr)));
//  [1, 'true', true, 15, false, undefined, null, NaN, 'NaN', 0, 'a']
```

### 可求并集，交集和差集

```js
let a = new Set([1, 2, 3]);
let b = new Set([2, 3, 4]);

//并集
console.log(new Set([...a, ...b])); // Set(4) {1, 2, 3, 4}

//交集
console.log(new Set([...a].filter((v) => b.has(v)))); // Set(2) {2, 3}

//差集
new Set([...a].filter((v) => !b.has(v))); //  Set(1) {1}
```

### 映射集合

```js
let set = new Set([1, 2, 3]);
console.log(new Set([...set].map((v) => v * 2))); // Set(3) {2, 4, 6}
```

### WeakSet

定义：

和`Set`的结构类似，但成员值只能为对象。

声明：

`const set = new WeakSet()`。

属性：

- `constructor`：构造函数，返回`WeakSet`。

方法：

- `add()`：在`WeakSet`对象尾部添加一个元素。返回该实例。
- `delete()`：移除`WeakSet`的中与这个值相等的元素。
- `has()`：是否存在这个值，如果存在为`true`，否则为`false`。

注意：

- `WeakSet`成员的对象都是弱引用，即垃圾回收机制不考虑该对象的应用。简单地说`WebSet`的对象无法遍历。
- 好处是，再删除实例的时候，不会出现内存泄露。

## Map

定义：

`Map`是 ES6 中新的数据结构，是类似对象，成员键是任何类型的值。

声明：

`const map = new Map()`。

属性：

- `constructor`：构造函数，返回`Map`。
- `size`：返回`Map`实例中值的个数。

方法：

- `set()`：添加`Map`后的一个键值对，返回实例。
- `get()`：返回键值对。
- `delete()`：移除`Map`的中与这个值相等的元素，有则返回`true`，无则返回`false`。
- `clear()`：清除`Map`的所有元素。
- `has()`：是否存在这个值，如果存在为`true`，否则为`false`。
- `keys()`：以属性键遍历器的对象。
- `values()`：以属性值遍历器的对象。
- `entries()`：以属性键和属性值遍历器的对象。
- `forEach()`：遍历每个元素。

### WeakMap

定义：

和`Map`的结构类似，但成员值只能为对象。

声明：

`const set = new WeakMap()`。

属性：

- `constructor`：构造函数，返回`WeakMap`。

方法：

- `set()`：添加键值对，返回实例。
- `get()`：返回键值对。
- `delete()`：删除键值对，如果存在为`true`，否则为`false`。
- `has()`：是否存在这个值，如果存在为`true`，否则为`false`。

## Symbol（原始类型）

定义：

`Symbol`是`ES6`中引入的原始数据类型，代表着独一无二的。

声明：

`const sy = Stmbol()`。

参数：

`string(可选)`。

方法：

- `Symbol.for()`：创建以参数作为描述的`Symbol`值，如存在此参数则返回原有的`Symbol`值(先搜索后创建，登记在全局环境)。
- `Symbol.keyFor()`：返回已登记的`Symbol`值的描述(只能返回`Symbol.for()`的`key`)。
- `Object.getOwnPropertySymbols()`：返回对象中所有用作属性名的`Symbol`值的数组。

```js
// 声明
let a = Symbol();
let b = Symbol();
console.log(a === b); // false

//Symbol.for()
let c = Symbol.for("domesy");
let d = Symbol.for("domesy");
console.log(c === d); // true

//Symbol.keyFor()
const e = Symbol.for("1");
console.log(Symbol.keyFor(e)); // 1

//Symbol.description
let symbol = Symbol("es");
console.log(symbol.description); // es
console.log(Symbol("es") === Symbol("es")); // false
console.log(symbol === symbol); // true
console.log(symbol.description === "es"); // true
```

## Proxy

`Proxy`用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（**meta programming**），即对编程语言进行编程。

可以这样理解，`Proxy`就是在目标对象之前设置的一层拦截，外界想要访问都要经过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

`Proxy`在这里可以理解为代理器。

声明：

`const proxy = new Proxy(target, handler)`。

- `target`：拦截的对象。
- `handler`：定义拦截的方法。

方法：

- `get()`：拦截对象属性的读取。
- `set()`：拦截对象设置属性,返回一个布尔值。
- `has()`：拦截`propKey in proxy`的操作，返回一个布尔值。
- `ownKeys()`：拦截对象属性遍历，返回一个数组。
- `deleteProperty()`：拦截`delete proxy[propKey]`的操作，返回一个布尔值。
- `apply()`：拦截函数的调用，`call`和`apply`操作。
- `construct()`：拦截`new`命令，返回一个对象。

```js
let obj = {
  name: "domesy",
  time: "2022-01-27",
  value: 1,
};

let data = new Proxy(obj, {
  //get()
  get(target, key) {
    return target[key].replace("2022", "2015");
  },

  //set()
  set(target, key, value) {
    if (key === "name") {
      return (target[key] = value);
    } else {
      return target[key];
    }
  },

  // has()
  has(target, key) {
    if (key === "name") {
      return target[key];
    } else {
      return false;
    }
  },
  // deleteProperty()
  deleteProperty(target, key) {
    if (key.indexOf("_") > -1) {
      delete target[key];
      return true;
    } else {
      return target[key];
    }
  },
  // ownKeys()
  ownKeys(target) {
    return Object.keys(target).filter((item) => item != "time");
  },
});

console.log(data.time); // 2015-01-27

data.time = "2020";
data.name = "React";
console.log(data); //Proxy {name: 'React', time: '2022-01-27', value: 1}

// 拦截has()
console.log("name" in data); // true
console.log("time" in data); // false

// 删除deleteProperty()
delete data.time; // true

// 遍历 ownKeys()
console.log(Object.keys(data)); //['name', 'value']

//apply()
let sum = (...args) => {
  let num = 0;
  args.forEach((item) => {
    num += item;
  });
  return num;
};

sum = new Proxy(sum, {
  apply(target, ctx, args) {
    return target(...args) * 2;
  },
});

console.log(sum(1, 2)); // 6
console.log(sum.call(null, 1, 2, 3)); // 12
console.log(sum.apply(null, [1, 2, 3])); // 12

//constructor()
let User = class {
  constructor(name) {
    this.name = name;
  }
};
User = new Proxy(User, {
  construct(target, args, newTarget) {
    return new target(...args);
  },
});
console.log(new User("domesy")); // User {name: 'domesy'}
```

### Reflect

`Reflect`与`Proxy`类似，只是保持`Object`的默认行为。

- 将`Object`对象的一些明显属于语言内部的方法（比如`Object.defineProperty`），放到`Reflect`对象上。
- 现阶段，某些方法同时在`Object`和`Reflect`对象上部署，未来的新方法将只部署在`Reflect`对象上
- 修改某些`Object`方法的返回结果，让其变得更合理。比如`Object.defineProperty(obj, name, desc)`在无法定义属性时，会抛出一个错误，而`Reflect.defineProperty(obj, name, desc)`则会返回`false`。
- 让`Object`操作变成函数行为。

`Reflect`的方法与`Proxy`的方法一一对应，这里就不进行介绍了。

## Class

`Class`：对一类具有共同特征的事物的抽象(构造函数语法糖)。

### constructor() 基本定义和生成实例

```js
class Parent {
  constructor(name = "es6") {
    this.name = name;
  }
}
let data = new Parent("domesy");
console.log(data); // Parent { name: 'domesy'}
```

### extends 继承

```js
class Parent {
  constructor(name = "es6") {
    this.name = name;
  }
}

// 普通继承
class Child extends Parent {}
console.log(new Child()); //  Child { name: 'es6'}

// 传递参数
class Child extends Parent {
  constructor(name = "child") {
    super(name);
    this.type = "child";
  }
}
console.log(new Child("domesy")); //  Child { name: 'domesy', type: 'child'}
```

### getter setter

- 这个两个方法比较重要，常常用来封装 API。
- `get`和`set`是属性，而不是方法。

```js
class Parent {
  constructor(name = "es6") {
    this.name = name;
  }
  // getter
  get getName() {
    return "sy" + this.name;
  }
  // setter
  set setName(value) {
    this.name = value;
  }
}

let data = new Parent();
console.log(data.getName); // syes6

data.setName = "domesy";
console.log(data.getName); // domesy
```

### static 静态方法

静态方法，不能在类的实例上调用静态方法，而应该通过类本身调用。

```js
class Parent {
  static getName = (name) => {
    return `你好！${name}`;
  };
}

console.log(Parent.getName("domesy")); // 你好！domesy
```

### 静态属性

```js
class Parent {}
Parent.type = "test";

console.log(Parent.type); //test
```

## Promise

`Promise`就是为了解决“回调地狱”问题的，它可以将异步操作的处理变得很优雅。

`Promise`可以支持多个并发的请求，获取并发请求中的数据这个`Promise`可以解决异步的问题，**本身不能说`Promise`是异步的**。

定义：

包含异步操作结果的对象。

状态：

- `pending`：[待定]初始状态。
- `fulfilled`：[实现]操作成功。
- `rejected`：[被否决]操作失败。

注意：

- `Promise`会根据状态来确定执行哪个方法。
- `Promise`实例化时状态默认为`pending`的，如异步状态异常`rejected`，反之`fulfilled`。
- **状态转化是单向的，不可逆转**，已经确定的状态（`fulfilled/rejected`）无法转回初始状态（`pending`），而且只能是从`pending`到`fulfilled`或者 `rejected`。

### 基本用法

```js
//普通定义
let ajax = (callback) => {
  console.log("≈");
  setTimeout(() => {
    callback && callback.call();
  }, 1000);
};
ajax(() => {
  console.log("timeout");
});
// 先会打出 开始执行，1s 后打出 timeout

//Promise
let ajax = () => {
  console.log("开始执行");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
ajax().then(() => {
  console.log("timeout");
});
// 先会打出 开始执行，1s 后打出 timeout

// then()
let ajax = () => {
  console.log("开始执行");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
ajax()
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  })
  .then(() => {
    console.log("timeout");
  });
// 先会打出 开始执行，3s(1+2) 后打出 timeout

// catch()
let ajax = (num) => {
  console.log("开始执行");
  return new Promise((resolve, reject) => {
    if (num > 5) {
      resolve();
    } else {
      throw new Error("出错了");
    }
  });
};

ajax(6)
  .then(function () {
    console.log("timeout"); //  先会打出 开始执行，1s 后打出 timeout
  })
  .catch(function (err) {
    console.log("catch", err);
  });

ajax(3)
  .then(function () {
    console.log("timeout");
  })
  .catch(function (err) {
    console.log("catch"); //  先会打出 开始执行，1s 后打出 catch
  });
```

### Promise.all() 批量操作

- `Promise.all(arr)`用于将多个`promise实例`，包装成一个新的`Promise实例`，返回的实例就是普通的`promise`。
- 它接收一个数组作为参数。
- 数组里可以是`Promise`对象，也可以是别的值，只有`Promise`会等待状态改变。
- 当所有的`子Promise`都完成，该`Promise`完成，返回值是全部值的数组。
- 有任何一个失败，该`Promise`失败，返回值是第一个失败的`子Promise`结果。

```js
//所有图片加载完成后添加到页面
const loadImg = (src) => {
  return new Promise((resolve, reject) => {
    let img = document.createElement("img");
    img.src = src;
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function (err) {
      reject(err);
    };
  });
};

const showImgs = (imgs) => {
  imgs.forEach((img) => {
    document.body.appendChild(img);
  });
};

Promise.all([
  loadImg(
    "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/71cf3bc79f3df8dcc6551159cd11728b46102889.jpg"
  ),
  loadImg(
    "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/71cf3bc79f3df8dcc6551159cd11728b46102889.jpg"
  ),
  loadImg(
    "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/71cf3bc79f3df8dcc6551159cd11728b46102889.jpg"
  ),
]).then(showImgs);
```

### Promise.race()

`race`与`all`相似，只不过只要有一个执行完就会执行。

```js
//有一个执行完就回加载到页面
const loadImg = (src) => {
  return new Promise((resolve, reject) => {
    let img = document.createElement("img");
    img.src = src;
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function (err) {
      reject(err);
    };
  });
};

const showImgs = (imgs) => {
  let p = document.createElement("p");
  p.appendChild(img);
  document.body.appendChild(p);
};

Promise.race([
  loadImg(
    "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/71cf3bc79f3df8dcc6551159cd11728b46102889.jpg"
  ),
  loadImg(
    "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/71cf3bc79f3df8dcc6551159cd11728b46102889.jpg"
  ),
  loadImg(
    "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/71cf3bc79f3df8dcc6551159cd11728b46102889.jpg"
  ),
]).then(showImgs);
```

### Promise 的问题

- 一旦执行，无法中途取消，链式调用多个`then`中间不能随便跳出来。
- 错误无法在外部被捕捉到，只能在内部进行预判处理，如果不设置回调函数，`Promise`内部抛出的错误，不会反应到外部。
- `Promise`内部如何执行，监测起来很难，当处于`pending`状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

## Generator

`Generator`：是可以用来控制迭代器的函数，也是封装多个内部状态的异步编程解决方案，也叫生成器函数。

参数说明：

- `yield`来控制程序内部的执行的"暂停"，并返回一个对象，这个对象包括两个属性：`value`和`done`。
- 其中`value`代表值，`done`返回布尔(如果为`false`，代表后续还有，为`true`则代表已完成)。
- `next`来恢复程序执行。
- `Generator`函数的定义不能使用箭头函数，否则会触发`SyntaxError错误`。

```js
let data = function* () {
  yield "a";
  yield "b";
  return "c";
};

let generator = data();
console.log(generator.next()); //{value: 'a', done: false}
console.log(generator.next()); //{value: 'b', done: false}
console.log(generator.next()); //{value: 'c', done: true}
console.log(generator.next()); //{value: undefined, done: true}
```

## Iterator 遍历器（迭代器）

生成器函数和迭代器之间具有紧密联系，生成器函数可以创建一个迭代器对象，该对象可以实现可迭代对象的遍历。迭代器是一个抽象概念，它是一种对象，用于实现按需生成值序列，并提供了一个`next()`方法来输出下一个值。

一个对象要成为迭代器，需要实现以下两个方法：

- `next()`：用于返回迭代器的下一个值。如果遍历完成，返回的对象中的`done`属性为`true`。
- `Symbol.iterator`：用于返回一个可迭代的对象，即迭代器本身。

生成器函数创建迭代器对象的方式非常简单，只需要在函数内部使用`yield`语句产生一个值，然后在函数返回之前使用`return`语句来结束迭代：

```js
function* generatorFn() {
  yield 1;
  yield 2;
  yield 3;
}
let gfn = generatorFn();

console.log(map.next()); // {value: 1, done: false}
console.log(map.next()); // {value: 2, done: false}
console.log(map.next()); // {value: 3, done: false}
console.log(map.next()); // {value: undefined, done: true}
```

`Iterator`是一种接口，为各种不同的数据结构提供统一的访问机制。**任何数据结构只要部署`Iterator`接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）**。

`Iterator`的作用：

- 为各种数据结构，提供一个统一的、简便的访问接口。
- 使得数据结构的成员能够按某种次序排列。
- ES6 创造了一种新的遍历命令`for...of`循环，`Iterator`接口主要供`for...of`消费。
- `for-in`遍历顺序：不同的引擎已就如何迭代属性达成一致，从而使行为标准化(ES11)。

注意：

- 在 ES6 中，有些数据结构原生具备`Iterator`接口（比如数组），即不用任何处理，就可以被`for...of`循环遍历，有些就不行（比如对象）。
- 在 ES6 中，有三类数据结构原生具备`Iterator`接口：数组、某些类似数组的对象、`Set`和`Map`结构。

一个为对象添加`Iterator`接口的例子。

```js
// 基本使用
let arr = ["hello", "world"];
let map = arr[Symbol.iterator]();
console.log(map.next()); // {value: 'hello', done: false}
console.log(map.next()); // {value: 'world', done: false}
console.log(map.next()); // {value: undefined, done: true}

// for of 循环
let arr = ["hello", "world"];
for (let value of arr) {
  console.log(value); // hello world
}

// 对象处理
let obj = {
  start: [1, 5, 2],
  end: [7, 9, 6],
  [Symbol.iterator]() {
    let index = 0;
    let arr = this.start.concat(this.end);
    return {
      next() {
        if (index < arr.length) {
          return {
            value: arr[index++],
            done: false,
          };
        } else {
          return {
            value: arr[index++],
            done: true,
          };
        }
      },
    };
  },
};
for (let key of obj) {
  console.log(key); // 1 5 2 7 9 6
}
```

## Decorator 装饰器

- 使用`@`符号，用来扩展，修改类的行为。
- 使用的时候需要引入第三方库 如：`core-decorators`。

```js
const name = (target) => {
  target.name = "domesy";
};

@name
class Test {}

console.log(Test.name); //domesy
```

## 模块化

在早期，使用立即执行函数实现模块化是常见的手段，通过函数作用域解决了命名冲突、污染全局作用域的问题。

使用模块化的好处：

1. 解决命名冲突。
2. 提供复用性。
3. 提高代码可维护性。

方案：

- `CommonJS`：用于服务器(动态化依赖)。
- `AMD`：用于浏览器(动态化依赖，使用的很少)。
- `CMD`：用于浏览器(动态化依赖，使用的很少)。
- `UMD`：用于浏览器和服务器(动态化依赖)。
- `ESM`：用于浏览器和服务器(静态化依赖)。

### export 导出模块

- 默认导出：`export default Index`。
- 单独导出：`export const name = 'domesy'`。
- 按需导出（推荐）：`export { name, value, id }'`。
- 改名导出：`export { name as newName }`。

### import 导入模块

- 默认导入（推荐）：`import Index from './Index'`。
- 整体导入：`import * as Index from './Index'`。
- 按需导入（推荐）：`import { name, value, id } from './Index'`。
- 改名导入：`import { name as newName } from './Index'`。
- 自执导入：`import './Index'`。
- 符合导入（推荐）：`import Index, { name, value, id } from './Index'`。

### 复合模式

`export`命令和`import`命令结合在一起写成一行，变量实质没有被导入当前模块，相当于对外转发接口，导致当前模块无法直接使用其导入变量，适用于“全部子模块导出”。

- 默认导入导出：`export { default } from './Index'`。
- 整体导入导出：`export * from './Index'`。
- 按需导入导出：`export { name, value, id } from './Index'`。
- 默认改具名导入导出：`export { default as name } from './Index'`。
