var change = 1;
var pw = "";
var un = "";
chrome.runtime.onConnect.addListener(function (port) {
    console.assert(port.name == "from");
    port.onMessage.addListener(function (msg) {
        if (msg.setForm == "canwe" && change == 1)
            port.postMessage({ question: "yes" });
        else if (msg.setForm == "neg") {
            change = 0;
        }
        else if (msg.setForm == "tri") {
            change = 2;
        }
        else if (msg.setForm == "pos") {
            change = 1;
        }
        else if (msg.setForm == "canwe" && change == 2){
            port.postMessage({ question: "triset" });}
        else if (msg.setForm == "inputs") {
            console.log("t1");
            port.postMessage({ question: "inputrec", questionu: un, questionp: pw });
            console.log("t2");
        }
        else if (msg.setForm == "setU") {
            //un = setFormU.user;
            //pw = setFormP.pass;
            un = msg.setFormU;
            console.log(un+"/ t3 /"+pw);
        }
        else if (msg.setForm == "setP") {
            //un = setFormU.user;
            //pw = setFormP.pass;
            pw = msg.setFormP;
            console.log(un + "/ t3 /" + pw);
        }
    });
});