《从0到1：JavaScript快速上手》笔记

----



# 一、语法基础

## 1 JavaScript简介

### JavaScript引入方式

#### 外部JavaScript

可以放在head标签里也可以放在body标签里。
```html
<script src="index.js"></script>
```

src，是“source（源）”

#### 内部JavaScript

```html
<script type="text/javascript">

......

</script>
```

简写为：
```html
<script>

......

</script>
```

#### 元素事件JavaScript

就是在元素的“事件属性”中直接编写JavaScript或调用函数。

```html
<input type="button" value="按钮" onclick="alert('hello world!')" />
```
```javascript
// 页面打开时

window.onload=function() {

}

// 页面关闭时

window.onbeforeunload=function(event) {

var e=event || window.event;

e.returnValue="!!";

}
```

## 2 语法基础

### 2.2 变量与常量
```javascript
var a = 10;

var b = 20,c = 30;

// 常量用大写

var DEBUG = 1;
```
![](../images/learnfrontend-001.jpg)



变量由字母、下划线、$或数字组成，并且第一个字母必须是字母、下划线或$。

变量不能是系统关键字和保留字。

![](../images/learnfrontend-002.jpg)

![](../images/learnfrontend-003.jpg)

### 2.3 数据类型

**基本数据类型：****数字、字符串、布尔值、未定义值（undefined）和空值（null）**

**引用数据类型：****对象（数组也是属于对象的一种）**

在JavaScript中，所有变量都用var来声明。

JavaScript中的数字是不区分“整型（int）”和“浮点型（float）”的。

字符串都是用英文单引号或英文双引号括起来的。单引号括起来的字符串中可以包含双引号，双引号括起来的字符串中可以包含单引号。

### 2.4 运算符

#### 算术运算符

![](../images/learnfrontend-004.jpg)

#### 赋值运算符

![](../images/learnfrontend-005.jpg)

#### 比较运算符

![](../images/learnfrontend-006.jpg)

#### 逻辑运算符

![](../images/learnfrontend-007.jpg)

#### 条件运算符

```
var a = 条件 ? 表达式1 : 表达式2;
```

### 2.5 表达式与语句

“语句就是JavaScript的一句话”，而“表达式就是一句话的一部分”

![](../images/learnfrontend-008.jpg)

### 2.6 类型转换

1. 隐式类型转换
2. 显式类型转换

**“字符串”转换为“数字”：**

Number()：只能将纯“数字型字符串”转换为数。

parseInt()和parseFloat()：parseInt()会提取整数部分，parseFloat()不仅会提取整数部分，还会提取小数部分。

NaN指的是“Not a Number（非数字）”。

**“数字”转换为“字符串”：**

与空字符串相加

toString()

### 2.7 转义字符

### 2.8 注释

```javascript
//

/* */
```

## 3 流程控制

### 顺序结构

### 选择结构
```javascript
单向选择：if...

双向选择：if...else...

多向选择：if...else if...else...


switch ()

{

  case 取值1:

  		语块1; break;

  case 取值2:

  		语块2; break;

  ......

  case 取值n:

  		语块n; break;

  default:

  		语块n+1;

}
```

switch是“开关”,case是“情况”,break是“断开”,default是“默认”。

### 循环结构

在JavaScript中，循环语句指的是在“满足某个条件下”循环反复地执行某些操作的语句。
```javascript
while语句

do...while语句

for语句
```

## 4 函数

函数一般会在两种情况下使用：一种是“重复使用的功能”，另外一种是“特定的功能”。

使用函数的2步：① 定义函数；② 调用函数。

### 4.2 函数的定义

使用function来定义两种函数：

#### 没有返回值的函数

#### 有返回值的函数

#### 全局变量与局部变量

### 4.3 函数的调用

#### 直接调用

#### 在表达式中调用

一般用于“有返回值的函数”，函数的返回值会参与表达式的计算。

#### 在超链接中调用

指的是在a元素的href属性中用“javascript：函数名”的形式来调用函数。当用户点击超链接时，就会调用该函数。

```html
<a href="javascript:函数名"></a>
```



#### 在事件中调用

JavaScript是一门基于事件的语言。

```html
<script>
	function alertMes() 
  {
    ......
  }
</script>
......
<input type="button" onclick="alertMes()" value="提交"/>
```

### 4.4 嵌套函数

在内部定义的函数只能在内部调用。

