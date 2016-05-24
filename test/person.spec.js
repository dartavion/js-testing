describe('Person', function () {

    it('should have brown hair', function () {
        var person = new Person();
        expect(person.hairColor).to.equal('brown');
    });

    it('should have blue eyes', function () {
        var Jimmy = new Person();
        var Judy = new Person();
        Judy.eyeColor = 'green';

        expect(Jimmy.eyeColor).to.equal('blue');
        expect(Judy.eyeColor).to.equal('green');
    });
    
    it('should flip a coin and get heads', function () {
        var Gambit = new Person();
        sinon.stub(Gambit, 'flipsCoin').returns('heads');
        expect(Gambit.flipsCoin()).to.equal('heads');
    });
    
});