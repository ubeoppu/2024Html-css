//콜백함수

//비동기
let f = function(){
    console.log("1번");
}

setTimeout(
  f, 10000  
);

console.log("---------");

function double(num){
    setTimeout(
    function(){
        const doubleNum = num + 2;
        console.log(doubleNum);
    }
    )
}

double(100);
//동기
// func(9000000);
// console.log("------");

// function func(n){
//     for(let i =0; i<n; i++);
// }
