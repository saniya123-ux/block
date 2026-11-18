const c = require('crypto');

class Block {
    constructor(id, n, ph = "") {
        this.id = id;
        this.n = n;
        this.ans = this.checkArmstrong();
        this.ph = ph;
        this.h = this.calHash();
    }

    checkArmstrong() {
        let s = String(this.n);
        let sum = [...s].reduce((a, d) => a + Number(d) ** s.length, 0);
        return sum == this.n ? "Armstrong" : "Not Armstrong";
    }

    calHash() {
        return c.createHash('sha256').update(this.id+this.n+this.ans+this.ph).digest('hex');
    }
}

class Blockchain {
    constructor() { this.chain = []; }

    addBlock(b) {
        b.ph = this.chain.length ? this.chain[this.chain.length-1].h : "0";
        b.h = b.calHash();
        this.chain.push(b);
    }
}

module.exports = { Block, Blockchain };
