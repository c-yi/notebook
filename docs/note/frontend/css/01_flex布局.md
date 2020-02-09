# flex 布局
> 简介

![flex布局](~@img/flex.png)
>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。  
主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；  
交叉轴的开始位置叫做cross start，结束位置叫做cross end。  
项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。


## 属性
+ flex-direction 指定了弹性子元素在父容器中的位置。
    + row | row-reverse | column | column-reverse
```text
row：横向从左到右排列（左对齐），默认的排列方式。
row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。
column：纵向排列。
column-reverse：反转纵向排列，从后往前排，最后一项排在最上面。
```
+ justify-content 
    +  flex-start | flex-end | center | space-between | space-around
```text
flex-start：弹性项目向行头紧挨着填充。这个是默认值。第一个弹性项的main-start外边距边线被放置在该行的main-start边线，而后续弹性项依次平齐摆放。

flex-end：弹性项目向行尾紧挨着填充。第一个弹性项的main-end外边距边线被放置在该行的main-end边线，而后续弹性项依次平齐摆放。

center：弹性项目居中紧挨着填充。（如果剩余的自由空间是负的，则弹性项目将在两个方向上同时溢出）。

space-between：弹性项目平均分布在该行上。如果剩余空间为负或者只有一个弹性项，则该值等同于flex-start。否则，第1个弹性项的外边距和行的main-start边线对齐，而最后1个弹性项的外边距和行的main-end边线对齐，然后剩余的弹性项分布在该行上，相邻项目的间隔相等。

space-around：弹性项目平均分布在该行上，两边留有一半的间隔空间。如果剩余空间为负或者只有一个弹性项，则该值等同于center。否则，弹性项目沿该行分布，且彼此间隔相等（比如是20px），同时首尾两边和弹性容器之间留有一半的间隔（1/2*20px=10px）。
```
