# `vue`双向数据绑定

- `vue`双向数据绑定原理，又称`vue`响应式原理，是`vue`的核心，双向数据绑定是通过数据劫持结合发布者订阅者模式的方式来实现的，通过`Object.defineProperty`来劫持各个属性的`setter`和`getter`，在数据变动时发布消息给订阅者，触发相应的监听回调来渲染视图。也就是说数据和视图同步，数据发生改变，视图跟着改变，视图改变，数据也随之发生改变。
- `vue`实现双向数据绑定的核心是`Object.defineProperty`方法。
- `Object.defineProperty(obj, prop, descriptor)`方法，接收三个参数，分别为：`obj`（定义其上属性的对象），`prop`（定义或修改的属性），`descriptor`（具体的改变方法），就是用这个方法来定义一个值，当调用时使用了它里面的`get`方法，当给这个属性赋值时，又用到了它里面的`set`方法。

实现的具体步骤：

1. 需要`observer`的数据对象进行递归遍历，包括子属性对象的属性，都加上`setter`和`getter`。这样的话，给这个对象的某个值赋值，就会触发`setter`，那么就能监听到数据变化。
2. `compile`解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图。
3. `watcher`订阅者是`observer`和`compile`之间通信的桥梁，主要做的事情是：
   - 在自身实例化时往属性订阅器 (`dep`) 里面添加自己。
   - 自身必须有一个`update()`方法。
   - 待属性变动`dep.notice()`通知时，能调用自身的`update()`方法，并触发`compile`中绑定的回调。
4. `MVVM`作为数据绑定的入口，整合`observer`、`compile`和`watcher`三者，通过`observer`来监听自己的`model`数据变化，通过`compile`来解析编译模板指令，最终利用`watcher`搭起`observer`和`compile`之间的通信桥梁，达到数据变化 --> 视图更新、视图交互变化 (input) --> 数据`model`变更的双向绑定效果。

[实现：](https://www.jb51.net/article/206830.htm)
