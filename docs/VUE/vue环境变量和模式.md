# `vue`环境变量和模式

在项目中的根目录新建文件，在新建文件中放置环境变量。

- 开发环境：`.env.development`。
- 生产环境：`.env.production`。

环境变量文件分类：

```js
.env # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

为一个特定模式准备的环境文件（如：`.env.production`）将比一般的环境文件（如：`.env`）拥有更高的优先级。

环境变量配置：

每一个环境变量文件中只包含环境变量的“键 = 值”对，所配置的变量中只有以`VUEAPP`开头的变量才会被`webpack.DefinePlugin`静态嵌入到客户端包中，如：`VUE_APP_PERMISSION = true`。

环境变量访问：

在应用代码中通过`process.env.[变量名]`进行访问，从而获取到它的值。如：

```js
if (isDev()) {
  return process.env.VUE_APP_PERMISSION === "true" ? true : false;
}
```

模式分类：

在`vue-cli`中默认情况下有以下三种模式：

```js
development 模式：  用于 vue-cli-service serve
production 模式：   用于 vue-cli-service build 和 vue-cli-service test:e2e
test 模式：         用于 vue-cli-service test:unit
```

模式与环境变量不同，一个模式可包含多个环境变量（`NODE_ENV`），每个模式都会将`NODE_ENV`的值设为模式的名称。

模式定义与使用：

可以通过为`.env`文件增加后缀来设置某个模式下特有的环境变量。比如，在项目根目录创建一个名为`.env.development`的文件，那么在这个文件里声明过的变量就只会在`development`模式下被载入。

也可以通过传递`--mode`选项参数为命令行覆写默认的模式。例如，要在构建命令中使用开发环境变量，则需在`package.json`脚本中设置：

```js
"build": "vue-cli-service build --mode development"
```
