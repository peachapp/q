# iOS

## 如何关闭 iOS 键盘首字母自动大写

```html
<input type="text" autocapitalize="off" />
```

### input 的三个属性 autocomplete、autocapitalize 和 autocorrect

### autocomplete

`autocomplete`是 HTML 元素属性，用来控制浏览器是否自动填充表单字段的值。该属性可以应用于`<input>`、`<textarea>`、`<select>`以及`<form>`元素。

其取值包括：

- `on`：允许浏览器自动填充值。
- `off`：禁止浏览器自动填充值。

当设置为`off`时，浏览器会停止在该字段上提供自动完成功能，这在处理敏感信息或需要用户手动输入的场景中特别有用。例如，很多时候需要对客户的资料进行保密，防止浏览器软件或者恶意插件获取到,在密码输入框或一次性验证码字段上禁用自动完成，可以增强安全性并改善用户体验。

在实际开发中，合理使用`autocomplete`属性能够有效管理表单的自动填充行为，平衡便捷性与安全性需求。

### autocapitalize

`autocapitalize`是 HTML 元素属性，用来控制文本在用户输入/编辑时的自动大写行为，这个属性更适合英文场景，中文场景无效。

其取值包括：

- ‌`off/false‌`：关闭自动大写。
- `on/true‌`：开启自动大写（仅首字母大写）。
- `none‌`：不自动大写任何内容。
- ‌`sentences‌`：仅首句首字母大写。
- ‌`words‌`：每个单词首字母大写。
- `characters‌`：每个字符大写。

常见应用场景：

1. ‌**用户名输入框**：通常不开启自动大写，避免大小写错误导致登录失败。
2. **密码输入框**‌：关闭自动大写以增强安全性。
3. **普通文本输入**‌：可根据需求选择单词或句子首字母大写。

### autocorrect

`autocorrect`是 HTML 元素属性，用来控制输入法自动纠错功能的属性，通常与`autocomplete`和`autocapitalize`一起使用。该属性主要适用于移动端浏览器（如 iOS Safari），用于管理输入时的拼写修正行为。

其取值包括：

- `on`：启用自动纠错功能（默认值）。
- `off`：禁用自动纠错功能。

典型应用场景：

1. **禁用纠错**：在需要用户严格输入特定格式（如密码、验证码）时，通过`autocorrect="off"`避免输入法自动修正内容。
2. **组合使用**：常与`autocapitalize="off"`配合使用，例如关闭首字母大写和拼写修正：
   ```html
   <input
     type="text"
     autocorrect="off"
     autocapitalize="off"
     placeholder="用户名"
   />
   ```

## 如何去掉 iOS 系统中元素被触摸时产生的半透明灰色遮罩

```html
<style>
  a,
  button,
  input,
  textarea {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
</style>
```

## 禁止 iOS 长按时触发系统的菜单，禁止 iOS&Android 长按时下载图片

```html
<style>
  html,
  body {
    touch-callout: none;
    -webkit-touch-callout: none;

    user-select: none;
    -webkit-user-select: none;
  }
</style>
```

## 禁止 iOS&Android 用户选中文字

```html
<style>
  html,
  body {
    user-select: none;
    -webkit-user-select: none;
  }
</style>
```
