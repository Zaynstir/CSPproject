$(document).ready(function () {
    var ray = [];
    var port = chrome.runtime.connect({ name: "wine" });
    port.postMessage({ getRay: "need" });
    port.onMessage.addListener(function (msg) {
        console.log("test");
        if (msg.getRay == "receive") {
            ray = msg.sendRay;
            console.log(ray);
            //var elements = document.getElementsById('*');
            var elements = $(document.getElementsByTagName('*')).not("style, script, noscript");
            //var elements = document.querySelectorAll("*:not('style')");
            for (var k = 0; k < ray.length - 1; k += 2){
                for (var i = 0; i < elements.length; i++) {
                        	var element = elements[i];
                    for (var j = 0; j < element.childNodes.length; j++) {
                        var node = element.childNodes[j];
                    	console.log((''+elements[j]+'').indexOf("style")+" "+element[j]+" "+(''+elements[j]+'').indexOf("script"));
                        if (node.nodeType === 3) {
                            var text = node.nodeValue;
                            var replace = ray[k];
                            var re = new RegExp(replace, "gi");
                            //var replacedText = $(''+ray[k]+'').replaceAll(''+ray[k + 1]+'');
                            var replacedText = text.replace(re, '' + ray[k+1] + '');
                            //console.log(replacedText);

                            
                            if (replacedText !== text) {
                                element.replaceChild(document.createTextNode(replacedText), node);
                            }
                        }
                    }
                }console.log("k");
            }
            console.log(elements);
        }
    });
    
});
