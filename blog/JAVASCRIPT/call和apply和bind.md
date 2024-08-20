# `call`和`apply`和`bind`

## `call`和`apply`

`call`和`apply`最主要的作用，是改变`this`的指向。

共同点：都能够改变函数执行时的上下文，将一个对象的方法交给另一个对象来执行，并且是立即执行的。

区别：写法传参上存在区别。

```js
Function.call(obj,[param1[,param2[,…[,paramN]]]])
Function.apply(obj[,argArray])
```

`call`：

- 调用`call`的对象，必须是函数`Function`。
- `call`的第一个参数，是一个对象。`Function`的调用者，将会指向这个对象。如果不传，则默认为全局对象`window`。
- 第二个参数开始，可以接收任意个参数。每个参数会映射到相应位置的`Function`的参数上。但是如果将所有的参数作为数组传入，它们会作为一个整体映射到`Function`对应的第一个参数上，之后参数都为空。

`apply`：

- 调用`apply`的对象，必须是函数`Function`。`apply`只接收两个参数。
- `apply`的第一个参数，是一个对象。`Function`的调用者，将会指向这个对象。如果不传，则默认为全局对象`window`（第一个参数的规则与`call`一致）。
- 第二个参数，必须是数组或者类数组，它们会被转换成类数组，传入`Function`中，并且会被映射到`Function`对应的参数上。这也是`call`和`apply`之间，很重要的一个区别。

## `bind`

`bind()`方法会创建一个新函数。当这个新函数被调用时，`bind()`的第一个参数将作为它执行时的`this`，之后的一系列参数将会在传递的实参前传入作为它的参数。（来自于`MDN`)
