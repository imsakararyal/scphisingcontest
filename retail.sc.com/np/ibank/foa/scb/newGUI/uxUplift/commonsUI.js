var printWin=false;
var idleCounter=0;
var idleTimer=0;
var idleWin="";
var clearTimerAfterLogout = false;
//var appContextPathWithIBank='/mesa-foa/foa';
//var appContextPath='/mesa-foa';

//MOB2Changes - Start
    if(typeof isMobile2 =="undefined")
    {
        try
        {
            var isMobile2 = false;
            isMobile2 = (navigator.userAgent.indexOf('SC-MOB2') !== -1);
            isMobile2TouchToken = "null";
        }
        catch(err){}
    }
    else
    {
        isMobile2TouchToken = "null";
    }
//MOB2Changes - End

function checkForNumber(val,field)
{	var dp = false;
	for (var i=0; i < val.length; i++)
	{
		if (!isDigit(val.charAt(i)))
		{
			if (val.charAt(i) == ' ')
			{
				alert("The "+field+" value cannot have blank spaces.");
				return false;
			}
			else
			if (val.charAt(i) == '.' && i==0)
			{
				alert("The "+field+" should atleast be one.");
				return false;
			}
			else
			if (val.charAt(i) == '.')
			{
				if (dp == true)
				{
					return false;
				}
				else
				{
					dp = true;
				}
			}


			else
			{


				alert("Please enter a numeric value only.");
				return false;
			}
		}
	}
	return true;
}

function checkForDecimal(val,field,curPre)
{	var dp = false;
	var decimalCount=0;

	for (var i=0; i < val.length; i++)
	{

		if(dp==true)
			decimalCount+=1;

		if(decimalCount>curPre)
		{
			alert("The "+field+" should have "+curPre+" Decimals only");
			return false;
		}

		if (!isDigit(val.charAt(i)))
		{

			if (val.charAt(i) == ' ')
			{
				alert("The "+field+" value cannot have blank spaces.");
				return false;
			}
			else
			if (val.charAt(i) == '.' && i==0)
			{
				alert("The "+field+" should atleast be one.");
				return false;
			}
			else
			if (val.charAt(i) == '.')
			{
				if (dp == true)
				{
					return false;
				}
				else
				{
					dp = true;
				}
			}




			else
			{
				alert("Please enter a numeric value only.");
				return false;
			}
		}
	}
	return true;
}

function checkForEmpty(val,field)
{
	if(val.charCodeAt(0)==48 && val.toString().length>1)
	{
		if((val.substr(1,1)==".") || (parseInt(val.substr(1,1))<=0))
		{
			alert("The "+field+" should atleast be one.");
			return false;
		}
	}
	else
	if(val.charCodeAt(0)==48)
	{
		alert("The "+field+" should atleast be one.");
		return false;
	}
	return true;
}


function disableDecimals(val,field)
{
	for (var i=0; i < val.length; i++)
	{
		if (!isDigit(val.charAt(i)))
		{
			if (val.charAt(i) == ' ')
			{
				alert("The "+field+" value cannot have blank spaces.");
				return false;
			}
			else
			if (val.charAt(i) == '.' && i==0)
			{
				alert("The "+field+" should atleast be one.");
				return false;
			}
			else
			if (val.charAt(i) == '.')
			{
				alert("Please enter the amount you wish to pay after rounding off any decimal points.");
				return false;
			}
			else
			{
				alert("Please enter a numeric value only.");
				return false;
			}
		}
	}
	return true;
}

function isDigit(num)
{	var string="1234567890";

	if (string.indexOf(num) != -1)
	{
		return true;
	}
		return false;
}

function errorInfo()
{
alert("The Amount Should Be Negative or Zero");
}


function checkForBlankPin(arg,initiala) {
//var initiala = " "+"!@#$%^&*()_+}{:><?\][/,=-";
var  frmTxt ;
var gt;
frmTxt=arg;
if(frmTxt.length==0)
{
alert("Pin  cannot  be blank");
 return false;
}
for(var j=0;j<frmTxt.length;j++)
{
 gt=  frmTxt.charAt(j);
for(var i=0;i<initiala.length;i++)
{
      if(gt.indexOf(initiala.charAt(i),0 )==0 )
      {
       alert("Pin  should not be blank or have special charaters.");
       return false;
       }
 }
 }
 return true;
}

function checkForBlank(arg,field) {
var initiala = " "+"!@#$%^&*()_+}{:><?\].[/,=-";
var  frmTxt ;
var gt;
frmTxt=arg;
if(frmTxt.length==0)
{
alert(field +" cannot  be blank");
 return false;
}
for(var j=0;j<frmTxt.length;j++)
{
 gt=  frmTxt.charAt(j);
for(var i=0;i<initiala.length;i++)
{
      if(gt.indexOf(initiala.charAt(i),0 )==0 )
      {
       alert(field+ " should not be blank or have special characters.");
       return false;
       }

 }
 }
 return true;
}


function checkDecimalForCurrency(textVal,paycur)
{

	var chrr = new String(textVal);
	var ind = chrr.indexOf(".",0)+1;
	var paycurr= new String(paycur);

		if(ind>0)
		{
			var ind1 = chrr.indexOf(".",ind);
			if(ind1<0)
			{

				var txtVal = chrr.substr(ind,(chrr.length)-ind);
				if(paycurr=='BHD'|| paycurr=='EGP'|| paycurr=='JOD' || paycurr=='KWD' || paycurr=='OMR' || paycurr=='TND' || paycurr=='XAU')
				{
				if(txtVal.length>3)
				{
					Uialert("Please verify payment amount, number of digits after decimal for this currency can be maximum three.");
					return false;
				}
				return true;
				}
				if(paycurr=='AAA' || paycurr=='BEF' || paycurr=='ESP' ||  paycurr=='GLD' || paycurr=='ITL' || paycurr=='JPY' )
				{
				if(txtVal.length>0)
				{
					Uialert("Please verify payment amount, number of digits after decimal for this payment currency is not allowed");
					return false;
				}
				return true;
				}
				else
				{
				if(txtVal.length>2)
				{
					Uialert("Please verify payment amount, number of digits after decimal for this currency can be maximum two.");
					return false;
				}
				}
			}
			else
			{
				Uialert("Please enter valid amount");
				return false;
			}
		}

	return true;
}

function checkDecimalForCurrency2(textVal,paycur)
{

	var chrr = new String(textVal);
	var ind = chrr.indexOf(".",0)+1;
	var paycurr= new String(paycur);
		if(ind>0)
		{
			var ind1 = chrr.indexOf(".",ind);
			if(ind1<0)
			{
				var txtVal = chrr.substr(ind,(chrr.length)-ind);
				if(txtVal.length>3)
				{
					alert("Please verify payment amount, number of digits after the decimal for this currency can be a maximum of three digits");
					return false;
				}

			}
			else
			{
				alert("Please enter valid amount");
				return false;
			}
		}

	return true;
}

function checkDecimalForCurrency1(textVal,paycur)
{

	var chrr = new String(textVal);
	var ind = chrr.indexOf(".",0)+1;
	var paycurr= new String(paycur);

		if(ind>0)
		{
			var ind1 = chrr.indexOf(".",ind);
			if(ind1<0)
			{

				var txtVal = chrr.substr(ind,(chrr.length)-ind);
				if(paycurr=='BHD'|| paycurr=='EGP'|| paycurr=='JOD' || paycurr=='KWD' || paycurr=='OMR' || paycurr=='TND' || paycurr=='XAU')
				{
				if(txtVal.length>3)
				{
					alert("Please verify payment amount, number of digits after decimal for this currency can be maximum three.");
					return false;
				}
				return true;
				}
				if(paycurr=='AAA' || paycurr=='BEF' || paycurr=='ESP' ||  paycurr=='GLD' || paycurr=='ITL' || paycurr=='JPY' )
				{
				if(txtVal.length>0)
				{
					alert("Please verify payment amount, number of digits after decimal for this payment currency is not allowed");
					return false;
				}
				return true;
				}
				else
				{
				if(txtVal.length>2)
				{
				alert("Please verify payment amount, number of digits after decimal for this currency should be a maximum of two.");

					return false;
					}
				}
			}
			else
			{
				alert("Please enter valid amount");
				return false;
			}
		}

	return true;
}

function checkForDecimal(textVal)
{


	var chrr = new String(textVal);
	var ind = chrr.indexOf(".",0)+1;

		if(ind>0)
		{

			var ind1 = chrr.indexOf(".",ind);
			if(ind1<0)
			{

				var txtVal = chrr.substr(ind,(chrr.length)-ind);

				if(txtVal.length>3)
				{
					alert("Please verify the number of digits after decimal for this currency.");
					return false;
				}
			}
			else
			{
				alert("Please enter valid amount");
				return false;
			}
		}

	return true;
}


function checkForDecimalWithCurrency(textVal,curncy)
{

	var decimalLength=0;

	if(curncy == "AED"){ decimalLength=2; }

	else if(curncy == "AAA"){ decimalLength=0; }
	else if(curncy == "ATS"){ decimalLength=2; }
	else if(curncy == "AUD"){ decimalLength=2; }
	else if(curncy == "BDT"){ decimalLength=2; }
	else if(curncy == "BEC"){ decimalLength=2; }
	else if(curncy == "BEF"){ decimalLength=0; }
	else if(curncy == "BHC"){ decimalLength=2; }
	else if(curncy == "BHD"){ decimalLength=3; }
	else if(curncy == "CAD"){ decimalLength=2; }
	else if(curncy == "CHF"){ decimalLength=2; }
	else if(curncy == "CYP"){ decimalLength=2; }
	else if(curncy == "DEM"){ decimalLength=2; }
	else if(curncy == "DKK"){ decimalLength=2; }
	else if(curncy == "EGP"){ decimalLength=3; }
	else if(curncy == "ESP"){ decimalLength=0; }
	else if(curncy == "EUR"){ decimalLength=2; }
	else if(curncy == "FRF"){ decimalLength=2; }
	else if(curncy == "GBP"){ decimalLength=2; }
	else if(curncy == "GLD"){ decimalLength=0; }
	else if(curncy == "GRD"){ decimalLength=2; }
	else if(curncy == "HKD"){ decimalLength=2; }
	else if(curncy == "IDR"){ decimalLength=2; }
	else if(curncy == "IEP"){ decimalLength=2; }
	else if(curncy == "INR"){ decimalLength=2; }
	else if(curncy == "ITL"){ decimalLength=0; }
	else if(curncy == "JOD"){ decimalLength=3; }
	else if(curncy == "JPY"){ decimalLength=0; }
	else if(curncy == "KES"){ decimalLength=2; }
	else if(curncy == "KWD"){ decimalLength=3; }
	else if(curncy == "LBP"){ decimalLength=2; }
	else if(curncy == "LKR"){ decimalLength=2; }
	else if(curncy == "MAD"){ decimalLength=2; }
	else if(curncy == "MUR"){ decimalLength=2; }
	else if(curncy == "MYR"){ decimalLength=2; }
	else if(curncy == "NLG"){ decimalLength=2; }
	else if(curncy == "NOK"){ decimalLength=2; }
	else if(curncy == "NZD"){ decimalLength=2; }
	else if(curncy == "OMR"){ decimalLength=3; }
	else if(curncy == "OTH"){ decimalLength=2; }
	else if(curncy == "PHP"){ decimalLength=2; }
	else if(curncy == "PKR"){ decimalLength=2; }
	else if(curncy == "PTE"){ decimalLength=2; }
	else if(curncy == "QAR"){ decimalLength=2; }
	else if(curncy == "SAR"){ decimalLength=2; }
	else if(curncy == "SEK"){ decimalLength=2; }
	else if(curncy == "SGD"){ decimalLength=2; }
	else if(curncy == "THB"){ decimalLength=2; }
	else if(curncy == "TND"){ decimalLength=3; }
	else if(curncy == "TRL"){ decimalLength=2; }
	else if(curncy == "TUR"){ decimalLength=2; }
	else if(curncy == "USC"){ decimalLength=2; }
	else if(curncy == "USD"){ decimalLength=2; }
	else if(curncy == "XAG"){ decimalLength=2; }
	else if(curncy == "XAU"){ decimalLength=3; }
	else if(curncy == "ZAR"){ decimalLength=2; }
	else if(curncy == "MWK"){ decimalLength=2; }
	else if(curncy == "NAD"){ decimalLength=2; }
	else if(curncy == "XCD"){ decimalLength=2; }
	else if(curncy == "XAF"){ decimalLength=2; }
	else if(curncy == "TZS"){ decimalLength=2; }
    else if(curncy == "VDN"){ decimalLength=2; }
	else {  decimalLength=2;  }


	var chrr = new String(textVal);
	var ind = chrr.indexOf(".",0)+1;

		if(ind>0)
		{

			var ind1 = chrr.indexOf(".",ind);
			if(ind1<0)
			{

				var txtVal = chrr.substr(ind,(chrr.length)-ind);

				if(txtVal.length > decimalLength)
				{
					alert("Please verify the number of digits after decimal for this currency.");
					return false;
				}
			}
			else
			{
				alert("Please enter valid amount");
				return false;
			}
		}

	return true;
}


function openNewInstance(url,title)
{
	var common = "location=no";
	common += ",toolbar=no";
	common += ",menubar=no";
	common += ",status=no";
	common += ",scrollbars=yes";
	common += ",hotkeys=no";
	common += ",resizable=yes";
	common += ",top=75";
	common += ",left=0";
	common += ",right=0";
	common += ",screenX=window.outerHeight/2";
	common += ",screenY=window.outerWidth/2";
	common += ",width=770";
	common += ",height=500";
		if (navigator.appVersion.indexOf("MSIE") != -1)
		{
		url=url;
		if(title=='View demo')
			{
			window.open(url);
			}
			else
		window.open(url,title,common);
		}
else {
             if(title=='View demo')
			{
			window.open(url);
			}
	       else
window.open(url,title,"directories=no,location=no,menubar=no,resizable=no,scrollbars=yes,personalBar=no,screenX=window.outerHeight/2,screenY=window.outerWidth/2,dependent=0,top=75,channelmode=0,width=770,height=500,dependent=0,status=yes,right=0,left=0");
}
}
function openNewInstance_PK(url,title)
{
	var common = "location=no";
	common += ",toolbar=no";
	common += ",menubar=no";
	common += ",status=no";
	common += ",scrollbars=yes";
	common += ",hotkeys=no";
	common += ",resizable=yes";
	common += ",top=75";
	common += ",left=0";
	common += ",right=0";
	common += ",screenX=window.outerHeight/2";
	common += ",screenY=window.outerWidth/2";
	common += ",width=770";
	common += ",height=500";
		if (navigator.appVersion.indexOf("MSIE") != -1)
		{
		url=url;
		window.open(url,title,common);
		}
else {
window.open(url,title,"directories=no,location=no,menubar=no,resizable=no,personalBar=no,screenX=window.outerHeight/2,screenY=window.outerWidth/2,dependent=0,top=75,channelmode=0,width=770,height=500,dependent=0,status=yes,right=0,left=0");
}
}

function newinDemo(url,title) {
var demo = "location=no";
demo += ",toolbar=no";
demo += ",menubar=no";
demo += ",status=no";
demo += ",scrollbars=no";
demo += ",hotkeys=no";
demo += ",resizable=no";
demo += ",top=75";
demo += ",left=0";
demo += ",width=770";
demo += ",height=570";
if (navigator.appVersion.indexOf("MSIE") != -1) {
url="https://www.online-banking.standardchartered.ae"+url;
window.open(url,title,demo);
}
else {
window.open(url,title,"directories=no,location=no,menubar=no,resizable=no,personalBar=no,screenX=window.outerHeight/2,screenY=window.outerWidth/2,dependent=0,top=75,channelmode=0,width=770,height=550,dependent=0,status=yes,right=0,left=0");
}
}



var strHelpOptions = "location=no";
strHelpOptions += ",toolbar=no";
strHelpOptions += ",menubar=no";
strHelpOptions += ",scrollbars=yes";
strHelpOptions += ",status=no";
strHelpOptions += ",resizable=no";
strHelpOptions += ",top=0";
strHelpOptions += ",left=0";
strHelpOptions += ",width=768";
strHelpOptions += ",height=550";

function showHelp(strUrl) {
window.open(strUrl, "Help", strHelpOptions);
}

function linkClick(screenName,mode) {
	visibleLinkProgress(screenName+'&mode='+mode,mode);
}

function linkClick_logout(screenName)
{
window.parent.parent.location=screenName;
}

