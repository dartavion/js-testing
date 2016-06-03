var Person = function (eventName, el) {
    this.hairColor = 'brown';
    this.eyeColor = 'blue';
    this.bald = false;
    this.tattoos = false;
    this.el = el || document.querySelector('body');
    this.goodEvent = new CustomEvent(eventName);
    
    // this.el.addEventListener(eventName, this.witnessGood(), false);
};

Person.prototype = {
    flipsCoin: function () {
        var flip = Math.random();
        if (flip < 0.5) return 'heads';
        if (flip > 0.5) return 'tails';
    },

    witnessGood: function () {
        this.el.dispatchEvent(this.goodEvent);
    },

    getData: function(callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts/1', true);

        xhr.onreadystatechange = function() {

            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    callback(null, JSON.parse(xhr.responseText));
                }
                else {
                    callback(xhr.status);
                }
            }
        };

        xhr.send();
    }
};
