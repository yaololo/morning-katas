
// Test cases: actual --> expected
// decodeMessage("a") --> "z"
// decodeMessage("z") --> "a"
// decodeMessage("b") --> "y"
// decodeMessage("y") --> "b"
// decodeMessage("ab") --> "zy"
// decodeMessage("sr") --> "hi"
// decodeMessage("svool") --> "hello"

// decodeMessage("gsrh nvhhztv") --> "this message"
// decodeMessage("r slkv mlylwb wvxlwvh gsrh nvhhztv") --> "i hope nobody decodes this message"
const decodeMessage = require('../src/decodeMessage')


describe('decode of string', () => {
    it('decode a should return z', () => {
        expect(decodeMessage('a')).toEqual('z')
    });
    it('should decode sr and return hi', () => {
        expect(decodeMessage('sr')).toEqual('hi')
    });

    it('should decode svool and return hello', () => {
        expect(decodeMessage('svool')).toEqual('hello')
    });
    it("should decode r slkv mlylwb wvxlwvh gsrh nvhhztv and return i hope nobody decodes this message", ()=>{
        expect(decodeMessage("R slkv mlylwb wvxlwvh gsrh nvhhztv")).toEqual("i hope nobody decodes this message")
    })
})