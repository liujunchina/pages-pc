/**
 * Created by Liu.Jun on 2016/10/11.
 */

// let [a,b,c] = ['43',41234,'fasdf'];
//
// console.log(a);

let testDom = document.getElementById('j_test');
// let p = document.createElement('p');
// let text = document.createTextNode('我是js创建的 ');
// let testBefore = document.createElement('div');
// testBefore.innerText = '我是创建在之前的元素';
// p.appendChild(text);
// console.log(p.nodeType);
// testDom.appendChild(p);     // 插入p标签
//
// testDom.insertBefore(testBefore,p); // p之前插入div

let xr = new XMLHttpRequest();
xr.open('GET','/res.txt',true);
xr.onreadystatechange = function () {
    if(xr.readyState == 4){
        let innerText = document.createTextNode(xr.responseText);
        testDom.appendChild(innerText);
    }
}
xr.send(null);



