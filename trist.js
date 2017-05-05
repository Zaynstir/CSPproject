var array = [];
var preList = { preset: "vowel", presetRay: ["e", "sdffds", "a", "e", "sdffds", "a", "i", "sdffds", "y", "i", "sdffds", "y", "o", "sdffds", "u", "o", "sdffds", "u"] };
var list = [];
list.push(preList);
var old;
var next;
var allow = 1;
var run = 1;
console.log("reset");
chrome.runtime.onConnect.addListener(function (port) {
    console.assert(port.name = "wine");
    port.onMessage.addListener(function (msg) {
        if (msg.getRay == "need" && run == 1) {
            //console.log("inNeed");
            port.postMessage({ getRay: "receive", sendRay: array, sendVal: allow });
        }
        else if (msg.getRay == "done" && run == 1) {
            //console.log("run0");
            run = 0;
            port.postMessage({ getRay: "receive", sendRay: array, sendVal: run });
        }
        else if (msg.test == "testing") {
            //console.log("run1");
            run = 1;
        }
        else if (msg.getRay == "need" && run == 0) {
            //console.log("toff");
            port.postMessage({ getRay: "receive", sendRay: array, sendVal: run });
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
            console.log("setting " + allow);
            allow = (allow == 1 ? 0 : 1);
            console.log("settingcomplete " + allow);
        }
        else if (msg.ask == "asking") {
            port.postMessage({ send: "Value", val: allow });
        }
        else if (msg.clear == "clear") {
            array = [];
        }
        else if (msg.setRay == "preset") {
            for (var i = 0; i < list.length; i++) { 
                console.log(list.length+" looking..."+list[i].preset);
                if (msg.setPre == list[i].preset) {
                    console.log("settingArray");
                array = list[i].presetRay;
            }
            console.log("presetrevcieved"+array);
            }
        }
        else if (msg.addRay == "add") {
            console.log("hello");
            var newArray = msg.addList
            var addArray = newArray.split(",");
            console.log(newArray + " changing array " + addArray);
            preList = { preset: msg.addWord, presetRay: addArray };
            console.log("adding "+array+" asdf " + list);
            list.push(preList);
        }
        else if (msg.debug == "asking") {
            console.log("testing");
            console.log("array " + array);
            console.log("list length " + list.length);
            for (var j = 0; j < list.length; j++) {
                console.log("list preset: " + list[j].preset + " preRay: " + list[j].presetRay);
            }
            console.log("allow " + allow);
        }
    });
});