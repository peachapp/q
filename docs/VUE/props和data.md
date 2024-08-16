# `props`和`data`

`props`：`props`用于接收父组件的数据。`props`的数据是只读的，无法重新赋值。

`data`：`data`是组件的私有数据，需要其自身来维护。`data`的数据是可读可写的。

优先级：`props` > `methods` > `data` > `computed` > `watch`。

优先级是在源码中体现的：`function initState`。

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
