function validacija() {
	
	if(document.forms[0].ime.value=='') {
		alert('Niste uneli ime!');
		document.forms[0].ime.focus();
		return false;
	}
	
	if(document.forms[0].prezime.value=='') {
		alert('Niste uneli prezime!');
		document.forms[0].prezime.focus();
		return false;
	}
	
	if(document.forms[0].email.value=='') {
		alert('Niste uneli email!');
		document.forms[0].email.focus();
		return false;
	}
	
	if(document.forms[0].email.value.indexOf('@')==-1) {
		alert('Email nije validan!');
		document.forms[0].email.focus();
		return false;
	}
	
	if(document.forms[0].poruka.value=='') {
		alert('Niste uneli poruku!');
		document.forms[0].poruka.focus();
		return false;
	}
}

function newsletter() {
	
	if(document.forms[0].email.value=='') {
		alert('Niste uneli email!');
		document.forms[0].email.focus();
		return false;
	}
	
	if(document.forms[0].email.value.indexOf('@')==-1) {
		alert('Email nije validan!');
		document.forms[0].email.focus();
		return false;
	}
	
	if(document.forms[0].tema[0].checked==false && document.forms[0].tema[1].checked==false && document.forms[0].tema[2].checked==false 
		&& document.forms[0].tema[3].checked==false) {
		alert('Morate da čekirate bar jednu opciju!');
	}
}

var pom = true;

function opcije(boxes) {
	
	if(pom==true) {
		for(i=0; i<boxes.length; i++) {
			boxes[i].checked = false;
		}
		pom = false;
		return "Označi sve";
	} else {
		for(i=0; i<boxes.length; i++) {
			boxes[i].checked = true;
		}
		pom = true;
		return "Obriši sve";
	}
}