function accountNormal(storeId) {
ss="";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/OnlineApplications?storeId="+storeId+"&langId=-1&typeNo=1'TARGET=workingarea>Application Forms</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF="+"javascript:showHelp('scb/help/account_services.htm')"+">Help</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'>&nbsp;<A HREF='scb/termsandconditions.doc' target=_blank>Terms and Conditions</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/contactus?storeId="+storeId+"&langId=-1&typeNo=13' TARGET=workingarea>Contact Us</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/SCBLogout?storeId="+storeId+"&langId=-1&cntry="+cntry+"&URL=../servlet/logthank?storeId="+storeId+"&langId=-1' TARGET='_parent'>Log Out</A><BR>";
return ss;
}
function fundNormal(storeId) {
ss="";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/OnlineApplications?storeId="+storeId+"&langId=-1&typeNo=1'TARGET=workingarea>Application Forms</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF="+"javascript:showHelp('scb/help/funds_transfer_and_payment.htm')"+">Help</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'>&nbsp;<A HREF='scb/termsandconditions.doc' target=_blank>Terms and Conditions</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/contactus?storeId="+storeId+"&langId=-1&typeNo=13' TARGET=workingarea>Contact Us</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/SCBLogout?storeId="+storeId+"&langId=-1&cntry="+cntry+"&URL=../servlet/logthank?storeId="+storeId+"&langId=-1' TARGET='_parent'>Log Out</A><BR>";
return ss;
}
function investNormal(storeId) {
ss="";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/OnlineApplications?storeId="+storeId+"&langId=-1&typeNo=1'TARGET=workingarea>Application Forms</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF="+"javascript:showHelp('scb/help/investment_services.htm')"+">Help</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'>&nbsp;<A HREF='scb/termsandconditions.doc' target=_blank>Terms and Conditions</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/contactus?storeId="+storeId+"&langId=-1&typeNo=13' TARGET=workingarea>Contact Us</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/SCBLogout?storeId="+storeId+"&langId=-1&cntry="+cntry+"&URL=../servlet/logthank?storeId="+storeId+"&langId=-1' TARGET='_parent'>Log Out</A><BR>";
return ss;
}
function cardNormal(storeId) {
ss="";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/OnlineApplications?storeId="+storeId+"&langId=-1&typeNo=1'TARGET=workingarea>Application Forms</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF="+"javascript:showHelp('scb/help/card_services.htm')"+">Help</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'>&nbsp;<A HREF='scb/termsandconditions.doc' target=_blank>Terms and Conditions</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/contactus?storeId="+storeId+"&langId=-1&typeNo=13' TARGET=workingarea>Contact Us</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/SCBLogout?storeId="+storeId+"&langId=-1&cntry="+cntry+"&URL=../servlet/logthank?storeId="+storeId+"&langId=-1' TARGET='_parent'>Log Out</A><BR>";
return ss;
}
function loanNormal(storeId) {
ss="";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/OnlineApplications?storeId="+storeId+"&langId=-1&typeNo=1'TARGET=workingarea>Application Forms</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF="+"javascript:showHelp('scb/help/loan_services.htm')"+">Help</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'>&nbsp;<A HREF='scb/termsandconditions.doc' target=_blank>Terms and Conditions</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/contactus?storeId="+storeId+"&langId=-1&typeNo=13' TARGET=workingarea>Contact Us</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/SCBLogout?storeId="+storeId+"&langId=-1&cntry="+cntry+"&URL=../servlet/logthank?storeId="+storeId+"&langId=-1' TARGET='_parent'>Log Out</A><BR>";
return ss;
}
function perNormal(storeId) {
ss="";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/OnlineApplications?storeId="+storeId+"&langId=-1&typeNo=1'TARGET=workingarea>Application Forms</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF="+"javascript:showHelp('scb/help/personal_updates.htm')"+">Help</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'>&nbsp;<A HREF='scb/termsandconditions.doc' target=_blank>Terms and Conditions</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/contactus?storeId="+storeId+"&langId=-1&typeNo=13' TARGET=workingarea>Contact Us</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/SCBLogout?storeId="+storeId+"&langId=-1&cntry="+cntry+"&URL=../servlet/logthank?storeId="+storeId+"&langId=-1' TARGET='_parent'>Log Out</A><BR>";
return ss;
}
function markNormal(storeId) {
ss="";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/OnlineApplications?storeId="+storeId+"&langId=-1&typeNo=1'TARGET=workingarea>Application Forms</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF="+"javascript:showHelp('scb/help/market_watch.htm')"+">Help</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'>&nbsp;<A HREF='scb/termsandconditions.doc' target=_blank>Terms and Conditions</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/contactus?storeId="+storeId+"&langId=-1&typeNo=13' TARGET=workingarea>Contact Us</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'><A HREF='../servlet/SCBLogout?storeId="+storeId+"&langId=-1&cntry="+cntry+"&URL=../servlet/logthank?storeId="+storeId+"&langId=-1' TARGET='_parent'>Log Out</A><BR>";
return ss;
}
function displayNormal(storeId,cntry) {
ss="";
ss+="<IMG SRC='scb/images/dot.jpg'>&nbsp;<A HREF='../servlet/OnlineApplications?storeId="+storeId+"&langId=-1&typeNo=1'TARGET=workingarea>Application Forms</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'>&nbsp;<A HREF="+"javascript:showHelp('scb/help/overview.htm')"+">Help</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'>&nbsp;<A HREF='scb/termsandconditions.doc' target=_blank>Terms and Conditions</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'>&nbsp;<A HREF='../servlet/contactus?storeId="+storeId+"&langId=-1&typeNo=13' TARGET=workingarea>Contact Us</A><BR>";
ss+="<IMG SRC='scb/images/dot.jpg'>&nbsp;<A HREF='../servlet/SCBLogout?storeId="+storeId+"&langId=-1&cntry="+cntry+"&URL=../servlet/logthank?storeId="+storeId+"&langId=-1' TARGET='_parent'>Log Out</A><BR>";
return ss;
}
function changeto(mycolor,mytext) {
source=event.srcElement
while(source.tagName!="TD")
source=source.parentElement
source.style.backgroundColor=mycolor;
source.style.color=mytext;
}

function movePageAccounts(storeId)
{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='0')
	{
	linkClick(appContextPathWithIBank+'?ser=1&act=AccountServices_AE','normal');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='1')
	{
	linkClick(appContextPathWithIBank+'?ser=1&act=OnlineApplications&langId=-1&typeNo=&prgId=p100','accountservices');
	}
	else
	{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value.indexOf("ser=1&act=8")!= '-1')
		{
		linkClick_logout(document.navigate.mList.options[document.navigate.mList.selectedIndex].value);
		}
	else
		{
		linkClick(document.navigate.mList.options[document.navigate.mList.selectedIndex].value,'accountservices');
		}
	}
}
function movePageCards(storeId)
{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='0')
	{
	linkClick(appContextPathWithIBank+'?ser=6&act=CardServices_AE','normal');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='1')
	{
	linkClick(appContextPathWithIBank+'?ser=6&act=OnlineApplications&typeNo=&prgId=p100','cardservices');
	}
	else
	{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value.indexOf("ser=1&act=8")!= '-1')
			{
			linkClick_logout(document.navigate.mList.options[document.navigate.mList.selectedIndex].value);
			}
		else
			{
			linkClick(document.navigate.mList.options[document.navigate.mList.selectedIndex].value,'cardservices');
		}
	}
}
function movePageFunds(storeId)
{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='0')
	{
	linkClick(appContextPathWithIBank+'?ser=3&act=FundsTransferAndPayment_AE','normal');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='1')
	{
	linkClick(appContextPathWithIBank+'?ser=3&act=OnlineApplications&typeNo=&prgId=p100','fundtransfer');
	}
	else
	{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value.indexOf("ser=1&act=8")!= '-1')
			{
			linkClick_logout(document.navigate.mList.options[document.navigate.mList.selectedIndex].value);
			}
		else
			{
			linkClick(document.navigate.mList.options[document.navigate.mList.selectedIndex].value,'fundtransfer');
		}
	}
}
function movePageinvest(storeId)
{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='0')
	{
	linkClick(appContextPathWithIBank+'?ser=5&act=InvestmentServices_AE','normal');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='1')
	{
	linkClick(appContextPathWithIBank+'?ser=5&act=OnlineApplications&typeNo=&prgId=p100','investmentservices');
	}
	else
	{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value.indexOf("ser=1&act=8")!= '-1')
			{
			linkClick_logout(document.navigate.mList.options[document.navigate.mList.selectedIndex].value);
			}
		else
			{
			linkClick(document.navigate.mList.options[document.navigate.mList.selectedIndex].value,'investmentservices');
		}
	}
}
function movePageLoans(storeId)
{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='0')
	{
	linkClick(appContextPathWithIBank+'?ser=7&act=LoanServices_AE','normal');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='1')
	{
	linkClick(appContextPathWithIBank+'?ser=7&act=OnlineApplications&typeNo=&prgId=p100','loanservices');
	}
	else
	{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value.indexOf("ser=1&act=8")!= '-1')
			{
			linkClick_logout(document.navigate.mList.options[document.navigate.mList.selectedIndex].value);
			}
		else
			{
			linkClick(document.navigate.mList.options[document.navigate.mList.selectedIndex].value,'loanservices');
		}
	}
}
function movePagePersonal(storeId)
{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='0')
	{
	linkClick(appContextPathWithIBank+'?ser=1&act=PersonalUpdate_AE','normal');
	}
	else
	{
	linkClick(document.navigate.mList.options[document.navigate.mList.selectedIndex].value,'personalupdate');

	}
}
function movePageMarket(storeId)
{

	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='0')
	{
	linkClick(appContextPathWithIBank+'?ser=8&act=MarketWatch_AE','normal');
	}
	else
	{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value.indexOf("ser=1&act=8")!= '-1')
			{
			linkClick_logout(document.navigate.mList.options[document.navigate.mList.selectedIndex].value);
			}
		else
			{
			linkClick(document.navigate.mList.options[document.navigate.mList.selectedIndex].value,'marketwatch');
		}
	}
}
function movePageUtilities(storeId)
{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='0')
	{
	linkClick(appContextPathWithIBank+'?ser=4&act=UtilityPayments_AE','normal');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='1')
	{
	linkClick(appContextPathWithIBank+'?ser=4&act=OnlineApplications&typeNo=&prgId=p100','utilpayment');
	}
	else
	{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value.indexOf("ser=1&act=8")!= '-1')
			{
			linkClick_logout(document.navigate.mList.options[document.navigate.mList.selectedIndex].value);
			}
		else
			{
			linkClick(document.navigate.mList.options[document.navigate.mList.selectedIndex].value,'utilpayment');
		}
	}
}
function linkClickSuccess(screenName,mode) {

if(parent.parent.SecReqcheck.document.secForm.PBCust.value=='YES')
{
parent.parent.frames['afterlogin'].document.location.href=appContextPathWithIBank+"?ser=1&act=PBNavigateDynamic&mode="+mode;
}
else
{
parent.parent.frames['afterlogin'].document.location.href=appContextPathWithIBank+"?ser=1&act=NavigateDynamic&mode="+mode;
}
parent.parent.frames['workingarea'].document.location.href=screenName;
}
function movePageAccountsInSuccess(url)
{
linkClickSuccess(url,'accountservices');
}

function movePageCardsInSuccess(url)
{
linkClickSuccess(url,'cardservices');
}
function movePageInvestInSuccess(url)
{
linkClickSuccess(url,'investmentservices');
}

function movePageLoansInSuccess(url)
{
linkClickSuccess(url,'loanservices');
}
function movePageAccountServices(storeId,cntry)
{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='0')
	{
	linkClick(appContextPathWithIBank+'?ser=1&act=AccountServices_'+cntry+'','normal');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='1')
	{
	linkClick(appContextPathWithIBank+'?ser=1&act=OnlineApplications&typeNo=&prgId=p100','accountservices');
	}


	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value.indexOf("ser=1&act=8")!= '-1')
	{
	linkClick_logout(document.navigate.mList.options[document.navigate.mList.selectedIndex].value);
	}
	else
	{
	linkClick(document.navigate.mList.options[document.navigate.mList.selectedIndex].value,'accountservices');
	}
}
function movePageCardServices(storeId,cntry)
{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='0')
	{
	linkClick(appContextPathWithIBank+'?ser=6&act=CardServices_'+cntry+'','normal');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='1')
	{
	linkClick(appContextPathWithIBank+'?ser=6&act=OnlineApplications&typeNo=&prgId=p100','cardservices');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value.indexOf("ser=1&act=8")!= '-1')
		{
		linkClick_logout(document.navigate.mList.options[document.navigate.mList.selectedIndex].value);
	}
	else
	{
	linkClick(document.navigate.mList.options[document.navigate.mList.selectedIndex].value,'cardservices');
	}
}
function movePageFundsTransferAndPayment(storeId,cntry)
{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='0')
	{
	linkClick(appContextPathWithIBank+'?ser=3&act=FundsTransferAndPayment_'+cntry+'','normal');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='1')
	{
	linkClick(appContextPathWithIBank+'?ser=3&act=OnlineApplications&langId=-1&typeNo=&prgId=p100','fundtransfer');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value.indexOf("ser=1&act=8")!= '-1')
		{
		linkClick_logout(document.navigate.mList.options[document.navigate.mList.selectedIndex].value);
	}
	else
	{
	linkClick(document.navigate.mList.options[document.navigate.mList.selectedIndex].value,'fundtransfer');
	}
}
function movePageInvestmentServices(storeId,cntry)
{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='0')
	{
	linkClick(appContextPathWithIBank+'?ser=5&act=InvestmentServices_'+cntry+'','normal');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='1')
	{
	linkClick(appContextPathWithIBank+'?ser=5&act=OnlineApplications&langId=-1&typeNo=&prgId=p100','investmentservices');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value.indexOf("ser=1&act=8")!= '-1')
		{
		linkClick_logout(document.navigate.mList.options[document.navigate.mList.selectedIndex].value);
	}
	else
	{
	linkClick(document.navigate.mList.options[document.navigate.mList.selectedIndex].value,'investmentservices');
	}
}
function movePageLoanServices(storeId,cntry)
{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='0')
	{
	linkClick(appContextPathWithIBank+'?ser=7&act=LoanServices_'+cntry+'','normal');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='1')
	{
	linkClick(appContextPathWithIBank+'?ser=7&act=OnlineApplications&langId=-1&typeNo=&prgId=p100','loanservices');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value.indexOf("ser=1&act=8")!= '-1')
		{
		linkClick_logout(document.navigate.mList.options[document.navigate.mList.selectedIndex].value);
	}
	else
	{
	linkClick(document.navigate.mList.options[document.navigate.mList.selectedIndex].value,'loanservices');
	}
}

function movePagePersonalUpdate(storeId,cntry)
{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='0')
	{
	linkClick(appContextPathWithIBank+'?ser=1&act=PersonalUpdate_'+cntry+'','normal');
	}
	else
	{
	linkClick(document.navigate.mList.options[document.navigate.mList.selectedIndex].value,'personalupdate');
	}
}
function movePageMarketWatch(storeId,cntry)
{

	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='0')
	{
	linkClick(appContextPathWithIBank+'?ser=8&act=MarketWatch_'+cntry+'','normal');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value.indexOf("ser=1&act=8")!= '-1')
		{
		linkClick_logout(document.navigate.mList.options[document.navigate.mList.selectedIndex].value);
	}
	else
	{
	linkClick(document.navigate.mList.options[document.navigate.mList.selectedIndex].value,'marketwatch');
	}
}
function movePageUtilityPayments(storeId,cntry)
{
	if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='0')
	{
	linkClick(appContextPathWithIBank+'?ser=4&act=UtilityPayments_'+cntry+'','normal');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value =='1')
	{
	linkClick(appContextPathWithIBank+'?ser=4&act=OnlineApplications&langId=-1&typeNo=&prgId=p100','utilpayment');
	}
	else if(document.navigate.mList.options[document.navigate.mList.selectedIndex].value.indexOf("ser=1&act=8")!= '-1')
		{
		linkClick_logout(document.navigate.mList.options[document.navigate.mList.selectedIndex].value);
	}
	else
	{
	linkClick(document.navigate.mList.options[document.navigate.mList.selectedIndex].value,'utilpayment');
	}
}




//var message = "Feature Disabled";
var message = "";
var popmessage = "This action is not required";
var bolEnable=true;

function showStatus()
{
	window.status="Welcome to Standard Chartered Online Banking";
}
function disableActionOnText(frmInd,url,textName,uniqName)
{

var forRLS='';
	if (navigator.appVersion.indexOf("MSIE") != -1)
	{
		forRLS=forRLS+'<DIV ID=\"'+uniqName+'\" Style="{display:none}">';
		if(frmInd==0)
		{
			forRLS=forRLS+"<IMG SRC='scb/images/dot.gif'>&nbsp;&nbsp;";
			forRLS=forRLS+"<A class='applink' HREF=\""+url+"\" onclick=\"disableActionOnSubmit("+frmInd+",'"+uniqName+"','"+uniqName+"',"+1+")\" onMouseOver=\"showStatus(); return true;\" onMouseOut=\"showStatus(); return true;\">"+textName+"<"+"/"+"A>";
		}
		else
		{
			forRLS=forRLS+"<A class='applink' HREF=\""+url+"\" onclick=\"disableActionOnSubmit("+frmInd+",'"+uniqName+"','"+uniqName+"',"+1+")\" onMouseOver=\"showStatus(); return true;\" onMouseOut=\"showStatus(); return true;\">"+textName+"<"+"/"+"A>";
		}
		forRLS=forRLS+"<"+"/"+"DIV"+">";
		forRLS=forRLS+'<DIV ID=\"'+uniqName+'15\" Style="{display:none}">';
		if(frmInd==0)
		{
			forRLS=forRLS+"<IMG SRC='scb/images/dot.gif'>&nbsp;&nbsp;";
		}
			forRLS=forRLS+"<A class='applink'>"+textName+"<"+"/"+"A>";
			forRLS=forRLS+"<"+"/"+"DIV"+">";

		//eval("document.all."+uniqName+".style.display=''");
	}
	else
	{
		if(frmInd==0)
		{
			forRLS=forRLS+"<IMG SRC='scb/images/dot.gif'>&nbsp;&nbsp;";
		}
		forRLS=forRLS+"<A class='applink' HREF=\""+url+"\">"+textName+"<"+"/"+"A>";
	}
	$("#loanAccountNumber").html(forRLS);

}

