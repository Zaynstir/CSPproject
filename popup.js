// JavaScript source code
document.addEventListener('DOMContentLoaded', documentEvents, false);
// takes in the stuff for the orginal text and the new text
var old;
var next;
var port = chrome.runtime.connect({ name: "dine" });
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

}

