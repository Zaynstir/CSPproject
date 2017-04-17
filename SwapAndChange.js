	 var elements = document.getElementsByTagName('*');
	 var array = [Trump, trash]
	
	
	for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
			
			
            var replacedText = text.replace('' + array[0] + '', '' + array[1] + '');
			console.log(replacedText);
			
             if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
            }
        }
    }
	
	
	
	
	
