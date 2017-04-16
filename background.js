var change = 1;
var send = 0;
var pw = "Error_303";
var un = "Error_101";
var url = "http://www.google.com/";

chrome.runtime.onConnect.addListener(function (port) {
    console.assert(port.name == "Neo");
    port.onMessage.addListener(function (msg) {
        if (msg.setForm == "canwe" && change == 1) { 
        port.postMessage({ question: "yes" });
        console.log(url);
        }
        else if (msg.setForm == "neg") {
            change = 0;}
        else if (msg.setForm == "pos") {
            change = 1;
        }
        else if (msg.setForm == "setU") {
            un = msg.setFormU;
            console.log(un + "/ t3 /" + pw);
        }
        else if (msg.setForm == "setP") {
            pw = msg.setFormP;
            console.log(un + "/ t3 /" + pw);
        }
        else if (msg.setForm == "setURL") {
            url = msg.setFormURL;
        }
        else if (msg.setForm == "getURL") {
            port.postMessage({ question: "sendURL", questionRURL: url });
        }
        else if (msg.setForm == "sendinputs" && send == 0) {
            send = 1;
            console.log(send + " 1");
        }
        else if (msg.setForm == "inputs" && send == 1) {
                
                port.postMessage({ question: "inputrec", questionu: un, questionp: pw, questionurl: url });
                send = 0;
                console.log(send + " 0");
            }
        
    });
});
