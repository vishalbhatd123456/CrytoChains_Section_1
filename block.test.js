const Block = require('./block');
const cryptoHash = require('./crypto-hash');
const { GENESIS_DATA } = require('./config');
//test 
describe('Block',() => {
    const timestamp = 'a-date';
    const lastHash = 'foo-hash';
    const hash ='bar-hash';
    const data = ['blockchain','data'];
    const block = new Block({
        timestamp : timestamp,
        lastHash: lastHash,
        hash: hash,
        data:data,
    });

    //test it
    it('has a timestamp, lastHash,hash and data property',()=>{
      expect(block.timestamp).toEqual(timestamp);
      expect(block.lastHash).toEqual(lastHash);
      expect(block.hash).toEqual(hash);
      expect(block.data).toEqual(data);
    });


describe('genisis',()=>
{
    const genesisBlock = Block.genesis();
   // console.log(genesisBlock);

    it('returns a Block instance',() =>
    {
        expect(genesisBlock instanceof Block).toBe(true);

    });

    it('returns the genisis data',()=>
    {
        expect(genesisBlock).toEqual(GENESIS_DATA);
    })

});

describe('mineBlock',()=>
{
    const lastBlock = Block.genesis();
    const data = 'mined data';
    const minedBlock = Block.minedBlock({ lastBlock, data});

    it('returns a Block instance',() =>
    {
        expect(minedBlock instanceof Block).toBe(true);
    });

    it('sets the `lastHash` to be the `hash` of the lastBlock',() =>
    {
        expect(minedBlock.lastHash).toEqual(lastBlock.hash);
    });

    it('sets the `data` to the `data` of the lastBlock',()=>
    {
        expect(minedBlock.data).toEqual(data);
    });

    it('set a `timestamp`',() =>
    {
        expect(minedBlock).not.toEqual(undefined);
    });

    it('creates a sha-256 hash based on proper inputs',()=>
    {
        expect(minedBlock.hash).toEqual(cryptoHash(minedBlock.timestamp,lastBlock.hash,data));
    });
});

});