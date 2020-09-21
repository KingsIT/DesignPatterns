function* test() {
    var a = yield 1;
    var b = 0;
    yield 1 + a + b;
    yield 1 + a + b;
    yield 1 + a + b;
    return 1 + a + b;
}

const it = test();
console.log(it.next());
console.log(it.next(0, 1));
console.log(it.next(0, 1));
console.log(it.next(0, 1));
console.log(it.next(0, 1));


