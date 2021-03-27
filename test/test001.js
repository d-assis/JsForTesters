const chai = require('chai')
, assert = chai.assert
, expect = chai.expect
, should = chai.should()

// describe é uma função que recebe 2 parâmetros
// nome da funcionalidade testada e uma função anônima sem parâmetros
describe('string',function (){

    before(function (){
        // roda uma vez antes do primeiro teste 
        console.log('before hook')
    })

    after(function (){
        // roda uma vez depois do último teste 
        console.log('after hook')
    })

    beforeEach(function(){
        // roda uma vez antes de cada teste
        console.log('beforeEach hook')
    })

    afterEach(function(){
        // roda uma vez depois de cada teste
        console.log('afterEach hook')
    })

    let name = 'Leitão'
    // it significa "individual test", e também é uma função que recebe 2 parâmetros
    // nome do teste e uma função anônima sem parâmetros
    // no corpo dessa função anônima estará o script de teste
    it('should be of type string', function(){
        name.should.be.a('string')
        expect(name).to.be.a('string')
        assert.typeOf(name, 'string')
    })

    it('should contain Leitão', function (){
        name.should.equal('Leitão')
        name.should.not.equal('John')
        expect(name).to.equal('Leitão')
        assert.equal(name, 'Leitão')
    })
})