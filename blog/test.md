## vue 代码演示

::: vue-playground Vue 交互演示

@file App.vue

```vue
<script setup>
import { ref } from "vue";

const msg = ref("你好交互演示!");
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
```

:::

## 代码演示

::: normal-demo normal 类型代码演示

```html
<h1>🍑</h1>
<p><span id="hello">你好</span>世界!</p>
```

```js
document.querySelector("#hello").addEventListener("click", () => {
  alert("你好世界");
});
```

```css
span {
  color: red;
}
```

:::

::: vue-demo Vue 类型代码演示

```vue
<template>
  <div class="box">
    <h1>🍑</h1>
    <span @click="handler">{{ message }}</span>
  </div>
</template>
<script>
const { ref } = Vue;

export default {
  setup() {
    const message = ref("世界");

    const handler = () => {
      message.value = "你好 " + message.value;
    };

    return {
      message,
      handler,
    };
  },
};
</script>
<style>
.box span {
  color: red;
}
</style>
```

:::

::: react-demo react 类型代码演示

```js
const { useState } = React;

export default () => {
  const [message, setMessage] = useState("世界");

  const handler = () => {
    setMessage(`你好 ${message}`);
  };

  return (
    <div className="box">
      <h1>🍑</h1>
      <span onClick={handler}>{message}</span>
    </div>
  );
};
```

```css
.box span {
  color: red;
}
```

:::
