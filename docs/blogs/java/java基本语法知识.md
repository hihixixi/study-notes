# java语言基础

## 命名规则

- java命名是严格区分大小写的，变量名由字母,美元符'$',下划线‘__’开头，但通常推荐使用字母开头。
- 在为变量或者字段命名时尽可能的<font color='red'>见名知意</font>,即使用单词组合进行变量命名
- 如果变量名是一个单词则全部字母小写，如果由两个及以上组成则从第二个单词开始每个单词的首字母大写，例如：myName这种命名方式也称为‘驼峰命名’。
- 如果变量名是常量，则全部字母大写单词与单词之间以下划线分割。
- 命名不可以使用java关键字和保留字。

## 基本数据类型

```
byte：byte数据类型是一个 8 位有符号二进制补码整数。它的最小值为 -128，最大值为 127（含）。默认值是 0。

short：short数据类型是 16 位有符号二进制补码整数。它的最小值为 -32,768，最大值为 32,767（含）。默认值是 0。

int：默认情况下，int数据类型为 32 位有符号二进制补码整数，最小值为 -2^31，最大值为 2^31-1。默认值是 0。

long：long数据类型是 64 位二进制补码整数。有符号长整数的最小值为 -2^63，最大值为 2^63 -1。默认值是 0L。

float：float数据类型是单精度 32 位浮点数。默认值是 0.0f。

double：double数据类型是双精度 64 位浮点数。默认值是 0.0d。

boolean：boolean数据类型只有两个可能的值：true和false。在编译阶段(就是你写代码的时候)，它的“大小”并不是精确定义的。默认值是 false。

char：char数据类型是单个 16 位 Unicode 字符。它的最小值为'\u0000'（或 0），最大值为'\uffff'（或 65,535，包括在内）默认值是 '\u0000'。
```

### 字段和变量初始化

在字段时，基本数据类型都被赋予了默认值(上面有介绍)，但是在局部变量时必须显示的给变量赋值否则编译时会报如下错误。

![](D:\mysoft_install\Typora\notes\again\java\img\01.png)

![](D:\mysoft_install\Typora\notes\again\java\img\02.png)

### 数值数据类型赋值的小技巧

在为数值数据类型(int、float、double、long)赋值时，可以在数字之间添加下划线以便区分数字的大小,不能在数值开头结尾或者小数点前后添加下划线。

```java
		int a = 123_456;
        int b = 123_457;
        System.out.println("a的大小是: "+a);
        System.out.println("结果是: "+(a-b));
```

![](D:\mysoft_install\Typora\notes\again\java\img\03.png)

## 数组

数组的长度在创建是就需要确定且长度不可变，且一种数组只能保存一种数据类型，数组的下标从 0 开始。

### 数组的创建方式

1. int[] arr = new int[size]
2. int arr[] = new int[size] 不推荐使用
3. int[] arr = {1,2,3...}

### 数组的使用

我们经常还会使用二维数组，二维数组的每一项长度可以不同即一维数组的长度可以不同，java.util.Arrays提供了一系列操作数组的api。

## 表达式、语句、块

表达式是语句的核心组成部分，语句又可以分组到块中



