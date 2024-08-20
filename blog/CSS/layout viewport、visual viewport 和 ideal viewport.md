# `layout viewport`、`visual viewport`和`ideal viewport`的区别

如果把移动设备上浏览器的可视区域设为`viewport` 的话，某些网站就会因为`viewport`太窄而显示错乱，所以这些浏览器就决定默认情况下把`viewport`设为一个较宽的值，比如`980px`，这样即使是那些为桌面设计的网站也能在移动浏览器上正常显示了。`ppk`把这个浏览器默认的`viewport`叫做`layout viewport`。

`layout viewport`的宽度是大于浏览器可视区域的宽度的，所以还需要一个`viewport`来代表浏览器可视区域的大小，`ppk`把这个`viewport`叫做`visual viewport`。

`ideal viewport`是最适合移动设备的`viewport`，`ideal viewport`的宽度等于移动设备的屏幕宽度，只要在`css`中把某一元素的宽度设为`ideal viewport`的宽度（单位用`px`），那么这个元素的宽度就是设备屏幕的宽度了，也就是宽度为`100%`的效果。`ideal viewport`的意义在于，无论在何种分辨率的屏幕下，那些针对`ideal viewport`而设计的网站，不需要用户手动缩放，也不需要出现横向滚动条，都可以完美的呈现给用户。

总结：

移动端一共需要理解三个`viewport`的概念。

第一个视口是布局视口，在移动端显示网页时，由于移动端的屏幕尺寸比较小，如果网页使用移动端的屏幕尺寸进行布局的话，那么整个页面的布局都会显示错乱。所以移动端浏览器提供了一个`layout viewport`布局视口的概念，使用这个视口来对页面进行布局展示，一般`layout viewport`的大小为`980px`，因此页面布局不会有太大的变化，我们可以通过拖动和缩放来查看到这个页面。

第二个视口指的是视觉视口，`visual viewport`指的是移动设备上我们可见区域的视口大小，一般为屏幕分辨率的大小。`visual viewport`和`layout viewport`的关系，就像是我们通过窗户看外面的风景，视觉视口就是窗户，而外面的风景就是布局视口中的网页内容。

第三个视口是理想视口，由于`layout viewport`一般比`visual viewport`要大，所以想要看到整个页面必须通过拖动和缩放才能实现。所以又提出了`ideal viewport`的概念，`ideal viewport`下用户不用缩放和滚动条就能够查看到整个页面，并且页面在不同分辨率下显示的内容大小相同。`ideal viewport`其实就是通过修改`layout viewport`的大小，让它等于设备的宽度，这个宽度可以理解为是设备独立像素，因此根据`ideal viewport`设计的页面，在不同分辨率的屏幕下，显示应该相同。

[《移动前端开发之 viewport 的深入理解》](https://www.cnblogs.com/2050/p/3877280.html)

[《说说移动前端中 viewport（视口）》](https://www.html.cn/archives/5975)

[《移动端适配知识你到底知多少》](https://juejin.im/post/5b6d21daf265da0f9d1a2ed7#heading-14)
