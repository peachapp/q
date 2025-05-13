# AbortController 和 AbortSignal

## AbortController

`AbortController`是 JavaScript 中的一个全局类，你可以用它来中止任何操作！以下是使用方法：

`AbortController`的相关属性和方法：

- `signal`属性：这是`AbortSignal`的一个实例。这是一个可插拔的部分，你可以将其提供给任何 API 以响应中止事件，并相应地实现它。例如，将其提供给 fetch() 请求将中止该请求；
- `abort()`方法：当调用时，会在`signal`上触发中止事件。它还会将信号标记为已中止状态。

到目前为止还不错。但实际的中止逻辑在哪里？这就是它的优美之处 —— 它由使用者定义。中止处理归结为监听`abort`事件，并以适合相关逻辑的方式实现中止：

```js
const controller = new AbortController();

controller.signal.addEventListener("abort", () => {
  console.log("signal 被终止", controller.signal.reason);
});

const resourceUrl = "http://localhost:8080/api/xxx";

fetch(resourceUrl, { signal: controller.signal })
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => {
    // 不同浏览器的返回结果不同
    console.log(err);
  });

// 可以立即终止请求，或者设置一个定时器
setTimeout(() => {
  controller.abort();
}, 100);
```

每个中止事件都伴随着中止的原因。这带来了更多的可定制性，因为你可以对不同的中止原因做出不同的反应。中止原因是`controller.abort()`方法的可选参数。你可以在任何`AbortSignal`实例的`reason`属性中访问中止原因。

可以给`abort`方法传递终止的原因，比如是一个对象，`signal`的`reason`属性就变成了自定义的值。

```js
const controller = new AbortController();

controller.signal.addEventListener("abort", () => {
  console.log("signal 被终止", controller.signal.reason);
});

// 可以立即终止请求，或者设置一个定时器
setTimeout(() => {
  // 为这次中止提供自定义原因
  controller.abort("用户取消");
}, 100);
```

> reason 参数可以是任何 JavaScript 值，所以你可以传递字符串、错误或者甚至对象。

## AbortSignal

`AbortSignal`的属性和方法：

- `abort`静态方法：`abort`用来创造一个已经被终止的`signal`对象，对应的请求甚至都没有发送出去。
- `timeout`静态方法：`timeout`用来创造一个多少毫秒后会被终止的`signal`对象。如果你只想在请求超过超时时间后取消它，就不需要创建`AbortController`。
- `any`静态方法：类似于如何使用`Promise.race()`来按先到先得的方式处理多个`promise`，你可以使用`AbortSignal.any()`静态方法将多个中止信号组合成一个。
- `aborted`属性：`aborted`表示当前信号对象的状态是否是终止的状态，`false`是起始状态，表示信号没有被终止，`true`表示信号对象已经被终止了。
- `reason`属性：`reason`属性可以是任何的 JavaScript 类型的值，如果在调用`abort`方法的时候没有传递终止信号的原因，那么就会使用默认的原因。默认的原因有两种，一种是通过`abort`方法终止信号对象，并且没有传递终止的原因，那么这个时候`reason`的默认值就是：`DOMException: signal is aborted without reason`；如果是通过`timeout`方法终止信号对象，那么这个时候的默认原因就是：`DOMException: signal timed out`。如果主动传递了终止的原因，那么对应的`reason`的值就是传递进去的值。
- `throwIfAborted`实例方法：当调用`throwIfAborted`的时候，如果这个时候`signal`对象的状态是终止的，那么就会抛出一个异常，异常的值就是对应`signal`的`reason`值。
- `abort`事件：对于`signal`对象来说，它还可以监听`abort`事件，然后就可以在`signal`被终止的时候做一些额外的操作。

### AbortSignal.abort

`abort`用来创造一个已经被终止的`signal`对象，对应的请求甚至都没有发送出去。

```js
// Safari 暂时不支持， Firefox 和 Chrome 支持
const abortedAS = AbortSignal.abort();

const resourceUrl = "http://localhost:8080/api/xxx";

// 再发送之前信号终止，请求不会被发送
fetch(resourceUrl, { signal: abortedAS })
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => {
    console.log(err);
  });

console.log(abortedAS);
```

每个中止事件都伴随着中止的原因。这带来了更多的可定制性，因为你可以对不同的中止原因做出不同的反应。中止原因是`AbortSignal.abort()`方法的可选参数。你可以在任何`AbortSignal`实例的`reason`属性中访问中止原因。

可以给`abort`方法传递终止的原因，比如是一个对象，`signal`的`reason`属性就变成了自定义的值。

```js
const abortedAS = AbortSignal.abort({
  type: "USER_ABORT_ACTION",
  msg: "用户终止了操作",
});
console.log(abortedAS);
```

> reason 参数可以是任何 JavaScript 值，所以你可以传递字符串、错误或者甚至对象。

