<!-----
lang: zh-CN
title: vue 面试
description: vue 面试题收录
----->

## 组件中的 data 为什么是一个函数？

`new vue()` 实例中，data 可以直接是一个对象，为什么在 vue 组件中，data 必须是一个函数呢？

因为组件是可以复用的，在 js 里对象是引用关系，如果组件 data 是一个对象，那么子组件中的 data 属性值会相互污染，产生副作用。所以一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝，new vue 的实例是不会被复用的，因此不会存在以上问题。

1. vue 中组件是用来复用的，为了防止 data 复用，将其定义为函数。
2. vue 组件中的 data 数据都应该是相互隔离，互不影响的，组件每复用一次，data 数据就应该被复制一次。当某一处复用地方的组件内 data 数据被改变时，其他复用地方组件的 data 数据不受影响，就需要通过 data 函数返回一个对象作为组件的状态。
3. 当我们将组件中的 data 写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的 data，拥有自己的作用域，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。
4. 当组件的 data 写成对象形式，这些实例用的是同一个构造函数，由于 JavaScript 的特性所导致，所有的组件实例共用了一个 data，就会造成一个变了全都会变的结果。

## props 和 data？

**props**：props 用于接收父组件的数据。props 的数据是只读的，无法重新赋值。

**data**：data 是组件的私有数据，需要其自身来维护。data 的数据是可读可写的。

**优先级**：props > methods > data > computed

是在源码中体现的：`function initState`

<CodeGroup>
  <CodeGroupItem title="Options">

```js
function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) {
    initProps(vm, opts.props);
  }
  if (opts.methods) {
    initMethods(vm, opts.methods);
  }
  if (opts.data) {
    initData(vm);
  } else {
    observe((vm._data = {}), true /* asRootData */);
  }
  if (opts.computed) {
    initComputed(vm, opts.computed);
    f;
    if (opts.watch && opts.watch !== nativeWatch) f;
    initwatch(vm, opts.watch);
  }
}
```

  </CodeGroupItem>

  <CodeGroupItem title="Composition" active>

```js
export function initState(vm: Component) {
  const opts = vm.$options;
  if (opts.props) initProps(vm, opts.props);

  // Composition API
  initSetup(vm);

  if (opts.methods) initMethods(vm, opts.methods);
  if (opts.data) {
    initData(vm);
  } else {
    const ob = observe((vm._data = {}));
    ob && ob.vmCount++;
  }
  if (opts.computed) initComputed(vm, opts.computed);
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}
```

  </CodeGroupItem>
</CodeGroup>

## v-if 和 v-show？

**共同点**：

在 vue 中 v-show 与 v-if 的作用效果是相同的（不含 v-else)，都能控制元素在页面是否显示。

- 当表达式结果为 false 时，都不会在页面显示。
- 当表达式结果为 true 时，都会在页面显示。

**区别**：

1. 控制手段不同 \
   v-if 显示隐藏是将 dom 元素整个添加或删除。\
   v-show 显示隐藏则是为该元素设置 css 样式 display 属性（block，none），dom 元素依旧还在。
2. 编译过程不同 \
   v-if 切换有一个局部编译 / 卸载的过程，切换过程中会重建 / 销毁内部的事件监听和子组件。\
   v-show 只是简单的基于 css 切换样式。
3. 编译条件不同 \
   v-if 是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
4. 触发组件的生命周期不同 \
   v-if 由 false 变为 true 的时候，触发组件的 beforeCreate、created、beforeMount、mounted 钩子，由 true 变为 false 的时候触发组件的 beforeDestory、destoryed 方法。 \
   v-show 切换的时候不会触发组件的生命周期。
5. 性能消耗不同 \
   v-if 有更高的切换消耗。\
   v-show 有更高的初始渲染消耗。

**使用场景**：

- v-if 与 v-show 都能控制 dom 元素在页面的显示。
- v-if 相比 v-show 开销更大的（直接操作 dom 节点增加与删除）。
- 如果需要非常频繁地切换，则使用 v-show 较好。
- 如果在运行时条件很少改变，则使用 v-if 较好。

## v-if 和 v-for 的优先级？

v-for 优先级要比 v-if 更高。v-for 和 v-if 基本不用在一个元素上。

是在源码中体现的：`function genElement`

<CodeGroup>
  <CodeGroupItem title="Options">

```js
function (){}
```

  </CodeGroupItem>

  <CodeGroupItem title="Composition" active>

```js
export function genElement(el: ASTElement, state: CodegenState): string {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state);
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state);
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state);
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state);
  } else if (el.tag === "template" && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || "void 0";
  } else if (el.tag === "slot") {
    return genSlot(el, state);
  } else {
    // component or element
    let code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      let data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData(el, state);
      }

      let tag: string | undefined;
      // check if this is a component in <script setup>
      const bindings = state.options.bindings;
      if (bindings && bindings.__isScriptSetup !== false) {
        tag =
          checkBindingType(bindings, el.tag) ||
          checkBindingType(bindings, camelize(el.tag)) ||
          checkBindingType(bindings, capitalize(camelize(el.tag)));
      }
      if (!tag) tag = `'${el.tag}'`;

      const children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = `_c(${tag}${
        data ? `,${data}` : "" // data
      }${
        children ? `,${children}` : "" // children
      })`;
    }
    // module transforms
    for (let i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code;
  }
}
```

  </CodeGroupItem>
</CodeGroup>

## ref 属性？

