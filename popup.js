// JavaScript source code
document.addEventListener('DOMContentLoaded', documentEvents, false);
// takes in the stuff for the orginal text and the new text
var old;
var next;
var value = 1;
var preval;
var port = chrome.runtime.connect({ name: "dine" });
port.postMessage({ ask: "asking" });
port.onMessage.addListener(function (msg) {
    if (msg.send == "Value") {
        value = msg.val;
        document.getElementById("negate").value = (value == 1 ? "Enabled" : "Disabled");
    }
});
    function presetAction(askVal) {
        preval = askVal.value;
        port.postMessage({ setRay: "preset", setPre: preval });
        console.log("It sends");
        console.log(askVal);
    }
    function myAction(input, input2) {
    // error checking
        old = input.value; // orginal text
        next = input2.value;// updated text
        console.log(" input value is :" + old);
        console.log(" new input value is :" + next);
        port.postMessage({ setRay: "newValue", setOld: old, setNext: next }); 
}
// this does myAction when button is clicked
function documentEvents() {
    document.getElementById('button').addEventListener('click',
        function () {
            console.log("replaceform");
            myAction(document.getElementById('org'), document.getElementById('next'));

        });
    document.getElementById('negate').addEventListener('click',
        function () {
            port.postMessage({ changeVal: "change" });
            console.log("changed " + value);
            value = (value == 1 ? 0 : 1);

            //console.log(window.location.href);
            document.getElementById("negate").value = (value == 1 ? "Enabled" : "Disabled");
        });
    document.getElementById('clear').addEventListener('click',
        function () {
            port.postMessage({ clear: "clear" });
        });
    document.getElementById("presetButton").addEventListener('click',
        function () {
            console.log("preset");
            presetAction(document.getElementById('preset'));
        });
    document.getElementById("preWord").addEventListener('click',
        function () {
            console.log("addingpop");
            var a = document.getElementById('presetWord').value;
            var b = document.getElementById('presetList').value;
            port.postMessage({ addRay: "add", addWord: a, addList: b });
        });
    document.getElementById("debug").addEventListener('click',
        function(){
            port.postMessage({ debug: "asking" });
        });
    document.getElementById("refresh").addEventListener('click',
        function () {
            console.log("refreshing");
            port = chrome.runtime.connect({ name: "wine" });
            console.log(port);
            port.postMessage({ test: "testing" });
            port = chrome.runtime.connect({ name: "dine" });
            console.log(port);
            console.log("refreshed");
        });
}

