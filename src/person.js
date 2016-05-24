var Person = function () {
    this.hairColor = 'brown';
    this.eyeColor = 'blue';
    this.bald = false;
    this.tattoos = false;
};

Person.prototype = {
    flipsCoin: function () {
        var flip = Math.random();
        if (flip < 0.5) return 'heads';
        if (flip > 0.5) return 'tails';
    }
};
