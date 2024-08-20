# `mvvm`和`mvc`

`mvvm`：`modle`可以触发视图更新，`view`可以更改数据，形成数据双向的绑定。`model`和`view`不直接进行交互，它们通过`viewmodel`进行交互。

- `model`：模型层（数据层：`vue`中的`data`数据）。
- `view`：视图层（dom ==> 在页面中展示的内容）。
- `viewmodel`：视图模型层（就是`vue`源码）。

`mvc`：`model`通知`view`进行页面更新，`view`接受用户行为通知`controller`，`controller`通知`model`进行数据更新，实现`model`和`view`的交互。

- `model`：模型层。
- `view`：视图层。
- `controller`：控制器。
