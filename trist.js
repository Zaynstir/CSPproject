var array = [];
var old;
var next;
var allow = 1;
chrome.runtime.onConnect.addListener(function (port) {
    console.assert(port.name = "wine");
    port.onMessage.addListener(function (msg) {
        if (msg.getRay == "need") {
            port.postMessage({ getRay: "receive", sendRay: array, sendVal: allow });
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
        else if (msg.changeVal == "change") {
            console.log("setting "+allow);
            allow = (allow == 1 ? 0 : 1);
            console.log("settingcomplete " + allow);
        }
        else if (msg.ask == "asking") {
            port.postMessage({ send: "Value", val: allow });

        }
    });
});