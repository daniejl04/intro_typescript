//Definir una interfaz para representar un producto
var AddProducts = /** @class */ (function () {
    function AddProducts(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    AddProducts.prototype.impress = function () {
        console.log("Name: ".concat(this.name, ", Price: ").concat(this.price, ", Category: ").concat(this.category));
    };
    return AddProducts;
}());
var AddProduct = new AddProducts('milk', 2000, 'dairy');
AddProduct.impress();
//Diseñar una clase para representar una cuenta bancaria
var backCounts = /** @class */ (function () {
    function backCounts(name, count, balance) {
        this.name = name;
        this.count = count;
        this.balance = balance;
    }
    backCounts.prototype.deposit = function () {
        if (this.count > 0) {
            this.balance += this.count;
            // this.count = 0;
            console.log("Balance: ".concat(this.balance));
        }
        else
            (console.log('your deposit has to be greater than $0'));
    };
    ;
    backCounts.prototype.withdraw = function () {
        if (this.count < this.balance && this.count > 0) {
            this.balance -= this.count;
            // this.count = 0;
            console.log("your withdraw balance have been successful ".concat(this.balance));
        }
        else {
            console.log('no lo hizo');
        }
    };
    ;
    backCounts.prototype.balanceCount = function () {
        console.log("your balance is ".concat(this.balance));
    };
    return backCounts;
}());
var userOne = {
    name: 'daniel',
    count: 2,
    balance: 1000,
};
var userTwo = {
    name: 'luis',
    count: 0,
    balance: 500,
};
var backCountOne = new backCounts(userOne.name, userOne.count, userOne.balance);
var backCountTwo = new backCounts(userOne.name, userOne.count, userOne.balance);
backCountOne.deposit();
backCountOne.withdraw();
backCountOne.balanceCount();
backCountTwo.deposit();
backCountTwo.withdraw();
backCountTwo.balanceCount();
//Crear una función que determine si una cadena de caracteres es un palíndromo
function isPalindrome(woks) {
    var isPalindrome = woks.split('').reverse().join('');
    if (woks === isPalindrome) {
        console.log('Es palindrome');
    }
    else {
        console.log('No es palindrome');
    }
}
isPalindrome('ese');
