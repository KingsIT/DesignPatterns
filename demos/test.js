function A() {}
A.prototype.getName = function() {
    return this.name + 'A';
}

function B() {}

B.prototype = Object.create(new A());
B.__proto__.constructor = B;

// 重写
B.prototype.getName = function() {
    return 'B';
}

var b = new B();
var a = new A();
console.log(b.getName(), a.getName(), b.__proto__.constructor);