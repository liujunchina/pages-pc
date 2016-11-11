/**
 * Created by Liu.Jun on 2016/10/11.
 */

var result = {
    errCode : 0,
    errMsg :'我是错误提示',
    obj:{
        obj:'fasdf'
    }
}

const [a,b,c] = 'fasdfasfd';
console.log(a,b,c);

let {toString:s} = 123;
console.log(s === Number.prototype.toString);

// 函数的解构赋值
function test([x,y]) {
    console.log(x+y)
}

var testArr = [[1,312],[234,43]].map(([a,b])=> {
    return a + b;
});

function move({x = 1, y = 2} = {}) {
    console.log(x + 'move To' + y);
}
move({
    x:3,
    y:4
})
move()

///

var map = new Map();
map.set('f','1');
map.set('s','2');
console.log(map[0]);

for(let [key,value] of map){
    console.log(key + '   ' + value);
}

// unicode

var name = '柳俊';

for(let s of name){
    console.log(s);
}

console.log('abc'.charAt(0)) // "a"
console.log('𠮷'.charAt(0)) // "\uD842"

//
var strData = {
    name:'liu',
    age:'1008'
}
var str = `fsad\`fasd${strData.name}

fdasdf,
姓名：${strData.age}`;

console.log(str);

// array 扩展
let nodeList = document.querySelectorAll('div');
// console.log(nodeList);
// console.log(Array.from(nodeList));
// console.log(Array.from('fasdfasdf'));

console.log(Array.of(3, 11, 8));

let xx = 'xx';

console.log([... xx]);

console.log(...[4,2134,2134,2134])













