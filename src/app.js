let sayi1 = 10;
sayi1 = "enginkaratas"
let student = {id:1, name:"engin"}
// console.log(student);

function save(params) {
    console.log(params);
}

// save(student);

let showProducts = function (id,...products) {
    console.log(id);
    console.log(products[0]);
  }

console.log(typeof showProducts);
//rest paramater
// showProducts(22,["erik","kiraz","fişnereçeli"]);



//return max
console.log(Math.max(5,22,51,7,3,9));
let points = [1,2,3,4,5,8,87,45];
//spread
console.log(...points); //... haline çeviir
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H");


//Destructuring //destructs = parçalamak
let populations = [10000,20000,30000,[40000, 50000]];
let [small,medium,high,[veryHigh,max]] = populations;
console.log(small);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(max);

//[] içinde parametre göndermeyi js, destructuring olarak algılar
let someFunction = function ([small1],number) {
    console.log("*************");
    console.log(small1);
}

someFunction(populations);

let someObject = {id:10, productId:5001 };
let {productId,id} = someObject;
console.log(id);//10
console.log(productId);//5001
//not: değişken adlarını gözetiriz. aynı olmalı.





