# `CommonJS`模块和`ES6`模块

相同点：

1. `CommonJS Module`和`ES6 Module`都可以对引⼊的对象进⾏赋值，即对对象内部属性的值进行改变。

区别：

1. `CommonJS Module`是运行时加载，`ES6 Module`是编译时输出接口。
2. `CommonJS Module`的`require()`命令同步加载模块，`ES6 Module`的`import`命令异步加载模块，有一个独立的模块依赖的解析阶段。
3. `CommonJS Module`是对模块的浅拷贝，`ES6 Module`是对模块的引入，即`ES6 Module`只存只读，不能改变其值，具体点就是指针指向不能变，类似`const`。
4. `import`的接口是`read-only`（只读状态），不能修改其变量值。即不能修改其变量的指针指向，但可以改变变量内部指针指向。可以对`CommonJS Module`重新赋值（改变指针指向），但是对`ES6 Module`重新赋值会编译报错。
