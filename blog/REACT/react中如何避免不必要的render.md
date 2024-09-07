# `react`中如何避免不必要的`render`

1. `shouldComponentUpdate`和`PureComponent`。在`react`类组件中，可以利用`shouldComponentUpdate`或者`PureComponent`来减少因父组件更新而触发子组件的`render`，从而达到目的。`shouldComponentUpdate`可以决定组件是否重新渲染，如果不希望组件重新渲染，返回`false`即可。
2. 利用高阶组件。在函数组件中，并没有`shouldComponentUpdate`这个生命周期，可以利用高阶组件，封装一个类似`PureComponet`的功能。
3. `React.memo`。`React.memo`是`React 16.6`新的一个`API`，用来缓存组件的渲染，避免不必要的更新，其实也是一个高阶组件，与`PureComponent`十分类似，但不同的是，`React.memo`只能用于函数组件。
4. 使用`react`的`useMemo`、`useCallback`钩子，只能用于函数组件。
5. 给组件设置`key`。
