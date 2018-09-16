interface myFunc {
author: string;
title: string;
year: string;

}

var demo = {
    author: "stefan eliasen",
    title: "ses lan",
    year: "20128"
}

function f1(myfunc: myFunc): Array<myFunc>{
let arr = [];
arr.push(myfunc.author, myfunc.title, myfunc.year);
for(let i = 0; i < arr.length; i++){
    arr[i].toUpperCase;
}
console.log(arr);
return arr;
}

f1(demo);

/*function f2(myfunc: myFunc): Array<myFunc>{
    
    return arr;
}
*/

let f2 = function logger(f1:myFunc){
    let [a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}
