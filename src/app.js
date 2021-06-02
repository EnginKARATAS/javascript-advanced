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


