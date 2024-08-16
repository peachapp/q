# `ref`属性

`ref`被用来给元素或子组件注册引用信息。引用信息将会被注册在父组件的`$refs`对象上。如果在`DOM元素`上使用，引用指向的就是那个`DOM元素`；如果在子组件上使用，引用指向的就是那个组件实例：

```html
<!-- vm.$refs.p 会是 DOM 节点 -->
<p ref="p">hello</p>

<!-- vm.$refs.child 会是子组件实例 -->
<child-component ref="child"></child-component>

<!-- 当动态绑定时，可以将 ref 定义为回调函数，显式地传递元素或组件实例 -->
<child-component :ref="(el) => child = el"></child-component>
```

关于`ref`注册时机的重要说明：

因为`ref`本身是作为渲染函数的结果而创建的，在初始渲染时不能访问它们（初始渲染时它们还不存在！）。`$refs`是非响应式的，因此不应该试图用它在模板中做数据绑定。
