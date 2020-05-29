const cryptoHash = require('./crypto-hash');


describe('cryptoHash()',()=>
{
    //B5BB9D8014A0F9B1D61E21E796D78DCCDF1352F23CD32812F4850B878AE4944C
    //b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c
    if('generates a SHA-256 hashed output', ()=>
    {
        expect(cryptoHash('foo')).toEqual('b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c');
    });
    it('produces the same hash with the same input arguements in any order',()=>{
        expect(cryptoHash('one','two','three')).toEqual(cryptoHash('three','one','two'));
        
    });
});