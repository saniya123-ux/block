const c = require('crypto');

class Block {
    constructor(id, n, ph = "") {
        this.id = id;
        this.n = n;
        this.ans = this.checkHappy();
        this.ph = ph;
        this.h = this.calHash();
    }

    checkHappy() {
        let n = this.n, seen = new Set();
        while (n != 1 && !seen.has(n)) {
            seen.add(n);
            n = String(n).split('').reduce((s, d) => s + d*d, 0);
        }
        return n == 1 ? "Happy" : "Not Happy";
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