嵌套函数的功能非常强大，并且跟JavaScript最重要的一个概念“闭包”有重要的关系。

### 4.5 内置函数

![重要的内置函数](../images/learnfrontend-009.jpg)

函数高级部分的内容包括this、闭包、类、继承、递归函数、高阶函数等。

## 5 字符串对象

在JavaScript中，对象分两种：“自定义对象”和“内置对象”。

常用内置对象有4种：

字符串对象：String

数组对象：Array

日期对象：Date

数值对象：Math

### 获取字符串长度

```javascript
str.length
```

### 大小写转换

```javascript
str.toLowerCase()
str.toUpperCase()
```

### 获取某一个字符

```javascript
str.charAt(n)
```

### 截取字符串

```javascript
str.substring(start, end)
```

截取范围为“[start,end）”，也就是包含start，但不包含end。其中，end可以省略。当end省略时，截取的范围为“start到结尾”。

### 替换字符串

```javascript
str.replace(原字符串, 替换字符串)
str.replace(正则表达式, 替换字符串)
```

### 分割字符串

```javascript
str.split("分隔符")
```

### 检索字符串的位置

```javascript
str.indexOf("指定字符串")
str.lastIndexOf("指定字符串")
```

前者返回首次出现的下标，后者返回最后出现的下标，不存在都返回-1。

## 6 数组对象

```javascript
// 数组的创建
var 数组名 = new Array(元素1, 元素2, ...);  // 完整形式
var 数组名 = [元素1, 元素2, ...];  // 简写形式

// 数组的获取
arr[3]

// 数组的赋值
arr[i] = 值;

// 获取数组长度
arr.length;

// 截取数组某部分
arr.slice(start, end);  // 与字符串的substring类似

// 添加数组元素
// 开头添加
arr.unshift(element1, element2, ......);
// 结尾添加            
arr.push(element1, element2, ......);   

// 删除数组元素
// 删除开头第一个元素
arr.shift()
// 删除最后一个元素
arr.pop()
```

unshift()、push()、shift()、pop()这4个方法都会改变数组的结构。

```javascript
// 比较
arr.sort(函数名);

// 颠倒数组顺序
arr.reverse();

// 将数组元素连接成字符串
arr.join("连接符");
```

## 7 时间对象

```javascript
var oDate = new Date();
```

![](../images/learnfrontend-010.jpg)

虽然时间对象Date看似用途多，但是在实际开发中却用得比较少，除非是在特定领域，如电影购票、餐饮订座等。

```javascript
// 获取星期几，0表示星期天，1表示星期一，……,6表示星期六
oDate.getDay();
```

## 8 Math对象

凡是涉及动画开发、高级编程、算法研究等内容的，都跟数学有极大的联系。

Math对象跟其他对象不一样，Math对象不需要使用new关键字来创造，而可以直接使用它的属性和方法。

![](../images/learnfrontend-011.jpg)

![](../images/learnfrontend-012.jpg)

### 生成随机数

？？



# 二、核心技术

## 9 DOM基础

DOM，全称是“Document Object Model（文档对象模型）”，它是由W3C定义的一个标准。

我们在操作元素时，其实就是把这个元素看成一个对象，然后使用这个对象的属性和方法来进行相关操作。

### 节点类型

元素节点、属性节点、文本节点。

![](../images/learnfrontend-013.jpg)

只有元素节点才可以拥有子节点，属性节点和文本节点都无法拥有子节点。

### 获取元素（节点）

6种方式获取指定元素：

```javascript
document.getElementById()
getElementsByTagName()
getElementsByClassName()
querySelector("CSS选择器")和querySelectorAll("CSS选择器")
getElementsByName()
document.title和document.body
```

#### document.getElementById()

```
document.getElementById("id")
```

```javascript
window.onload = function()
{
  var oDiv = document.getElementById("div1");
  oDiv.style.color = "red";
}
```

`window.onload`表示浏览器解析完整个页面后再解析。

习惯在变量名前加”o“表示这是一个DOM对象。

`getElementById()`不可以操作动态创建的DOM。

#### getElementsByTagName()

getElementsByTagName()获取的是一个“**类数组**”（也叫伪数组），它不是真正意义上的数组。

类数组只能用：**length属性，下标方式**。不能使用push()、split()、reverse()等方法。

`document.body.innerHTML=xxx;`表示动态为body元素添加DOM元素。

getElementsByTagName()可以操作动态DOM。

getElementById()前面只可以接document；`getElementsByTagName()`前面不仅可以接document，还可以接其他DOM对象。

#### getElementsByClassName(className)

结果也是类数组。

也不能操作动态DOM。

#### querySelector()、querySelectorAll()

querySelector() 表示选取满足选择条件的第1个元素，querySelectorAll()表示选取满足条件的所有元素。

#### getElementsByName()

对于表单元素来说，它有一个一般元素都没有的name属性。

结果也是类数组。

只用于表单元素，一般只用于单选按钮和复选框。

### 创建元素

```javascript
// 创建元素节点
document.createElement()

// 创建文本节点
document.createTextNode()
```

这种方式又被称为“动态DOM操作”。所谓的“动态DOM”，指的是使用JavaScript创建的元素。这个元素一开始在HTML中是不存在的。

![](../images/learnfrontend-014.jpg)

```javascript
window.onload = function() 
{
  var oInput = document.createElement("input");
  oInput.id = "submit";
  oInput.type = "button";
  oInput.value = "提交";
  document.body.appendChild(oInput);
}
```

创建一个元素分4步：

① 创建元素节点：createElement（　）。

② 创建文本节点：createTextNode（　）。

③ 把文本节点插入元素节点：appendChild（　）。

④ 把组装好的元素插入到已有元素中：appendChild（　）。

### 插入元素

```javascript
A.appendChild(B);

A.insertBefore(B, ref);
// A表示父元素，B表示新子元素。ref表示指定子元素，A.insertBefore（B,ref）则表示在ref之前插入B。
```

![](../images/learnfrontend-015.jpg)

### 删除元素

```javascript
A.removeChild(B);
```

```javascript
oUl.removeChild(oUl.lastElementChild);
```

### 复制元素

```javascript
obj.cloneNode(bool);
//true表示复制所有子元素，false表示不复制
```

### 替换元素

```javascript
A.replaceChild(new, old);
```

## 10 DOM进阶

### 10.1  HTML属性操作（对象属性）

在JavaScript中，有两种操作HTML元素属性的方式：一种是使用“对象属性”，另外一种是使用“对象方法”。

#### 获取HTML属性值

```javascript
obj.attr
```

#### 设置HTML属性值

```javascript
obj.attr = "值";

oBtn.value = "button";
```

### 10.2 HTML属性操作（对象方法）

JavaScript提供四种方法操作HTML元素的属性。

#### getAttribute()

```javascript
obj.getAttribute("attr");
//等价于
obj.attr
```

#### setAttribute()

```javascript
obj.setAttribute("attr", "值");
//等价于
obj.attr = "值";
```

#### removeAttribute()

```javascript
obj.removeAttribute("attr");
```

#### hasAttribute()

判断元素是否含有某个属性。

```javascript
obj.hasAttribute("attr");
```

### 10.3 CSS属性操作

#### 获取CSS属性值

```javascript
getComputedStyle(obj).attr
// 另一种写法
getComputedStyle(obj)["attr"]
```

obj表示DOM对象，也就是通过getElementById()、getElementsByTagName()等方法获取的元素节点。

attr表示CSS属性名。这里的属性名使用的是“骆驼峰型”的CSS属性名，如font-size写成fontSize，border-bottom-width写成borderBottomWidth，像CSS3中“-webkit-box-shadow”写成webkitBoxShadow。

兼容IE6、IE7和IE8时，可用currentStyle，不过已经基本弃用。

```javascript
winow.onload = function() {
  var oBtn = document.getElementById("btn");
  var oBox = document.getElementById("box");
  oBtn.onclick = function() {
    alert(getComputedStyle(oBox).backgroundColor);
  }
}
```

#### 设置CSS属性值

##### style对象

只设置一个CSS属性的值

```javascript
obj.style.attr="值";

oDiv.style.width="50px";
```

##### cssText属性

同时设置多个CSS属性

```javascript
obj.style.cssText="值";

oDiv.style.cssText="width:100px;height:100px;border:1px solid gray;";
```

#### 获取CSS属性值，不可以用obj.style.attr或obj.style.cssText吗？为什么一定要用getComputedStyle（　）呢？

？？

### 10.4 DOM遍历



### 10.5 innerHTML和innerText



## 11 事件基础



鼠标事件。键盘事件。表单事件。编辑事件。页面事件。



## window对象



## document对象