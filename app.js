//globaalne funktsioon kiirkirjaga
(function(global, $) {


//    ava sirvijas
}(window, jQuery));

//// kolmas


// muutuja g objekt (kiirkiri 'John', 'Doe'))
var g = G$('John', 'Doe');
// väljasta konsooli logis
console.log(g);

//// 4.

// muutuja g kiirkirjaga 'John', 'Doe'
var g = G$('John', 'Doe');
// tervita Hispaania keeles
g.greet().setLang('es').greet(true);


///6.

// loo uus muutuja g objekt (kujutame ette, et kasutaja on tead(kiirkiri 'John', 'Doe'))
var g = G$('John', 'Doe');


// muutuja tervitamine kasutades keelt ‘es’ ja log()funktsiooni
g.greet().setLang('es').greet(true).log();

/// 7.

// saab uue objekti (arhitektuur lubab meil kasutada uut objekti ilma 'new' tunnus sõnata)
var g = G$('John', 'Doe');

// kasuta meie lingitavat meetodit
g.greet().setLang('es').greet(true).log();

// luba meil kasutada meie objekti vajutades ‘login’ nuppu
$('#login').click(function() {

    // loo uus 'Greetr' objekt (kiirkirja 'John', 'Doe' loginiga)
    var loginGrtr = G$('John', 'Doe');

    // üeida sisselogimine ekraanilt
    $('#logindiv').hide();

    // tulista ekraanile HTML tervitus, andes edasi '#greeting' kui valija ja valitud keel ja logi welcome ka
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});

