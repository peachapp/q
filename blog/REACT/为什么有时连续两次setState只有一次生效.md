# 为什么有时连续两次`setState`只有一次生效

分别执行以下代码：

```js
componentDidMount() {
  this.setState({ index: this.state.index + 1 }, () => {
    console.log(this.state.index);
  })
  this.setState({ index: this.state.index + 1 }, () => {
    console.log(this.state.index);
  })
}
```

```js
componentDidMount() {
  this.setState((preState) => ({ index: preState.index + 1 }), () => {
    console.log(this.state.index);
  })
  this.setState(preState => ({ index: preState.index + 1 }), () => {
    console.log(this.state.index);
  })
}
```

执行结果：

```js
1;
1;
```

```js
2;
2;
```

原因：

1. 直接传递对象的`setstate`会被合并成一次。
2. 使用函数传递`state`不会被合并。
