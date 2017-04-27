// JavaScript source code
document.addEventListener('DOMContentLoaded', documentEvents, false);
// takes in the stuff for the orginal text and the new text
var old;
var next;
var value = 1;
var port = chrome.runtime.connect({ name: "dine" });
port.postMessage({ ask: "asking" });
port.onMessage.addListener(function (msg) {
    if (msg.send == "Value") {
        value = msg.val;
        document.getElementById("negate").value = (value == 1 ? "Enabled" : "Disabled");
    }
});
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
            myAction(document.getElementById('org'), document.getElementById('next'));

        });
    document.getElementById('negate').addEventListener('click',
        function () {
            port.postMessage({ changeVal: "change"});
            console.log("changed " + value);
            value = (value == 1 ? 0 : 1);

            //console.log(window.location.href);
            document.getElementById("negate").value = (value == 1 ? "Enabled" : "Disabled");
        });
    document.getElementById('clear').addEventListener('click',
        function () {
            port.postMessage({ clear: "clear" });
        });
    
}