### AbortSignal.timeout

`timeout`用来创造一个多少毫秒后会被终止的`signal`对象。如果你只想在请求超过超时时间后取消它，就不需要创建`AbortController`。

```js
const timeoutAS = AbortSignal.timeout(3000);

const resourceUrl = "http://localhost:8080/api/xxx";

// 如果请求完成时间超过 3000ms，自动中止此请求
fetch(resourceUrl, { signal: timeoutAS })
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => {
    console.log(err);
  });

console.log(timeoutAS);
```

### AbortSignal.any

类似于如何使用`Promise.race()`来按先到先得的方式处理多个`promise`，你可以使用`AbortSignal.any()`静态方法将多个中止信号组合成一个。

```js
const publicController = new AbortController();
const internalController = new AbortController();

channel.addEventListener("message", handleMessage, {
  signal: AbortSignal.any([publicController.signal, internalController.signal]),
});
```

在上面的例子中，我引入了两个中止控制器。公共控制器暴露给我的代码的使用者，允许他们触发中止，导致`message`事件监听器被移除。然而，内部控制器允许我也移除该监听器，而不会干扰公共中止控制器。如果提供给`AbortSignal.any()`的任何中止信号发出中止事件，该父信号也会发出中止事件。此后的任何其他中止事件都会被忽略。

### throwIfAborted

当调用`throwIfAborted`的时候，如果这个时候`signal`对象的状态是终止的，那么就会抛出一个异常，异常的值就是对应`signal`的`reason`值。

```js
const abortedAS = AbortSignal.abort();
abortedAS.throwIfAborted();

// try {
//   abortedAS.throwIfAborted();
// } catch (e) {
//   console.log(e);
// }
```

### 事件监听 abort

对于`signal`对象来说，它还可以监听`abort`事件，然后就可以在`signal`被终止的时候做一些额外的操作。

```js
const timeoutAS = AbortSignal.timeout(3000);

const resourceUrl = "http://localhost:8080/api/xxx";

// 如果请求完成时间超过 3000ms，自动中止此请求
fetch(resourceUrl, { signal: timeoutAS })
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => {
    console.log(err);
  });

console.log(timeoutAS);
```

## 使用场景

### 事件监听器

你可以在添加事件监听器时提供一个中止 signal，这样一旦发生中止，监听器就会自动移除。

```js
const controller = new AbortController();

const listener = () => {
  console.log("window resize");
};
window.addEventListener("resize", listener, { signal: controller.signal });

setTimeout(() => {
  controller.abort();
}, 100);
```

调用`controller.abort()`会从 window 中移除`resize`监听器。这是一种非常优雅的处理事件监听器的方式，因为你不再需要抽象监听器函数只是为了提供给`removeEventListener()`。

```js
// const listener = () => {}
// window.addEventListener('resize', listener)
// window.removeEventListener('resize', listener)

const controller = new AbortController();
window.addEventListener(
  "resize",
  () => {
    console.log("window resize");
  },
  { signal: controller.signal }
);
setTimeout(() => {
  controller.abort();
}, 100);
```

如果应用程序的不同部分负责移除监听器，`AbortController`实例传递起来也更方便。可以使用单个 signal 来移除多个事件监听器！

```js
const controller = new AbortController();

window.addEventListener("resize", handleResize, {
  signal: controller.signal,
});
window.addEventListener("hashchange", handleHashChange, {
  signal: controller.signal,
});
window.addEventListener("storage", handleStorageChange, {
  signal: controller.signal,
});

setTimeout(() => {
  // 调用 .abort() 移除所有与 controller.signal 关联的事件监听器
  controller.abort();
}, 100);
```

### Fetch 请求

`fetch()`函数也支持`AbortSignal`！一旦信号上的`abort`事件被触发，`fetch()`函数返回的请求`promise`将被拒绝，中止待处理的请求。

```js
function uploadFile(file) {
  const controller = new AbortController();

  // 为这个 fetch 请求提供中止信号
  // 这样可以随时通过调用 controller.abort() 来中止它
  const response = fetch("http://localhost:8080/api/upload", {
    method: "POST",
    body: file,
    signal: controller.signal,
  });

  return { response, controller };
}

const { response, controller } = uploadFile("filedata");

// 可以立即终止请求，或者设置一个定时器
setTimeout(() => {
  controller.abort();
}, 100);
```

这里，`uploadFile()`函数发起一个`POST/upload`请求，返回相关的`response promise`以及一个`controller`引用，可以在任何时候中止该请求。这在需要取消待处理的上传时很有用，例如，当用户点击"取消"按钮时。

### 批量取消多个 fetch 请求

值得注意的是，`signal`对象可以同时传递给多个请求，在需要的情况下可以同时取消多个请求。

