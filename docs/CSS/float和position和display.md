# `float`和`position`和`display`的相互关系

1. 首先判断`display`属性值。\
   如果`display`属性值为`none`，则`position`和`float`属性值不影响元素最后的表现。\
   如果`display`属性值不为`none`，则判断`position`属性值。
2. 判断`position`属性值。\
   如果`position`属性值为`absolute`或者`fixed`，则`float`属性失效，并且`display`属性值应该被设置为`table`或者`block`，具体转换需要看初始转换值。\
   如果`position`属性值不为`absolute`或者`fixed`，则判断`float`属性值。
3. 判断`float`属性值。\
   如果`float`属性值为`none`，则判断元素是否为根元素，如果是根元素则`display`属性按照上面的规则转换，如果不是，则保持指定的`display`属性值不变。\
   如果`float`属性值不为`none`，则 `display`属性值按上面的规则转换。注意，如果`position`属性值为`relative`并且`float`属性值存在，则`relative`相对于浮动后的最终位置定位。

总的来说，可以把它看作是一个类似优先级的机制： \
`position: absolute`和`position: fixed`优先级最高，有它存在的时候，浮动不起作用，`display`属性值也需要调整。\
其次，元素的`float`属性值不是`none`的时候或者它是根元素的时候，调整`display`属性值。\
最后，非根元素，并且非浮动元素，并且非绝对定位的元素，`display`属性值同设置值。

[《position 跟 display、margincollapse、overflow、float 这些特性相互叠加后会怎么样？》](https://www.cnblogs.com/jackyWHJ/p/3756087.html)