function disableActionOn(frmInd,url,gifName)
{
	var altName=gifName.toString().substring(0,gifName.toString().length-4);

	if (navigator.appVersion.indexOf("MSIE") != -1)
	{
		document.write('<DIV ID=\"'+altName+'\" Style="{display:none}">');
		document.write("<A HREF='#'><"+"/"+"A>");
		document.write("<A HREF='javascript:disableActionOnSubmit("+frmInd+",\""+altName+"\",\""+url+"\","+0+")' onMouseOver=\"showStatus(); return true;\" onMouseOut=\"showStatus(); return true;\"><IMG SRC='scb/images/"+gifName+"' BORDER=0 ALT="+altName+"><"+"/"+"A>");
		document.write("<"+"/"+"DIV"+">");

		document.write('<DIV ID=\"'+altName+'2\" Style="{display:none}">');
		document.write("<A HREF='#'><"+"/"+"A>");
		document.write("<A><IMG SRC='scb/images/"+gifName+"' ID='cnfImg' BORDER=0 ALT="+altName+" onMouseOver=\"showStatus(); return true;\" onMouseOut=\"showStatus(); return true;\"><"+"/"+"A>");
		document.write("<"+"/"+"DIV"+">");

		eval("document.all."+altName+".style.display=''");
	}
	else
	{
		document.write("<A HREF='javascript:disableActionOnSubmit("+frmInd+",\""+altName+"\",\""+url+"\","+0+")'><IMG SRC='scb/images/"+gifName+"' BORDER=0 ALT="+altName+" ><"+"/"+"A>");
	}
}
function PBdisableActionOn(frmInd,url,gifName)
{
	var altName=gifName.toString().substring(0,gifName.toString().length-4);
		document.write("<DIV ID="+altName+" Style={display:''}>");
		document.write("<input type=button class=btn value="+altName+" onClick='javascript:PBdisableActionOnSubmit("+frmInd+",\""+altName+"\",\""+url+"\","+0+")'>");
		document.write("</DIV>");
		document.write("<DIV ID="+altName+"2 Style={display:none}>");
		document.write("<input type=button class=disbtn value="+altName+">");
		document.write("</DIV>");
		eval("document.all."+altName+".style.display=''");
}
function PBdisableActionOnSubmit(frmInd,divFlag,url,flag)
{
	if (navigator.appVersion.indexOf("MSIE") != -1)
	{
			eval("document.all."+divFlag+".style.display='none'");
			divFlag=divFlag+"2";
			eval("document.all."+divFlag+".style.display=''");
	}
	if(flag==0)
	{

		this.document.forms[frmInd].action=url;
		this.document.forms[frmInd].submit(this.document.forms[frmInd]);
	}
}
function disableActionOnSubmit(frmInd,divFlag,url,flag)
{
	if (navigator.appVersion.indexOf("MSIE") != -1)
	{
		eval("document.all."+divFlag+".style.display='none'");
		divFlag=divFlag+"2";
		eval("document.all."+divFlag+".style.display=''");
	}
	if(flag==0)
	{
		if (navigator.appVersion.indexOf("MSIE") != -1)
		{
			this.document.all("cnfImg").style.cursor="wait";
		}
		this.document.forms[frmInd].action=url;
	}
}
function newinDemo(url,title)
{
var demo = "location=no";
demo += ",toolbar=no";
demo += ",menubar=no";
demo += ",status=no";
demo += ",scrollbars=no";
demo += ",hotkeys=no";
demo += ",resizable=no";
demo += ",top=0";
demo += ",left=0";
demo += ",width=778";
demo += ",height=570";
if (navigator.appVersion.indexOf("MSIE") != -1) {
window.open(url,title,demo);
}
else {
window.open(url,title,"directories=no,location=no,menubar=no,resizable=no,personalBar=no,screenX=window.outerHeight/2,screenY=window.outerWidth/2,dependent=0,top=0,channelmode=0,width=768,height=550,dependent=0,status=yes,top=0,right=0,left=0");
}
}

function rtclickcheck(keyp) {
	if (navigator.appName == "Netscape" && keyp.which == 3) {
	//alert(message);
	return false;
	}
	else if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) {
	//alert(message);
	return false;
	}
	if(document.keyCode == 93) {
	//alert(message);
	return false;
	}
}
function document_onkeydown() {

	if (navigator.appName == "Netscape" && keyp.which == 3) {

	}
	else if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) {

		if(event.keyCode == 93) {
		//alert(message);
		}
	}
}

if(document.layers) {
document.captureEvents(Event.MOUSEDOWN);
document.captureEvents(Event.KEYDOWN);
}
function clicks(doc) {
window.status="Welcome to Standard Chartered Online Banking";
if(navigator.appName.indexOf("Netscape")!=-1) {
document.alinkColor='#0000FF';
document.vlinkColor='#068701';
document.linkColor='#01269E';
}
doc.onmousedown = rtclickcheck;
doc.onkeydown=document_onkeydown;

document.onkeydown  = showDown;

document.onreadystatechange = processing;
var waitState=true;
}
/*********Disable mouse right click option for Fixes -FF,IE **********************/
function clickIE()
{
 if (document.all)
{(message);return false;}}

