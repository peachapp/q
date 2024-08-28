import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/HTML/": [
    "W3C和Web标准",
    "DOCTYPE",
    "标准模式和怪异模式",
    "H5和HTML5",
    "HTML语义化",
    "块级元素和行内元素",
    "HTML标签",
    "link和@import",
    "src和href",
    "title和alt",
    "常用的图片格式",
    "iframe",
    "canvas2d",
    "meta",
    "SEO",
    "微格式",
    "网页开发和小程序开发",
    "实现在图片的某个区域做到点击事件",
    "前端开发必记单词",
  ],
  "/CSS/": [
    "CSS样式书写方式",
    "CSS选择器",
    "CSS选择器优先级",
    "初始化CSS样式",
    "CSS预处理器",
    "BFC",
    "IFC",
    "盒模型",
    "包含块",
    "float",
    "清除浮动",
    "position",
    "层叠上下文",
    "display",
    "flex",
    "float和position和display",
    "margin和padding",
    "margin重叠",
    "伪类与伪元素",
    "伪类LVHA",
    "widthauto和width100",
    "font-style属性中italic和oblique",
    "visibility属性",
    "CSS中可以继承的属性",
    "CSS3新特性",
    "CSS3的all",
    "CSS3新伪类",
    "hasLayout",
    "媒体查询",
    "div居中",
    "双飞翼和圣杯布局",
    "满屏品字布局",
    "CSS多列等高",
    "全屏滚动的原理",
    "纯CSS创建一个三角形的原理",
    "元素竖向的百分比设定是相对于容器的高度吗",
    "li与li之间存在空白间隔的原因及解决办法",
    "CSS使页面里的字体变清晰、变细",
    "修改chrome记住密码后自动填充表单的黄色背景",
    "让chrome支持小于12px的文字",
    "网页中应该使用奇数还是偶数的字体",
    "图片base64编码",
    "实现网页变灰效果",
    "实现视差滚动效果的网页",
    "CSS优化、提高性能的方法",
    "抽离样式模块",
    "经常遇到的浏览器兼容性问题",
    "设备像素、css 像素、设备独立像素、dpr、ppi",
    "layout viewport、visual viewport 和 ideal viewport",
  ],
  "/JAVASCRIPT/": [
    "数据类型",
    "判断数据类型",
    "包装类",
    "预解析和变量提升",
    "暂时性死区",
    "浮点数精度",
    "数组的原生方法",
    "forEach和map",
    "forEach跳出循环",
    "arguments",
    "数组合并和对象合并",
    "数组和函数在内存中的存储",
    "深拷贝和浅拷贝",
    "箭头函数",
    "立即执行函数",
    "柯里化",
    "作用域和作用域链",
    "闭包",
    "防抖和节流",
    "内存泄漏",
    "v8垃圾回收机制",
    "原型和原型链",
    "继承",
    "this",
    "call和apply和bind",
    "new操作符",
    "事件捕获事件冒泡",
    "事件委托",
    "ajax",
    "常见的请求方式",
    "跨域",
    "fetch",
    "promise",
    "generator",
    "async await",
    "事件循环机制",
    "CommonJS和ES6",
    "一次渲染10w条数据",
    "移动端上拉加载下拉刷新",
    "localhost和127.0.0.1的区别",
    "从输入一个url到浏览器页面展示经历哪些过程",
    "页面重定向",
    "捕获异常",
    "前端监控",
    "进程和线程",
    "代码执行结果",
    "jquery",
  ],
  "/VUE/": [
    "vue本身的数据管理是什么样的",
    "单项数据流",
    "props和data",
    "computed和methods",
    "computed和watch",
    "组件中的data为什么必须是一个函数",
    "组件中的key",
    "v-if和v-show",
    "v-if和v-for优先级",
    "ref属性",
    "slot插槽",
    "scoped",
    "样式穿透",
    "nextTick",
    "keep alive",
    "vue内置指令",
    "vue生命周期",
    "vue组件通信",
    "vuex",
    "pinia",
    "路由模式",
    "解决打包后路由没显示出来的问题",
    "路由传参",
    "vue动态路由",
    "路由守卫",
    "router、routes、route",
    "vue自动配置路由",
    "vue环境变量和模式",
    "vue设置代理",
    "vue部署应用包时的基本URL",
    "vue3",
    "vue3的Composition API",
    "vue3为什么使用Proxy",
    "vue双向数据绑定",
    "vue中的虚拟DOM",
    "vue路由原理",
    "vue编译原理",
    "diff算法",
    "手写diff算法",
    "手写代码vue2",
    "vue源码深入剖析",
    "vue3核心源码解析",
    "SPA和MPA",
    "mvvm和mvc",
    "vue性能优化",
    "vue首屏渲染优化",
    "将package.json中的所有依赖项更新到最新版本",
  ],
  "/REACT/": ["react"],
  "/UNIAPP和WX/": ["uniapp和vue", "使用promise封装uni.request请求", "weixinjs-sdk", "微信小程序支付详细流程"],
  "/NODE/": [],
  "/WEBGL/": [],
  "/TOOL/": ["mac下管理node多版本工具"],
  "/UI/": ["figma"],
  "/BUGS/": ["防止按钮重复点击", "window.open打开链接修改窗口标题", "移动端上拉加载分页数据时，删除一条数据导致的问题", "button中嵌套navigator不能跳转"],
});
