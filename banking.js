const c = require('crypto');

class Block {
    constructor(id, acc, action, amount, ph = "0") {
        this.id = id;
        this.acc = acc;
        this.action = action;
        this.amount = amount;
        this.ph = ph;
        this.h = this.calHash();
    }

    calHash() {
        return c.createHash('sha256')
            .update(this.id + this.acc + this.action + this.amount + this.ph)
            .digest('hex');
    }
}

class Blockchain {
    constructor() {
        this.chain = [];
        this.accounts = {};
    }

    add(acc, action, amount) {
        if (action == "Create") {
            if (this.accounts[acc] !== undefined) return console.log("Account exists");
            this.accounts[acc] = 0;
        } else {
            if (this.accounts[acc] === undefined) return console.log("Account not found");

            if (action == "Deposit") this.accounts[acc] += amount;
            else if (action == "Withdraw") {
                if (amount > this.accounts[acc]) return console.log("Insufficient balance");
                this.accounts[acc] -= amount;
            }
        }

        let ph = this.chain.length ? this.chain[this.chain.length - 1].h : "0";
        this.chain.push(new Block(this.chain.length, acc, action, amount, ph));
        console.log(action + " successful");
    }

    display() {
        console.log(JSON.stringify(this.chain, null, 2));
    }
}

module.exports = Blockchain;
