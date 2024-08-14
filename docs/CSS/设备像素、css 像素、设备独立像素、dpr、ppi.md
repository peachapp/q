# 设备像素、`css`像素、设备独立像素、`dpr`、`ppi`之间的区别

- 设备像素指的是物理像素，一般手机的分辨率指的就是设备像素，一个设备的设备像素是不可变的。
- `css`像素和设备独立像素是等价的，不管在何种分辨率的设备上，`css`像素的大小应该是一致的，`css`像素是一个相对单位，它是相对于设备像素的，一个`css`像素的大小取决于页面缩放程度和`dpr`的大小。
- `dpr`指的是设备像素和设备独立像素的比值，一般的`pc`屏幕，`dpr=1`。在`iphone4`时，苹果推出了`retina屏幕`，它的`dpr=2`。屏幕的缩放会改变`dpr`的值。
- `ppi`指的是每英寸的物理像素的密度，`ppi`越大，屏幕的分辨率越大。

[《什么是物理像素、虚拟像素、逻辑像素、设备像素，什么又是 PPI,DPI,DPR 和 DIP》](https://www.cnblogs.com/libin-1/p/7148377.html)

[《前端工程师需要明白的「像素」》](https://www.jianshu.com/p/af6dad66e49a)

[《CSS 像素、物理像素、逻辑像素、设备像素比、PPI、Viewport》](https://github.com/jawil/blog/issues/21)

[《前端开发中像素的概念》](https://github.com/wujunchuan/wujunchuan.github.io/issues/15)