ref 被用来给元素或子组件注册引用信息。引用信息将会被注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是那个 DOM 元素；如果用在子组件上，引用就指向组件实例：

```html
<!-- vm.$refs.p 会是 DOM 节点 -->
<p ref="p">hello</p>

<!-- vm.$refs.child 会是子组件实例 -->
<child-component ref="child"></child-component>

<!-- 当动态绑定时，我们可以将 ref 定义为回调函数，显式地传递元素或组件实例 -->
<child-component :ref="(el) => child = el"></child-component>
```

关于 ref 注册时机的重要说明：因为 ref 本身是作为渲染函数的结果而创建的，在初始渲染时不能访问它们——它们还不存在！$refs 也是非响应式的，因此不应该试图用它在模板中做数据绑定。

## computed 和 watch？

**computed**：被计算出来的属性就是计算属性。如果依赖的属性没有变化，就不会重新计算。getter/setter 默认不会做缓存，Vue 做了特殊处理。（缓存）

**watch**：当数据变化时，执行一个函数。

**区别**：computed 是计算属性的意思，watch 是监听的意思。

computed：

1. computed 是用来计算出一个值的，这个值在调用的时候不需要加括号，属性一样直接使用。
2. 根据依赖自动缓存，如果依赖不变 computed 值就不会重新计算。
3. 不支持异步，computed 内有异步操作无法监听数据的变化。

watch：

1. watch 是用来监听的，它有 2 个选项 immediate 和 deep。
2. immediate 表示是否在第一次渲染的时候执行这个函数。deep 表示如果监听一个对象，是否要监听里面的属性的变化。
3. 支持异步，watch 内可以有异步操作。

## computed 和 methods？

computed 是计算属性， 是有缓存的。methods 是方法， 没有缓存。

## slot 插槽？

vue 实现了一套内容分发的 API，将`<slot>`元素作为承载分发内容的出口。

插槽就是子组件中提供给父组件使用的一个占位符，用`<slot>`表示，父组件可以在这个占位符中填充任何模板代码，如 HTML、组件等，填充的内容会替换子组件的`<slot>`标签。简单理解就是子组件中留下个“坑”，父组件可以使用指定内容来补“坑”。

**用法：**

1. 插入一个匿名的 slot，匿名的情况只适用于只插入一个的时候：

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

后备内容：所谓的后背内容，其实就是 slot 的默认值，有时没有在父组件内添加内容，那么 slot 就会显示默认值。

```html
<!-- 子组件 ： (假设名为：ebutton) -->
<template>
  <div class="button">
    <button></button>
    <slot> 这就是默认值 </slot>
  </div>
</template>
```

2. 插入有名的 slot，当插入的 slot 有多个的时候，需要按名占位，父组件通过 `v-slot:name` 的方式添加内容：

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

3. 在 slot 的内部可以将值通过有名 slot 传递出去，让外层组件接收：

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

**总结：**

1. 首先在子组件的 slot 上动态绑定一个值`:key='value'`
2. 然后在父组件通过`v-slot:name = 'values'`的方式将这个值赋值给 values
3. 最后通过`{{ values.key }}`的方式获取数据

## vue 生命周期？

vue 生命周期钩子是成对出现的：分别是创建前后、挂载前后、更新前后、销毁前后

1. `beforeCreate`（创建前）：创建 VUE 实例前的钩子函数，data 还没有挂载
2. `created`（创建后）：实例创建完成之后的钩子函数，data 已经挂载
3. `beforeMount`（挂载前）：开始挂载编译生成的 HTML 到对应位置时触发的钩子函数。但：此时还未将编译出的 HTML 渲染到页面上
4. `mounted`（挂载后）：将编译好的 HTML 挂载到页面后执行的钩子函数
5. `beforeUpdate`（更新前）：数据更改导致 DOM 更新之前
6. `updated`（更新后）：数据更改导致 DOM 更新之后，updated 执行时，页面和 data 数据已经保持同步，都是最新的
7. `beforeDestroy`（销毁前）：VUE 实例销毁之前执行的钩子函数
8. `destroyed`（销毁后）：当执行 destroyed 函数时，组件已经被完全销毁，此时组件中所有 data、methods、以及过滤器、指令等都已经不可用了

vue 第一次页面加载会触发 `beforeCreate、created、beforeMount、mounted` 四个钩子函数

在 mounted 阶段开始有 $el，在 created 阶段开始有 $data

如果加入了 keep-alive 会多 2 个生命周期 activated 和 deactivated

**vue3 的生命周期：** \
vue3 删除了`beforeCreate`和`created`，用`setup`代替 \
vue3 删除了`beforeDestroy`，用`onBrforeUnmount`代替 \
vue3 删除了`destroyed`，用`onUnmounted`代替

1. onBeforeMount
2. onMounted
3. onBeforeUpdate
4. onUpdated
5. onBrforeUnmount
6. onUnmounted

**如果加入了 keep-alive，第一次进入组件会执行哪些声明周期？**

beforeCreate、created、beforeMount、mounted、activated

**如果加入了 keep-alive，第二次或第 N 次进入组件会执行哪些声明周期？**

只执行一个生命周期 activated

## vue 父子组件加载时生命周期执行顺序？

父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted

## vue 钩子函数？

- 8 个生命周期钩子函数
- activated（激活）和 deactivated（未激活）：这两个钩子一般配合`<keep-alive>`来使用。\
  通常一个组件是很大的，如果一直创建、销毁、创建、销毁。这样很不合理，而且很浪费性能，这时候就可以用`<keep-alive>`配合这两个钩子函数来控制组件的激活和不激活。