function clickNS(e) {

if
(document.layers||(document.getElementById&&!document.all))
{
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers)
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else
{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
//document.oncontextmenu=new Function("alert('Feature Disabled');return false")
document.oncontextmenu=new Function("return false")
/***********************************************************************/
function processing() {
var i;
if(document.readyState == "loading")

	for(i=0;i<parent.document.frames.length;i++)
	{
		parent.document.getElementById(parent.document.frames[i].name).style.cursor="wait";
	}
}
function logout(cntry)
{
	window.open("scb/logout"+cntry+".html","WelcometoInternetBanking","directories=no,location=no,menubar=no,resizable=yes,personalBar=no,screenX=window.outerHeight,screenY=window.outerWidth,dependent=0,top=0,channelmode=0,width=800,height=600,left=0,right=0,dependent=0,status=yes");
	self.close();
}
function mouseclik() {
	if (navigator.appName == "Netscape" && keyp.which == 3) {

	}
	else if(event.shiftKey == true || event.button==1) {
	alert(popmessage);
	return false;
	}
}
function imageDynamic(arg) {
document.images[arg].src='dotchange.jpg';
}
function imageStatic(arg) {
document.images[arg].src='dot.jpg';
}
function newinPromotion() {
var promotions = "location=no";
promotions += ",toolbar=no";
promotions += ",menubar=no";
promotions += ",status=no";
promotions += ",scrollbars=no";
promotions += ",hotkeys=no";
promotions += ",resizable=no";
promotions += ",top=0";
promotions += ",left=0";
promotions += ",width=266";
promotions += ",height=370";
var promoUrl="../servlet/headlines?storeId=10001&langId=-1";
window.open(promoUrl, "Promotions", promotions);
}
function showDown() {
        var evt = (evt) ? evt : ((event) ? event : null);
        if (evt) {
            if (event.keyCode == 8 && (event.srcElement.type != "text" && event.srcElement.type != "textarea" && event.srcElement.type != "password")) {
                cancelKey(evt);
            }
            else if (event.keyCode == 116) {
                cancelKey(evt);
            }
	    else if (event.keyCode == 122) {
                cancelKey(evt);
            }
            else if (event.ctrlKey && (event.keyCode == 78 || event.keyCode == 82)) {
                cancelKey(evt);
            }
        }
    }

    function cancelKey(evt) {
        if (evt.preventDefault) {
            evt.preventDefault();
            return false;
        }
        else {
            evt.keyCode = 0;
            evt.returnValue = false;
        }
    }

function forceUser(myUrl,loginId)
{
	var agree = confirm("Do you want to change your user id ?");

	if(agree){ forceUserIdChange(myUrl,loginId); }
}

function forceUserIdChange(forceUserUrl,loginId) {
alert("ff : " + forceUserUrl);
var forceUser = "location=no";
forceUser += ",toolbar=no";
forceUser += ",menubar=no";
forceUser += ",status=no";
forceUser += ",scrollbars=no";
forceUser += ",hotkeys=no";
forceUser += ",resizable=no";
forceUser += ",top=350";
forceUser += ",left=400";
forceUser += ",width=600";
forceUser += ",height=450";

forceUserUrl = forceUserUrl+"&fUserID="+loginId;
alert(forceUserUrl);

window.open(forceUserUrl, "UserIdChange", forceUser);

}
var offsetxpoint=-60
var offsetypoint=20
var ie=document.all
var ns6=document.getElementById && !document.all
var enabletip=false
if (ie||ns6)
var tipobj=document.all? document.all["LoadingMsg"] : document.getElementById? document.getElementById("LoadingMsg") : ""

function ietruebody(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}
function visibleMessage(thetext, thecolor, thewidth)
{
	if(thetext!="")
			{
				showToolTip(thetext, thecolor, thewidth);
			}
}
function showToolTip(thetext, thecolor, thewidth){
if (ns6||ie){
if (typeof thewidth!="undefined") tipobj.style.width=thewidth+"px"
if (typeof thecolor!="undefined" && thecolor!="") tipobj.style.backgroundColor=thecolor
tipobj.innerHTML=thetext
enabletip=true
positiontip(event);
return false
}
}
function positiontip(e){
if (enabletip){
var curX=(ns6)?e.pageX : event.clientX+ietruebody().scrollLeft;
var curY=(ns6)?e.pageY : event.clientY+ietruebody().scrollTop;
var rightedge=ie&&!window.opera? ietruebody().clientWidth-event.clientX-offsetxpoint : window.innerWidth-e.clientX-offsetxpoint-20
var bottomedge=ie&&!window.opera? ietruebody().clientHeight-event.clientY-offsetypoint : window.innerHeight-e.clientY-offsetypoint-20

var leftedge=(offsetxpoint<0)? offsetxpoint*(-1) : -1000

if (rightedge<tipobj.offsetWidth)
tipobj.style.left=ie? ietruebody().scrollLeft+event.clientX-tipobj.offsetWidth+"px" : window.pageXOffset+e.clientX-tipobj.offsetWidth+"px"
else if (curX<leftedge)
tipobj.style.left="5px"
else
tipobj.style.left=curX+offsetxpoint+"px"

if (bottomedge<tipobj.offsetHeight)
tipobj.style.top=ie? ietruebody().scrollTop+event.clientY-tipobj.offsetHeight-offsetypoint+"px" : window.pageYOffset+e.clientY-tipobj.offsetHeight-offsetypoint+"px"
else
tipobj.style.top=curY+offsetypoint+"px"
tipobj.style.visibility="visible"
}
}

function hideMessage(){
if (ns6||ie){
enabletip=false
tipobj.style.visibility="hidden"
tipobj.style.left="-1000px"
tipobj.style.backgroundColor=''
tipobj.style.width=''
}
}
function getSelectedDateRange(day,month,year,eDay,eMonth,eYear,dd,mm,yy,startYYYY,endYYYY,edd,emm)
{
	document.write('<tabel border=0><tr><td><Label><b> FROM </b></Label></td>');
	document.write('<td><SELECT NAME='+day+'>');
	document.write("<OPTION VALUE='DD'>DD</OPTION>");

	var dt='';
	for(var i=1;i<=31;i++)
	{
		if(i<10) { dt = '0' + i; }else { dt = i; }
		if(i==dd)
		{
			document.write('<OPTION VALUE='+dt+' SELECTED>'+dt+'</OPTION>');
		}
		else
		{
			document.write('<OPTION VALUE='+dt+'>'+dt+'</OPTION>');
		}
	}
	document.write('</SELECT> &nbsp;');

	document.write('<SELECT NAME='+month+' onChange=changeMonth(document.forms[0].'+day+',document.forms[0].'+month+',document.forms[0].'+year+')>');
	document.write("<OPTION VALUE='MM'>MM</OPTION>");
	var mnt = '';
	for(var i=1;i<13;i++)
	{
		if(i<10) { mnt = '0' + i; }
		    else { mnt = i; }
		if(i==mm)
		{
			document.write('<OPTION VALUE='+mnt+' SELECTED>'+mnt+'</OPTION>');

		}
		else
		{
			document.write('<OPTION VALUE='+mnt+'>'+mnt+'</OPTION>');
		}
	}
	document.write('</SELECT> &nbsp;');

	var yy1='';
	document.write('<SELECT NAME='+year+' onChange=changeMonth(document.forms[0].'+day+',document.forms[0].'+month+',document.forms[0].'+year+')>');
	document.write("<OPTION VALUE='YYYY'>YYYY</OPTION>");

	for(var i=startYYYY-1;i<=startYYYY;i++)
	{
		if(i==yy)
		{

		document.write('<OPTION VALUE='+i+' SELECTED>'+i+'</OPTION>');

		}
		else
		{
		document.write('<OPTION VALUE='+i+'>'+i+'</OPTION>');
		}
	}
	document.write('</SELECT> &nbsp; &nbsp;</td>');
	document.write('<td><Label><b> TO</b> </Label></td>');
	document.write('<td><SELECT NAME='+eDay+'>');
	document.write("<OPTION VALUE='DD'>DD</OPTION>");
	var dt='';
	for(var i=1;i<=31;i++)
	{
		if(i<10) { dt = '0' + i; }else { dt = i; }

		if(i==edd)
		{
			document.write('<OPTION VALUE='+dt+' SELECTED>'+dt+'</OPTION>');
		}
		else
		{
			document.write('<OPTION VALUE='+dt+'>'+dt+'</OPTION>');
		}
	}
	document.write('</SELECT> &nbsp;');
	document.write('<SELECT NAME='+eMonth+'>');
	document.write("<OPTION VALUE='MM'>MM</OPTION>")
	var mnt = '';
	for(var i=1;i<13;i++)
	{
		if(i<10) { mnt = '0' + i; }else { mnt = i; }

		if(i==emm)
		{
			document.write('<OPTION VALUE='+mnt+' SELECTED>'+mnt+'</OPTION>');
		}
		else
		{
			document.write('<OPTION VALUE='+mnt+'>'+mnt+'</OPTION>');
		 }
	}
	document.write('</SELECT> &nbsp;');
	document.write('<SELECT NAME='+eYear+' onChange=changeMonth(document.forms[0].'+eDay+',document.forms[0].'+eMonth+',document.forms[0].'+eYear+')>');
	document.write("<OPTION VALUE='YYYY'>YYYY</OPTION>");
	for(var i=endYYYY-1;i<=endYYYY;i++)
	{		/*if(i==eYY)
				{

				document.write('<OPTION VALUE='+i+' SELECTED>'+i+'</OPTION>');

				}
				else
				{
				document.write('<OPTION VALUE='+i+'>'+i+'</OPTION>');
		}*/
		if(i==endYYYY)
		{
			document.write('<OPTION VALUE='+(i)+' SELECTED>'+(i)+'</OPTION>');

		}
		else
		{
			document.write('<OPTION VALUE='+(i)+'>'+(i)+'</OPTION>');

		}
	}
	document.write('</SELECT> &nbsp; &nbsp;</td>');
}

function searchField(rno)
{
	document.write('<TD align = center><Label><b><FONT  COLOR="#317EDD"> Search</FONT></b></Label></TD>');
	document.write('<TD  align = center><Label>  <b>&nbsp;&nbsp; Relationship No </b></Label></TD><TD><INPUT  TYPE=text  MaxLength =11 NAME=relNo value='+rno+'> </INPUT></TD>');
}

function nextData(frm,url,report)
{
	if(trim(frm.relNo.value)=="")
	{
		alert ("Relationship Field Cannot Be Blank");
	}
	else if(trim(url)=="")
	{
		showerror();
	}
	else
	{
		l= url;
		arr=l.split("&");
		frm.rDay.value=arr[0];
		frm.rMonth.value=arr[1];
		frm.rYear.value=arr[2];

		frm.rDay2.value=arr[3];
		frm.rMonth2.value=arr[4];
		frm.rYear2.value=arr[5];
		frm.searchFlag.value=frm.relNo.value;
		frm.currentRec.value='next';
		frm.ser.value='10';
		frm.act.value=report;
		frm.action=appContextPathWithIBank;
		frm.submit(frm);
	}
}
/*function compareDatesNew(day,month,year)
{
   var currentTime = new Date();
   var dt1   = day;
   var mon1  = month;
   var yr1   = year;
   var curdate  = currentTime.getDate();
   var curmonth = currentTime.getMonth()+1;
   var curyear  = currentTime.getFullYear();
   var diffDate = ((curyear-yr1)*12)+(curmonth-mon1);

   if(diffDate > 4)
	{
	   return false;
	}
	else if ((diffDate == 0) || (diffDate == 4))
	{
		if(curdate > dt1)
		{
		   return false;
		}
		else
		{
		   return true;
		}
	}
	else if (diffDate < 0)
	{
		return false;
	}
    else
	{
	   return true;
	}
}*/
function compareDatesNew(sday,smonth,syear,eday,emonth,eyear)
{
   var currentTime = new Date();
   var dt1   = sday;
   var mon1  = smonth;
   var yr1   = syear;
   var dt2   = eday;
   var mon2  = emonth;
   var yr2   = eyear;
   var curdate  = currentTime.getDate();
   var curmonth = currentTime.getMonth()+1;
   var curyear  = currentTime.getFullYear();
   var diffDate = ((yr2-yr1)*12)+(mon2-mon1);
   var diDate = (dt2-dt1);


   if((dt2 > curdate) && (mon2 == curmonth))
     	 {
     	   alert("look for proper end date");
  	 }

   if(diffDate > 1 )
	{
	   alert("Report cannot be generated for more than previous 4 months");

	}
	if (diffDate == 0)
	{
	     if(dt2-dt1 >= 0 )
			{return true;}
		else
		{
			alert("Look for the proper end date");
		}
	}
	if ( (diffDate >= 0 ) &&  ( diffDate < 4 ))
	{
		return true;
	}
	if (diffDate < 0)
	{
		alert("End Date cannot be before start Date");
	}
	if(dt2>curdate )
	   	{
	   		alert("End day cannot be greater than current day");
	}
}

function checkDateRange(frm,day,mon,year,report)
{
	sday=frm.SDay.options[frm.SDay.selectedIndex].text;
	smonth=frm.SMonth.options[frm.SMonth.selectedIndex].text;
	syear=frm.SYear.options[frm.SYear.selectedIndex].text;
	eday=frm.EDay.options[frm.EDay.selectedIndex].text;
	emonth=frm.EMonth.options[frm.EMonth.selectedIndex].text;
	eyear=frm.EYear.options[frm.EYear.selectedIndex].text;
	var Jan=31;
	var Feb=29;
	var Mar=31;
	var Apr=30;
	var May=31;
	var Jun=30;
	var Jul=31;
	var Aug=31;
	var Sep=30;
	var Oct=31;
	var Nov=30;
	var Dec=31;
	var months_short = new Array('31','29','31','30','31','30','31','31','30','31','30','31')
	var smn = months_short[smonth-1]
	var emn = months_short[emonth-1]
	var currentTime = new Date();
  	var curdate  = currentTime.getDate();
 	var curmonth = currentTime.getMonth()+1;
   	var curyear  = currentTime.getFullYear();
  	var dt1   = sday;
   	var mon1  = smonth;
   	var yr1   = syear;
   	var dt2   = eday;
   	var mon2  = emonth;
   	var yr2   = eyear;
	var diffDate = ((yr2-yr1)*12)+(mon2-mon1);
	var dtDiff=dt2-dt1;
	var ddm= ((yr2-yr1)*12)+((mon2-mon1)*30)+(dt2-dt1);
	var curd=curmonth-mon1;

	if(sday=="DD" || smonth=="MM" || syear=="YYYY")
	{
		alert("Please select a valid start date");

	}
	else if(eday=="DD" || emonth=="MM" || eyear=="YYYY")
	{
		alert("Please select a valid end date");
	}
	else if (diffDate == 0 && dt2-dt1 < 0)
	{
	  	alert("Look for the proper end date");
	}
	else if (smn< dt1 || emn < dt2)
	{
		alert("Month doent have that date");
	}
	else if (diffDate < 0)
	{
		alert("End Date cannot be before start Date");
	}
	else if(dt2>curdate )
	{
	   	alert("End day cannot be greater than current day");
	}
	else if(ddm > 1)
	{
		alert("Report cannot be generated for more than 2 days");
	}
	else if(diffDate > 3 || curd > 3 )
	{
		alert("Report cannot be generated for more than previous 3 months from current date");
	}
    else if (validateDate(sday,smonth,syear,eday,emonth,eyear)==false)
	{
		alert("End Date cannot be before Start Date");
	}
	else
	{
		frm.rDay.value=sday;
		frm.rMonth.value=smonth;
		frm.rYear.value=syear;

		frm.rDay2.value=eday;
		frm.rMonth2.value=emonth;
		frm.rYear2.value=eyear;
		frm.ser.value='10';
		frm.act.value=report;

		frm.action=appContextPathWithIBank+"?rMonth="+smonth+"&rDay="+sday+"&rYear="+syear;
		frm.submit(frm);
	}

}
function downLoadReport(frm,date,report)
{
	var wind=window.open(appContextPath+"/Downloader?stmtVal="+report+"&date="+date,"","");
}

function checkDateRange_Cust(frm,day,mon,year,report)
{

          var currentTime = new Date();
	 sday=frm.SDay.options[frm.SDay.selectedIndex].text;
	 smonth=frm.SMonth.options[frm.SMonth.selectedIndex].text;
	 syear=frm.SYear.options[frm.SYear.selectedIndex].text;

	 eday=frm.EDay.options[frm.EDay.selectedIndex].text;
	 emonth=frm.EMonth.options[frm.EMonth.selectedIndex].text;
	 eyear=frm.EYear.options[frm.EYear.selectedIndex].text;
	 var twoMonth = ((eyear-syear)*12)+(emonth-smonth);
	 var diffDate = ((eyear-syear)*12)+(emonth-smonth)+(eday-sday);
	 var curdate  = currentTime.getDate();
	  var curmonth = currentTime.getMonth()+1;
  	 var curyear  = currentTime.getFullYear();

	if(sday=="DD" || smonth=="MM" || syear=="YYYY")
	{
		alert("Please select a valid start date");
	}
	else if(eday=="DD" || emonth=="MM" || eyear=="YYYY")
	{
		alert("Please select a valid end date");
	}
	/*else if(compareDatesNew(sday,smonth,syear)==false)
	{
		alert("Start Date Cannot be Prior to 4 Months from Current Month");
		return false;
	}
	else if(compareDatesNew(eday,emonth,eyear)==false)
	{
		alert("End Date Cannot be Prior to 4 Months from Current Month");
		return false;
	}*/
	else if(compareDatesNew(sday,smonth,syear,eday,emonth,eyear)==false)
	{
		return false;
	}
	else if (validateDate(sday,smonth,syear,eday,emonth,eyear)==false)
	{
		alert("End Date cannot be before Start Date");
	}
	/*
	else if ((smonth != emonth ) && ( (diffDate > 0)|| (diffDate < -29) || (diffDate > -28)))
	{

	alert("Report cannot be generated for more than 31 days");
	}
	*/

	else if ((smonth != emonth ) && (diffDate > 0)  ||  (diffDate <= -29 )  )
		{
		alert("Report cannot be generated for more than 31 days");
		}

	else if( twoMonth > 1)
	{
	alert("Report cannot be generated for more than 31 days");

	}
	else if  ( eyear < curyear ) {

	alert("Look for the proper end date");
    }
	else
	{
		frm.rDay.value=sday;
		frm.rMonth.value=smonth;
		frm.rYear.value=syear;

		frm.rDay2.value=eday;
		frm.rMonth2.value=emonth;
		frm.rYear2.value=eyear;
		frm.ser.value='10';
		frm.act.value=report;
		frm.action=appContextPathWithIBank+"?rMonth="+smonth+"&rDay="+sday+"&rYear="+syear;
		frm.submit(frm);
	}
}

function validateDate(sday,smonth,syear,eday,emonth,eyear)
{

	if(eyear < syear)
	{
		return false;
	}
	else if (eyear == syear)
	{

		if(emonth < smonth)
		{
			return false;
		}
		else if (emonth == smonth)
		{

			if(eday < sday)
			{
				return false;
			}
			else
			{
				return true;
			}
		}
		else
		{
			return true;
		}
	}
	else
	{
		return true;
	}
}
function  getSelectedMonthRange(month,year,mm,yy)
{
	document.write('<SELECT NAME='+month+' onChange=changeMonth(document.forms[0].'+day+',document.forms[0].'+month+',document.forms[0].'+year+')>');
	document.write("<OPTION VALUE='MM'>MM</OPTION>");
	var mnt = '';
	for(var i=1;i<13;i++)
	{
		if(i<10) { mnt = '0' + i; }else { mnt = i; }
		if(i==mm)
		{
			document.write('<OPTION VALUE='+mnt+' SELECTED>'+mnt+'</OPTION>');
		}
		else
		{
			document.write('<OPTION VALUE='+mnt+'>'+mnt+'</OPTION>');
		}
	}
	document.write('</SELECT> &nbsp;');
}
function paging(frm,url,pageno,report)
{
	l= url;
	arr=l.split("&");
	frm.rDay.value=arr[0];
	frm.rMonth.value=arr[1];
	frm.rYear.value=arr[2];
	frm.rDay2.value=arr[3];
	frm.rMonth2.value=arr[4];
	frm.rYear2.value=arr[5];
	frm.pageNo.value=pageno;
	frm.ser.value='10';
	frm.act.value=report;
	frm.action=appContextPathWithIBank;
	frm.submit(frm);
}

function showerror()
{
	alert("No Records Found For This RelationShip");
}

function trim(str)
{
	 return str.replace(/^\s+/g, '').replace(/\s+$/g, '');
}
function searchData(frm,url,report)
{
	if(trim(frm.relNo.value)=="")
	{
		alert ("Relationship Field Cannot Be Blank");
	}
	else if(trim(url)=="")
	{
		showerror();
	}
	else
	{
		l= url;
		arr=l.split("&");
		frm.rDay.value=arr[0];
		frm.rMonth.value=arr[1];
		frm.rYear.value=arr[2];

		frm.rDay2.value=arr[3];
		frm.rMonth2.value=arr[4];
		frm.rYear2.value=arr[5];
		frm.searchFlag.value=frm.relNo.value;

		frm.ser.value='10';
		frm.act.value=report;
		frm.action=appContextPathWithIBank;
		frm.submit(frm);
	}
}
function checkDateRangeHist(frm,day,mon,year,report)
{
	sday=frm.SDay.options[frm.SDay.selectedIndex].text;
	smonth=frm.SMonth.options[frm.SMonth.selectedIndex].text;
	syear=frm.SYear.options[frm.SYear.selectedIndex].text;
	eday=frm.EDay.options[frm.EDay.selectedIndex].text;
	emonth=frm.EMonth.options[frm.EMonth.selectedIndex].text;
	eyear=frm.EYear.options[frm.EYear.selectedIndex].text;
	if(sday=="DD" || smonth=="MM" || syear=="YYYY")
	{
		alert("Please select a valid start date");
	}
	else if(eday=="DD" || emonth=="MM" || eyear=="YYYY")
	{
		alert("Please select a valid end date");
	}

	else if(compareDatesNew(sday,smonth,syear,eday,emonth,eyear)==false)
	{
		return false;
	}
	else if (validateDate(sday,smonth,syear,eday,emonth,eyear)==false)
	{
		alert("End Date cannot be before Start Date");
	}
	else
	{
		frm.rDay.value=sday;
		frm.rMonth.value=smonth;
		frm.rYear.value=syear;

		frm.rDay2.value=eday;
		frm.rMonth2.value=emonth;
		frm.rYear2.value=eyear;
		frm.ser.value='10';
		frm.act.value=report;

		frm.action=appContextPathWithIBank+"?rMonth="+smonth+"&rDay="+sday+"&rYear="+syear;
		frm.submit(frm);
	}

}

function submit(frm){

frm.rDay.value=frm.SDay.value;
frm.rMonth.value=frm.SMonth.value;
frm.rYear.value=frm.SYear.value;
frm.rDay2.value=frm.EDay.value;
frm.rMonth2.value=frm.EMonth.value;
frm.rYear2.value=frm.EYear.value;
frm.ser.value='10';
frm.act.value="LoginReport";
frm.forBegin.value = 0;
frm.forEnd.value   =  10;
frm.action1.value = "submit";
frm.action=appContextPathWithIBank;
frm.submit(frm);

}


function page(frm,no)
 {

 frm.rDay.value=frm.SDay.value;
		frm.rMonth.value=frm.SMonth.value;
		frm.rYear.value=frm.SYear.value;

		frm.rDay2.value=frm.EDay.value;
		frm.rMonth2.value=frm.EMonth.value;
		frm.rYear2.value=frm.EYear.value;

frm.ser.value='10';
frm.act.value="LoginReport";


   frm.forBegin.value = (no - 1) * 10;
   frm.forEnd.value   = no * 10;
   frm.action1.value = "page";
   frm.action=appContextPathWithIBank;
      frm.submit(frm);

 }
function test(frm)
{
frm.forBegin.value = 0;
frm.forEnd.value   =  10;

frm.ser.value='10';
frm.act.value="LoginReport";
 frm.action=appContextPathWithIBank;
 frm.action1.value = "prevmonth";
 frm.submit(frm);
}
function downLoadReport1(frm,date,report,tableString)
{
	var wind=window.open(appContextPath+"/Downloader?stmtVal="+report+"&date="+date+"&tableString="+tableString,"","");
}
function checkDateRange_Report(frm,day,mon,year)
{
	sday=frm.SDay.options[frm.SDay.selectedIndex].text;
	smonth=frm.SMonth.options[frm.SMonth.selectedIndex].text;
	syear=frm.SYear.options[frm.SYear.selectedIndex].text;
	eday=frm.EDay.options[frm.EDay.selectedIndex].text;
	emonth=frm.EMonth.options[frm.EMonth.selectedIndex].text;
	eyear=frm.EYear.options[frm.EYear.selectedIndex].text;
	var Jan=31;
	var Feb=29;
	var Mar=31;
	var Apr=30;
	var May=31;
	var Jun=30;
	var Jul=31;
	var Aug=31;
	var Sep=30;
	var Oct=31;
	var Nov=30;
	var Dec=31;
	var months_short = new Array('31','29','31','30','31','30','31','31','30','31','30','31')
	var smn = months_short[smonth-1]
	var emn = months_short[emonth-1]
	var flag =false;
	var currentTime = new Date();
  	var curdate  = currentTime.getDate();
 	var curmonth = currentTime.getMonth()+1;
   	var curyear  = currentTime.getFullYear();
  	var dt1   = sday;
   	var mon1  = smonth;
   	var yr1   = syear;
   	var dt2   = eday;
   	var mon2  = emonth;
   	var yr2   = eyear;

	var diffDate = ((yr2-yr1)*12)+(mon2-mon1);
	var curdiff = ((curyear-eyear)*12)+(curmonth-emonth);
	var curdtdiff =  curdate - eday;

	var dtDiff=dt2-dt1;
	var ddm= ((yr2-yr1)*12)+((mon2-mon1)*30)+(dt2-dt1);
	var curd=curmonth-mon1;
	if(sday=="DD" || smonth=="MM" || syear=="YYYY")
	{
		alert("Please select a valid start date");
		return flag;
	}
	else if(eday=="DD" || emonth=="MM" || eyear=="YYYY")
	{
		alert("Please select a valid end date");
		return flag;
	}
	else if (diffDate == 0 && dt2-dt1 < 0)
	{
	  	alert("Look for the proper end date");
	  	return flag;
	}
	else if (smn< dt1 || emn < dt2)
	{

		alert("Month dont have that date");
		return flag;
	}

	else if (diffDate < 0)
	{
		alert("End Date cannot be before start Date");
		return flag;

	}
	else if(curdiff <= 0)
	{

	    if (curdtdiff < 0) {
	     	alert("End date cannot be greater than current date");
	   	    return flag;
	   	    }
}   else if(diffDate > 11 || curd > 11 )
	{

	   if (year=="Acc"){
		  alert("If you want to have statement beyond an year, please make a statement request,\n and your statement will be sent to you by mail");
		return flag;
		}
		return flag;
	}
   else
	{  flag =true;

		return flag;

	}
	flag =true;
    return flag;
}
function getSectionStaus(act)
 {
   document.write('<tabel border=0><tr><td>Action</td>');
   if(act== 'All')
 	   document.write('<td><Select name="ActSucFAil"><option selected>All</option><option>SUCCESS</option><option >FAILURE</option></select></td></tr>');

   else if(act == 'SUCCESS')
          document.write('<td><Select name="ActSucFAil"><option >All</option><option selected>SUCCESS</option><option >FAILURE</option></select></td></tr>');
   else if(act == 'FAILURE')
          document.write('<td><Select name="ActSucFAil"><option >All</option><option >SUCCESS</option><option selected>FAILURE</option></select></td></tr>');
   else
	   document.write('<td><Select name="ActSucFAil"><option selected>All</option><option>SUCCESS</option><option >FAILURE</option></select></td></tr>');
}
function getSectionStausOrphan(act)
 {
   document.write('<tabel border=0><tr><td>Action</td>');
   if(act== 'All')
 	   document.write('<td><Select name="ActSucFAil"><option selected>All</option><option>SUCCESS</option><option >FAILURE</option><option >ORPHAN</option></select></td></tr>');

   else if(act == 'SUCCESS')
          document.write('<td><Select name="ActSucFAil"><option >All</option><option selected>SUCCESS</option><option >FAILURE</option><option >ORPHAN</option></select></td></tr>');
   else if(act == 'FAILURE')
          document.write('<td><Select name="ActSucFAil"><option >All</option><option >SUCCESS</option><option selected>FAILURE</option><option >ORPHAN</option></select></td></tr>');
   else if(act == 'ORPHAN')
          document.write('<td><Select name="ActSucFAil"><option >All</option><option >SUCCESS</option><option >FAILURE</option><option selected>ORPHAN</option></select></td></tr>');
   else
	   document.write('<td><Select name="ActSucFAil"><option selected>All</option><option>SUCCESS</option><option >FAILURE</option><option >ORPHAN</option></select></td></tr>');
}
  function searchField(rno)
  {
	document.write('<TD align = center><Label><b><FONT  COLOR="#317EDD"> Search</FONT></b></Label></TD>');
	document.write('<TD  align = center><Label>  <b> &nbsp; &nbsp;Relationship No </b></Label></TD><TD><INPUT  TYPE=text  MaxLength =11 NAME=relNo value='+rno+'> </INPUT></TD>');
  }
function getSectionStaus_orphan1(act)
 {

   document.write('<tabel border=0><tr><td>Action</td>');
   if(act== 'Select')
     document.write('<td><Select name="ActSucFAil"><option selected>Select</option><option>SUCCESS</option><option >ORPHAN</option></select></td></tr>');
   else if(act == 'SUCCESS')
          document.write('<td><Select name="ActSucFAil"><option >Select</option><option selected>SUCCESS</option><option >ORPHAN</option></select></td></tr>');
   else if(act == 'FAILURE')
          document.write('<td><Select name="ActSucFAil"><option >Select</option><option >SUCCESS</option><option selected>ORPHAN</option></select></td></tr>');
   else
    document.write('<td><Select name="ActSucFAil"><option selected>Select</option><option>SUCCESS</option><option >ORPHAN</option></select></td></tr>');
 }
function submit(frm,actionName){

    if(!(test(frm,frm.SDay.value,frm.SMonth.value,frm.SYear.value)))
    {
    }
    else {
      frm.rDay.value=frm.SDay.value;
      frm.rMonth.value=frm.SMonth.value;
      frm.rYear.value=frm.SYear.value;
      frm.rDay2.value=frm.EDay.value;
      frm.rMonth2.value=frm.EMonth.value;
      frm.rYear2.value=frm.EYear.value;
      frm.actSucFAil.value = frm.ActSucFAil.options[frm.ActSucFAil.selectedIndex].text;

	  frm.ser.value='10';
	  frm.act.value=actionName;
	  frm.SDay.options[frm.SDay.selectedIndex].text;

	  frm.forBegin.value = 0;
	  frm.forEnd.value   =  10;
	  frm.action1.value = "submit";
	  frm.action=appContextPathWithIBank;

	  frm.submit(frm);
	}

  }
function test(frm,day,mon,year){

  sday=frm.SDay.options[frm.SDay.selectedIndex].text;
  	smonth=frm.SMonth.options[frm.SMonth.selectedIndex].text;
  	syear=frm.SYear.options[frm.SYear.selectedIndex].text;

  	eday=frm.EDay.options[frm.EDay.selectedIndex].text;
  	emonth=frm.EMonth.options[frm.EMonth.selectedIndex].text;
  	eyear=frm.EYear.options[frm.EYear.selectedIndex].text;
  	var Jan=31;
  	var Feb=29;
  	var Mar=31;
  	var Apr=30;
  	var May=31;
  	var Jun=30;
  	var Jul=31;
  	var Aug=31;
  	var Sep=30;
  	var Oct=31;
  	var Nov=30;
  	var Dec=31;
  	var months_short = new Array('31','29','31','30','31','30','31','31','30','31','30','31')
  	var smn = months_short[smonth-1]
  	var emn = months_short[emonth-1]
  	var flag =false;
  	var currentTime = new Date();
    	var curdate  = currentTime.getDate();
   	var curmonth = currentTime.getMonth()+1;
     	var curyear  = currentTime.getFullYear();
    	var dt1   = sday;
     	var mon1  = smonth;
     	var yr1   = syear;
     	var dt2   = eday;
     	var mon2  = emonth;
     	var yr2   = eyear;
  	var diffDate = ((yr2-yr1)*12)+(mon2-mon1);
  	var curdiff = ((curyear-eyear)*12)+(curmonth-emonth);
  	var curdtdiff =  curdate - eday;

  	var dtDiff=dt2-dt1;
  	var ddm= ((yr2-yr1)*12)+((mon2-mon1)*30)+(dt2-dt1);
  	var curd=curmonth-mon1;
   if(sday=="DD" || smonth=="MM" || syear=="YYYY")
  	{
  		alert("Please select a valid start date");
  		return flag;
  	}
  	else if(eday=="DD" || emonth=="MM" || eyear=="YYYY")
  	{
  		alert("Please select a valid end date");
  		return flag;
  	}
  	else if (diffDate == 0 && dt2-dt1 < 0)
  	{
  	  	alert("Look for the proper end date");
  	  	return flag;
  	}
  	else if (smn< dt1 || emn < dt2)
  	{
  		alert("Month dont have that date");
  		return flag;
  	}

  	else if (diffDate < 0)
  	{
  		alert("End Date cannot be before start Date");
  		return flag;

  	}
  	else if(curdiff <= 0)
  	{
  	    if (curdtdiff < 0) {
  	     	alert("End date cannot be greater than current date");
  	   	    return flag;
  	   	    }
  	}

  	else if(diffDate > 11 || curd > 11 )
  	{

  	   if (year=="Acc"){
  		  alert("If you want to have statement beyond an year, please make a statement request,\n and your statement will be sent to you by mail");
  		return flag;
  		}
  		return flag;
  	}
  	else
  	{  flag =true;

  		return flag;

  	}
  	flag =true;
      return flag;


}
function checkDownloadDateRange(frm,day,mon,year){


  sday=frm.SDay.options[frm.SDay.selectedIndex].text;
  	smonth=frm.SMonth.options[frm.SMonth.selectedIndex].text;
  	syear=frm.SYear.options[frm.SYear.selectedIndex].text;
  	eday=frm.EDay.options[frm.EDay.selectedIndex].text;
  	emonth=frm.EMonth.options[frm.EMonth.selectedIndex].text;
  	eyear=frm.EYear.options[frm.EYear.selectedIndex].text;
  	var Jan=31;
  	var Feb=29;
  	var Mar=31;
  	var Apr=30;
  	var May=31;
  	var Jun=30;
  	var Jul=31;
  	var Aug=31;
  	var Sep=30;
  	var Oct=31;
  	var Nov=30;
  	var Dec=31;
  	var months_short = new Array('31','29','31','30','31','30','31','31','30','31','30','31')
  	var smn = months_short[smonth-1]
  	var emn = months_short[emonth-1]
  	var flag =false;

  	var currentTime = new Date();
    	var curdate  = currentTime.getDate();
   	var curmonth = currentTime.getMonth()+1;
     	var curyear  = currentTime.getFullYear();
    	var dt1   = sday;
     	var mon1  = smonth;
     	var yr1   = syear;
     	var dt2   = eday;
     	var mon2  = emonth;
     	var yr2   = eyear;
  	var diffDate = ((yr2-yr1)*12)+(mon2-mon1);
  	var curdiff = ((curyear-eyear)*12)+(curmonth-emonth);
  	var curdtdiff =  curdate - eday;
  	var dtDiff=dt2-dt1;
  	var ddm= ((yr2-yr1)*12)+((mon2-mon1)*30)+(dt2-dt1);
  	var curd=curmonth-mon1;
  	if(sday=="DD" || smonth=="MM" || syear=="YYYY")
  	{
  		alert("Please select a valid start date");
  		return flag;
  	}
  	else if(eday=="DD" || emonth=="MM" || eyear=="YYYY")
  	{
  		alert("Please select a valid end date");
  		return flag;
  	}

  	else if (diffDate == 0 && dt2-dt1 < 0)
  	{

  	  	alert("Look for the proper end date");
  	  	return flag;
  	}
  	else if (smn< dt1 || emn < dt2)
  	{
  		alert("Month dont have that date");
  		return flag;
  	}

  	else if (diffDate < 0)
  	{
  		alert("End Date cannot be before start Date");
  		return flag;

  	}
  	else if(curdiff <= 0)
  	{
  	    if (curdtdiff < 0) {
  	     	alert("End date cannot be greater than current date");
  	   	    return flag;
  	   	    }
  	}
  	else if(diffDate > 11 || curd > 11 )
  	{

  	   if (year=="Acc"){
  		  alert("If you want to have statement beyond an year, please make a statement request,\n and your statement will be sent to you by mail");
  		return flag;
  		}
  		return flag;
  	}


  	else
  	{  flag =true;

  		return flag;

  	}
  	flag =true;
      return flag;
}
function prev(frm,actionName){
    frm.rDay.value=frm.SDay.value;
    frm.rMonth.value=frm.SMonth.value;
    frm.rYear.value=frm.SYear.value;
    frm.rDay2.value=frm.EDay.value;
    frm.rMonth2.value=frm.EMonth.value;
    frm.rYear2.value=frm.EYear.value;
    frm.ser.value='10';
    frm.act.value=actionName;
    frm.previous.value="previous";
    frm.forBegin.value = 0;
    frm.forEnd.value   =  10;
    frm.action1.value = "prevmonth";
    frm.actSucFAil.value = frm.ActSucFAil.options[frm.ActSucFAil.selectedIndex].text;
    frm.action=appContextPathWithIBank;
    frm.submit();

 }
var chksuccess2load=true;

function changeoldM()
{
  var list=parent.CenterContent.iframename.frames['loginlinksFrame'].document.getElementById('list').value.split(',');
  for(j=0;j<list.length;j++)
  {
    mlist=parent.CenterContent.iframename.frames['loginlinksFrame'].document.getElementById('UL_'+list[j]);
    mlist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].className="navwidth";
    mlist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav";
	if(mlist.getElementsByTagName("li").length > 1)
     {
        for (k=1; k< mlist.getElementsByTagName("li").length ;k++)
        {
          mlist.getElementsByTagName("li")[k].style.display="none";
          mlist.getElementsByTagName("li")[k].getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_sub";
        }
     }
  }
}

function changeoldL()
{
  var list=document.getElementById('list').value.split(',');
  for(j=0;j<list.length;j++)
  {
    mlist=document.getElementById('UL_'+list[j]);
    mlist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].className="navwidth";
    mlist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav";
	if(mlist.getElementsByTagName("li").length > 1)
     {
        for (k=1; k< mlist.getElementsByTagName("li").length ;k++)
        {
          mlist.getElementsByTagName("li")[k].style.display="none";
          mlist.getElementsByTagName("li")[k].getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_sub";
        }
     }
  }
 }
