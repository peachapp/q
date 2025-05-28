# 解决打包后路由没显示出来的问题（history 404）

1. 将`history`路由改为`hash`路由（用于项目上线要求是`hash`模式或者前端打包测试项目）。
2. 如果项目上线要求是`history`模式，前端不需要做修改，需要后端重定向。

   > history 模式刷新时会向服务端发起请求，服务端无法响应到对应的资源，所以会出现 404 问题。

   [解决 history 404 问题](https://v3.router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)

   需要后端配置，后端默认把首页返回去，加载`index.html`之后，会对比当前路由，就能显示对应的组件了。
