const c = require('crypto');

class Block {
    constructor(id, s1, s2, ph = "") {
        this.id = id;
        this.s1 = s1;
        this.s2 = s2;
        this.ans = this.checkAnagram();
        this.ph = ph;
        this.h = this.calHash();
    }

    checkAnagram() {
        return s1 = this.s1.toLowerCase().split('').sort().join('') ===
            this.s2.toLowerCase().split('').sort().join('')
            ? "Anagram" : "Not Anagram";
    }

    calHash() {
        return c.createHash('sha256')
            .update(this.id + this.s1 + this.s2 + this.ans + this.ph)
            .digest('hex');
    }
}

class Blockchain {
    constructor() { this.chain = []; }

    addBlock(b) {
        b.ph = this.chain.length ? this.chain[this.chain.length - 1].h : "0";
        b.h = b.calHash();
        this.chain.push(b);
    }
}

module.exports = { Block, Blockchain };
