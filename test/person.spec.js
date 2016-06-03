describe('Person', function () {
    var event = 'hope', el, theGoodContainer;

    beforeEach(function () {
        el = document.createElement("div");
        el.id = 'theGoodContainer';
        document.body.appendChild(el);
        theGoodContainer = document.getElementById('theGoodContainer');

        this.xhr = sinon.useFakeXMLHttpRequest();

        this.requests = [];
        this.xhr.onCreate = function(xhr) {
            this.requests.push(xhr);
        }.bind(this);
    });

    afterEach(function() {
        this.xhr.restore();
    });

    it('should have brown hair', function () {
        var person = new Person(event);
        expect(person.hairColor).to.equal('brown');
    });

    it('should have blue eyes', function () {
        var Jimmy = new Person(event);
        var Judy = new Person(event);
        Judy.eyeColor = 'green';

        expect(Jimmy.eyeColor).to.equal('blue');
        expect(Judy.eyeColor).to.equal('green');
    });

    it('should flip a coin and get heads', function () {
        var Gambit = new Person(event);
        sinon.stub(Gambit, 'flipsCoin').returns('heads');
        expect(Gambit.flipsCoin()).to.equal('heads');
    });

    it('should have a dom obj', function () {
        expect(theGoodContainer.id).to.equal('theGoodContainer');
    });

    it('should emit a hope event', function () {
        var Storm = new Person(event, theGoodContainer);

        var errTimeout = setTimeout(function () {
            assert(false, 'Event never fired');
        }, 1000);

        theGoodContainer.addEventListener(event, function () {
            clearTimeout(errTimeout);
            assert(true);
        });

        Storm.witnessGood();
    });

    it('should parse fetched data as JSON', function() {
        var Wolverine = new Person(event, theGoodContainer);
        var data = { foo: 'bar' };
        var dataJson = JSON.stringify(data);

        Wolverine.getData(function(err, result) {
            result.should.deep.equal(data);
        });

        this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
    });

});