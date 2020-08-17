
# 知识点

## 变量提升

    - 未使用 var 定义的变量，自动被认为是 window 的属性
    - 在作用域内部， var 定义的变量 会被自动提升到作用域的顶部

### 惰性实例化

- 在对象需要使用的时候，才进行实例化
- 实现方式
- 缺点在于代码的复杂性较大，不易被识别，需要加入注释让人理解

    ```javascript
        Demo.Singleton = ( // 圆括号表示代码范围
            var uniqueInstance = null;
            function() { // 立即执行函数产生作用域
                function constructor() {
                    var name = 'singletonName';
                    function getName = (){};
                    return {
                        name1: 'singleton public name',
                        getPublicName: function() {...}
                    }
                }

                return {
                    getInstanceSingleton: function() {
                        if (!uniqueInstance) { // 保证私有实例只有一个
                            uniqueInstance = constructor();
                        }
                        return constructor;
                    }
                }
            }()
        )
    ```
    