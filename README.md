## 第一节 基础知识
1. PWA全称Progressive Web App，即渐进式WEB应用。
* registerServiceWorker+manifest.json=>PWA相关文件(能够实现类似于app的离线缓存功能)
    * manifest.json=>桌面快捷icon图标配置,直接跳转至页面
2. react定位
* 声明式开发：面向数据(区别于jquery和原生js：面向过程)
    * 比如造房子：react提供图纸即可自动进行 jquery：需要明确每一步做什么
* 单项数据流
    * 为什么要单向数据流？-----父组件向子组件传递值之后，子组件不允许修改父组件中的值，因为一旦修改所有用
    到这个值得元素全部改变，不利于定位bug位置
* 视图层框架
    * 大型项目中数据传递比较复杂，只有react是远远不够的
* 函数式编程
    * 面向测试的编程，如果都是函数的话很容易测试
3. 虚拟dom是什么？
* js对象
    * 虚拟DOM:['div',{id:'abc'},['span',{},'Hello World']]
    * 真实DOM：`<div><span>Hello World</span></div>`
* 对真实DOM的操作极大耗费性能，因此使用js对象来进行数据的比对，这样性能就能得到优化
    * diff算法：从上向下遍历，那一层发生了改变那么就把后面所有DOM替换掉
    * key值：不能使用index，因为当删除一个元素之后index变化了，无法定位到之前的那个元素；利用key值可以方便地对比前后的变化
    * setState:异步函数
4. react生命周期
* initialization
* mounting
    * componentWillMount:组件即将被挂载到页面时执行(只执行1次)
    * render:页面挂载
    * componentDidMount:页面挂载之后执行(只执行1次)---ajax请求
* updating
    * props
        * componentWillReceiveProps props改变比status改变前面多了一个，从父组件接收了参数，父组件render重新执行之后子组件则会执行
    * shouldComponentUpdate(组件更新前,返回布尔值，是否需要更新)
    * componentWillUpdate
    * render
    * componentDidUpdate
* componentWillUnmount

## redux
