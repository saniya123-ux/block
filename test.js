addition

const { Block, Blockchain } = require('./add');

let m = new Blockchain();

m.addBlock(new Block(1, 23, 76));
m.addBlock(new Block(2, 32, 78));
m.addBlock(new Block(3, 3, 8));

console.log(JSON.stringify(m, null, 2));


prime


const { Block, Blockchain } = require('./prime');

let m = new Blockchain();

m.addBlock(new Block(1, 76));
m.addBlock(new Block(2, 7));
m.addBlock(new Block(3, 3));

console.log(JSON.stringify(m, null, 2));


happy

const { Block, Blockchain } = require('./happy');

let m = new Blockchain();

m.addBlock(new Block(1, 19));
m.addBlock(new Block(2, 20));
m.addBlock(new Block(3, 7));

console.log(JSON.stringify(m, null, 2));


arm

const { Block, Blockchain } = require('./armstrong');

let m = new Blockchain();

m.addBlock(new Block(1, 153));
m.addBlock(new Block(2, 123));
m.addBlock(new Block(3, 370));

console.log(JSON.stringify(m, null, 2));

ana

const { Block, Blockchain } = require('./anagram');

let m = new Blockchain();

m.addBlock(new Block(1, "listen", "silent"));
m.addBlock(new Block(2, "hello", "world"));

console.log(JSON.stringify(m, null, 2));


bank


const Blockchain = require('./banking');
const p = new Blockchain();
const input = require('readline-sync');

let acc = input.question("Enter account number: ");
p.add(acc, "Create", 0);

while (true) {
    console.log("\n1.Deposit  2.Withdraw  3.Exit");
    let ch = input.question("Enter choice: ");

    if (ch == "1" || ch == "2") {
        let amt = Number(input.question("Enter amount: "));
        p.add(acc, ch == "1" ? "Deposit" : "Withdraw", amt);
        console.log("Balance:", p.accounts[acc]);
    } else if (ch == "3") break;
    else console.log("Invalid choice");
}

console.log("\nFinal Balance:", p.accounts[acc]);
p.display();
