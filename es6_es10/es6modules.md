
# import 关键字的作用

    - 语法解析：阅读模块源代码，检查语法错误。
    - 加载：递归地加载所有被导入的模块。这也正是没被标准化的部分。
    - 连接：每遇到一个新加载的模块，为其创建作用域并将模块内声明的所有绑定填充到该作用域中，其中包括由其它模块导入的内容。
    - 如果你的代码中有import {cake} from "paleo"这样的语句，而此时“paleo”模块并没有导出任何“cake”，你就会触发一个错误。这实在是太糟糕了，你都快要运行模块中的代码了，都是 cake 惹的祸！
    - 运行时：最终，在每一个新加载的模块体内执行所有语句。此时，导入的过程就已经结束了，所以当执行到达有一行import声明的代码的时候……什么都没发生！
    - webpack 可以通过在源代码中查找 import 声明，提前计算出所有依赖。然后在编译时计算所有依赖，并通过网络资源一次性加载所有模块！