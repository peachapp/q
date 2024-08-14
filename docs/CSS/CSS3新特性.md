# `CSS3`新特性

1. 新增各种`CSS`选择器（`:not(.input`)：所有`class`不是“input”的节点）。
2. 边框圆角（`border-radius`）。语法：
   ```css
   border-radius: n1, n2, n3, n4;
   border-radius: n1, n2, n3, n4/n1, n2, n3, n4;
   /*n1-n4四个值的顺序是：左上角，右上角，右下角，左下角。*/
   ```
3. 边框图片（`border-image`）。语法：
   ```css
   border-image: 图片 url 图像边界向内偏移 图像边界的宽度(默认为边框的宽度) 用于指定在边框外部绘制偏移的量（默认0）
     铺满方式--重复（repeat）、拉伸（stretch）或铺满（round）（默认：拉伸（stretch））;
   ```
4. 多列布局（`multi-column layout`）。
5. 弹性布局（`flex`）。
6. 栅格布局（`grid`）。
7. 阴影（`Shadow`）。语法：
   ```css
   box-shadow: 水平阴影的位置 垂直阴影的位置 模糊距离 阴影的大小 阴影的颜色
     阴影开始方向（默认是从里往外，设置inset就是从外往里）;
   ```
8. 反射/倒影（`Reflect`）。语法：
   ```css
   -webkit-box-reflect: 方向[ above-上 | below-下 | right-右 |
     left-左]，偏移量，遮罩图片;
   ```
9. 滤镜（`Filter`）。
10. 文字特效/阴影（`text-shadow`）。语法：
    ```css
    text-shadow: 水平阴影，垂直阴影，模糊的距离，以及阴影的颜色;
    ```
11. 文字渲染（`text-decoration`）。
12. 换行。
    ```css
    word-break: normal|break-all|keep-all;
    word-wrap: normal|break-word;
    ```
13. 超出省略号和多行超出省略号。
14. 线性渐变和径向渐变和圆锥渐变（`gradient`）。
15. 过渡（`transition`）。语法：
    ```css
    transition: CSS属性，花费时间，效果曲线(默认ease) ，延迟时间(默认0);
    ```
16. `2D`或`3D`转换（`transform`：旋转、缩放、移动或倾斜）。语法：
    ```css
    transform: translate scale rotate skew;
    transform-origin：转换元素的位置（围绕那个点进行转换）。默认(x,y,z)：(50%,50%,0);
    ```
17. 动画（`Animation`） 。语法：
    ```css
    animation：动画名称，一个周期花费时间，运动曲线（默认ease），动画延迟（默认0），播放次数（默认1），是否反向播放动画（默认normal），是否暂停动画（默认running）;
    ```
18. 多张背景图。
19. 制定背景绘制区域（`background-clip`）。
    - 默认情况（从边框开始绘制）。
    - 从`padding`开始绘制（显示），不算`border`，相当于把`border`那里的背景给裁剪掉！（`background-clip: padding-box;`）。
    - 只在内容区绘制（显示），不算`padding`和`border`，相当于把`padding`和`border`那里的背景给裁剪掉！（`background-clip: content-box;`）。
20. 定位背景图像（`background-position` `background-origin`）。
21. 背景图像大小（`background-size`）。
22. 颜色：`CSS3`提供了新的颜色表示方法：`rgba`和`hsla`(“h: 色相”，“s：饱和度”，“l：亮度”，“a：透明度”)。
23. 以特定的方式定义匹配某个区域的特定元素（`box-sizing`）。语法：
    ```css
    box-sizing: border-box; /* 边框和 padding 包含在元素的宽高之内 */`
    box-sizing: content-box; /* 边框和 padding 不包含在元素的宽高之内 */
    ```
24. 媒体查询（`@media screen and (max-width: 960px)`）。
