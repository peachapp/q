# `slot`插槽

`vue`实现了一套内容分发的`API`，将`<slot>`元素作为承载分发内容的出口。

插槽就是子组件中提供给父组件使用的一个占位符，用`<slot>`表示，父组件可以在这个占位符中填充任何模板代码，如 `HTML`、组件等，填充的内容会替换子组件的`<slot>`标签。简单理解就是子组件中留下个“坑”，父组件可以使用指定内容来补“坑”。

用法：

1. 插入一个匿名的`slot`，匿名的情况适用于只插入一个的时候：

```html
<!-- 子组件 ： (假设名为：ebutton) -->
<template>
  <div class="button">
    <button></button>
    <slot></slot>
    <!-- slot 可以放在任意位置。（这个位置就是父组件添加内容的显示位置） -->
  </div>
</template>

<!-- 父组件：（引用子组件 ebutton） -->
<template>
  <div class="app">
    <ebutton> {{ parent }}</ebutton>
  </div>
</template>
<script>
  new vue({
    el: ".app",
    data: {
      parent: "父组件",
    },
  });
</script>
```

后备内容：所谓的后备内容，其实就是`slot`的默认值，如果没有在父组件内添加内容，那么`slot`就会显示默认值。

```html
<!-- 子组件 ： (假设名为：ebutton) -->
<template>
  <div class="button">
    <button></button>
    <slot> 这就是默认值 </slot>
  </div>
</template>
```

2. 插入有名的`slot`，当插入的`slot`有多个的时候，需要按名占位，父组件通过`v-slot:name`的方式添加内容：

```html
<!-- 子组件 ： (假设名为：ebutton) -->
<template>
  <div class="button">
    <button></button>
    <slot name="one"> 这就是默认值1</slot>
    <slot name="two"> 这就是默认值2 </slot>
    <slot name="three"> 这就是默认值3 </slot>
  </div>
</template>

<!-- 父组件：（引用子组件 ebutton） -->
<template>
  <div class="app">
    <ebutton>
      <template v-slot:one> 这是插入到one插槽的内容 </template>
      <template v-slot:two> 这是插入到two插槽的内容 </template>
      <template v-slot:three> 这是插入到three插槽的内容 </template>
    </ebutton>
  </div>
</template>
```

3. 在`slot`的内部可以将值通过有名`slot`传递出去，让外层组件接收：

```html
<!-- 子组件 ： (假设名为：ebutton) -->
<template>
  <div class="button">
    <button></button>
    <slot name="one" :value1="child1"> 这就是默认值1</slot>
    <!-- 绑定child1的数据 -->
    <slot :value2="child2"> 这就是默认值2 </slot>
    <!-- 绑定child2的数据，这里我没有命名slot -->
  </div>
</template>
<script>
  new vue({
    el: ".button",
    data: {
      child1: "数据1",
      child2: "数据2",
    },
  });
</script>

<!-- 父组件：（引用子组件 ebutton） -->
<template>
  <div class="app">
    <ebutton>
      <!-- 通过v-slot的语法 将插槽 one 的值赋值给slotonevalue -->
      <template v-slot:one="slotonevalue"> {{ slotonevalue.value1 }} </template>

      <!-- 同上，由于子组件没有给slot命名，默认值就为default -->
      <template v-slot:default="slottwovalue">
        {{ slottwovalue.value2 }}
      </template>
    </ebutton>
  </div>
</template>
```

总结：

1. 首先在子组件的`slot`上动态绑定一个值`:key='value'`。
2. 然后在父组件通过`v-slot:name='values'`的方式将这个值赋值给`values`。
3. 最后通过`{{ values.key }}`的方式获取数据。
