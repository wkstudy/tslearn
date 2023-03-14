# 记录typescript的学习过程

目前前端的大趋势是typescript，市面上文章也特别多，想要系统的学习ts一时间不知道该怎么下手了，这里特意记录下自己的一个学习过程。


### 入门
1. 首推[官网](https://www.typescriptlang.org/)，把官网的文章看一遍基本就算是入门了，但目前官网的中文文档不是很全，所以这里主要看[ts中文版](https://ts.yayujs.com/)

这里也发现一个ts的中文翻译-[TypeScript 使用指南手册](http://www.patrickzhong.com/TypeScript/)

顺便也看些其他文章[深入理解 TypeScript](https://github.com/jkchao/typescript-book-chinese)

三篇文章由一定程度的重复，所以主要选一个看、其他的略读或者不读就行（需要的时候用来查阅）
2. 开始做题吧[ts-challanges](https://github.com/type-challenges/type-challenges/blob/main/README.zh-CN.md)
```
interface好像没法在key里使用泛型

```

3. 阅读理解ts里内置实现的高级类型（如果2里做题做的很顺利就没必要看这个了，有问题的话可以先看这个再做2）
> 1. `Exclude Extract`  a extends b ? a b 为联合类型的话是单独某一项与某一项之间的比较，而不是整体的比较
> 2. `NonNullable` [object Object {} 的区别](https://juejin.cn/post/6844904170521100296#heading-0) ,我的理解是 object只能表示非原始类型,Object是Object.prototype,js里所有类型都(除了 null undefined)是继承与它, {}和Object是一样的，但比较特殊的是{}里不能有属性，只能是空Object
```
type a = string extends Object ? true : false // true
```
4. [这里](https://github.com/ascoders/weekly/blob/master/TS%20%E7%B1%BB%E5%9E%8B%E4%BD%93%E6%93%8D/243.%E7%B2%BE%E8%AF%BB%E3%80%8APick%2C%20Awaited%2C%20If...%E3%80%8B.md)有大佬做题的记录，可以参考思路



### Refer

1. [推荐12个值得学习的TypeScript宝库！ - 前端充电宝的文章 - 知乎](https://zhuanlan.zhihu.com/p/570649302)