- errorCaptured：当捕获一个来自子孙组件的错误时被调用。 \
  当子孙组件报错的时候，父组件会触发这个钩子函数，并且会返回三个参数，第一个参数是 错误对象 , 第二个参数是 错误的组件实例（报错的子孙组件）, 第三个参数是 包含错误来源信息的字符串（报错的子孙组件的具体哪个地方报错）。

## keep alive？

**keep alive 是什么？**

keep alive 是 vue 系统自带的一个组件，是用来缓存组件的，使组件不会被销毁（保留组件状态或避免重新渲染） ==> 提升性能

**用法**：

`<keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 `<transition>` 相似，`<keep-alive>`是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。
当组件在 `<keep-alive>` 内被切换时，它的 mounted 和 unmounted 生命周期钩子不会被调用，取而代之的是 activated 和 deactivated。（这会运用在 `<keep-alive>` 的直接子节点及其所有子孙节点。)

**使用场景**：

就是来缓存组件，提升项目的性能。具体实现比如：首页进入到详情页，如果用户在首页每次点击都是相同的，那么详情页就没必要请求 n 次了，直接缓存起来就可以了，当然如果点击的不是同一个，那么就直接请求。

## vue 组件通信？

1. props \
   父组件向子组件传值：props\
   子组件向父组件传值：父组件向子组件通过事件形式传递 props，子组件通过 events 给父组件发送消息，实际上就是子组件把自己的数据发送到父组件。
2. $emit / $on。这种方法通过一个空的 vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件，巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级。vue3 使用 mitt 插件（emit 触发、on 监听、off 移除监听）。

```js
var Event = new vue();
Event.$emit(事件名, 数据);
Event.$on(事件名, (data) => {});
```

3. 状态管理。如：vuex
4. provide / inject。祖先组件中通过 provider 来提供变量，然后在子孙组件中通过 inject 来注入变量。可以跨级组件间通信。
5. $parent / $children 与 ref \
ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例 \
$parent / $children：访问父 / 子实例

## vuex 数据持久化？

localStorage。vuex 是 vue 的状态管理器，存储的数据是响应式的。但是并不会保存起来，刷新之后就回到了初始状态，具体做法应该在 vuex 中数据改变的时候把数据拷贝一份保存到 localStorage 里面，刷新之后，如果 localStorage 里有保存的数据，取出来再替换 store 里的 state。

## vue 双向数据绑定？自己实现一个？

- vue 双向数据绑定原理，又称 vue 响应式原理，是 vue 的核心，双向数据绑定是通过数据劫持结合发布者订阅者模式的方式来实现的，通过 Object.defineProperty() 来劫持各个属性的 setter 和 getter，在数据变动时发布消息给订阅者，触发相应的监听回调来渲染视图。也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变。
- vue 实现双向数据绑定的核心是 Object.defineProperty() 方法。
- Object.defineProperty(obj, prop, descriptor) 方法，接收三个参数，分别为 obj（定义其上属性的对象），prop（定义或修改的属性），descriptor（具体的改变方法），就是用这个方法来定义一个值，当调用时使用了它里面的 get 方法，当给这个属性赋值时，又用到了它里面的 set 方法。

**具体步骤：**

1. 需要 observer 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到数据变化。
2. compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图。
3. watcher 订阅者是 observer 和 compile 之间通信的桥梁，主要做的事情是：\
   1、在自身实例化时往属性订阅器 (dep) 里面添加自己 \
   2、自身必须有一个 update() 方法 \
   3、待属性变动 dep.notice() 通知时，能调用自身的 update() 方法，并触发 compile 中绑定的回调。
4. MVVM 作为数据绑定的入口，整合 observer、compile 和 watcher 三者，通过 observer 来监听自己的 model 数据变化，通过 compile 来解析编译模板指令，最终利用 watcher 搭起 observer 和 compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化 (input) -> 数据 model 变更的双向绑定效果。

[实现：](https://www.jb51.net/article/206830.htm)

## 响应式系统构建？

https://juejin.cn/post/6844903869730799629

## vue 编译原理？

## nextTick？

nextTick 在下一次 dom 更新结束后的回调，可以获取更新后的 dom 内容。

nextTick 本质就是执行延迟回调的钩子，接受一个回调函数作为参数，在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

nextTick 的原理，用一句话总结就是『利用 Event loop 事件线程去异步操作』。本质上就是注册异步任务来对任务进行处理。不同的是，在 vue 的不同版本对这个异步任务的优雅降级不太一样。

源码：

```ts
export function nextTick(): Promise<void>;
export function nextTick<T>(
  this: T,
  cb: (this: T, ...args: any[]) => any
): void;
export function nextTick<T>(cb: (this: T, ...args: any[]) => any, ctx: T): void;
/**
 * @internal
 */
