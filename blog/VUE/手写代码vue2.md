# 手写代码实现`vue2`

## 模板解析

```js
class vue {
  constructor(options) {
    // 这是节点
    this.$el = document.querySelector(options.el);
    // 这是data
    this.$data = options.data;

    // 模版解析
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
      b: "这也是data的数据",
    },
  });
</script>
```

## 生命周期

```js
class vue {
  constructor(options) {
    if (typeof options.beforeCreate == "function") {
      options.beforeCreate.bind(this)();
    }

    // 这是data
    this.$data = options.data;

    if (typeof options.created == "function") {
      options.created.bind(this)();
    }

    if (typeof options.beforeMount == "function") {
      options.beforeMount.bind(this)();
    }

    // 这是节点
    this.$el = document.querySelector(options.el);

    // 模版解析
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
<div id="app">
  <h1>{{str}}</h1>
  {{ str }}
</div>

<script>
  new vue({
    el: "#app",
    data: {
      str: "你好",
      b: "这也是data的数据",
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

## 添加事件

```js
class vue {
  constructor(options) {
    this.$options = options;

    if (typeof options.beforeCreate == "function") {
      options.beforeCreate.bind(this)();
    }

    // 这是data
    this.$data = options.data;

    if (typeof options.created == "function") {
      options.created.bind(this)();
    }

    if (typeof options.beforeMount == "function") {
      options.beforeMount.bind(this)();
    }

    // 这是节点
    this.$el = document.querySelector(options.el);

    // 模版解析
    this.compile(this.$el);

    if (typeof options.mounted == "function") {
      options.mounted.bind(this)();
    }
  }

