class Customer{
    constructor(id, customerNumber){
    //prototyping
    this.id = id;
    this.customerNumber = customerNumber;
    }
}

let customer = new Customer(1,"12341");
//prototyping
customer.name="sonaovski";
console.log(customer.name);

Customer.bisey = "bişey";
console.log(Customer.bisey);