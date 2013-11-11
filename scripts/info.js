var os = window.navigator.platform;
var browser = window.navigator.appName;
var browserVer = window.navigator.appVersion;
var url = window.location.href;

var date = new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();

document.getElementById('date').innerHTML = "Danas je: "+day+"."+month+"."+year+".";
document.getElementById('os').innerHTML = "Vaš operativni sistem je: "+os;
document.getElementById('browser').innerHTML = "Vaš browser je: "+browser+" ";
document.getElementById('url').innerHTML = "Trenutna adresa: "+url;
