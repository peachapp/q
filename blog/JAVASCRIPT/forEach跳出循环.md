# `forEach`跳出循环

`forEach`不能通过`break`或者`return`来实现跳出循环，因为`forEach`的回调函数形成了一个作用域，在里面使用`return`并不会跳出，只会被当作`continue`。

可以利用`try catch`来实现跳出循环。

```js
function getItemById(arr, id) {
  var item = null;
  try {
    arr.forEach(function (curItem, i) {
      if (curItem.id === id) {
        item = curItem;
        throw Error();
      }
    });
  } catch (e) {}
  return item;
}
```
