# 选择器 
>  !important>行内样式>ID选择器 > 类选择器 | 属性选择器 | 伪类选择器 > 元素选择器 > * > 继承 > 默认

建议：
+ 避免使用!important;
+ 利用id增加选择器权重;
+ 减少选择器的个数（避免层层嵌套）生成渲染树的时候影响性能;
+ 权重可以叠加,相同权重的样式会被后面的样式覆盖

## 布局
居中布局


水平居中

行内元素: text-align: center
块级元素: margin: 0 auto
absolute + transform
flex + justify-content: center

垂直居中
line-height: height
absolute + transform
flex + align-items: center
table

水平垂直居中
absolute + transform
flex + justify-content + align-items

# BFC

# 定位
1. static 静态定位,
不影响其他元素的偏移（默认,static 元素会忽略任何 top、bottom、left 、 right 或者 z-index 声明）
2. relative 相对定位
相对于其正常位置进行定位，该元素会在正常文档流中会占据位置,此元素的位置可通过 "left"、"top"、"right" 以及 "bottom" 来改变
3. absolute 绝对定位,
相对于非`static`定位以外的第一个父元素进行绝对定位，脱离了正常文档流，该元素不占据正常文档流空间，因此会影响其他元素的偏移。此元素的位置可通过 "left"、"top"、"right" 以及 "bottom" 属性来规定。
4. fixed 固定定位,
位置被设置为 fixed 的元素，可相对于浏览器窗口进行定位。不论窗口滚动与否，元素都会留在那个位置。工作于 IE7（strict 模式），低版本的IE不支持。此元素的位置可通过 "left"、"top"、"right" 以及"bottom" 属性来规定。例如回到顶部

5. sticky 粘性定位
盒位置根据正常流计算(这称为正常流动中的位置)，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。在所有情况下（即便被定位元素为 table 时），该元素定位均不对后续元素造成影响。当元素 B 被粘性定位时，后续元素的位置仍按照 B 未定位时的位置来确定。position: sticky 对 table 元素的效果与 position: relative 相同。

:::tip 
  注意的点
:::

这里的几个属性，都可以理解为相对定位，只是参照物不一样。  
relative，参照物为自己。  
absolute，参照物为有定位(非static定位)的父元素。  
fixed, 参照物为浏览器的视口。  
sticky，参照物为浏览器视口。设置不同方向的值，会粘住于不同方向。  
我们知道html和body元素相差有8px。relative和static方式在最外层时是以body标签为定位原点的，而absolute方式在无父级是position非static定位时是以html作为原点定位。
sticky 粘性定位，须指定 top,right,bottom和left四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。
如果只设置position属性，覆盖程度：relative > fixed > absolute > sticky > static，relative会在最上面。(关于这一点，还是有点点疑惑的，为什么会这样，或者为什么不是这样）

