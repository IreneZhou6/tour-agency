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

9.


*** 疑问 ***
1.为什么heade右侧用户icon不能设置padding-right，而只能设置margin
2.为什么原作者设置了display：flex就实现了两个input平分父盒子宽度
