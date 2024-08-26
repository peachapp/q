# 使用`promise`封装`uni.request`请求

要求：

- 接收参数：`mehod`，`data`，`header`，`url`（接受参数固定）
- 传参：`method`，`data`，`header`，`url`（参数可缺省，传参顺序不固定（如：`data`，`method`、`url`、`...`））

```js
const httpRequest = (options) => {
  let token = uni.getStorageSync("token") || "";

  let httpDefaultOpts = {
    url: options.url,
    data: options.data,
    method: options.method || "GET",
    header: {
      authorization: token,
      "content-Type": "application/json; charset=UTF-8",
      ...options.header,
    },
  };

  let promise = new Promise(function (resolve, reject) {
    uni
      .request(httpDefaultOpts)
      .then((res) => {
        let data = res[1];
        if (data.data.code == 401) {
          uni.removeStorageSync("token");
          uni.showToast({
            icon: "none",
            duration: 2000,
            title: "身份验证失败",
          });
          uni.reLaunch({
            url: "/pages/login/login",
          });
        } else {
          uni.showToast({
            icon: "none",
            duration: 2000,
            title: data.data.msg,
          });
        }
        resolve(data.data);
      })
      .catch((response) => {
        reject(response);
      });
  });
  return promise;
};
```