  compile(node) {
    node.childNodes.forEach((item, index) => {
      // 元素节点
      if (item.nodeType == 1) {
        // 判断元素节点是否绑定了@click
        if (item.hasAttribute("@click")) {
          let vmKey = item.getAttribute("@click").trim();
          item.addEventListener("click", (event) => {
            this.eventFn = this.$options[vmKey].bind(this);
            this.eventFn(event);
          });
        }

        if (item.childNodes.length > 0) {
          this.compile(item);
        }
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
  <button @click="btn">按钮</button>
</div>

<script>
  new vue({
    el: "#app",
    data: {
      str: "你好",
      b: "这也是data的数据",
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
    methods: {
      btn() {
        alert(1);
      },
    },
  });
</script>
```

## `data`劫持

```js
class vue {
  constructor(options) {
    this.$options = options;

    if (typeof options.beforeCreate == "function") {
      options.beforeCreate.bind(this)();
    }

    // 这是data
    this.$data = options.data;
    this.proxyData();

    if (typeof options.created == "function") {
      options.created.bind(this)();
    }

    if (typeof options.beforeMount == "function") {
      options.beforeMount.bind(this)();
    }

    // 这是节点
    this.$el = document.querySelector(options.el);

    // 模版解析
    this.compile(this.$el);

    if (typeof options.mounted == "function") {
      options.mounted.bind(this)();
    }
  }

  // 1.给Vue大对象赋属性，来自于data中
  // 2.data中的属性值和Vue大对象的属性保持双向（劫持）
  proxyData() {
    for (let key in $data) {
      Object.defineProperty(this, key, {
        get() {
          return this.$data[key];
        },
        set(val) {
          this.$data[key] = val;
        },
      });
    }
  }

  compile(node) {
    node.childNodes.forEach((item, index) => {
      // 元素节点
      if (item.nodeType == 1) {
        // 判断元素节点是否绑定了@click
        if (item.hasAttribute("@click")) {
          let vmKey = item.getAttribute("@click").trim();
          item.addEventListener("click", (event) => {
            this.eventFn = this.$options[vmKey].bind(this);
            this.eventFn(event);
          });
        }

        if (item.childNodes.length > 0) {
          this.compile(item);
        }
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
  <button @click="btn">按钮</button>
</div>

<script>
  new vue({
    el: "#app",
    data: {
      str: "你好",
      b: "这也是data的数据",
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
    methods: {
      btn() {
        console.log(this.str); // 你好
        this.str = "改变str";
        console.log(this.str); // 改变str
      },
    },
  });
</script>
```

## 更新视图

```js
class vue {
  constructor(options) {
    this.$options = options;

    this.$watchEvent = {};

    if (typeof options.beforeCreate == "function") {
      options.beforeCreate.bind(this)();
    }

    // 这是data
    this.$data = options.data;
    this.proxyData();
    this.observe();

    if (typeof options.created == "function") {
      options.created.bind(this)();
    }

    if (typeof options.beforeMount == "function") {
      options.beforeMount.bind(this)();
    }

    // 这是节点
    this.$el = document.querySelector(options.el);

    // 模版解析
    this.compile(this.$el);

    if (typeof options.mounted == "function") {
      options.mounted.bind(this)();
    }
  }

  // 1.给Vue大对象赋属性，来自于data中
  // 2.data中的属性值和Vue大对象的属性保持双向（劫持）
  proxyData() {
    for (let key in $data) {
      Object.defineProperty(this, key, {
        get() {
          return this.$data[key];
        },
        set(val) {
          this.$data[key] = val;
        },
      });
    }
  }

  // 触发data中的数据发生变化来执行watch中的update
  observe() {
    for (let key in $data) {
      let value = this.$data[key];
      let that = this;
      Object.defineProperty(this.$data, key, {
        get() {
          return value;
        },
        set(val) {
          value = val;
          if (that.$watchEvent[key]) {
            that.$watchEvent[key].forEach((item, index) => {
              item.update();
            });
          }
        },
      });
    }
  }

  compile(node) {
    node.childNodes.forEach((item, index) => {
      // 元素节点
      if (item.nodeType == 1) {
        // 判断元素节点是否绑定了@click
        if (item.hasAttribute("@click")) {
          let vmKey = item.getAttribute("@click").trim();
          item.addEventListener("click", (event) => {
            this.eventFn = this.$options[vmKey].bind(this);
            this.eventFn(event);
          });
        }

        if (item.childNodes.length > 0) {
          this.compile(item);
        }
      }
      // 节点文本，如果有{{}}就替换成数据
      if (item.nodeType == 3) {
        // 正则匹配{{}}
        let reg = /\{\{(.*?)\}\}/g;
        let text = item.textContent;

        // 给节点赋值
        item.textContent = text.replace(reg, (match, vmKey) => {
          vmKey = vmKey.trim();
          if (this.hasOwnProperty(vmKey)) {
            let watcher = new Watch(this, vmKey, item, "textContent");
            if (this.$watchEvent[vmKey]) {
              this.$watchEvent[vmKey].push(watcher);
            } else {
              this.$watchEvent[vmKey] = [];
              this.$watchEvent[vmKey].push(watcher);
            }
          }
          return this.$data[vmKey];
        });
      }
    });
  }
}

class Watch {
  constructor(vm, key, node, attr) {
    // 对象
    this.vm = vm;
    // 属性名称
    this.key = key;
    // 节点
    this.node = node;
    // 改变文本节点内容的字符串
    this.attr = attr;
  }
  // 执行改变（update）操作
  update() {
    this.node[this.attr] = this.vm[this.key];
  }
}
```

使用：

```html
<div id="app">
  <h1>{{str}}</h1>
  {{ str }}
  <button @click="btn">按钮</button>
</div>

<script>
  new vue({
    el: "#app",
    data: {
      str: "你好",
      b: "这也是data的数据",
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
    methods: {
      btn() {
        console.log(this.str); // 你好
        this.str = "改变str";
        console.log(this.str); // 改变str
      },
    },
  });
</script>
```

## `v-model`双向绑定原理

```js
class vue {
  constructor(options) {
    this.$options = options;

    this.$watchEvent = {};

    if (typeof options.beforeCreate == "function") {
      options.beforeCreate.bind(this)();
    }

    // 这是data
    this.$data = options.data;
    this.proxyData();
    this.observe();

    if (typeof options.created == "function") {
      options.created.bind(this)();
    }

    if (typeof options.beforeMount == "function") {
      options.beforeMount.bind(this)();
    }

    // 这是节点
    this.$el = document.querySelector(options.el);

    // 模版解析
    this.compile(this.$el);

    if (typeof options.mounted == "function") {
      options.mounted.bind(this)();
    }
  }

  // 1.给Vue大对象赋属性，来自于data中
  // 2.data中的属性值和Vue大对象的属性保持双向（劫持）
  proxyData() {
    for (let key in $data) {
      Object.defineProperty(this, key, {
        get() {
          return this.$data[key];
        },
        set(val) {
          this.$data[key] = val;
        },
      });
    }
  }

  // 触发data中的数据发生变化来执行watch中的update
  observe() {
    for (let key in $data) {
      let value = this.$data[key];
      let that = this;
      Object.defineProperty(this.$data, key, {
        get() {
          return value;
        },
        set(val) {
          value = val;
          if (that.$watchEvent[key]) {
            that.$watchEvent[key].forEach((item, index) => {
              item.update();
            });
          }
        },
      });
    }
  }

  compile(node) {
    node.childNodes.forEach((item, index) => {
      // 元素节点
      if (item.nodeType == 1) {
        // 判断元素节点是否绑定了@click
        if (item.hasAttribute("@click")) {
          let vmKey = item.getAttribute("@click").trim();
          item.addEventListener("click", (event) => {
            this.eventFn = this.$options[vmKey].bind(this);
            this.eventFn(event);
          });
        }

        // 判断元素节点是否添加了v-model
        if (item.hasAttribute("v-model")) {
          let vmKey = item.getAttribute("v-model").trim();
          if (this.hasOwnProperty(vmKey)) {
            item.value = this[vmKey];
          }
          item.addEventListener("input", (event) => {
            this[vmKey] = item.value;
          });
        }

        if (item.childNodes.length > 0) {
          this.compile(item);
        }
      }
      // 节点文本，如果有{{}}就替换成数据
      if (item.nodeType == 3) {
        // 正则匹配{{}}
        let reg = /\{\{(.*?)\}\}/g;
        let text = item.textContent;

        // 给节点赋值
        item.textContent = text.replace(reg, (match, vmKey) => {
          vmKey = vmKey.trim();
          if (this.hasOwnProperty(vmKey)) {
            let watcher = new Watch(this, vmKey, item, "textContent");
            if (this.$watchEvent[vmKey]) {
              this.$watchEvent[vmKey].push(watcher);
            } else {
              this.$watchEvent[vmKey] = [];
              this.$watchEvent[vmKey].push(watcher);
            }
          }
          return this.$data[vmKey];
        });
      }
    });
  }
}

class Watch {
  constructor(vm, key, node, attr) {
    // 对象
    this.vm = vm;
    // 属性名称
    this.key = key;
    // 节点
    this.node = node;
    // 改变文本节点内容的字符串
    this.attr = attr;
  }
  // 执行改变（update）操作
  update() {
    this.node[this.attr] = this.vm[this.key];
  }
}
```

使用：

```html
<div id="app">
  <h1>{{str}}</h1>
  {{ str }}
  <button @click="btn">按钮</button>
</div>

<script>
  new vue({
    el: "#app",
    data: {
      str: "你好",
      b: "这也是data的数据",
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
    methods: {
      btn() {
        console.log(this.str); // 你好
        this.str = "改变str";
        console.log(this.str); // 改变str
      },
    },
  });
</script>
```

通过`Object.defineProperty`劫持数据发生的改变，如果数据发生了改变（在`set`中进行赋值的），触发`update`方法进行更新节点内容（`{{}}`），从而实现了数据双向绑定的原理。
