# js 超过 Number 最大值的数怎么处理

`Number.MAX_VALUE`

## 背景：

- 大数据的计算。
- 格式展示。
- 用户输入。

大数据处理：

- 金融
- 科学计算
- 数据分析

## 解决方案：

1. BigInt。

```js
const bigNum = BigInt(123123123123123123123123123123123123123123123123);
const bigNum2 = bigNum + bigNum;
```

2. decimal.js。

```js
const decimal = new Decimal("1e+308");
```

3. big.js。
4. 表单校验：比如在用户输入场景，可以限制输入数字大小。
