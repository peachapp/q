# 当 QPS 达到峰值时，该如何处理

## 背景：

当前端应用的 QPS（每秒查询次数）达到峰值时，会对服务器和应用的性能造成很大的压力，甚至可能导致系统崩溃。为了解决这个问题，我们需要采取一系列措施来优化和管理高并发请求。

## 解决方案：

1. 请求限流
2. 请求合并
3. 请求缓存
4. 任务队列

### 请求限流

全栈岗位，以 nodejs 为例，限流。

<!-- rate-limit -->

```js
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  message: "你搞得太多了，省省，待会儿再来！！！",
});
```

### 请求合并

短时间内的请求进行合并，以此降低服务端压力

- debounce
- throttle

### 请求缓存

react、vue

**swr 库**里面针对于请求的内容缓存
请求参数、请求方法、请求逻辑依赖的内容没有发生变化，直接命中缓存

### 任务队列

针对于请求，我们设计一个任务队列，滑动窗口

全栈领域

任务，job，视频转码

`bull 库`

```js
const Bull = require("bull");
const taskQueue = new Bull("task queue");

app.post("/api/startTask", (req, res) => {
  const taskId = Data.now().toString();
  taskQueue.add({ taskId });
  res.send({ taskId });
});

app.get("/api/taskStatus/:taskId", (req, res) => {
  const taskId = req.params.taskId;

  // 检查任务状态并返回
  taskQueue.getJob(taskId).then((job) => {
    if (job) {
      res.send({ status: job.finished() ? "completed" : "pending" });
    } else {
      res.send({ status: "not found" });
    }
  });
});

// 处理队列中的任务

taskqueus.process((job, done) => {
  // 模拟耗时操作
  setTimeout(() => {
    done();
  }, 10000); // 10秒钟
});
```
