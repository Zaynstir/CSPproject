
	$('th:contains("Died")').parent().hide();

$('th:contains("Died")').parent().hide();
$('th:contains("death")').parent().hide();
$('th:contains("Resting place")').parent().hide();

$('td:contains("death")').parent().hide();

$('span:contains("Death")').parent().hide();

 
$('p').not('.infobox p').first().html(function() {
	"use strict";
	return $(this).html().replace('was', 'is');
});

var hidden = ['died','remains','funeral','death','autopsy','suicide','cremated','interred','mausoleum','dead'];
hidden.forEach(function(word) {
	"use strict";
	$('p:contains('+word+')').hide();
	$('li:contains('+word+')').hide();
	$('span:contains('+word+')').hide();	
});
//thithithitihdsandladsfdfadsad