function changeold()
{
 var list=document.getElementById('list').value.split(',');
  for(j=0;j<list.length;j++)
  {
    mlist=document.getElementById('UL_'+list[j]);
    mlist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].className="navwidth";
    mlist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav";
	if(mlist.getElementsByTagName("li").length > 1)
     {
        for (k=1; k< mlist.getElementsByTagName("li").length ;k++)
        {
          mlist.getElementsByTagName("li")[k].style.display="none";
          mlist.getElementsByTagName("li")[k].getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_sub";
        }
     }
  }
 }
function changeold3P()
{
 var list=document.getElementById('list').value.split(',');
  for(j=0;j<list.length;j++)
  {
    mlist=document.getElementById('UL_'+list[j]);
    mlist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].className="navwidth";
    mlist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav";
	if(mlist.getElementsByTagName("li").length > 1)
     {
        for (k=1; k< mlist.getElementsByTagName("li").length ;k++)
        {
          mlist.getElementsByTagName("li")[k].style.display="none";
          mlist.getElementsByTagName("li")[k].getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_sub";
        }
     }
  }
 }

function changeActiveM(mainid,subid)
{
  changeoldM();
  mylist=document.getElementById('UL_'+mainid);
  if(mylist.getElementsByTagName("li").length > 1)
  {
    mylist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].className="navwidth_green_down";
    mylist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_active";
    for (i=1; i<mylist.getElementsByTagName("li").length; i++)
     {
       var childobj=mylist.getElementsByTagName("li")[i];
       childobj.style.display="block";
       if(childobj.id==subid)
       {
         childobj.getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_active";
       }
       else
       {
         childobj.getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_sub";
       }
     }
   }
   else
   {
    mylist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].className="navwidth_green";
    mylist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_active";
   }
}
function changeActive(mainid,subid)
{

}
function changeActive3P(mainid,subid)
{
  changeold3P();
  mylist=document.getElementById('UL_'+mainid);
  if(mylist.getElementsByTagName("li").length > 1)
  {
    mylist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].className="navwidth_green_down";
    mylist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_active";
    for (i=1; i<mylist.getElementsByTagName("li").length; i++)
     {
       var childobj=mylist.getElementsByTagName("li")[i];
       childobj.style.display="block";
       if(childobj.id==subid)
       {
         childobj.getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_active";
       }
       else
       {
         childobj.getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_sub";
       }
     }
   }
   else
   {
    mylist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].className="navwidth_green";
    mylist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_active";
   }
}

function changeActiveT(mainid,subid)
{
  changeold();
  mylist=document.getElementById('UL_'+mainid);
  if(mylist.getElementsByTagName("li").length > 1)
  {
    mylist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].className="navwidth_green_down";
    mylist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_active";
    for (i=1; i<mylist.getElementsByTagName("li").length; i++)
     {
       var childobj=mylist.getElementsByTagName("li")[i];
       childobj.style.display="block";
       if(childobj.id==subid)
       {
         childobj.getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_active";
       }
       else
       {
         childobj.getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_sub";
       }
     }
   }
   else
   {
    mylist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].className="navwidth_green";
    mylist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_active";
   }
}
function changeActiveSL(mainid,subid)
{
  changeoldL();
  mylist=document.getElementById('UL_'+mainid);
  if(mylist.getElementsByTagName("li").length > 1)
  {
    mylist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].className="navwidth_green_down";
    mylist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_active";
    for (i=1; i<mylist.getElementsByTagName("li").length; i++)
     {
       var childobj=mylist.getElementsByTagName("li")[i];
       childobj.style.display="block";
       if(childobj.id==subid)
       {
         childobj.getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_active";
       }
       else
       {
         childobj.getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_sub";
       }
     }
   }
   else
   {
    mylist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].className="navwidth_green";
    mylist.getElementsByTagName("li")[0].getElementsByTagName("div")[0].getElementsByTagName("a")[0].className="navcontainer_nav_active";
   }
}
function visibleLoadingProgressM(linkURL){
	window.status="Welcome to Standard Chartered Online Banking";
	parent.CenterContent.iframename.frames['workingarea'].document.body.rows = "0,80%";
	parent.CenterContent.iframename.frames['workingarea'].frames['loadingBottomFrame'].location.href=appContextPathWithIBank+"?ser=1&act=LoadingProgress.jsp";
   	parent.CenterContent.iframename.frames['workingarea'].frames['loginTopFrame'].location.href = linkURL;
	parent.CenterContent.iframename.frames['workingarea'].document.body.rows = "0,*";
}

function visibleLoadingProgressL(linkURL){

}

function visibleLoadingProgressL_formSubmit(linkURL){
   	//window.status="Welcome to Standard Chartered Online Banking";
	//parent.workingarea.document.body.rows = "0,80%";
	//parent.workingarea.frames['loadingBottomFrame'].location.href=appContextPathWithIBank+"?ser=1&act=LoadingProgress.jsp";
	//parent.workingarea.frames['loginTopFrame'].location.href = linkURL;
   	//parent.workingarea.document.body.rows = "0,*";
	linkURL=linkURL.replace(/\s/g,'');
	if(linkURL.indexOf(appContextPathWithIBank)!=-1)
	{
	linkURL=linkURL.substring(12);
	var andSplitArray=linkURL.split("&");
	var mainDIv=document.getElementById('appendHiddenField');
	for(i=0; i<andSplitArray.length;i++)
	{
	var val=andSplitArray[i].split("=");
	var hiddenInput = document.createElement('input');
			hiddenInput.type = 'hidden';
			hiddenInput.name = val[0];
			hiddenInput.value = val[1];
			mainDIv.appendChild(hiddenInput);
	}
	showLoadingProgress();
	document.LHSLinksSubmit.submit();
	}else{ alert("Request Not Satisfied ")}

}
function visibleLoadingProgress(linkURL){
	startIdleTicker();
   	loadJSP_Forms_PreLogin('Success1', linkURL,'','','', 'LoadingProgress', '', '', '');
}
/*function visibleLoadingProgress(linkURL){
	window.status="Welcome to Standard Chartered Online Banking";
	parent.parent.parent.workingarea.document.body.rows = "0,80%";
	parent.parent.parent.workingarea.frames['loadingBottomFrame'].location.href=appContextPathWithIBank+"?ser=1&act=LoadingProgress.jsp";
	parent.parent.parent.workingarea.frames['loginTopFrame'].location.href = linkURL;
	parent.parent.parent.workingarea.document.body.rows = "0,*";
}*/
function visibleLinkProgressNew(screenName,mode,mainid,subid){
	startIdleTicker();
   loadJSP_Forms_PreLogin('Success1', screenName,'','','', 'LoadingProgress', '', '', '');

}
function visibleLinkProgressNewT(screenName,mode,mainid,subid){
    if(parent.parent.parent.loginlinksFrame.document.getElementById('linksDisableEnable').value==0){
    changeActiveT(mainid,subid)
	window.status="Welcome to Standard Chartered Online Banking";
	parent.parent.parent.workingarea.document.body.rows = "0,80%";
	parent.parent.parent.workingarea.frames['loadingBottomFrame'].location.href=appContextPathWithIBank+"?ser=1&act=LoadingProgress.jsp&mainid="+mainid+"&subid="+subid;
	parent.parent.parent.workingarea.frames['loginTopFrame'].location.href = screenName+'&mode='+mode;
	parent.parent.parent.workingarea.document.body.rows = "0,*";
	}
}
function visibleLinkProgressNewSL(screenName,mode,mainid,subid){
    //var str=parent.name;
    // if(str!='workingarea')
    //{

    //  if(parent.loginlinksFrame.document.getElementById('linksDisableEnable').value==0){
    //   changeActiveSL(mainid,subid)
	//window.status="Welcome to Standard Chartered Online Banking";
	//parent.workingarea.document.body.rows = "0,80%";
	//parent.workingarea.frames['loadingBottomFrame'].location.href=appContextPathWithIBank+"?ser=1&act=LoadingProgress.jsp&mainid="+mainid+"&subid="+subid;
	//parent.workingarea.frames['loginTopFrame'].location.href = screenName+'&mode='+mode;
	//parent.workingarea.document.body.rows = "0,*";
	//}
    //}
    //else
    //{
    //   visibleLinkProgressLNew(screenName,mode,mainid,subid);
    //}

	createDynamicHiddenFields(screenName,'appendHiddenField','mode',mode,'mainid',mainid,'subid',subid);
	showLoadingProgress();
	document.DynamicFormSubmit.submit();
}