export function nextTick(cb?: (...args: any[]) => any, ctx?: object) {
  let _resolve;
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e: any) {
        handleError(e, ctx, "nextTick");
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== "undefined") {
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  }
}
```

https://zhuanlan.zhihu.com/p/396831673

## scoped？

scoped 是 vue 文件中的 style 标签上一个特殊的属性，当一个 style 标签拥有 scoped 属性的时候，它的 css 样式只能用于当前 vue 组件，可以使组件的样式不相互污染，如果一个项目的所有 style 标签都加上了 scoped 属性，相当于实现了样式的模块化。

**实现原理**：

vue 中的 scoped 属性的效果主要是通过 postCss 实现的。即 postCss 给组件中的所有 dom 添加了一个独一无二的动态属性，给 css 选择器额外添加一个对应的属性选择器，来选择组件中的 dom，这种做法使得样式只作用于含有该属性的 dom 元素（当前组件内部的 dom）。

## 样式穿透？

**如何让 css 只在当前组件中起作用**：style 标签添加 scoped 属性

scoped 看起来很好用，在 vue 项目中，当我们引入第三方组件库时（如使用 vue-awesome-swiper 实现移动端轮播），需要在局部组件中修改第三方组件库的样式，而又不想去除 scoped 属性造成组件之间的样式覆盖。这时我们可以通过特殊的方式穿透 scoped。

- stylus 的样式穿透 使用 `>>>`

```css
外层 >>> 第三方组件 {
  样式
}
```

- sass 和 less 的样式穿透 使用 `/deep/`

```css
外层 /deep/ 第三方组件 {
  样式
}
```

## 路由模式？

路由模式有 2 种：`history` 和 `hash`

区别：

1. 表现不同。\
   history：`http://localhost:8080/about` \
   hash：`http://localhost:8080/#/about`
2. 跳转请求不同。跳转到一个找不到的页面时（404）：\
   history 会发送请求。\
   hash 不会发送请求。
3. 打包后前端自测要使用 hash，如果使用 history 会出现空白页。

## SPA？

SPA 是单页面应用，整个项目只有一个 html 文件，切换路由进行页面切换。

优点：

1. 用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染。
2. 有利于前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理。
3. 提取组件开发，易于后期维护
4. 减轻服务器压力

缺点：

1. SEO 优化不好。由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。搜索引擎爬虫只会爬取 html，不会爬取 js。
2. 性能不是特别好。初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载。（已有按需加载策略，部分页面按需加载）

## vue 首屏渲染优化？

- 图片压缩 / 懒加载
- 禁止生成 .map 文件
- 路由懒加载
- cdn 引入公共库
- SSR 服务器渲染

## router、routes、route 的区别？

- router：路由对象，（new 的路由器对象），包含一些操作路由的功能函数，来实现编程式导航。一般指的是在任何组件内访问路由。如：路由编程式导航的$ router.push()。vue3 使用 useRouter。
- routes：指创建 vue-router 路由实例的配置项。用来配置多个 route 路由对象。
- 3.route：指路由对象表示当前激活的路由的状态信息。一般用来获取页面信息.如：this.$route 指的是当前路由对象，vue3 使用 useRoute。

## 路由传参？

vue 路由传参的使用场景一般都是应用在父路由跳转到子路由时，携带参数跳转。传参方式可划分为 params 传参和 query 传参，而 params 传参又可分为在 url 中显示参数和不显示参数两种方式，这就是 vue 路由传参的三种方式。

**params 传参（显示参数）, 子路由通过`this.$route.params.id`获取传递的参数**

1. `声明式 router-link`

```html
<!-- 子路由配置 -->
<script>
  {
    path: '/child/:id',
    component: Child
  }
</script>
<!-- 父路由组件 -->
<router-link :to="/child/123">进入Child路由</router-link>
```

2. `编程式 this.$router.push`

```js
// 子路由配置
{
  path: '/child/:id',
  component: Child
}
// 父路由编程式传参（一般通过事件传参）
this.$router.push({
  path: '/child/${id}'
})
```

**params 传参（不显示参数），子路由通过`this.$route.params.id`获取传递的参数**

1. `声明式 router-link`

```html
<!-- 子路由配置 -->
<script>
  {
    path: '/child',
    name: 'Child',
    component: Child
  }
</script>
<!-- 父路由组件 -->
<router-link :to="{name: 'Child', params:{id: 123}}">进入Child路由</router-link>
```

2. `编程式 this.$router.push`

```js
// 子路由配置
{
  path: '/child',
  name: 'Child',
  component: Child
}
// 父路由编程式传参（一般通过事件传参）
this.$router.push({
  name: 'Child',
  params: {
    id: 123
  }
})
```

注意：上述这种利用 params 不显示 url 传参的方式会导致在刷新页面的时候，传递的值会丢失。

**query 传参（显示参数），子路由通过`this.$route.query.id`获取传递的参数**

1. `声明式 router-link`

```html
<!-- 子路由配置 -->
<script>
  {
    path: '/child',
    name: 'Child',
    component: Child
  }
</script>
<!-- 父路由组件 -->
<router-link :to="{name: 'Child', query:{id: 123}}">进入Child路由</router-link>
```

2. `编程式 this.$router.push`

```js
// 子路由配置
{
  path: '/child',
  name: 'Child',
  component: Child
}
// 父路由编程式传参（一般通过事件传参）
this.$router.push({
  name: 'Child',
  query: {
    id: 123
  }
})
```

## 动态路由？

动态路由主要通过两个函数实现：`router.addRoute()` 和 `router.removeRoute()`。

**添加路由**

```js
router.addRoute({ path: "/about", component: About });
```

**删除路由**

当路由被删除时，所有的别名和子路由也会被同时删除。

1. 通过添加一个名称冲突的路由。如果添加与现有途径名称相同的途径，会先删除路由，再添加路由：

```js
router.addRoute({ path: '/about', name: 'about', component: About })
// 这将会删除之前已经添加的路由，因为他们具有相同的名字且名字必须是唯一的
router.addRoute({ path: '/other', name: 'about', component: Other }
```

