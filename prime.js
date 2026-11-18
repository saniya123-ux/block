const c = require('crypto');

class Block {
    constructor(id, n1, ph = "") {
        this.id = id;
        this.n1 = n1;
        this.ans = this.checkPrime();
        this.ph = ph;
        this.h = this.calHash();
    }

    checkPrime() {
        if (this.n1 <= 1) return "Not Prime";

        for (let i = 2; i < this.n1; i++) {
            if (this.n1 % i == 0)
                return "Not Prime";
        }

        return "Prime";
    }

    calHash() {
        return c.createHash('sha256')
            .update(this.id + this.n1 + this.ans + this.ph)
            .digest('hex');
    }
}

class Blockchain {
    constructor() {
        this.chain = [];
    }

    addBlock(b) {
        b.ph = this.chain.length ? this.chain[this.chain.length - 1].h : "0";
        b.h = b.calHash();
        this.chain.push(b);
    }
}

module.exports = { Block, Blockchain };