function visibleLinkProgressLNew(screenName,mode,mainid,subid){
    if(parent.parent.loginlinksFrame.document.getElementById('linksDisableEnable').value==0){
    changeActive(mainid,subid)
	window.status="Welcome to Standard Chartered Online Banking";
	parent.parent.workingarea.document.body.rows = "0,80%";
	parent.parent.workingarea.frames['loadingBottomFrame'].location.href=appContextPathWithIBank+"?ser=1&act=LoadingProgress.jsp&mainid="+mainid+"&subid="+subid;
	parent.parent.workingarea.frames['loginTopFrame'].location.href = screenName+'&mode='+mode;
	parent.parent.workingarea.document.body.rows = "0,*";
	}
}
function visibleLinkProgress(screenName,mode){
	startIdleTicker();
	loadJSP_Forms_PreLogin('Success1', screenName,'','','', 'LoadingProgress', '', '', '');
}

function submitExistingForm(frm, lnkURL, frmName, frmID)
{	startIdleTicker();
	loadJSP_Forms_PreLogin('Success1', lnkURL,frm,'','', 'LoadingProgress', '', '', '');
}


function createDynamicHiddenFieldsForExistingForm(linkURL,frm,frmID,key1,value1,key2,value2,key3,value3)
{

	linkURL=linkURL.replace(/\s/g,'');
	if(linkURL.indexOf(appContextPathWithIBank)!=-1 && linkURL.length>12)
	{
	linkURL=linkURL.substring(12);
	var andSplitArray=linkURL.split("&");
	var mainDIv=document.getElementById(frmID);
	for(i=0; i<andSplitArray.length;i++)
	{
	var val=andSplitArray[i].split("=");
			var formKey=val[0].trim();
			if(frm.formKey!='undefined' && frm.formKey!=null)
			{
				frm.formKey.value=val[0];
			}else
			{
				var hiddenInput = document.createElement('input');
				hiddenInput.type = 'hidden';
				hiddenInput.name = val[0];
				hiddenInput.value = val[1];
				mainDIv.appendChild(hiddenInput);
			}
	}
	if(key1!="" && value1!="")
	{
			var hiddenInput = document.createElement('input');
			hiddenInput.type = 'hidden';
			hiddenInput.name = key1;
			hiddenInput.value = value1;
			mainDIv.appendChild(hiddenInput);
	}
	if(key2!="" && value2!="")
	{
			var hiddenInput = document.createElement('input');
			hiddenInput.type = 'hidden';
			hiddenInput.name = key2;
			hiddenInput.value = value2;
			mainDIv.appendChild(hiddenInput);
	}

	}

}

function createDynamicHiddenFields(linkURL,parentFolder,key1,value1,key2,value2,key3,value3)
{
	linkURL=linkURL.replace(/\s/g,'');
	if(linkURL.indexOf(appContextPathWithIBank)!=-1 && linkURL.length>12)
	{
	linkURL=linkURL.substring(12);
	var andSplitArray=linkURL.split("&");
	var mainDIv=document.getElementById(parentFolder);
	for(i=0; i<andSplitArray.length;i++)
	{
	var val=andSplitArray[i].split("=");

			var hiddenInput = document.createElement('input');
			hiddenInput.type = 'hidden';
			hiddenInput.name = val[0];
			hiddenInput.value = val[1];
			mainDIv.appendChild(hiddenInput);

	}
	if(key1!="" && value1!="")
	{
			var hiddenInput = document.createElement('input');
			hiddenInput.type = 'hidden';
			hiddenInput.name = key1;
			hiddenInput.value = value1;
			mainDIv.appendChild(hiddenInput);
	}
	if(key2!="" && value2!="")
	{
			var hiddenInput = document.createElement('input');
			hiddenInput.type = 'hidden';
			hiddenInput.name = key2;
			hiddenInput.value = value2;
			mainDIv.appendChild(hiddenInput);
	}
	if(key3!="" && value3!="")
	{
			var hiddenInput = document.createElement('input');
			hiddenInput.type = 'hidden';
			hiddenInput.name = key3;
			hiddenInput.value = value3;
			mainDIv.appendChild(hiddenInput);
	}

	}
}
function visibleLinkProgressT(linkURL,mode)
	{
		startIdleTicker();
		loadJSP_Forms_PreLogin('Success1', linkURL,'','','', 'LoadingProgress', '', '', '');
	}
function hideLoadingProgress()
  {
		//window.status="Welcome to Standard Chartered Online Banking";
       //if(parent.name=='iframename')
       // {
       //   if(parent.workingarea.document!='null')
       //     {
       //       resizeIframeL();
       //     }
       // }
       //else
       // {
       //   parent.parent.workingarea.document.body.rows = "*, 0";
	   //parent.parent.workingarea.frames['loadingBottomFrame'].location.href="scb/newGUI/blank.html";
       //   resizeIframes();
       //   setLinksEnable();
       //}
	   if(document.getElementById("loadingBottomFrame"))
		{
			document.getElementById("loadingBottomFrame").style.display='none';
			document.getElementById("loginTopFrame").style.display='';
		}

}

function showLoadingProgress()
{
	if(document.getElementById("loadingBottomFrame"))
		{
			document.getElementById("loadingBottomFrame").style.display='';
			document.getElementById("loginTopFrame").style.display='none';
		}

}
function submitLoadingProgress(frm,linkURL,lazyTblId){
	startIdleTicker();
	//window.status="Welcome to Standard Chartered Online Banking";
	//var con="parent.parent.workingarea.frames['loginTopFrame']."+frm;
	//parent.parent.workingarea.document.body.rows = "0,*%";
	//parent.parent.workingarea.frames['loadingBottomFrame'].location.href=appContextPathWithIBank+"?ser=1&act=LoadingProgress.jsp";
 	//frm.action = linkURL;
	if( typeof lazyTblId === 'undefined' || lazyTblId == null )
		lazyTblId = '';
	loadJSP_Forms_PreLogin('Success1', linkURL,frm,lazyTblId,'', 'LoadingProgress', '', '', '');
}
function homesubmitLoadingProgress(linkURL){
      loadJSP_Forms_PreLogin('Success1', linkURL,'','','', 'LoadingProgress', '', '', '');

}

function beforeLoginLoadingProgress(frm,linkURL){
	window.status="Welcome to Standard Chartered Online Banking";
	var con="parent.parent.parent.workingarea.frames['loginTopFrame']."+frm;
	parent.parent.workingarea.document.body.rows = "0,*%";
	parent.parent.workingarea.frames['loadingBottomFrame'].location.href=appContextPathWithIBank+"?ser=100&act=LoadingProgress.jsp";
	frm.action = linkURL;
	frm.submit();
}
function setLinksDisable(){

	if(parent.parent.loginlinksFrame.document.getElementById('linksDisableEnable')){
		parent.parent.loginlinksFrame.document.getElementById('linksDisableEnable').value="1";
	}

}
function setLinksEnable(){

	if(parent.parent.loginlinksFrame.document.getElementById('linksDisableEnable')){
		parent.parent.loginlinksFrame.document.getElementById('linksDisableEnable').value="0";
	}
}
function setLinksDisableM(){

	if(parent.parent.parent.loginlinksFrame.document.getElementById('linksDisableEnable')){
		parent.parent.parent.loginlinksFrame.document.getElementById('linksDisableEnable').value="1";
	}

}
function setLinksEnableM(){

	if(parent.parent.parent.loginlinksFrame.document.getElementById('linksDisableEnable')){
		parent.parent.parent.loginlinksFrame.document.getElementById('linksDisableEnable').value="0";
	}

}
/*function imgnew(id,linkURL)
 {

 if(document.getElementById("linksDisableEnable").value=="0"){
    visibleLoadingProgress(linkURL);
  }
}*/

//newly added method for new GUI 20081020
 function link_changeOther(id)
  {
		 if(parent.parent.parent.frames['loginlinksFrame'].document.getElementById("linksDisableEnable").value=="0")
		 {

		   var str=parent.parent.parent.frames['loginlinksFrame'].document.getElementById('list').value.split(',');
		   for(var i=0;str.length>i;i++)
		   {
		     parent.parent.parent.frames['loginlinksFrame'].document.getElementById(str[i]).className="navwidth";
		     parent.parent.parent.frames['loginlinksFrame'].document.getElementById('nav_'+str[i]).className="navcontainer_nav";

		   }

		   parent.parent.parent.frames['loginlinksFrame'].document.getElementById(id).className="navwidth_green";
		   parent.parent.parent.frames['loginlinksFrame'].document.getElementById('nav_'+id).className="navcontainer_nav_active";
		  }
 }

function imgMerchant(id,linkURL)
 {
  var id_name = new Array('Home','upload','report','personal');

  for(var i=0;i<id_name.length;i++)
  {

    document.getElementById(id_name[i]).src="scb/images/noarrow.jpg";
  }

   document.getElementById(id).src="scb/images/arrow.jpg";

   visibleLoadingProgress(linkURL);
 }

function fun()
{
	//printClose();
	document.secForm.isclose.value='true';
}
function disableonLoad(cntrycode)
{
//MOB2Changes - Start
   	if(!isMobile2)
   	{
        parent.parent.SecReqcheck.document.secForm.isclose.value='main';
        parent.parent.SecReqcheck.document.secForm.cntryy.value=cntrycode;
    }
    else
    {
        try
        {
            parent.parent.SecReqcheck.document.secForm.isclose.value='main';
            parent.parent.SecReqcheck.document.secForm.cntryy.value=cntrycode;

        }catch(err){}
    }
//MOB2Changes - End

}
function SCBLogout()
{
	 $('.sc-up-lkcreditbanner').addClass('hide');

		 	var cntryCode=document.secForm.countryCode.value;
			loadJSP('logoFrame', 'scb/newGUI/uxUplift/Logo_MESA.html',"First");


			setTimeout(function(){

							loadJSP_Forms_PreLogin('loginTopFrame', appContextPathWithIBank+'?ser=100&act=3&time=&isUserIdleTimeout=false','','','', 'LoadingProgress', '', '', '');
								},1000);

			clearTimerAfterLogout = true;
			startIdleTicker();

}

function merchantLogout(merchantURL)
{
	 parent.workingarea.document.body.rows = "*,0";
	 parent.workingarea.frames['loadingBottomFrame'].location.href = "scb/newGUI/blank.html";
	 parent.workingarea.frames['loginTopFrame'].location.href=appContextPathWithIBank+"?ser=1&act=Logout.jsp?merchanturl="+merchantURL;
}

var i=1;



//
function Load(cnt,iVal)
{
	i=iVal;
	eval("document.getElementById('Tip'+i).style.display=''");
//	eval("document.all.Tip"+i+".style.display=''");
}
function goLast(nTips)
{

   eval("document.getElementById('Tip'+i).style.display='none'");
//	eval("document.all.Tip"+i+".style.display='none'");
	i=nTips;
	eval("document.getElementById('Tip'+i).style.display=''");
//	eval("document.all.Tip"+i+".style.display=''");
}

function goFirst()
{
	eval("document.getElementById('Tip'+i).style.display='none'");
//	eval("document.all.Tip"+i+".style.display='none'");
	i=1;
	eval("document.getElementById('Tip'+i).style.display=''");
//	eval("document.all.Tip"+i+".style.display=''");
}

function goPrev()
{
	if(i==1)
	{
		eval("document.getElementById('Tip'+i).style.display=''");
//		eval("document.all.Tip"+i+".style.display=''");
	}
	else
	{
		eval("document.getElementById('Tip'+i).style.display='none'");
//		eval("document.all.Tip"+i+".style.display='none'");
		i--;
		eval("document.getElementById('Tip'+i).style.display=''");
//		eval("document.all.Tip"+i+".style.display=''");
	}
}

function goNext(nTips)
{

	if(i==nTips)
	{
		eval("document.getElementById('Tip'+i).style.display=''");
//		eval("document.all.Tip"+i+".style.display=''");
	}
	else
	{
		eval("document.getElementById('Tip'+i).style.display='none'");
//		eval("document.all.Tip"+i+".style.display='none'");
		i++;
		eval("document.getElementById('Tip'+i).style.display=''");
//		eval("document.all.Tip"+i+".style.display=''");
	}
}

//

function showName() {
	window.status = event.srcElement.innerText;
	return true;
}


if(document.images)
{
	//var imgList = new Array("scb/images/lastgreen.gif","scb/images/firstgreen.gif","scb/images/rewgreen.gif","scb/images/fwdgreen.gif","scb/images/lastgreen.gif");
	var imgList = new Array();
	var imgOrg = new Array();
	var imgs = new Array();
	var count;
	for(count = 0;count<imgList.length;count++)
	{
		imgs[count] = new Image();
		imgs[count].src = imgList[count];
	}
}
function changeImage(name,m)
{
	if(document.images)
	{
		swapImages(name,imgs[m]);
	}
}
function changeImageClick(m)
{
	var xx=m;
}
function swapImages(i1,i2)
{
	if(document.images)
	{
		var temp = i1.src;
		i1.src = i2.src;
		i2.src = temp;
	}
}

function UserValidate() {




for(index=0;index<document.forceChange.pass.length;index++)
 {
   if(document.forceChange.pass[index].checked)
   {
    var pas = document.forceChange.pass[index].value;
   }
 }



if(pas=="-1")
{
document.forceChange.passselected.value="-1";

if(checkForBlankPassword(document.forceChange.logonPasswordOld.value,"old password") == false)
  {
	  putFocus1(document.forceChange.logonPasswordOld);
	  return false;
  }


var len1=document.forceChange.logonPasswordOld.value.length;

if(len1 < 6 || len1 > 8)
{
alert("Password field should have a minimum of 6 & a maximum of 8 characters");
putFocus1(document.forceChange.logonPasswordOld);
return false;
}



 if(checkForBlankPassword(document.forceChange.logonPassword.value,"Password") == false)
  {
	  putFocus1(document.forceChange.logonPassword);
	  return false;
  }

var len2=document.forceChange.logonPassword.value.length;

if(len2 < 6 || len2 > 8)
{
alert("Password field should have a minimum of 6 & a maximum of 8 characters");
putFocus1(document.forceChange.logonPassword);
return false;
}

if(checkForBlankPassword(document.forceChange.logonPasswordVerify.value,"confirm password") == false)
  {
	  putFocus1(document.forceChange.logonPasswordVerify);
	  return false;
  }

var len3=document.forceChange.logonPasswordVerify.value.length;

if(len3 < 6 || len3 > 8)
{
alert("Password field should have a minimum of 6 & a maximum of 8 characters");
putFocus1(document.forceChange.logonPasswordVerify);
return false;
}
//For Common Password fix
if(! verifyConsecutive4DigitsAnd3RepeatedChars(document.forceChange.logonPassword.value,document.forceChange.logonPasswordVerify.value) )
{
document.forceChange.logonPassword.value="";
document.forceChange.logonPasswordVerify.value="";
document.forceChange.logonPassword.focus();
return false;
}

//ends

if(document.forceChange.logonPasswordVerify.value != document.forceChange.logonPassword.value)
{
 alert("The passwords you have typed do not match, please retry");
 putFocus1(document.forceChange.logonPasswordVerify);
 return false;
}

if(checkForBlank(document.forceChange.newID.value,"User ID") == false) {
	document.forceChange.newID.focus();
	return false;
	}
	else if(document.forceChange.newID.value.length < 8) {
	alert("Your iBanking ID has to contain 8 to 16 characters.");
	return false;
	}

}
else
{
  document.forceChange.passselected.value="-2";

if(checkForBlank(document.forceChange.newID.value,"User ID") == false) {
	document.forceChange.newID.focus();
	return false;
}
else if(document.forceChange.newID.value.length < 8) {
	alert("Your iBanking ID has to contain 8 to 16 characters.");
	return false;
 }
}


	return true;

}

