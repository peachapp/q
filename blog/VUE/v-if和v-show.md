# `v-if`和`v-show`

共同点：

在`vue`中`v-show`与`v-if`的作用效果是相同的（不含`v-else`），都能控制元素在页面是否显示。

1. 当表达式结果为`true`时，都会在页面显示。
2. 当表达式结果为`false`时，都不会在页面显示。

区别：

1. 控制手段不同：\
   `v-if`显示隐藏是将`dom元素`整个添加或删除。\
   `v-show`显示隐藏是为该元素设置`css`样式`display`属性（`block`，`none`），`dom元素`依旧还在。
2. 编译过程不同：\
   `v-if`切换有一个局部编译、卸载的过程，切换过程中会重建、销毁内部的事件监听和子组件。\
   `v-show`只是简单的基于`css`切换样式。
3. 编译条件不同：\
   `v-if`是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
4. 触发组件的生命周期不同：\
   `v-if`的表达式值由`false`变为`true`的时候，触发组件的`beforeCreate`、`created`、`beforeMount`、`mounted`生命周期，由`true`变为`false`的时候触发组件的`beforeDestory`、`destoryed`生命周期。 \
   `v-show`切换的时候不会触发组件的生命周期。
5. 性能消耗不同：\
   `v-if`有更高的切换消耗。\
   `v-show`有更高的初始渲染消耗。

使用场景：

- 如果需要非常频繁地切换，则使用`v-show`较好。
- 如果在运行时条件很少改变，则使用`v-if`较好。
