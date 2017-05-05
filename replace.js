$(document).ready(function () {
    var ray = [];
    var port = chrome.runtime.connect({ name: "wine" });
    port.postMessage({ getRay: "need" });
    port.onMessage.addListener(function (msg) {
//        console.log("test");
        if (msg.getRay == "receive" && msg.sendVal == 1) {
            ray = msg.sendRay;
            console.log(ray);
            var elements = $(document.getElementsByTagName('*')).not("style, script, noscript");
            for (var k = 0; k < ray.length - 1; k += 2){
                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];
                    for (var j = 0; j < element.childNodes.length; j++) {
                        var node = element.childNodes[j];
                        if (node.nodeType === 3) {
                            
                            /*var rep = (ray[k].UpperCase);
                            var redo = new RegExp(rep, "g");
                            var replacedText = text.replace(redo, '' + ray[k + 1].UpperCase +'');
                            if (replacedText !== text) {
                                element.replaceChild(document.createTextNode(replacedText), node);
                            }*/
                            var text = node.nodeValue;
                            var replace = ray[k];
                            var re = new RegExp(replace, "gi");
                            //var replacedText = $(''+ray[k]+'').replaceAll(''+ray[k + 1]+'');
                            var replacedText = text.replace(re, '' + ray[k + 1] + '');
                            //console.log(replacedText);


                            if (replacedText !== text) {
                                element.replaceChild(document.createTextNode(replacedText), node);
                            }
                            /*var rep = (ray[k].length > 1 ? ray[k].charAt(0).UpperCase + ray[k].subtring(1) : ray[k].charAt(0).UpperCase);
                            var redo = new RegExp(rep, "g");
                            var replacedText = text.replace(redo, '');
                            if (replacedText !== text) {
                                element.replaceChild(document.createTextNode(replacedText), node);
                            }
                            var replace = ray[k];
                            var re = new RegExp(replace, "gi");
                            replacedText = text.replace(re, '' + ray[k + 1] + '');
                            if (replacedText !== text) {
                                element.replaceChild(document.createTextNode(replacedText), node);
                            }
                            replacedText = text.replace('', '' + (ray[k + 1].length > 1 ? ray[k + 1].charAt(0).UpperCase + ray[k + 1].subtring(1) : ray[k + 1].charAt(0).UpperCase));
                            if (replacedText !== text) {
                                element.replaceChild(document.createTextNode(replacedText), node);
                            }*/
                        }
                    }
                }
            }
            console.log(elements);
            port.postMessage({ getRay: "done" });
        }
        else if (msg.getRay == "receive" && (msg.sendVal == 0)) {
            port.postMessage({ getRay: "need" });
        }
    });
    
});