function checkForceChange()
{

	if(UserValidate() == true)
	{

document.forceChange.logonPassword.value=encrypt(document.forceChange.logonPassword.value);

document.forceChange.logonPasswordVerify.value=encrypt(document.forceChange.logonPasswordVerify.value);

document.forceChange.logonPasswordOld.value=encrypt(document.forceChange.logonPasswordOld.value);

document.forceChange.logonPassword_mac.value=mach(document.forceChange.logonPassword.value);

document.forceChange.logonPasswordVerify_mac.value=mach(document.forceChange.logonPasswordVerify.value);

document.forceChange.logonPasswordOld_mac.value=mach(document.forceChange.logonPasswordOld.value);

document.forceChange.action=appContextPathWithIBank+"?ser=1&act=22";
	document.forceChange.submit(document.forceChange);
	}

}

function checkForBlank(arg,field) {

var initiala = " "+"!@#$%^&*()+}{:><?\].[/,=-";
var  frmTxt ;
var gt;
frmTxt=arg;
if(frmTxt.length==0)
{
  if(field == "User ID"){ alert("Please create your new iBanking ID");  }
  return false;
}
for(var j=0;j<frmTxt.length;j++)
{
 gt=  frmTxt.charAt(j);
for(var i=0;i<initiala.length;i++)
{
      if(gt.indexOf(initiala.charAt(i),0 )==0 )
      {
       alert("The "+field+" should have alphanumeric characters only");
       //alert("Please enter alphanumeric characters only.");
       return false;
       }

}
}
}

function checkForBlank2(arg,field) {

var initiala = " "+"!@#$%^&*()+}{:><?\][/,=-";
var  frmTxt ;
var gt;
frmTxt=arg;
if(frmTxt.length==0)
{
  if(field == "User ID"){ alert("Please create your new iBanking ID");  }
  return false;
}
for(var j=0;j<frmTxt.length;j++)
{
 gt=  frmTxt.charAt(j);
for(var i=0;i<initiala.length;i++)
{
      if(gt.indexOf(initiala.charAt(i),0 )==0 )
      {
       alert("The "+field+" should have alphanumeric characters only");
       //alert("Please enter alphanumeric characters only.");
       return false;
       }

}
}
}

function anch(flag,subject,sendVal,storeid,previousK,currPage,status)
{
	if(status =='S' || status =='s')
	{


		document.write("<A Href="+appContextPathWithIBank+"?ser=9&act=1&flag="+flag+"&msgKey="+sendVal+"&preKey="+previousK+"&cPage="+currPage+" style={color:blue}>"+subject+"</A>");
	}
	else if(status == 'R')
	{

		document.write("<A Href="+appContextPathWithIBank+"?ser=9&act=1&flag="+flag+"&msgKey="+sendVal+"&preKey="+previousK+"&cPage="+currPage+" style={color:#3A6AAC}>"+subject+"</A>");

	}
}
function inboxMessage(flag,subject,sendVal,storeid,previousK,currPage,status){
	var contentURL="";
	if(status =='S' || status =='s')
		{
			contentURL=appContextPathWithIBank+"?ser=9&act=1&flag="+flag+"&msgKey="+sendVal+"&preKey="+previousK+"&cPage="+currPage;
		}
		else if(status == 'R')
		{
			contentURL=appContextPathWithIBank+"?ser=9&act=1&flag="+flag+"&msgKey="+sendVal+"&preKey="+previousK+"&cPage="+currPage;
		}
		//parent.parent.workingarea.document.body.rows = "0,100%";
		//parent.parent.workingarea.frames['loadingBottomFrame'].location.href=appContextPathWithIBank+"?ser=1&act=LoadingProgress.jsp";
		//parent.parent.workingarea.frames['loginTopFrame'].location.href = contentURL;
		//parent.parent.workingarea.document.body.rows = "0,*";
		//submitLoadingProgress(document.Inboxform,contentURL)
		visibleLinkProgress(contentURL,'');

}

	function setFlagWithPKey(flag,preKey)
	{
		preKey=document.Inboxform.preKey.value;

		document.Inboxform.flag.value = flag;
		document.Inboxform.ser.value=9;
		document.Inboxform.act.value=1;
		document.Inboxform.method="post";

               	//inboxLoadingProcess();
				submitLoadingProgress(document.Inboxform,appContextPathWithIBank);
	}
	function setFlagWithDKey(flag,preKey)
	{
		if(checkDelete()==true)
		{
		preKey=document.Inboxform.preKey.value;
		document.Inboxform.flag.value = flag;
		document.Inboxform.ser.value=9;
		document.Inboxform.act.value=1;
		document.Inboxform.method="post";
		//inboxLoadingProcess();
		submitLoadingProgress(document.Inboxform,appContextPathWithIBank);
		return true;
		}

	}
	function setFlagWithPNKey(flag,preKey,nxtKey)
	{
			preKey=document.Inboxform.preKey.value;
			nxtKey=document.Inboxform.nKey.value;
			document.Inboxform.flag.value = flag;
			document.Inboxform.ser.value=9;
			document.Inboxform.act.value=1;
			document.Inboxform.method="post";
			//inboxLoadingProcess();
			submitLoadingProgress(document.Inboxform,appContextPathWithIBank);

	}
	function inboxLoadingProcess(){
		  //parent.parent.workingarea.document.body.rows = "0,80%";
		  //parent.parent.workingarea.frames['loginTopFrame'].document.Inboxform.action=appContextPathWithIBank;
		  //parent.parent.workingarea.frames['loginTopFrame'].document.Inboxform.submit();
		  //parent.parent.workingarea.document.body.rows = "0,*";
	}

	function setFlag(flag,frm,Index,currentPg)
		{
			frm.flag.value = flag;

			frm.currentPage.value=currentPg;
			frm.ser.value=9;
			frm.act.value=1;
			inboxDetails(frm);
			//frm.submit();
		}
	function contUs(frm,Index)
		{
			frm.msgNo.value='xxx';
			frm.ser.value=9;
			frm.act.value="Contact_us_c";
			inboxDetails(frm);
			//frm.submit();
		}
	function backToInbox(frm,ser,act,storeid)
		{
			frm.ser.value=9;
			frm.act.value="Inbox";
			//frm.submit();
			submitLoadingProgress(frm,appContextPathWithIBank);
		}
	function inboxDetails(frm)
	{
			  /*parent.parent.workingarea.document.body.rows = "0,80%";
			  parent.parent.workingarea.frames['loginTopFrame'].document.MessageDetailForm.action=appContextPathWithIBank;
			  parent.parent.workingarea.frames['loginTopFrame'].document.MessageDetailForm.submit();
			  parent.parent.workingarea.document.body.rows = "0,*";*/
				submitLoadingProgress(frm,appContextPathWithIBank);

	}
	function checkDelete()
	{
	  var sel = document.Inboxform.elements.length;
	  var i=0;
	  var cont=0;
	  var cont1=0;

	for(var i=0;i<sel;i++)
	{
	  if(document.Inboxform.elements[i].checked == false )
	    {
		cont++;
		cont1++;
	    }
	   else
	   if(document.Inboxform.elements[i].checked == true)
	   {
		cont++;
	   }
	  }

	if(cont==cont1)
	{
//		alert("Please select the message(s) for deletion");
		return false;

	}
	 return true;
	}


function noBlankEnter(arg)
	{
	  for(i=0;i<arg.length;i++)
	   {
		if(arg.charCodeAt(i)!=13)
		{
			if(arg.charCodeAt(i)!=10)
			{
				if(arg.charCodeAt(i)!=32)
				{
					return false;
				}
			}
		}
 	   }
	 return true;
	}

	function checkBlank()
	{

		if(document.contact.replyMsg.value.toString().length==0)
		{
		alert("Please enter your comments.");
		putFocus();
		return false;
		}else if(noBlankEnter(document.contact.replyMsg.value))
		{
		alert("Please enter your comments.");
		putFocus();
		return false;
		}
		if(document.contact.replyMsg.value.toString().length > 1000)
		{

		alert("Reply message length should not exceed 1000 character.");
		return false;
		}

		return true;
	}

/*function putFocus()
	{
   	document.contact.replyMsg.focus();
}*/

function vail()
{

	document.getElementById("downbut").style.position = "absolute";
    document.getElementById("downbut").style.visibility = "hidden";

	document.getElementById("downtype").style.position = "absolute";
    document.getElementById("downtype").style.visibility = "hidden";

}



function unvail()
{

	document.getElementById("downbut").style.position = "static";
    document.getElementById("downbut").style.visibility = "visible";

	document.getElementById("downtype").style.position = "static";
    document.getElementById("downtype").style.visibility = "visible";

}
function pagePrint(url){
				printClose();
				printWin=window.open(url,"SCBPagePrinting","location=0,status=0,scrollbars=1,width=800,height=600");
				setTimeout('printWin.close();',60000);
			}
function winClose(){
		window.close();
}
function printClose(){
		if(false==printWin.closed)
			{
				printWin.close();
			}
	}
function winPrint(){
    var usertype=navigator.userAgent.toLowerCase();

	//Condition added for PT-IM0000008785450    - Modified Dt: 16/02/2011
	//set the 650px before printing
	if((document.getElementById("pgTabl1")!=null) || (document.getElementById("cardBal2")!=null)){
		changeTableWidth('650px');
	}

	if (window.print) {
	window.print();
    }
    else if (usertype.indexOf("mac") != -1) {
        alert("Press 'Cmd+p' on your keyboard to print page.");
    }
    else {
        alert("Press 'Ctrl+p' on your keyboard to print page.")
    }

	//Condition added for PT-IM0000008785450
	if((document.getElementById("pgTabl1")!=null) || (document.getElementById("cardBal2")!=null)){
		changeTableWidth('750px');
	}

}

//Added for PT-IM0000008785450
//set as default width as 750px
function changeTableWidth(width){
	if(document.getElementById("prnPgTbl1")!=null){
		document.getElementById("prnPgTbl1").style.width = width;
		document.getElementById("printImg1").style.width = width;
		document.getElementById("printDiv1").style.width = width;
		document.getElementById("printImg2").style.width = width;
		document.getElementById("historyData").style.width = width;
		document.getElementById("prnPgTbl2").style.width = width;
	}

	if(document.getElementById("pgTabl1")!=null){
		document.getElementById("pgTabl1").style.width = width;
		document.getElementById("pgTabl2").style.width = width;
		document.getElementById("pgTabl3").style.width = width;
		if(document.getElementById("pgTabl4")!=null){
			document.getElementById("pgTabl4").style.width = width;
		}
    }


	if(document.getElementById("cardBal2")!=null){
		if(document.getElementById("cardBal1")!=null){
			document.getElementById("cardBal1").style.width = width;
		}

		if(document.getElementById("cardBal2")!=null){
			document.getElementById("cardBal2").style.width = width;
		}
	}

	if(document.getElementById("cardBal3")!=null){
		document.getElementById("cardBal3").style.width = width;
	}
	if(document.getElementById("cardBal5")!=null){
		document.getElementById("cardBal5").style.width = width;
	}

    if(document.getElementById("cardBal4")!=null){
		if(width=='650px'){
			document.getElementById("cardBal4").style.width = width
		}else{
			document.getElementById("cardBal4").style.width = "100%";
		}
	}

	if(document.getElementById("pgNo")!=null){
		if(width=='650px'){
			document.getElementById("pgNo").style.width = width
		}else{
			document.getElementById("pgNo").style.width = "730px";
		}
	}
}

function getWindowHeight(){
 var browserName = navigator.appName;
 //alert("browserName -->>"+browserName );
 if(browserName == "Netscape"){
 // alert("if");
  return  window.innerHeight
 }else {
  // alert("else");
  return document.body.offsetHeight
 }

}
function visibleBottomTop(){
startIdleTicker();
//resizeIframes();
if(getWindowHeight() >=document.body.scrollHeight){
         document.getElementById("goBottom").style.visibility="hidden";
        document.getElementById("goTop").style.visibility="hidden";
}else{
         document.getElementById("goBottom").style.visibility="visible";
        document.getElementById("goTop").style.visibility="visible";
	}
}
function checkKeyCode()
{
	keycode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
	return keycode;
}

function disableRightClick()
{
document.body.oncontextmenu=new Function("document.body.oncontextmenu=new Function('if (document.body.onclick) document.body.onclick(); return false;'); return false;");

}
function disableHyperLink(divId)
{
var a = document.getElementById(divId).document.getElementsByTagName('a');
	for(var i=a.length-1;i>=0;i--){
		if(a[i].href){
			while(a[i].hasChildNodes()){
				a[i].parentNode.insertBefore(a[i].childNodes[0],a[i]);
			}
		a[i].parentNode.removeChild(a[i]);
		}
	}
var s=document.getElementById(divId).document.getElementsByTagName('select');
if(s.length>0)
{
	for(var i=s.length-1;i>=0;i--)
	{
	s[i].disabled=true;
	}
}
var b=document.getElementById(divId).document.getElementsByTagName('input');
if(b.length>0)
{
for(var i=b.length-1;i>=0;i--)
	{
       if(b[i].type=="submit" || b[i].type=="text" || b[i].type=="radio" || b[i].type=="checkbox")
	   b[i].disabled=true;
	}
}

}



function startIdleTicker()
{
		idleCounter=0;
		idleTimer=setTimeout("updateIdleTimer()",1000);
}
function updateIdleTimer()
{
	if(!clearTimerAfterLogout){
	if(idleTimer)
		clearTimeout(idleTimer);
		++idleCounter;
	if(idleCounter<600)
	{
	      if(idleCounter==300){
				//idleWin=window.open("scb/IdleTimer5.html","SCBTimer","location=0,status=0,scrollbars=0,resizable=0,top=350,left=500,width=500,height=100");
				logOutModel('5M');
				//setTimeout('idleWin.close();',30000);
				}
	     else if(idleCounter==480){
		       	//idleWin=window.open("scb/IdleTimer8.html","SCBTimer","location=0,status=0,scrollbars=0,resizable=0,top=350,left=500,width=500,height=100");
				//setTimeout('idleWin.close();',30000);
				logOutModel('8M');
				}
	     else if(idleCounter==570){
	     		logOutModel('10M');
					 //SCBLogout();
				}
		idleTimer=setTimeout(updateIdleTimer,1000);
	}
	else if(idleCounter==600)
	{
		idleCounter=0;
		clearTimeout(idleTimer);
	}
}else{
	idleCounter=0;
	clearTimeout(idleTimer);
}

}
function setPagingColor(id){
	document.getElementById(id).style.color="#066EC1";
	document.getElementById(id).style.fontWeight="BOLD";
}


function putFocus1(field)
{
   field.focus();
}


function checkForBlankPassword(arg,field) {
//var initiala = " "+"!@#$%^&*()_+}{:><?\][/,=-";
var initiala = " "+"!@#$%^&*()`~'_\"+}{:><.?\][/,=-|;\\";  //Do not allow special chars
var  frmTxt ;
var gt;
frmTxt=arg;
if(frmTxt.length==0)
{
 if(field == "Password"){ alert("Please enter the new password"); } else if(field == "confirm password"){alert("Please confirm the new password");}else if(field == "RELNO"){alert("Please enter your secondary relationship number");}else{alert("Please enter the "+field);  }
 return false;
}
// Added For  password Fix- allow only alphanumeric
if(field == "Password" || field == "confirm password" || field == "Confirm Password")
{
      if ( frmTxt.match(/^[0-9]+$/)   ||  frmTxt.match(/^[a-zA-Z]+$/) )
       {
        alert("Password should  be alphanumeric.");
        return false;
       }
}
//Ends
for(var j=0;j<frmTxt.length;j++)
{
 gt=  frmTxt.charAt(j);
for(var i=0;i<initiala.length;i++)
{
      if(gt.indexOf(initiala.charAt(i),0 )==0 )
      {
       alert(field+ " should not be blank or have special characters.");
       return false;
       }

 }
 }
 return true;
}

/*function checkForNumber(val,field)
{	var dp = false;
for (var i=0; i < val.length; i++)
{
	if (!isDigit(val.charAt(i)))
	{
	if (val.charAt(i) == '.')
	{	if (dp == true)
	{
		return false;
	}
	else
	{
	dp = true;
	}	}
	else
	{
	  if(field!=null && field == "Account number"){
	  	alert("Please enter the valid "+field);
	  }
	  else if(field!=null && field == "Card number"){
	  	alert("Please enter the valid "+field);
	  }
      else if(field!=null && !(field == "cha1" || field == "cha2"))
	  {
		  alert("Please enter the "+field);
	  }
	  else{
	  	alert("Please enter the "+field);
	  }
	return false;
	}
	}
	}
	return true;
	}*/

function isDigit(num) {	var string="1234567890/";
if (string.indexOf(num) != -1) {
return true;
}
return false;
}






