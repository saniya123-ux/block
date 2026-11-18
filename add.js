const crypto = require('crypto');

class Block {
    constructor(id, n1, n2, ph = "") {
        this.id = id;
        this.n1 = n1;
        this.n2 = n2;
        this.sum = n1 + n2;
        this.ph = ph;
        this.h = this.calHash();
    }

    calHash() {
        return crypto.createHash('sha256')
            .update(this.id + this.n1 + this.n2 + this.sum + this.ph)
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