```js
const controller = new AbortController();

const resourceUrl = "http://localhost:8080/api/xxx";
function todoRequest(id, { signal } = {}) {
  return fetch(`${resourceUrl}/${id}`, { signal })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}

todoRequest(1, { signal: controller.signal });
todoRequest(2, { signal: controller.signal });
todoRequest(3, { signal: controller.signal });

// 同时终止多个请求
controller.abort();
```

### 流

你也可以使用`AbortController`和`AbortSignal`来取消流。

```js
const stream = new WritableStream({
  write(chunk, controller) {
    controller.signal.addEventListener("abort", () => {
      // 在这里处理流的中止
    });
  },
});

const writer = stream.getWriter();
await writer.abort();
```

`WritableStream`控制器暴露了`signal`属性，这就是同样的`AbortSignal`。这样，我可以调用`writer.abort()`，它会冒泡到流的`write()`方法中的`controller.signal`上的中止事件。

### 可以主动取消的 Promise

```js
/**
 * 自定义的可以主动取消的 Promise
 */

function myCoolPromise({ signal }) {
  return new Promise((resolve, reject) => {
    // 如果刚开始 signal 存在并且是终止的状态可以直接抛出异常
    signal?.throwIfAborted();

    // 异步的操作，这里使用 setTimeout 模拟
    setTimeout(() => {
      Math.random() > 0.5 ? resolve("ok") : reject(new Error("not good"));
    }, 1000);

    // 添加 abort 事件监听，一旦 signal 状态改变就将 Promise 的状态改变为 rejected
    signal?.addEventListener("abort", () => reject(signal?.reason));
  });
}

/**
 * 使用自定义可取消的 Promise
 */

const controller = new AbortController();

myCoolPromise({ signal: controller.signal }).then(
  (res) => console.log(res),
  (err) => console.log(err)
);
setTimeout(() => {
  controller.abort();
}, 100); // 可以更改时间看不同的结果
```

## 让任何东西都可中止

关于`AbortController API`，我最喜欢的部分是它极其通用。你可以教会任何逻辑变得可中止！

有了这样的超能力，你不仅可以自己提供更好的体验，还可以增强如何使用原生不支持中止/取消的第三方库。事实上，让我们就来做这件事。

让我们为`Drizzle ORM`事务添加`AbortController`，这样我们就可以一次取消多个事务。

```js
import { TransactionRollbackError } from "drizzle-orm";

function makeCancelableTransaction(db) {
  return (callback, options = {}) => {
    return db.transaction((tx) => {
      return new Promise((resolve, reject) => {
        // 如果发出中止事件，回滚此事务
        options.signal?.addEventListener("abort", async () => {
          reject(new TransactionRollbackError());
        });

        return Promise.resolve(callback.call(this, tx)).then(resolve, reject);
      });
    });
  };
}
```

`makeCancelableTransaction()`函数接受一个数据库实例并返回一个高阶事务函数，该函数现在接受一个中止`signal`作为参数。为了知道何时发生中止，我在`signal`实例上添加了"abort"事件的事件监听器。每当发出中止事件时（即调用`controller.abort()`时），该事件监听器就会被调用。因此，当发生这种情况时，我可以用`TransactionRollbackError`错误拒绝事务`promise`来回滚整个事务（这等同于调用`tx.rollback()`抛出相同的错误）。现在，让我们在`Drizzle`中使用它。

```js
const db = drizzle(options);

const controller = new AbortController();
const transaction = makeCancelableTransaction(db);

await transaction(
  async (tx) => {
    await tx
      .update(accounts)
      .set({ balance: sql`${accounts.balance} - 100.00` })
      .where(eq(users.name, "Dan"));
    await tx
      .update(accounts)
      .set({ balance: sql`${accounts.balance} + 100.00` })
      .where(eq(users.name, "Andrew"));
  },
  { signal: controller.signal }
);
```

用`db`实例调用`makeCancelableTransaction()`工具函数来创建一个自定义的可中止`transaction`。从这一点开始，可以像在`Drizzle`中通常那样使用自定义`transaction`，执行多个数据库操作，但也可以为它提供一个中止`signal`来一次性取消所有操作。

## 在 nodejs 中的使用

不仅可以在浏览器环境中使用`AbortController`和`AbortSignal`，还可以在 Node.js 环境中使用这两个功能。对于 Node.js 中的`fs.readFile`，`fs.writeFile`，`http.request`，`https.request`和`timers`以及新版本支持的`Fetch API`都可以使用`signal`来进行操作的取消。

```js
const fs = require("fs");

const controller = new AbortController();

fs.readFile(
  "data.json",
  { signal: controller.signal, encoding: "utf8" },
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  }
);

controller.abort();
```

## 浏览器兼容性

大多数现代浏览器都支持`AbortController`，但在使用时请检查兼容性：

- Chrome: 66+。
- Firefox: 57+。
- Safari: 11.1+。
- Edge: 16+。

对于旧版浏览器，可以考虑使用`polyfill`或替代方案。
