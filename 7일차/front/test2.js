// console.log("test................")

//         let studentScore = {             
//             koreaScore: 90,
//             englishScore: 80,
//             mathScore: 99
//         };
        
//         console.log(studentScore.koreaScore);
//         console.log(studentScore.englishScore);
//         console.log(studentScore.mathScore);
//         console.log(studentScore['englishScore']);

//         let a = 10;
//         let b = 10.0;

//         console.log(a == b);
//         console.log(a === b);

//         console.log(String(a)+(b));
//         console.log(a + Number(b));

        // let c = [10, 20, 30, 40, "kor", "eng"];

        // console.log(c);

        // for(let a in c) // for(int a : c)
        // console.log(a);

        // let d = {
        //     a:10,
        //     b:20,
        //     c:30
        // };
        // for(let a in d)
        // console.log(d[a]);
        //함수 표현식
        // function add(a, b){  //일반적인 함수
        //     console.log(a + b);
        // }

        
        
//         let funct = function func2(n){ //let
//             for(let i=0; i<n; i++)
//             console.log(i*2);
//                 }

//                 let funct2 = function(n){ //익명함수
//                  let sum = 0;
//                  for(let i =1; i<= n; i++)
//                  sum += i;
//                 return sum;
//                 }

//                 let total = funct2(5);
//                 console.log("합:" +total);

//                 let sum = funct2(100);
//                 console.log(sum);

//                 let f = () => console.log("+++++++");

//                 f();

//                 let f2 =() =>
//                     console.log("-------------")                      
//                  f2();

//                  function sum1(a, b){
//                     console.log(a + b);
//                  }

//                  (function sum1(a,b){
//                     console.log(a + b)
//                  })(10,20);

//                  sum1(10, 200);

                 const person = {
                    name: {firstName:"홍",lastName:"길동"} , //구별
                    age:29,
                    address:"경기도"
                 };

                 console.log(person.name.firstName);

                 person.gender = "남"; //추가
                 person.age = 59;      //변경

                 console.log(person); 

                 delete person.name;

                 console.log(person);