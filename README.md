###在使用react-scroll时，发现destinations这块的Link点击后，没有滑动到预定区域，而是到达了另一个区域。###
在百度搜索和仔细观察destinations这块结构样式与其他部分的不同之后，没有找到原因。
随后仔细观察跳转效果，发现每次跳转到达的位置是一样的，检查该处代码，发现此处有个input的id属性值为destinations，修改后解决了该bug。
反思：
  ①检查代码之余，直接查看效果也可以很直观地查找bug原因；
  ②规范id，class等的命名。
bug常见原因：拼写有误，样式冲突。

1.布局小技巧
  （1）文字等内容显示在图片或视频的中央
      可以将文字设为absolute，宽高和图片一致，然后用flex等方式使内容居中
  （2）搜索框 + 搜索图标
      用一个盒子将两者包裹起来，设置搜索框的background-color和border都为透明

2.flex布局与position: absolute/fixed; 一起使用，有可能出现布局和预期不符的情况
  解决方法：设置width: 100%
  原因：absolute/fixed使盒子脱离文档流，flex container宽度为内容宽度

3.（flex/grid）justify-content: space-between; 能实现float类似效果

4.text-align  设置块级盒子内容水平居中
  The text-align CSS property sets the horizontal alignment of the content inside a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.

5.一旦元素设置了absolute等定位，脱落文档流，要注意后面的盒子的位置

6.object-fit: cover;
  对图片进行剪切，保留原始比例

7.video 内容较简单，遗忘可以查询菜鸟教程

8.使用scss一定要注意样式优先级，特别是和media一起使用

9.设置box-sizing: border-box;之后，盒子宽高以border-edge为界，此时再设置padding，不会撑大盒子，反而会使盒子内容缩小



*** 疑问 ***
1.为什么原作者设置了display：flex就实现了两个input平分父盒子宽度
2.grid布局，格子里的img如果不设置宽高100%，会撑大盒子？