2. 通过调用 router.addRoute() 返回的回调。当路由没有名称时，这很有用。

```js
const removeRoute = router.addRoute(routeRecord);
removeRoute(); // 删除路由如果存在的话
```

3. 通过使用 router.removeRoute() 按名称删除路由。需要注意的是，如果你想使用这个功能，但又想避免名字的冲突，可以在路由中使用 Symbol 作为名字。

```js
router.addRoute({ path: "/about", name: "about", component: About });
// 删除路由
router.removeRoute("about");
```

## 路由守卫？

路由守卫就是路由跳转过程中的一些钩子函数 ，在路由跳转的时候，做一些判断或其它的操作。 类似于组件生命周期钩子函数 。

**全局路由守卫**

1. `beforeEach(to, from, next)` 全局前置守卫，路由跳转前触发
2. `beforeResolve(to, from, next)` 全局解析守卫，在所有组件内守卫和异步路由组件被解析之后触发
3. `afterEach(to, from)` 全局后置守卫，路由跳转完成后触发

**路由独享守卫**

`beforeEnter(to,from,next)` 路由对象单个路由配置 ，单个路由进入前触发

**组件路由守卫**

1. `beforeRouteEnter(to,from,next)` 在组件生命周期 beforeCreate 阶段触发
2. `beforeRouteUpdadte(to,from,next)` 当前路由改变时触发
3. `beforeRouteLeave(to,from,next)` 导航离开该组件的对应路由时触发

**参数**

- `to` 即将要进入的目标路由对象
- `from` 即将要离开的路由对象
- `next(Function)` 是否可以进入某个具体路由，或者是某个具体路由的路径

**完整的导航解析流程**

1. 触发进入其它路由
2. 调用要离开路由的组件守卫 beforeRouteLeave
3. 调用全局的前置守卫 beforeEach
4. 在重用的组件里调用 beforeRouteUpdate
5. 在路由配置里的单条路由调用 beforeEnter
6. 解析异步路由组件
7. 在将要进入的路由组件中调用 beforeRouteEnter
8. 调用全局的解析守卫 beforeResolve
9. 导航被确认
10. 调用全局的后置钩子 afterEach
11. 触发 DOM 更新 mounted
12. 执行 beforeRouteEnter 守卫中传给 next 的回调函数

**使用场景**

判断是否登录，如果登录就 next，否则就跳转到登录页面。\
判断是否有权限，如果有就 next，否则就跳转到无权限页面。

## vue 自动配置路由？

vue 项目开发过程中页面太多，路由配置起来也是一件很麻烦的事，好在 webpack 提供了一个`require.context`接口，通过执行`require.context`函数可以获取一个特定的上下文，实现自动化导入模块。

1. 语法：`require.context('./dir', true, /\.js$/);`第一个参数表示相对的文件目录，第二个参数表示是否包括子目录中的文件（true，false），第三个参数表示引入的文件匹配的正则表达式。
2. 自动配置路由：修改 router 文件夹下的 index.js 文件即可

```js
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const contexts = require.context("../pages", true, /\.vue$/); //通过正则获取匹配到的文件:第一个参数表示相对的文件目录，第二个参数表示是否包括子目录中的文件（true，false），如果有耳机目录既可以设置为true，第三个参数表示引入的文件匹配的正则表达式。

const routers = [];
contexts.keys().forEach((key) => {
  // 获取组件配置
  const componentConfig = contexts(key).default;
  // 剥去文件名开头的 `./` 和`.vue`结尾的扩展名
  const routePath = key.replace(/^\.\//, "").replace(/\.vue$/, "");
  // 全局注册组件
  const component = Vue.component(componentConfig.name, componentConfig);
  routers.push({
    path: componentConfig.name === "home" ? "/" : "/" + routePath,
    name: componentConfig.name,
    component,
  });
});

export default new Router({
  routes: [...routers],
});
```

3. 缺点：路由嵌套未解决，望有知道的大佬指点。

## vue 设置代理？

在 vue.config.js 中：

```js
devServer: {
  proxy: "http://localhost:4000";
}
```

## vue 环境变量和模式？

在项目中的根目录新建文件，在新建文件中放置环境变量。

开发环境：.env.development \
生产环境：.env.production

**环境变量文件分类：**

```js
.env # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

为一个特定模式准备的环境文件（如：.env.production）将比一般的环境文件（如：.env）拥有更高的优先级。

**环境变量配置：**

每一个环境变量文件中只包含环境变量的“键 = 值”对，所配置的变量中只有以 _VUEAPP_ 开头的变量才会被 webpack.DefinePlugin 静态嵌入到客户端侧包中，如：`VUE_APP_PERMISSION = true`

**环境变量访问：**

在应用代码中通过 `process.env.[变量名]`进行访问，从而获取到它的值。如：

```js
if (isDev()) {
  return process.env.VUE_APP_PERMISSION === "true" ? true : false;
}
```

**模式分类：**

在 vue-cli 中默认情况下有以下三种模式

```js
development 模式：  用于 vue-cli-service serve
production 模式：   用于 vue-cli-service build 和 vue-cli-service test:e2e
test 模式：         用于 vue-cli-service test:unit
```

模式与环境变量不同，一个模式可包含多个环境变量（NODE_ENV），每个模式都会将 NODE_ENV 的值设为模式的名称。

**模式定义与使用：**

可以通过为 .env 文件增加后缀来设置某个模式下特有的环境变量。比如，如果你在项目根目录创建一个名为 .env.development 的文件，那么在这个文件里声明过的变量就只会在 development 模式下被载入。

也可以通过传递 --mode 选项参数为命令行覆写默认的模式。例如，如果你想要在构建命令中使用开发环境变量，则需在 package.json 脚本中设置：

```js
"build": "vue-cli-service build --mode development"
```

## vue 打包路径和路由模式？

解决打包后的页面空白的问题：

```js
// vue.config.js
module.exports = {
  publicPath: "./",
};
```

路由模式：`hash（带#）` 和 `history`

