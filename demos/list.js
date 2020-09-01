const a = [1,2,3,4];
const b = {k: 'KKK'};

a.forEach((it, index) => { console.log(it, this) }, b);