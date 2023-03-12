function merchantGenerateEtac(frm)
	{
		
		var debitAcc = frm.debitAcc1.options[frm.debitAcc1.selectedIndex].text;
		var debitValue = frm.debitAcc1.options[frm.debitAcc1.selectedIndex].value;
		if(debitValue == "NOSEL")
		{
		   Uialert("Please select the Debit Account.");
		   return;
		
		}
		
		
		frm.ser.value=3;
		frm.act.value=66;
		frm.debitValue.value=debitValue;
		frm.option.value="MerchantEtacGeneration";
		frm.action=appContextPathWithIBank;
		submitLoadingProgress(frm,appContextPathWithIBank);
		
	}
	
function merchantPaymentConfirmation(frm)
{
	
	
	
	if(frm.eCode.value.length == 0)
	{
		Uialert("Please enter the eTAC Code");
	    return;
	}
	
	frm.ser.value=3;
	frm.act.value=66;
	frm.option.value="MerchantEPaymentConfirmation";
	frm.action=appContextPathWithIBank;
	submitLoadingProgress(frm,appContextPathWithIBank);
	
}


function merchantPaymentCancel(frm)
{
	frm.ser.value=3;
	frm.act.value=66;
	frm.action=appContextPathWithIBank;
	frm.option.value='MerchantRedirection';
	submitLoadingProgress(frm,appContextPathWithIBank);
}


function cancelRedirectToMerchant(frm,actionURL)
{
	loadJSP_Forms_PreLogin('loginTopFrame',actionURL,'','','PreLogin','LoadingProgress','','');
}


function redirectToMerchantSites()
{
		
	//alert('isSessionAvailable :::: '+isSessionAvailable+' preLoginActionURL '+preLoginActionURL+'merchantFormIdentifcation:  '+merchantFormIdentifcation);
	
	if(isSessionAvailable!=='undefined' && isSessionAvailable!='NOT')
	{
		if(isSessionAvailable=='NO' && preLoginActionURL!=='undefined' && preLoginActionURL!='N' && preLoginActionURL.length>15)
		{
			//alert('pre login logic '+preLoginActionURL);
			
			loadJSP_Forms_PreLogin('loginTopFrame',preLoginActionURL,'','','PreLogin','LoadingProgress','','');
		}
		else if(isSessionAvailable=='YES' && merchantFormIdentifcation!=='undefined' && merchantFormIdentifcation.length>1)
		{
			//alert('post login logic '+merchantFormIdentifcation);
		    merchantPaymentCancel(merchantFormIdentifcation);
		}
    }
}

function enableRedirecting(frm)
{
	submitLoadingProgress(frm,appContextPathWithIBank+"?ser=3&act=66&option=MerchantRedirection");
} 

function billPayPopUp(){
	var url = 'https://sc.fonepay.com/#/';
	var sessionMsg = "<div><p style='text-align:justify;'>This is to inform that by clicking on the hyperlink, you will be leaving SC Mobile App and entering a website operated by other parties:</p><p style='text-align:justify;'>Such links are only provided on our website for the convenience of the Client and Standard Chartered Bank does not control or endorse such websites, and is not responsible for their contents.</p><p style='text-align:justify;'>The use of such website is also subject to the terms of use and other terms and guidelines, if any, contained within each such website. In the event that any of the terms contained herein conflict with the terms of use or other terms and guidelines contained within any such website, then the terms of use and other terms and guidelines for such website shall prevail.</p><p style='text-align:justify;'>Thank you for visiting SC Mobile App.</p></div>";
	var sessionTitle = "<p style='text-align:justify;font-weight: bold'>You're about to leave our website</p>";
	confirmSessionData = {"termsData2":sessionMsg,"termsTitle2":sessionTitle};
	$('#termsModalContainer').loadTemplate("scb/newGUI/uxUplift/templates/components/confirmMerchantModalWindow.html", confirmSessionData, {afterInsert:function(){
		merchantConfirmpop(url);
	}
	});
}