解决打包后路由没显示出来的问题：

1. 将 history 路由改为 hash 路由（用于上线要求是 hash 模式或者前端打包测试项目）
2. 如果项目上线要求是 history 模式：前端不需要做修改，需要后端重定向

## vue 本身的数据管理是什么样的？

**vue 的数据流本质上是单向数据流**
我们平时说的双向数据绑定，只是 vue 的一个语法糖。vue 父子组件之间数据传递，是遵循单向数据流的，父组件可以向子组件传递 props，但是子组件不能修改父组件传递来的 props，子组件只能通过事件通知父组件进行数据更改。

也就是说，Vue 在数据流方面既可以实现单向数据流也可以实现双向数据绑定。

## Vuex？

**vuex 是单向数据流还是双向数据流？** vuex 是单向数据流，必须通过 vuex 提供的 Mutations 或者 Actions 修改，在组件中直接修改会报错。

vuex 是一个专为 vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

每一个 vuex 应用的核心就是 store（仓库）。`store`基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。

vuex 中的状态和单纯的全局对象有以下两点不同：

1. vuex 的状态存储是响应式的。当 vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会得到高效更新。
2. 不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以方便地跟踪每一个状态的变化，从而更好地了解我们的应用。

**vuex 有哪些属性 / 核心概念：State、Getters、Mutations、Actions、Modules**

**State：类似于组件中的 data**

vuex 使用**单一状态树**，vuex 的基本数据，用来存储变量。

**Getters：类似于组件中的 computed**

从基本数据 (state) 派生的数据，相当于 state 的计算属性。

**Mutations：类似于组件中的 methods**

提交更新数据的方法，必须是同步的（如果需要异步使用 action)。每个 Mutation 都有一个字符串的事件类型 (type) 和一个回调函数 (handler)。 回调函数就是实际进行状态更改的地方，并且它会接受 state 作为第一个参数，提交载荷作为第二个参数。

**Actions：提交 Mutations**

和 Mutations 的功能大致相同，不同之处在于：

1. Actions 提交的是 Mutations，而不是直接变更状态。
2. Actions 可以包含任意异步操作。

**Modules：把以上 4 个属性再细分，让仓库更好管理**

模块化 Vuex，可以让每一个模块拥有自己的 State、Getter、Mutation、Action, 使得结构非常清晰，方便管理。

**存储数据的方法**

- dispatch：异步操作，写法： `this.$store.dispatch('mutations方法名',值)`
- commit：同步操作，写法：`this.$store.commit('mutations方法名',值)`

**总结**

vuex 实现了一个单向数据流，在全局拥有一个 State 存放数据，当组件要更改 State 中的数据时，必须通过 Mutation 进行，Mutation 同时提供了订阅者模式供外部插件调用获取 State 数据的更新。而当所有异步操作（常见于调用后端接口异步获取更新数据）或批量的同步操作需要走 Action，但 Action 也是无法直接修改 State 的，还是需要通过 Mutation 来修改 State 的数据。最后，根据 State 的变化，渲染到视图上。

**Mutations 和 Actions 的区别**

Mutations：都是同步事务。\
Actions：提交的是 Mutations，而不是直接更改状态，可以包含异步操作。

**vuex 做持久化存储**

vuex 本身不是持久化存储。

1. 使用 cookie 或 localStorage 做持久化存储。
2. 使用 vuex-persist 插件。

## pinia？

**三个概念：state、getters 和 actions**

**与 vuex 的区别**

- 没有 Mutation，只有 Action。
- 完美支持 ts。Vuex 支持 ts 还需要做一些额外的工作。
- 没有命名空间模块，pinia 的 store 是扁平化结构，创建的多个 store 都是相互隔离的，没有嵌套关系。
- 不再需要注入、导入函数。

## vue 性能优化？

**代码层面**

1. v-if 和 v-show 区分使用场景
2. computed 和 watch 区分使用场景
3. v-for 遍历必须为 item 添加 key，且避免同时使用 v-if
4. 长列表性能优化
5. 事件的销毁
6. 图片资源懒加载
7. 路由懒加载
8. 第三方插件的按需引入
9. 优化无限列表性能

**Webpack 层面的优化**

1. Webpack 对图片进行压缩
2. 减少 ES6 转为 ES5 的冗余代码
3. 提取公共代码
4. 模板预编译

https://baijiahao.baidu.com/s?id=1704641340717561968&wfr=spider&for=pc

## 虚拟 dom 是什么？

虚拟 dom 的本质是 js 对象，虚拟 dom 的三要素：` target（不可缺少）` ` attr` `children`

```js
let obj = {
  target: "ul", // 不可缺少
  attr: "abc",
  children: [
    {
      target: "li",
    },
  ],
};
```

## 虚拟 dom 用来做什么？

通过虚拟 dom，使用`document.createElement`创建真实的 dom

