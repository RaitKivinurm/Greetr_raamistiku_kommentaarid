//// 3.

(function(global, $) {

//muutuja Greetr funktsiooni väärustega ‘firstName, lastName, language’
    var Greetr = function(firstName, lastName, language) {
//tagasta see
        return new Greetr.init(firstName, lastName, language);
    }

// Loo Geetr prototüüp
    Greetr.prototype = {};

//Geetr funktsiooni ‘initialisatioon’
    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

// Greetr funktsiooni ‘initialisatioon’ = Greetr ürototüüp
    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));


///// 4.

(function(global, $) {

// uus objekt väärtustega
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

// muutuja toetatud keeled stringiga ['en', 'es']
    var supportedLangs = ['en', 'es'];

// muutuja tervitus
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

// muutuja ametlik tervitus
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

// logisõnum ‘sisseloginud kui:’
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };

// Greetr prototüüp hoiab meetodit (selleks, et säästa mälu)
    Greetr.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
// kontrolli kas on lubatud keel
// viitab väliselt mitte ligi ppääsetavale 'supportedLangs'  lõpuga

            if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

// formaalse tervituse konstruktsioon
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            var msg;

            // kui on defieerimata või null siis see sunnitakse olema 'false'

            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' viitab objekti kutsumisele selle töölepanmise hetkel
            // teeb meetodi järjestatavaks

            return this;
        },

// coseole.log logisõnum, ja täisnimi
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

// seadista keel
        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        },

//HTML tervitus
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }

    };

// tegelik objekt luuakse siin lubades kutsuda 'new' ilma, et tegelikuses 'new' kutsutakse

    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

    }

    Greetr.init.prototype = Greetr.prototype;

// lisa meie Greetr globaalsele objektile ja varusta see '$G' kiirkirjaga juhuks kui meil on kehvad sõrmed

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));

/// 6.

(function(global, $) {

    // uus objekt väärtustega
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // varjatud IIFE ulatused ja pole kunagi otse ligipääsetav
    var supportedLangs = ['en', 'es'];

    // mitteametlik tervitus
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    // ametlik tervitus
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    // logisõnum ‘sisseloginud kui:’
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };

    // Greetr prototüüp hoiab meetodit (selleks, et säästa mälu)
    Greetr.prototype = {

        // 'this' viitab kutsutud objektile töölepanemis ajal
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            // kontrolli kas on lubatud keel
            // viitab väliselt mitte ligi ppääsetavale 'supportedLangs'  lõpuga
            if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";
            }
        },

        // saa sõnum objektilt viidates omadustele kasutades [] süntaksi
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

// formaalse tervituse konstruktsioon
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        // lingitav/järjestatav meetod tagastab oma objekti
        greet: function(formal) {
            var msg;

            // kui on defieerimata või null siis see sunnitakse olema 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' viitab objekti kutsumisele selle töölepanmise hetkel
            // teeb meetodi järjestatavaks

            return this;
        },

// coseole.log logisõnum, ja täisnimi
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            // teeb järjestatavaks
            return this;
        },

        setLang: function(lang) {

            // sea keel
            this.language = lang;

            // valideeri
            this.validate();

            // teeb järjestatavaks
            return this;
        },

//HTML tervitus
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            // määra sõnum
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            // lisab sõnum valitud kohta DOMis
            $(selector).html(msg);

            // teeb järjestatavaks
            return this;
        }

    };

    // tegelik objekt luuakse siin lubades kutsuda 'new' ilma, et tegelikuses 'new' kutsutakse

    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();

    }

    // trikk on laenatud jQuery’lt, et ei peaks kautama võtmesõna 'new'
    Greetr.init.prototype = Greetr.prototype;

    // lisa meie Greetr globaalsele objektile ja varusta see '$G' kiirkirjaga juhuks kui meil on kehvad sõrmed

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));

/// 7.

;(function(global, $) {

    // 'new' objekt
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // varjatud IIFE ulatused ja pole kunagi otse ligipääsetav
    var supportedLangs = ['en', 'es'];

    // mitteametlik tervitus
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    // logisõnum ‘tervitus’
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    // logisõnum ‘sisseloginud kui:’
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };

    // Greetr prototüüp hoiab meetodit (selleks, et säästa mälu)
    Greetr.prototype = {

        // 'this' viitab kutsutud objektile töölepanemis ajal
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            // kontrolli kas on lubatud keel
            // viitab väliselt mitte ligi ppääsetavale 'supportedLangs'  lõpuga
            if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";
            }
        },

        // saa sõnum objektilt viidates omadustele kasutades [] süntaksi
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

// formaalse tervituse konstruktsioon
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        // lingitav/järjestatav meetod tagastab oma objekti
        greet: function(formal) {
            var msg;

            // kui on defieerimata või null siis see sunnitakse olema 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' viitab objekti kutsumisele selle töölepanmise hetkel
            // teeb meetodi järjestatavaks
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            // teeb järjestatavaks
            return this;
        },

        setLang: function(lang) {

            // sea keel
            this.language = lang;

            // valideeri
            this.validate();

            // teeb järjestatavaks
            return this;
        },

//HTML tervitus
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            // determine the message
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            // lisab sõnum valitud kohta DOMis
            $(selector).html(msg);

            // teeb järjestatavaks
            return this;
        }

    };

    // tegelik objekt luuakse siin lubades kutsuda 'new' ilma, et tegelikuses 'new' kutsutakse
    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();

    }

    // trikk on laenatud jQuery’lt, et ei peaks kautama võtmesõna 'new'
    Greetr.init.prototype = Greetr.prototype;

    // lisa meie Greetr globaalsele objektile ja varusta see '$G' kiirkirjaga juhuks kui meil on kehvad sõrmed
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));

