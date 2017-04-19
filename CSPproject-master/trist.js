var array = [];
var old;
var next;
chrome.runtime.onConnect.addListener(function (port) {
    console.assert(port.name = "wine");
    port.onMessage.addListener(function (msg) {
        if (msg.getRay == "need") {
            port.postMessage({ getRay: "receive", sendRay: array });
        }
    });
});
chrome.runtime.onConnect.addListener(function (port) {
    console.assert(port.name = "dine");
    port.onMessage.addListener(function (msg) {
        if (msg.setRay == "newValue") {
            array.push(msg.setOld);
            array.push(msg.setNext);
            console.log(msg.setOld + " " + msg.setNext);//+" "+old+" "+next);
            console.log(array);
        }
    });
});