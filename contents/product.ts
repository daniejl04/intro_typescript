
//Definir una interfaz para representar un producto

interface Product {

    name:string,
    price:number,
    category:string

}

class AddProducts implements Product {
    id:string
    name:string
    price: number;
    category: string;

    constructor(name:string, price:number, category:string) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    impress(): void {

        console.log(`Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`);
    }

}

const AddProduct = new AddProducts('milk', 2000, 'dairy');

AddProduct.impress()

//Diseñar una clase para representar una cuenta bancaria

class backCounts{
     
    id:string
    name:string;
    count:number;
    balance:number;

    deposit(): void {
        if(this.count > 0){
            this.balance += this.count;
            // this.count = 0;
            console.log(`Balance: ${this.balance}`);
        }else(
            console.log('your deposit has to be greater than $0')
        )

    };

    withdraw(): void {
        if(this.count < this.balance && this.count > 0){

            this.balance -= this.count;
            // this.count = 0;
            console.log(`your withdraw balance have been successful ${this.balance}`)
        }else{
            console.log('no lo hizo')
        }

    };

    balanceCount(): void {

        console.log(`your balance is ${this.balance}`)
    }

    constructor(name:string, count:number, balance:number) {
        this.name = name;
        this.count = count;
        this.balance = balance;
    }

}

const userOne = {
    name: 'daniel',
    count: 2,
    balance: 1000,
}

const userTwo = {
    name: 'luis',
    count: 0,
    balance: 500,
}

const backCountOne = new backCounts(userOne.name, userOne.count, userOne.balance);
const backCountTwo = new backCounts(userOne.name, userOne.count, userOne.balance);


backCountOne.deposit();
backCountOne.withdraw();
backCountOne.balanceCount();

backCountTwo.deposit();
backCountTwo.withdraw();
backCountTwo.balanceCount();


//Crear una función que determine si una cadena de caracteres es un palíndromo

function isPalindrome(woks:string): void {
    
    let isPalindrome = woks.split('').reverse().join('');

    if(woks === isPalindrome){
        console.log('Es palindrome');
    }else{
        console.log('No es palindrome');
        
    }

}

isPalindrome('ese');


