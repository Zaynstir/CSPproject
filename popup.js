// JavaScript source code
	document.addEventListener('DOMContentLoaded', documentEvents  , false);
	// takes in the stuff for the orginal text and the new text
 function myAction(input, input2){
	// error checking
 	 console.log(" input value is :" + input.value); 
	 console.log(" new input value is :" + input2.value)
	 var org = input.value; // orginal text
	 var next = input2.value;// updated text
	 console.log(input.value);
	 console.log(input2.value);
	// gets every element in the HTTP file
	 var elements = document.getElementsByTagName('*');
	
	// not sure what these for loops due, but I thing they basically loop through the entire HTTPs file and changes it
	for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
			
			// replaces the text from "org" to "new"
            var replacedText = text.replace('' + org + '', '' + next + '');
			console.log(replacedText);
			
             if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
            }
        }
    }
}
	 
 // this does myAction when button is clicked
 function documentEvents(){
	document.getElementById('button').addEventListener('click',
	function () { myAction(document.getElementById('org'), document.getElementById('next'));
		
	});
	

 
 }
 
 
 
 