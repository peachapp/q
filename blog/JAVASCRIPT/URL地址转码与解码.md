# URL 地址转码与解码

我们在日常编写前端代码时常常调用后端接口，而接口大部分都有传参操作，而有一些参数值会和 http 中使用的关键词冲突，这时我们就需要使用到转码，部分转码工作由浏览器自动化完成，而很多都是需要我们手动接入进行转码。

## `escape`和`unescape`

`escape()`不能直接用于 URL 编码，它的真正作用是返回一个字符的`Unicode编码值`。

采用 unicode 字符集对指定的字符串除`0-255`以外进行编码。所有的空格符、标点符号、特殊字符以及更多有联系非 ASCII 字符都将被转化成%xx 格式的字符编码（xx 等于该字符在字符集表里面的编码的 16 进制数字）。比如，空格符对应的编码是`%20`。

`escape()`不编码字符有 69 个：`*`、`+`、`-`、`.`、`/`、`@`、`_`、`0-9`、`a-z`、`A-Z`。

`escape()`函数用于 js 对字符串进行编码，不常用。

```js
var url = "http://localhost:8080/pro?a=1&b=张三&c=aaa";
escape(url); // -->   http%3A//localhost%3A8080/pro%3Fa%3D1%26b%3D%u5F20%u4E09%26c%3Daaa
```

## `encodeURI`和`decodeURI`

把 URI 字符串采用 UTF-8 编码格式转化成 escape 各式的字符串。

`encodeURI()`不编码字符有 82 个：`!`、`#`、`$`、`&`、`'`、`(`、`)`、`*`、`+`、`,`、`-`、`.`、`/`、`:`、`;`、`=`、`?`、`@`、`_`、`~`、`0-9`、`a-z`、`A-Z`。

`encodeURI()`用于整个 url 编码。

```js
var url = "http://localhost:8080/pro?a=1&b=张三&c=aaa";
encodeURI(url); // -->   http://localhost:8080/pro?a=1&b=%E5%BC%A0%E4%B8%89&c=aaa
```

## `encodeURIComponent`和`decodeURIComponent`

与`encodeURI()`的区别是，它用于对 URL 的组成部分进行个别编码，而不用于对整个 URL 进行编码。

因此，"`;`、`/`、`?`、`:`、`@`、`&`、`=`、`+`、`$`、`,`、`#`"，这些在`encodeURI()`中不被编码的符号，在`encodeURIComponent()`中统统会被编码。至于具体的编码方法，两者是一样。把 URI 字符串采用 UTF-8 编码格式转化成 escape 格式的字符串。

`encodeURIComponent()`用于参数的传递，参数包含特殊字符可能会造成间断。

```js
var url = "http://localhost:8080/pro?a=1&b=张三&c=aaa";
encodeURIComponent(url); // -->   http%3A%2F%2Flocalhost%3A8080%2Fpro%3Fa%3D1%26b%3D%E5%BC%A0%E4%B8%89%26c%3Daaa
```

```js
var url = "http://localhost:8080/pp?a=1&b=" + paramUrl;
var paramUrl = "http://localhost:8080/aa?a=1&b=2&c=3";
// 应该使用encodeURIComponent()进行转码
encodeURIComponent(paramUrl); // -->   http://localhost:8080/pp?a=1&b=http%3A%2F%2Flocalhost%3A8080%2Faa%3Fa%3D1%26b%3D2%23%26c%3D3
```
