const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');

class Block
{
     constructor({timestamp, lastHash,hash, data })
     {
        //set a property to the instance of a class
     this.timestamp = timestamp;
         this.lastHash = lastHash;
         this.hash = hash;
        this.data = data;
     }

     static genesis()
     {
         //facory classes which creates a new block of genesis whover calls
         return new this(GENESIS_DATA);
     }
static minedBlock ({lastBlock,data})
{
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    return new this({
        timestamp,
        lastHash,
        data,
        hash:cryptoHash(timestamp,lastHash,data)
    });
}

}

module.exports = Block;
    
