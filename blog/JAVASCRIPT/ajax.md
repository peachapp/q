# `ajax`（`Asynchronous JavaScript And Xml`）

基于`XML`的异步`JavaScript`，简称`AJAX`。

五个步骤：

1. 创建一个`XMLHttpRequest`异步对象。

```js
var xhr = new XMLHttpRequest();
```

2. 设置请求方式和请求地址。

```js
// 1.get请求如果有参数就需要在url后面拼接参数。xhr.open("get","validate.php?username="+name)
// 2.post请求如果有参数，就需要在请求体中传递参数。
xhr.open("post", "validate.php");
```

3. 设置请求头：`setRequestHeader()`（`GET`方式忽略此步骤）。

```js
// 1.get不需要设置
// 2.post需要设置请求头：Content-Type:application/x-www-form-urlencoded
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
```

4. 向服务器发送请求。

```js
// 1.get的参数在url拼接了，所以不需要在这个函数中设置
// 2.post的参数在这个函数中设置(如果有参数)
xhr.send(null);
xhr.send("username=" + name);
```

5. 让异步对象接收服务器的响应数据。\
   一个成功的响应有两个条件：
   1. 服务器成功响应了（`status`状态为`200`）。
   2. 异步对象的响应状态为`4`（数据解析完毕可以使用了）。

```js
xhr.onreadystatechange = function(){
if(xhr.status == 200 && xhr.readyState == 4){
 console.log(xhr.responseText);
}
```

优点：

1. 最大的优点就是页面无刷新，用户的体验非常好。
2. 使用异步方式与服务器通信，具有更加迅速的响应能力。
3. 可以把以前一些服务器负担的工作转嫁到客户端，利用客户端限制的能力来处理，减轻服务器和带宽的负担，节约空间和带宽租用成本，并且减轻服务器的负担，`Ajax`的原则是“按需取数据”，可以最大程度地减少冗余请求和响应对服务器造成的负担。
4. 基于标准化的并被广泛支持的技术，不需要下载插件和小程序。

缺点：

1. `Ajax`不支持浏览器返回按钮。
2. 安全问题，`Ajax`暴露了与服务器交互的细节。
3. 对搜索引擎的支持比较弱。
4. 破坏了程序的异常机制。
5. 不容易调试。
