var os = window.navigator.platform;
var browser = window.navigator.appName;
var browserVer = window.navigator.appVersion;
var url = window.location.href;

document.getElementById('os').innerHTML = "Vaš operativni sistem je: "+os;
document.getElementById('browser').innerHTML = "Vaš browser je: "+browser+" ";
document.getElementById('url').innerHTML = "Trenutna adresa: "+url;