## 虚拟 dom 如何提升 vue 的渲染效率的？

初次渲染时，渲染完成后会保存对应的虚拟 dom（js 对象）

更新节点时，会重新生成一份虚拟 dom，与之前保存的虚拟 dom 做比较（diff 算法），然后对变化的部分做局部更新

将直接操作 dom（影响浏览器性能），转变成 js 对象的比较（执行效率上的问题）

## diff 算法？

1. vue 中的 diff 算法称为 patching 算法，它由 Snabbdom 修改而来，虚拟 DOM 要想转化为真实 DOM 就需要通过 patch 方法转换。
2. 最初 Vue1.x 视图中每个依赖均有更新函数对应，可以做到精准更新，因此并不需要虚拟 DOM 和 patching 算法支持，但是这样粒度过细导致 Vue1.x 无法承载较大应用；Vue 2.x 中为了降低 Watcher 粒度，每个组件只有一个 Watcher 与之对应，此时就需要引入 patching 算法才能精确找到发生变化的地方并高效更新。
3. vue 中 diff 执行的时刻是组件内响应式数据变更触发实例执行其更新函数时，更新函数会再次执行 render 函数获得最新的虚拟 DOM，然后执行 patch 函数，并传入新旧两次虚拟 DOM，通过比对两者找到变化的地方，最后将其转化为对应的 DOM 操作。
4. patch 过程是一个递归过程，遵循深度优先、同层比较的策略；以 vue3 的 patch 为例：
   - 首先判断两个节点是否为相同同类节点，不同则删除重新创建
   - 如果双方都是文本则更新文本内容
   - 如果双方都是元素节点则递归更新子元素，同时更新元素属性
   - 更新子节点时又分了几种情况：
     - 新的子节点是文本，老的子节点是数组则清空，并设置文本；
     - 新的子节点是文本，老的子节点是文本则直接更新文本；
     - 新的子节点是数组，老的子节点是文本则清空文本，并创建新子节点数组中的子元素；
     - 新的子节点是数组，老的子节点也是数组，那么比较两组子节点，更新细节 blabla
5. vue3 中引入的更新策略：编译期优化 patchFlags、block 等

## 源码部分

**模板解析**

https://github.com/peachapp/daily/commit/e62efe05b524b04efa512365643e34a8f6db0d5e

```js
class vue {
  constructor(options) {
    this.$el = document.querySelector(options.el);
    this.$data = options.data;

    this.compile(this.$el);
  }

  compile(node) {
    node.childNodes.forEach((item, index) => {
      // 元素节点
      if (item.nodeType == 1) {
        this.compile(item);
      }
      // 节点文本，如果有{{}}就替换成数据
      if (item.nodeType == 3) {
        // 正则匹配{{}}
        let reg = /\{\{(.*?)\}\}/g;
        let text = item.textContent;
        // 给节点赋值

        item.textContent = text.replace(reg, (match, vmKey) => {
          vmKey = vmKey.trim();
          return this.$data[vmKey];
        });
      }
    });
  }
}
```

使用：

```html
<div id="app">
  <h1>{{str}}</h1>
  {{ str }}
</div>

<script>
  new vue({
    el: "#app",
    data: {
      str: "你好",
    },
  });
</script>
```

**生命周期**

https://github.com/peachapp/daily/commit/17ca2d4ea5ff43e59d330a6e3166a8f9181a04af

```js
class vue {
  constructor(options) {
    if (typeof options.beforeCreate == "function") {
      options.beforeCreate.bind(this)();
    }

    this.$data = options.data;

    if (typeof options.created == "function") {
      options.created.bind(this)();
    }

    if (typeof options.beforeMount == "function") {
      options.beforeMount.bind(this)();
    }

    this.$el = document.querySelector(options.el);

    this.compile(this.$el);

    if (typeof options.mounted == "function") {
      options.mounted.bind(this)();
    }
  }

  compile(node) {
    node.childNodes.forEach((item, index) => {
      // 元素节点
      if (item.nodeType == 1) {
        this.compile(item);
      }
      // 节点文本，如果有{{}}就替换成数据
      if (item.nodeType == 3) {
        // 正则匹配{{}}
        let reg = /\{\{(.*?)\}\}/g;
        let text = item.textContent;
        // 给节点赋值

        item.textContent = text.replace(reg, (match, vmKey) => {
          vmKey = vmKey.trim();
          return this.$data[vmKey];
        });
      }
    });
  }
}
```

使用：

```html
<script>
  new vue({
    el: "#app",
    data: {
      str: "你好",
    },
    beforeCreate() {
      console.log("beforeCreate", this.$el, this.$data);
    },
    created() {
      console.log("created", this.$el, this.$data);
    },
    beforeMount() {
      console.log("beforeMount", this.$el, this.$data);
    },
    mounted() {
      console.log("mounted", this.$el, this.$data);
    },
  });
</script>
```

**添加事件**

https://github.com/peachapp/daily/commit/c48e0523f723e9da724feaa53f9ebb0e03bfabc7

**data 劫持**

https://github.com/peachapp/daily/commit/f2fa06503bf2a755b47d17dfa79c4c2e1c26b2bc

**更新视图**

https://github.com/peachapp/daily/commit/733a720ecaa5811f1a07ea91c52ab075655f6f4c

**v-model 双向绑定原理**

https://github.com/peachapp/daily/commit/f13a1ca6b0136b4318d702ccca8ce4db7f84cfc5

