addition

const { Block, Blockchain } = require('./add');

let m = new Blockchain();

m.addBlock(new Block(1, 23, 76));
m.addBlock(new Block(2, 32, 78));
m.addBlock(new Block(3, 3, 8));

console.log(JSON.stringify(m, null, 2));
