# base64、url、blob 互相转换

在平时开发的时候，我们在处理文件，尤其是图片的时候，经常会跟`base64`、`url`、`blob(file)`这三种形式的内容打交道。

`base64`格式一般都是以`data:image/jpeg;base64,`这种类似形式打头的一串很长的字符串。

`url`一般以服务器地址或者路径（形如`http://xxx.jpg`或者`/static/xxx.jpg`）为主，也会有浏览器本地地址（形如`blob:http://`这种）。

`blob`一般是浏览器中的一种对象类型，`file`类型也是其一种。

## 如何互相进行转换

### base64 到 blob：

比如 png 格式的 base64 图片转成 blob 类型：

```js
function pngBase64ToBlob(urlData) {
  try {
    var arr = urlData.split(",");
    var mime = arr[0].match(/:(.*?);/)[1] || "image/png";
    // 去掉url的头，并转化为byte
    var bytes = window.atob(arr[1]);
    // 处理异常,将ascii码小于0的转换为大于0
    var ab = new ArrayBuffer(bytes.length);
    // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
    var ia = new Uint8Array(ab);

    for (var i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i);
    }

    return new Blob([ab], {
      type: mime,
    });
  } catch (e) {
    var ab = new ArrayBuffer(0);
    return new Blob([ab], {
      type: "image/png",
    });
  }
}
```

其他格式的图片类似，于是可以写一个通用的图片接口：

```js
function imageBase64ToBlob(urlData, type = "image/jpeg") {
  try {
    var arr = urlData.split(",");
    var mime = arr[0].match(/:(.*?);/)[1] || type;
    // 去掉url的头，并转化为byte
    var bytes = window.atob(arr[1]);
    // 处理异常,将ascii码小于0的转换为大于0
    var ab = new ArrayBuffer(bytes.length);
    // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
    var ia = new Uint8Array(ab);

    for (var i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i);
    }

    return new Blob([ab], {
      type: mime,
    });
  } catch (e) {
    var ab = new ArrayBuffer(0);
    return new Blob([ab], {
      type: type,
    });
  }
}
```

### blob 转本地 url：

```js
function blobToUrl(blob_data) {
  return URL.createObjectURL(blob_data);
}
```

### blob 转 base64：

```js
function blobToBase64(blob_data, callback) {
  let reader = new FileReader();
  reader.onload = (e) => {
    if (callback) {
      callback(e.target.result);
    }
  };
  reader.readAsDataURL(blob_data);
}
```

### url 转 blob：

```js
function urlToBlob(the_url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("get", the_url, true);
  xhr.responseType = "blob";
  xhr.onload = function () {
    if (this.status == 200) {
      if (callback) {
        callback(this.response);
      }
    }
  };
  xhr.send();
}
```

有了以上接口就可以三种格式互相转换了，不过`url`转`blob`和`blob`转`base64`是异步的操作，此外`url`还分`服务器端url`和`浏览器本地url`，需要自己使用时区分清楚。