function showContactAppForms(redirectPage,cntry)
{
	if(document.getElementById("linksDisableEnable").value=="0")
	{
		if(redirectPage=="contactUs")
                {
                   parent.workingarea.loginTopFrame.location.href=appContextPathWithIBank+"?ser=100&act=Contact_us_a&typeNo=13&cntry="+cntry;
                }
              else if(cntry=="LB")
		  {
                   parent.workingarea.loginTopFrame.location.href=appContextPathWithIBank+"?ser=100&act=OnlineApplications.jsp&typeNo=&prgId=p100&cntry="+cntry+"&mode=cardservices";
		  }
              else if(cntry=="BN")
                {
                   parent.workingarea.loginTopFrame.location.href=appContextPathWithIBank+"?ser=100&act=OnlineApplications_BN.jsp&typeNo=&prgId=p100&cntry="+cntry+"&mode=all";
                }
		else if(cntry=="OM")
		  {
		      parent.workingarea.loginTopFrame.location.href=appContextPathWithIBank+"?ser=100&act=OnlineApplications_OM.jsp&typeNo=&prgId=p100&cntry="+cntry+"&mode=all";
	         }
             	else
                   parent.workingarea.loginTopFrame.location.href=appContextPathWithIBank+"?ser=100&act=OnlineApplications.jsp&typeNo=&prgId=p100&cntry="+cntry+"&mode=accountservices";


	}

}
function disablePassword()
{

for(index=0;index<document.forceChange.pass.length;index++)
 {
   if(document.forceChange.pass[index].checked)
   {
    if(document.forceChange.pass[index].value == "-1")
    {
     document.forceChange.logonPasswordOld.disabled=false;
     document.forceChange.logonPassword.disabled=false;
     document.forceChange.logonPasswordVerify.disabled=false;
    }
    if(document.forceChange.pass[index].value == "-2")
    {
      document.forceChange.logonPasswordOld.disabled=true;
      document.forceChange.logonPassword.disabled=true;
      document.forceChange.logonPasswordVerify.disabled=true;
   }
  }
 }
}

function setCntryCode(cntry){
	document.secForm.cntryy.value=cntry;
	}
function getCntryCode(){
	return document.secForm.cntryy.value;
	}

function setRelno(relno){
	document.secForm.relno.value=relno;
	}
function getRelno(){
	return document.secForm.relno.value;
	}
function setCurrentYear(yr){
	document.secForm.currentYear.value=yr;
}
function setPhoneBanking(phoneno){
	document.secForm.phoneno.value=phoneno;
}

function getCurrentYear(){
	if(parent.parent.parent.parent.SecReqcheck.document.secForm.currentYear.value!=""){
		yr=parent.parent.parent.parent.SecReqcheck.document.secForm.currentYear.value;
		document.getElementById("curentYear").innerHTML="Copyright � "+yr+" Standard Chartered Bank";
		}
	else{
		m = setTimeout("getCurrentYear()",10);
	    }
}
function getCurrentYr(){
	if(opener.parent.SecReqcheck.document.getElementById('currentYear').value!=""){
		return opener.parent.SecReqcheck.document.getElementById('currentYear').value;
		}
}

function getPhoneBanking(){
if(opener.parent.SecReqcheck.document.getElementById('phoneno').value!=""){
	return opener.parent.SecReqcheck.document.getElementById('phoneno').value;
}
}
function divStart(){
	//document.write("<div id='pagePrintTag'>");
}
function divEnd(){
//document.write("</div>");
}

 function resizeIframes(){
var currentfr=parent.parent.parent.document.getElementById('iframename');
if (currentfr && !window.opera){
currentfr.style.display="block"

if (parent.parent.workingarea.loginTopFrame.document.body && parent.parent.workingarea.loginTopFrame.document.body.scrollHeight)
{
 if(parent.parent.workingarea.loginTopFrame.document.body.scrollHeight > parent.parent.loginlinksFrame.document.body.scrollHeight)
 currentfr.height = parent.parent.workingarea.loginTopFrame.document.body.scrollHeight;
 else
 currentfr.height = parent.parent.loginlinksFrame.document.body.scrollHeight;
}
}
}
 function resizeIframeL(){
var currentfr=parent.parent.document.getElementById('iframename');
if (currentfr && !window.opera){
currentfr.style.display="block"

if (parent.workingarea.document.body && parent.workingarea.document.body.scrollHeight)
{
 if(parent.workingarea.document.body.scrollHeight > parent.loginlinksFrame.document.body.scrollHeight)
 currentfr.height = parent.workingarea.document.body.scrollHeight;
 else
 currentfr.height = parent.loginlinksFrame.document.body.scrollHeight;
}
}
}

//For EnterKeyFunction in All Pages starts here ..........
// Only Positive Button will be triggered
// Submit,Proceed,Next,Confirm

function doClick(e)
   {
          if(parent.parent.name!='CenterContent')
         {

           if(parent.parent.frames['loginlinksFrame'].document.getElementById("linksDisableEnable").value=="0")
           {
             var key;
             if(window.event)
             key = window.event.keyCode;//IE
             else
               key = e.which;// Netscape/Firefox/Opera
             if (key == 13)
              {
					if(findPositiveAction())
					{
						if(window.event)
						event.keyCode = 0;//IE
						else
						keyCode = 0;// Netscape/Firefox/Opera
			        }
       	      }
           }
         }
   }

  document.onkeypress=doClick;
  function findPositiveAction()
  {
	var pos_act_found = false;
    var elms = document.getElementsByTagName("A");
    for(i = 0; i < elms.length; i++)
    {
        var obj=elms[i];
             if(obj.firstChild.innerHTML=='Login' || obj.firstChild.innerHTML=='Agree' || obj.firstChild.innerHTML=='Submit' || obj.firstChild.innerHTML=='Confirm' ||
obj.firstChild.innerHTML=='Proceed' || obj.firstChild.innerHTML=='Next' || obj.firstChild.innerHTML=='Search' || obj.firstChild.innerHTML=='Register' || obj.firstChild.innerHTML=='Generate eTAC'  ||
obj.firstChild.innerHTML=='Update Changes')

           {


           	if(document.getElementById('disableconfirmbutton')!=null)
  			{
  				if(document.getElementById('disableconfirmbutton').style.display=='block')
  				{
  					obj.onclick();
  					document.getElementById('disableconfirmbutton').style.display=='none';
  				}
  			}
  			else
  			{
				  obj.onclick();
  			}
			  pos_act_found = true;
              return false;
           }


    }

	return pos_act_found;
}
 function visibleLoadingProgress_M(linkURL){
	window.status="Welcome to Standard Chartered Online Banking";
	parent.parent.parent.workingarea.document.body.rows = "0,80%";
	//var str=setTab();
var str="";
  //alert(parent.parent.parent.workingarea.frames['loadingBottomFrame']);
        //alert(parent.parent.parent.workingarea.frames['loginTopFrame']);

	parent.parent.parent.workingarea.frames['loadingBottomFrame'].location.href=appContextPathWithIBank+"?ser=1&act=LoadingProgress.jsp"+str;
   	parent.parent.parent.workingarea.frames['loginTopFrame'].location.href = linkURL;
	parent.parent.parent.workingarea.document.body.rows = "0,*";
}
function visibleLinkProgress_M(screenName,mode){
	window.status="Welcome to Standard Chartered Online Banking";
	parent.parent.parent.workingarea.document.body.rows = "0,80%";
	//var str=setTab();
        var str="";
        //alert(parent.parent.parent.workingarea.frames['loadingBottomFrame']);
        //alert(parent.parent.parent.workingarea.frames['loginTopFrame']);

	parent.parent.parent.workingarea.frames['loadingBottomFrame'].location.href=appContextPathWithIBank+"?ser=1&act=LoadingProgress.jsp"+str;
	parent.parent.parent.workingarea.frames['loginTopFrame'].location.href = screenName+'&mode='+mode;
	parent.parent.parent.workingarea.document.body.rows = "0,*";
}
function submitLoadingProgress_M(frm,linkURL){
	window.status="Welcome to Standard Chartered Online Banking";
	var con="parent.parent.parent.workingarea.frames['loginTopFrame']."+frm;
	parent.parent.parent.workingarea.document.body.rows = "0,*%";
	//var str=setTab();
       var str="";
	parent.parent.parent.workingarea.frames['loadingBottomFrame'].location.href=appContextPathWithIBank+"?ser=1&act=LoadingProgress.jsp"+str;
 	frm.action = linkURL;
	frm.submit();
}

// EnterKey ......Ends Here .............
//For Common Password fix

function verifyConsecutive4DigitsAnd3RepeatedChars(str1,str2){
	var i;
	var nSec=str1;
	var cSec=str2;
	if(nSec.length<6 || nSec.length > 8 ){
		alert("Password field should have a minimum of 6 & a maximum of 8 characters");
		return false;
	}
	if(cSec.length<6 || cSec.length > 8 ){
		alert("Password field should have a minimum of 6 & a maximum of 8 characters");
		return false;
	}
	if(nSec==cSec){
		for(i=0;i<nSec.length-3;i++){
			var str3=nSec;
			var str4=str3.charCodeAt(i)+"";
				if(
					((parseInt(nSec.charAt(i+1))==parseInt(nSec.charAt(i))+1)
				&&  (parseInt(nSec.charAt(i+2))==parseInt(nSec.charAt(i))+2)
				&&  (parseInt(nSec.charAt(i+3))==parseInt(nSec.charAt(i))+3))
				||
					((parseInt(nSec.charAt(i+1))==parseInt(nSec.charAt(i))-1)
				&&  (parseInt(nSec.charAt(i+2))==parseInt(nSec.charAt(i))-2)
				&&  (parseInt(nSec.charAt(i+3))==parseInt(nSec.charAt(i))-3))
				){
					alert("Consecutive characters/digits not allowed in password");
					return false;
				}
				else if((nSec.charCodeAt(i)==nSec.charCodeAt(i+1))
				&&(nSec.charCodeAt(i+1)==nSec.charCodeAt(i+2))){
					alert("Repeated characters/digits not allowed in password");
					return false;
				}
				else if(
					((nSec.charCodeAt(i+1)== parseInt(str4)+1)
				&&  (nSec.charCodeAt(i+2)==parseInt(str4)+2)
				&&  (nSec.charCodeAt(i+3)==parseInt(str4)+3))
				||
					((nSec.charCodeAt(i+1)==parseInt(str4)-1)
				&&  (nSec.charCodeAt(i+2)==parseInt(str4)-2)
				&&  (nSec.charCodeAt(i+3)==parseInt(str4)-3))
				){
					alert("Consecutive characters/digits not allowed in password");
					return false;
				}

			}
				return true;
			}
			else{
			alert("New password and confirm password should be same.");
			return false;
			}
}
function disableConfirmButton(id)
{
	document.getElementById(id).style.display="none";
	return true;
}


function checkAgreeCheckBox(eleName,msg){

   if(!$('#'+eleName).is(":checked")){

	displayJSErrorMessageForLogin('err',msg);
	return false;
   }
   return true;
}

function Uialert(msg){
	displayJSErrorMessageForLogin('err', msg);
}


function confirmModel(data){
	var confirmData={"termsData":data};
	$('#termsModalContainer').loadTemplate("scb/newGUI/uxUplift/templates/components/confirmModalWindow.html", confirmData, {afterInsert:function(){
			confirmTermsModal();
		}
	});
}

function logOutModel(data){
	var confirmSessionData='';
	var sessionMsg='';
	if(data == '5M'){

		sessionMsg = 'Your session has been idle for the last 5 minutes. To protect your account security, please log out of the iBanking service once you have completed your banking transactions.';

	}else if(data == '8M'){

		sessionMsg = 'Your session has been idle for the last 8 minutes. To protect your account security, please log out of the iBanking service once you have completed your banking transactions.';

	}else if(data == '10M'){

		sessionMsg = 'Sorry, this session has been time out for security reason. Please log in again using your username and Password.';

	}else{
		sessionMsg = 'Do you want to Logout now?';
	}
	confirmSessionData = {"termsData":sessionMsg};
	$('#termsModalContainer').loadTemplate("scb/newGUI/uxUplift/templates/components/confirmModalWindow.html", confirmSessionData, {afterInsert:function(){
			confirmLogoutModal(data);
		}
	});
}


function encrypt(enfrmVal)
{
return enfrmVal;
}

function decrypt(defrmVal)
{
return defrmVal;
}

function mach(mafrmVal)
{
return mafrmVal;
}

//MOB2Changes - Start
    if(window.legacyView == null || typeof window.legacyView =="undefined")
    {
         window.legacyView = {
            handlePostMessages: function(event){
            if(event.data && event.data.indexOf("|") > 0)
            {
                var functionName = event.data.split("|")[0];
                var functionArgs = event.data.split("|")[1];
            }
            else if(event.data)
            {
                //evaluating script
                try{
                eval(event.data);
                }catch(err)
                {
                }
            }

            },
            legacyAppLoaded: function(response){
                if(typeof response == "undefined")
                {
                    response = "";
                }
                window.parent.postMessage("legacyAppLoaded|" +  response, "file://");
            },
            setUp: function(){
                window.addEventListener("message",window.legacyView.handlePostMessages,false);
                window.parent.postMessage("onLegacyAppLoaded|success", "file://");
            },
            loadLogin: function(){
                window.parent.postMessage("{\"action\":\"login\"}");
            },

            openMenu: function(animated){
                if(typeof response == "undefined")
                {
                    response = "";
                }
                window.parent.postMessage("openMenu|" +  animated, "file://");
            },
            renewToken: function(){
                //Do something to get new token
                window.parent.postMessage("newToken", "file://");
            },
            show: function(direction){
                if(typeof direction =="undefined")
                {
                    direction="";
                }
                window.parent.postMessage("show|" +  direction, "file://");
            },
            hide: function(direction){
                if(typeof direction =="undefined")
                {
                    direction="";
                }
                window.parent.postMessage("hide|" +  direction, "file://");
            },
            handleLoginComplete: function(){
                window.parent.postMessage("handleLoginComplete|", "file://");
            },
            gotoSoftTokenRegistration: function(){
                window.parent.postMessage("gotoSoftTokenRegistration|", "file://");
            },
            handleLegacySoftTokenPin: function(){
                window.parent.postMessage("handleLegacySoftTokenPin|", "file://");
            },
            handleLegacyOfflinePin: function(errorMsg){
                window.parent.postMessage("handleLegacyOfflinePin|" + errorMsg, "file://");
            },
            handleLegacyChallengePin: function(challengeCode, errorMsg){
                window.parent.postMessage("handleLegacyChallengePin|" + challengeCode + "|" + errorMsg, "file://");
            }
        };
    }

    if(isMobile2)
    {
            window.open = function (open) {
            return function (url, name, features) {
                    if(name === "_system"){
                    window.legacyView.legacyAppLoaded(JSON.stringify({'action':'openFiles','url':url,'name':name}));
                    }else {
                        return open.call(window, url, name, features)
                    }
                return;
        };
        }(window.open);

            //New methods for getting the latest token
             function callIbnkMethods(pattern, args)
             {

                    switch(pattern){

                        case "touchIdRegister": {
                            try{
                                touchIDlogoLogonClick();
                            } catch(err){}
                            break;
                        }
                        case "refreshToken": {
                            getReqTokenMob2();
                            break;
                        }
                        case "ajaxALPRequest": {
                            reqALPMob2(args);
                            break;
                        }
                        case "configureTouch": {
                            try{
                                $("#touchid_logo_postlogin a").click();
                            } catch(err){}
                            break;
                        }
                    }
             }

            function getReqTokenMob2()
            {
                        $.ajax({type:'get',url: appContextPathWithIBank+"?ser=200&act=3",async: true, dataType: 'application/json', success: function(data){
                        var responseTxt = data.trim();
                        try{
                        var respObj = JSON.parse(responseTxt);
                        } catch(e){
                        window.legacyView.handleLegacyOfflinePin();
                        return;
                        }
                        respObj["action"] = "refreshToken";
                        window.legacyView.legacyAppLoaded(JSON.stringify(respObj));
                        }, error: function(data){return {}}
                        });
            }
            function reqALPMob2(args)
            {
                $.ajax({type:'get',url: args,async: true, dataType: 'application/json', success: function(data){
                    window.legacyView.legacyAppLoaded("ajaxALPRequest");
                }, error: function(data){return {}}
                });
            }

    }
           //MOB2Changes - End

           // Tool tip logic - Start

           var getProductsCode;
           async function fetchCodeformCMS(){
             //BH cross border purpose code fetch from cms
             var response = await fetch('https://av.sc.com/configuration/ibanking/bh/crossborderSwiftCode.json');
             getProductsCode = await response.json();
           }
           window.onload = fetchCodeformCMS();

           $(document).ready(function(){
             $(document).on('mouseover touchstart', '.tooltip-icon' , function(){
               ShowTooltip()
             });
           });

           function ShowTooltip(){
             let e = document.getElementById("trancode");
             let code = e.options[e.selectedIndex].value;
             if(getProductsCode.products[code] && code !== "sel"){
               document.querySelector('#tooltip').innerHTML = "";
               document.querySelector('#tooltip').innerHTML = "<span class='tooltiptext'>" + getProductsCode.products[code].desc + "</span>";
             }
             else{
               document.querySelector('#tooltip').innerHTML = "";
             }
           }
           // Tool tip logic - End
