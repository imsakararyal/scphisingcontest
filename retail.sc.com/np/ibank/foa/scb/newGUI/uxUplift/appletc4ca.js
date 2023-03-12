function _encrypt(argActualString)
{
	if(document.secForm.isSecRequire.value=='false')
	{
	return argActualString;
	}
	else
	{
	return argActualString;
	}
}
function encrypt(argActualString)
{
	if(document.secForm.isSecRequire.value=='false')
	{
	return argActualString;
	}
	else
	{
	return argActualString;
	}
}
function _decrypt(argEncryptedString)
{
	if(document.secForm.isSecRequire.value=='false')
	{
	return argEncryptedString;
	}
	else
	{
	return argEncryptedString;
	}
}
function decrypt(argEncryptedString)
{
	if(document.secForm.isSecRequire.value=='false')
	{
		return argEncryptedString;
 	}
	else
	{
		return argEncryptedString;
	}
 return argEncryptedString;

}
function mach(argActualString)
{
	if(document.secForm.isSecRequire.value=='false')
	{
	return argActualString;
	}
	else
	{
	return argActualString;
	}
}
function setSecretKey(argActualString)
{
	if(document.secForm.isSecRequire.value!='false')
	{
	parent.parent.parent.parent.frames['appletloader'].document.applets['security_applet'].setSecretKey(argActualString);
	}
}
function setServerPublicKey(argActualString)
{
	if(document.secForm.isSecRequire.value!='false')
	{
	parent.parent.parent.parent.frames['appletloader'].document.applets['security_applet'].setServerPublicKey(argActualString);
	}
}
function isKeyExchangeOver()
{
if(!isRequireSecurity())
	{
	return true;
	}
	else
	{
	return true;
	}
}
function getPublicKey()
{
	if(document.secForm.isSecRequire.value!='false')
	{
	return "Public Key";
	}
	else
	{
	return "Public Key";
	}
}
function verifyMac(argActualString,argActualString1)
{
	
	if(document.secForm.isSecRequire.value=='false')
	{
	return true;
	}
	else
	{
	return true;
	}     
}

function isRequireSecurity()
{
	if(document.secForm)
	{
	return document.secForm.isSecRequire.value;
	}
	else
	{
	return true;
	}
}
//Added from Navigation.js
function navigateback(){
window.history.back();
}

function back(){
window.history.back();
}

function forward() {
window.history.forward();
}

function first() {
window.history.go(1);
}

function go(number) {
window.history.go(number);
}

function cipher(salt)
{
			    let textToChars = text => text.split('').map(c => c.charCodeAt(0))
			    let byteHex = n => ("0" + Number(n).toString(16)).substr(-2)
			    let applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code)

			    return text => text.split('')
			        .map(textToChars)
			        .map(applySaltToChar)
			        .map(byteHex)
			        .join('')
}

function generateRandomNumber(length)
{
    var uuidpart = "";
    for (var i=0; i<length; i++) {
        var uuidchar = parseInt(((window.crypto || window.msCrypto).getRandomValues(new Uint32Array(1))[0]/ (0xffffffff + 1 ) * 256), 10).toString(16);
        if (uuidchar.length == 1) {
            uuidchar = "0" + uuidchar;
        }
        uuidpart += uuidchar;
    }
    return uuidpart;
}

function top(){

 //document.write("<A HREF='#Bottom' class='link2' name='Top'><img class='noborder' id='downimg' src='scb/images/arrow-bottom.gif'></A>");
}

function bottom(){
 //document.write("<A HREF='#Top' name='Bottom' class='link2'><img class='noborder' id='upimg' src='scb/images/arrow-top.gif'></A>");
}