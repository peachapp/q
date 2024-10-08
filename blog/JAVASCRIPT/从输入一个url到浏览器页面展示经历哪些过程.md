# 从输入一个`url`到浏览器页面展示经历哪些过程

https://juejin.cn/post/6935232082482298911

一般会经历以下几个过程：

1. 首先，在浏览器地址栏中输入`url`。
2. 浏览器先查看`浏览器缓存` --> `操作系统缓存` --> `路由器缓存`，如果缓存中有，会直接在屏幕中显示页面内容。如果没有，则跳到第三步操作。
3. 发送`HTTP`请求前，需要域名解析（`DNS解析`），解析获取相应的`IP`地址。
4. 浏览器向服务器发起`tcp连接`，与浏览器建立`tcp三次握手`。
5. 握手成功后，浏览器向服务器发送`HTTP请求`，请求数据包。
6. 服务器处理收到的请求，将数据（或错误信息，或重定向的新的`url`地址）返回至浏览器。
7. 浏览器收到`HTTP响应`。
8. 读取页面内容，浏览器渲染，解析`html源码`。
9. 生成`Dom树`、解析`css样式`、`js交互`。
10. 客户端和服务器交互。
11. `ajax`查询。

其中，步骤 2 的具体过程是：

- 浏览器缓存：浏览器会记录`DNS`一段时间，因此，只是第一个地方解析`DNS`请求。
- 操作系统缓存：如果在浏览器缓存中不包含这个记录，则会使系统调用操作系统，获取操作系统的记录（保存最近的`DNS查询缓存`）。
- 路由器缓存：如果上述两个步骤均不能成功获取`DNS记录`，继续搜索路由器缓存。
- `ISP缓存`：若上述均失败，继续向`ISP`搜索。