通过`Object.defineProperty`劫持数据发生的改变，如果数据发生了改变（在 set 中进行赋值的），触发 update 方法进行更新节点内容（{{}}），从而实现了数据双向绑定的原理。

## diff 算法

功能：提升性能

虚拟 dom --> 其实就是数据（把 dom 数据化）

主流：snabbdom、virtual-dom

h 函数：用来生成虚拟 dom

```
h('ul', // 节点名称
  {}, //
  [ // 内容（string）或子节点（array）
    h('li', { key: 'a' }, 'a'),
    h('li', { key: 'b' }, 'b'),
    h('li', { key: 'c' }, 'c'),
  ]
);
```

虚拟节点：

```
{
  children: undefined, // 子节点
  data: {},
  elm: h1, // 真实节点
  key: undefined,
  sel: 'h1', // 节点名称
  text: '你好' // 节点内容
}
```

真实节点：

```
<h1>你好</h1>
```

**新老节点替换的规则：**

1. 如果新老节点不是同一个节点名称，那么就暴力删除旧的，创建插入新的节点。
2. 只能同级比较，不能跨层比较。如果跨层，那么就暴力删除旧的，创建插入新的节点。
3. 如果是相同节点，又分为很多情况

   - 新节点有没有 children。\
     如果新节点没有 children，那就证明新节点是文本，直接把旧的替换成新的文本。
   - 新节点有 children。\
     新的有 children，旧的也有 children --> 就是 diff 算法的核心了。\
     - 旧前 和 新前 \
       匹配：旧前的指针 ++，新前的指针 ++
     - 旧后 和 新后 \
       匹配：旧后的指针 --，新后的指针 --
     - 旧前 和 新后 \
       匹配：旧前的指针 ++，新后的指针 --
     - 旧后 和 新前 \
       匹配：旧后的指针 --，新前的指针 ++
     - 以上都不满足条件 --> 查找 \
       新的指针 ++，新的添加到页面上，如果新在旧的中，要给旧的赋值成 undefined
     - 创建或者删除 \

   新的有 children，旧的没有 --> 创建元素添加（把旧的内容删除清空掉，添加新的）。

注意：如果要提升性能，一定要加入 key，key 是唯一标识再更改前后确认是不是同一个节点

## 手写 diff 算法

https://github.com/peachapp/daily/tree/main/example/VueDiff

**搭建环境**

```
npm init -y
cnpm install webpack@5 webpack-cli@3 webpack-dev-server@3 -S
```

**1. 生成虚拟 dom**

**2.patch**

遵循`新老节点替换的规则`。

## mvvm 和 mvc

**mvvm**：view 可以更改数据，数据可以主动触发视图更新，形成数据双向的绑定，他们通过 viewmodel 进行交互，model 和 view 不直接进行交互。

- model：模型层（数据层：vue 中的 data 数据）
- view： 视图层（dom ==> 在页面中展示的内容）
- viewmodel：视图模型层（就是 vue 源码）

**mvc**：\
view 接受用户行为通知 controller，controller 通知 model 进行数据更新，model 通知 view 进行页面更新，model 和 view 进行了交互。

- model：模型层
- view：视图层
- controller：控制器

## 使用的 vue 版本？vue3 的了解？

使用的 vue 版本是 2.6.12。

Vue 3 对比 Vue 2 做了哪些改动：

1. createApp() 代替了 new Vue()
2. v-model 代替了以前的 v-model 和 .sync
3. 根元素可以有不止一个元素了
4. 新增 Teleport 传送门
5. destroyed 被改名为 unmounted 了（before 当然也改了）
6. ref 属性支持函数了

vue3 相对于 vue2 有以下几个优化点：

1. 性能提升：打包大小减少 41%，初次渲染快 55%，更新快 133%，内存使用减少 54
2. 新推出的 Composition API 使组件更易维护，减少无用数据绑定页面更流畅
3. 更好的支持 TypeScript，可以在创建命令里直接配置。

**新特性**

1. Composition API
2. setup 组件选项
3. 反应性变量 ref
4. setup 内部注册生命周期。组合 API 上的生命周期钩子与选项 API 的名称相同，但前缀为 on: 如 mounted 变成 onMounted。这些函数接受一个回调，该回调将在组件调用钩子时执行。
5. watch api，接受 3 个参数 \
   我们想要观察的响应式引用或 getter 函数 \
   回调 \
   可选配置选项
6. computed api
7. Teleport

## Vue 3 为什么使用 Proxy？

1. 弥补 Object.defineProperty 的两个不足

   - 动态创建的 data 属性需要用 Vue.set 来赋值，Vue 3 用了 Proxy 就不需要了
   - 基于性能考虑，Vue 2 篡改了数组的 7 个 API，Vue 3 用了 Proxy 就不需要了

2. defineProperty 需要提前递归地遍历 data 做到响应式，而 Proxy 可以在真正用到深层数据的时候再做响应式

## Vue 3 为什么使用 Composition API？

1. Composition API 比 mixins、高阶组件、extends、Renderless Components 等更好，原因有三：
   - 模版中的数据来源不清晰。
   - 命名空间冲突。
   - 性能。
2. 更适合 TypeScript

## 如何将 package.json 中的每个依赖项更新到最新版本？

可以通过使用`npm-check-updates`等工具来自动更新依赖包版本，也可以手动修改 package.json 中的版本号并重新安装依赖包。

```
npm i -g npm-check-updates
ncu -u
npm install
```
