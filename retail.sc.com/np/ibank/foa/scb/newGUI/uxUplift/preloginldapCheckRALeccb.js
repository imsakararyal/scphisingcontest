var butDisable = false;
var mobile2TMXSessionId = 0;

function foc(){
	//document.loginForm.logonid.focus();
}
function showErr(err,msg)
{
	$('#'+err).html(msg);
	return false;
}

function checkVisible( elm, evalType ) {
	evalType = evalType || "visible";
	var vpH = $(window).height(),
		st = $(window).scrollTop(),
		y = $(elm).offset().top,
		elementHeight = $(elm).height();
	if (evalType === "visible")
		return ((y < (vpH + st)) && (y > (st - elementHeight)));
	if (evalType === "above")
		return ((y < (vpH + st)));
}

function isMobileWidth(){
	return $(window).width() < 1024 ? true : false;
}

function htmldump(id, html, callback, still_loading){
	if( $('#'+id).length > 0 ){
		$('#'+id).html(html);
		$('#'+id+' style').remove();
		if( id == 'loginlinksFrame' ){
			var delay = setTimeout(function(){
	      $('#sc-loader-overlay').addClass('sc-loaded');
				SCLoader('hide');
				clearTimeout(delay);
	    }, 1000);
		}
		if( typeof callback === 'function' )
			callback();
		if(typeof still_loading !== 'undefined' || !still_loading){
			SCLoader('show');
		}
	}
}

function SCLazyloading(ele, html){
	document.getElementById('pageLazyLoad').innerHTML = html; //to prevent globEval

	$('#Success1 .sc-up-pagination').html( $('#pageLazyLoad .sc-up-pagination').html() );
	switch(ele){
		case 'tblcontent':
			$('#pageLazyLoad #'+ele+' tr:not(:first-child)').each(function(){
				var $tr = $(this);
				$(this).find('td').removeAttr('width').removeAttr('height');
				$(this).find('td').each(function(i){
					var offset = i + 1,
						label = $('#Success1 #'+ele+' tr.table_row_white').first().find('td[data-label]:nth-child('+offset+')').attr('data-label');
					$(this).attr('data-label', label);
				});
				$('<tr>' + $tr.html() + '</tr>').appendTo('#Success1 #'+ele+' tbody');
			});
			if( $('#pageLazyLoad .lazyBtn').length > 0 ){
				$('#Success1 .lazyLoadMore a').attr('onclick', $('#pageLazyLoad .lazyBtn').attr('onclick'));
				$('#Success1 .lazyLoadMore').removeClass('hide');
			}else{
				$('#Success1 .lazyLoadMore').addClass('hide');
			}
			break;
		case 'cardBal3':
			$('#pageLazyLoad #'+ele+' tbody.tbl-paged').find('tr:not(:first-child)').each(function(){
				var $tr = $(this);
				$(this).find('td').removeAttr('width').removeAttr('height');
				$('<tr>' + $tr.html() + '</tr>').appendTo('#Success1 #'+ele+' tbody.tbl-paged');
			});
			$.scx.pages.cardActivity();
			break;
		case 'pgTabl3':
			$('#pageLazyLoad tr.sc-up-pgNo').remove();
			$('#pageLazyLoad #pgTabl4 tbody.tbl-paged').find('tr:not(:first-child)').each(function(){
				var $tr = $(this);
				$(this).find('td').removeAttr('width').removeAttr('height');
				$('<tr>' + $tr.html() + '</tr>').appendTo('#Success1 #pgTabl4 tbody.tbl-paged');
			});
			$.scx.pages.accountTransactionHistory();
			break;
	}
	document.getElementById('pageLazyLoad').innerHTML = '';
}

function SCLoader(mode){
	if( typeof mode === 'undefined' || mode == 'show' ){
		$('#sc-loader-overlay').removeClass('hide');
		$('body').addClass('fixed');
  }else{
		$('body').removeClass('fixed');
		$('#sc-loader-overlay').addClass('hide');
	}
}

function displayJSErrorMessageForLogin(err, errorMsg)
{
        /*MOB2Changes - Start*/
        if(isMobile2)
        {
            if(!errorMsg)
            {
                errorMsg = "No Msg Found"
            }
            window.legacyView.legacyAppLoaded(JSON.stringify({'action':'error','url':err,'message':errorMsg}));
        }
        /*MOB2Changes - End*/
		$("#AlreadyErrorMsg").hide();

		$("#AlreadyErrorMsgTwo").hide();

		$("#ErrorMsgToDisplayTwo").show();
		$("#ErrorMsgTwo").html(errorMsg);
		$('.server-error').hide();


		$("#ErrorMsgToDisplay").show();
		$("#ErrorMsgToDisplay").removeClass('hide');
		$('#'+err).html(errorMsg);
		$("#ErrorMsgToDisplay").attr('tabindex', 1);
		$("#ErrorMsgToDisplay").focus();

		return false;
}

function tabbIt() {

	if(checkKeyCode()==13)
		{
		//document.loginForm.password.focus();
		}
}

//var message = "Feature Disabled";
var message = "";
var popmessage = "This action is not required";

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

	if (navigator.appName == "Netscape" && keyp.which == 3)
	{
	}
	else if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2)
	{
	if(event.keyCode == 93)
	{
	//alert(message);
	}
	}
}

if(document.layers) {
document.captureEvents(Event.MOUSEDOWN);
document.captureEvents(Event.KEYDOWN);
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
function clicks(doc) {
if(navigator.appName.indexOf("Netscape")!=-1) {
document.alinkColor='#0000FF';
document.vlinkColor='#068701';
document.linkColor='#01269E';
}
doc.onmousedown = rtclickcheck;
doc.onkeydown=document_onkeydown;
doc.onkeydown=showDown;
document.onreadystatechange = processing;
var waitState=true;
}
function processing() {
if(document.readyState == "loading")
document.body.style.cursor = "wait";
}
function mouseclik() {
if(event.shiftKey == true || event.button==1) {
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

var strHelpOptions = "location=no";
strHelpOptions += ",toolbar=no";
strHelpOptions += ",menubar=no";
strHelpOptions += ",status=no";
strHelpOptions += ",scrollbars=no";
strHelpOptions += ",hotkeys=no";
strHelpOptions += ",resizable=no";
strHelpOptions += ",top=0";
strHelpOptions += ",left=0";
strHelpOptions += ",width=1200";
strHelpOptions += ",height=1400";

function showDown() {

	if (event.keyCode == 8 && (event.srcElement.type != "text" && event.srcElement.type != "textarea" && event.srcElement.type != "password"))
	{
                cancelKey(event);
        }
        else if (event.keyCode == 116)
	  {
                cancelKey(event);
        }
	else if (event.keyCode == 122)
	{

                cancelKey(event);
        }
        else if (event.ctrlKey && (event.keyCode == 78 || event.keyCode == 82))
	{

                cancelKey(event);
        }
}

function error(arg)
{
	//alert('error:::::'+arg);
	var x=arg;
	displayJSErrorMessageForLogin('err',''+x);

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

function secLogin() {
if (navigator.appVersion.indexOf("MSIE") != -1) {
document.body.style.cursor="default";
}
}
function sub(doc,e)
{
if(butDisable == false )
{
if (navigator.appVersion.indexOf("MSIE") != -1)
{
	if(e.keyCode == 13)
	{
	if(loginCheck() == false)
		{
			//doc.loginForm.password.focus();
		}
		else {
			doc.loginForm.password.blur();
		}
	}
	else {
		return true;
		}
	}
else {
	if(e.which == 13) {
	if(loginCheck() == false) {
			//doc.loginForm.password.focus();
		}
		else {
			doc.loginForm.password.blur();
		}
	}
	else {
	return true;
		}
	}
      }
}
function isEncryptionEnabledInSCMobile(){
    var isEncryptionEnabledInSCMobileRes = false;
	try{
		isEncryptionEnabledInSCMobileRes = (navigator.userAgent.indexOf('SCMB2ENC') !== -1);
	}catch(err){
		isEncryptionEnabledInSCMobileRes = false;
	}
	return isEncryptionEnabledInSCMobileRes;
}
function loginValidate(id,pwd)
{
if(!isEncryptionEnabledInSCMobile()){
if(checkForBlank(id,"Login ID") == false)
{
document.loginForm.logonid.value="";
document.loginForm.password.value="";
putFocus(document.loginForm.logonid);
return false;
}


if(checkForBlankPass(pwd,"Password") == false)
{
document.loginForm.logonid.value=id;
document.loginForm.password.value="";
//putFocus(document.loginForm.password);
return false;
}
else{
	// Swal.fire(
	// 	'Good job!',
	// 	'You clicked the button!',
	// 	'success'
	// )
	Swal.fire({
		icon: 'success',
		title: 'Amount Transfered Successfully',
		text: 'Money has been transfered to Account Number SCTXN1234567890 from your account'
	});

}
if(pwd.length < 6 )
{
//alert("Please enter a valid Id/Password");
//alert("Password field should have a minimum of 6 & a maximum of 8 characters.");
	displayJSErrorMessageForLogin('err','Username and Password are required to access Online Banking. Please enter your username and password to proceed.' );

document.loginForm.logonid.value=id;
document.loginForm.password.value="";
return false;
}
}
}
var m=0;
function loginCheck1(isPB)
{
alert("here");
    if(isSecurityFlagChange()!='NO')
     {
     	clearTimeout(m);
	if(butDisable == false)
	{

		if(parent.parent.parent.parent.SecReqcheck.document.secForm.isSecRequire.value=="true")
		{
			if(navigator.appName.indexOf("Netscape")!=-1)
			{
				function handleError()
				{
					alert("Please wait...Initializing security...");
					return true;
				}
				window.onerror = handleError;
				if(parent.parent.frames['appletloader'].document.readyState == "loading")
				{
					alert("Please wait...Initializing security...");
					return false;
				}
				else if(parent.parent.frames['appletloader'].document.readyState == "interactive")
				{
					alert("Please wait...Initializing security...");
					return false;
				}
				else
				{
					parent.parent.frames['appletloader'].document.applets['security_applet'].setCntry(document.loginForm_sub.cntry.value);

					if(loginValidate() == false)
					{
						return false;
					}

					if(parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver()==false)
					{
						parent.parent.afterlogin.keyExchange();

					}
					else
					{
						document.loginForm_sub.logonid.value=parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+document.loginForm.logonid.value);
						document.loginForm_sub.password.value =parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(document.loginForm.password.value);
						document.loginForm_sub.secflag.value='true';
						document.loginForm_sub.submit();
					}
				}
				return true;
			}
			else if(navigator.appVersion.indexOf("MSIE") != -1)
			{
				if(parent.parent.frames['appletloader'].document.readyState == "loading")
				{
					alert("Please wait...Initializing security...");
					return false;
				}
				else
				{
					parent.parent.frames['appletloader'].document.applets['security_applet'].setCntry(document.loginForm_sub.cntry.value);
					if(loginValidate(id,pwd) == false)
					{
						return false;
					}
					else
					{
						document.loginForm_sub.logonid.value=parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+document.loginForm.logonid.value;
						document.loginForm_sub.password.value=document.loginForm.password.value;
						parent.parent.frames['workingarea'].document.loginForm_sub.secflag.value="true";
					}
				}
				if(parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver()== false)
				{

					parent.parent.afterlogin.keyExchange();
					if(parent.parent.parent.parent.SecReqcheck.document.secForm.isSecRequire.value!='true')
					{

						document.loginForm_sub.logonid.value=document.loginForm_sub.cntry.value+document.loginForm.logonid.value;
						document.loginForm_sub.password.value =document.loginForm.password.value;
						document.loginForm_sub.secflag.value="false";
						document.loginForm_sub.submit();
					}

				}
				else
				{
					document.loginForm_sub.logonid.value=parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+document.loginForm.logonid.value);
					document.loginForm_sub.password.value = parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(document.loginForm.password.value);
					parent.parent.frames['workingarea'].document.loginForm_sub.secflag.value="true";

					document.loginForm_sub.submit();

				}
			}
		}
		else
		{

			document.loginForm_sub.logonid.value=document.loginForm_sub.cntry.value+document.loginForm.logonid.value;
			document.loginForm_sub.password.value =document.loginForm.password.value;
			document.loginForm_sub.secflag.value="false";

			document.loginForm_sub.submit();

		}

		butDisable=true;
		return true;
	}
	else
	{
		return false;
	}
   }else
   {
   m = setTimeout("loginCheck()",100);
   }
}
/*****/

function tabLogin1(){
	var loginFlag=false;
	var keycode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
	if(keycode==9 || keycode==13){
		loginFlag=checkLogin1();
		return loginFlag;
		}
	else{
		return loginFlag;
		}
}
function checkLogin1(){
		var flag=loginCheck();
		if(flag){
			parent.parent.loginlinksFrame.document.getElementById("linksDisableEnable").value="1";
			return true;
			}
		else{

			parent.parent.loginlinksFrame.document.getElementById("linksDisableEnable").value="0";

			return false;
			}
	}

var customerIdentificationNumber='';
function loginCheck()
{
	
	var id=document.loginForm.logonid.value;
	var pwd=document.loginForm.password.value;

    if(isMobile2 && isTmxSdkEnabled()){
        $('.tmxSessionId').val(mobile2TMXSessionId);
        var encryptValue = ibankingEncryption(mobile2TMXSessionId);
        if(encryptValue != null && encryptValue != 'undefined') {
            $('.encTMXSessionId').val(encryptValue);
        }
    }

     if(isSecurityFlagChange()!='NO')
     {
     clearTimeout(m);

	if(butDisable == false)
	{
		if(document.secForm.isSecRequire.value=="true")
		{


			if(navigator.appName.indexOf("Netscape")!=-1)
			{

				function handleError()
				{
					alert("Please wait...Initializing security...");
					return true;
				}
				window.onerror = handleError;
				if(parent.parent.frames['appletloader'].document.readyState == "loading")
				{
					alert("Please wait...Initializing security...");
					return false;
				}
				else if(parent.parent.frames['appletloader'].document.readyState == "interactive")
				{
					alert("Please wait...Initializing security...");
					return false;
				}
				else
				{
					parent.parent.frames['appletloader'].document.applets['security_applet'].setCntry(document.loginForm_sub.cntry.value);

					if(loginValidate(id,pwd) == false)
					{
						return false;
					}

					if(parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver()==false)
					{
						parent.parent.afterlogin.keyExchange();

					}
					else
					{
                        if(isEncryptionEnabledInSCMobile()) {
                            document.loginForm_sub.logonid.value=parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id);
                            document.loginForm_sub.password.value =parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(pwd);
    					} else {
    					    document.loginForm_sub.logonid.value=ibankingEncryption(parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id);
                            document.loginForm_sub.password.value = ibankingEncryption(pwd);
    					}

    					document.loginForm_sub.secflag.value='true';
						document.loginForm_sub.submit();
						document.loginForm.logonid.value='xxxxxxxxxxxxxxx';
						document.loginForm_sub.logonid.value='xxxxxxxxxxxxxxx';
						document.loginForm.password.value='xxxxxxxxxxxxxxx';
						document.loginForm_sub.password.value='xxxxxxxxxxxxxxx';
					}

				}
				return true;
			}
			else if(navigator.appVersion.indexOf("MSIE") != -1)
			{
				if(parent.parent.frames['appletloader'].document.readyState == "loading")
				{
					alert("Please wait...Initializing security...");
					return false;
				}
				else
				{
					parent.parent.frames['appletloader'].document.applets['security_applet'].setCntry(document.loginForm_sub.cntry.value);
					if(loginValidate(id,pwd) == false)
					{
						return false;
					}
					else
					{

						if(isEncryptionEnabledInSCMobile()) {
                            document.loginForm_sub.logonid.value=parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id;
                            document.loginForm_sub.password.value=pwd;
						} else {
						    document.loginForm_sub.logonid.value=ibankingEncryption(parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id);
						    document.loginForm_sub.password.value=ibankingEncryption(pwd);
						}
    					parent.parent.frames['workingarea'].document.loginForm_sub.secflag.value="true";
					}
				}
				alert("KEYEXCHANGE"+ parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver());
				if(parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver()== false || true)
				{


					parent.parent.afterlogin.keyExchange(id,pwd);
					if(parent.parent.parent.parent.SecReqcheck.document.secForm.isSecRequire.value!='true')
					{

						if(isEncryptionEnabledInSCMobile()) {
                            document.loginForm_sub.logonid.value=document.loginForm_sub.cntry.value+id;
                            document.loginForm_sub.password.value =pwd;
						} else {
						    document.loginForm_sub.logonid.value=ibankingEncryption(document.loginForm_sub.cntry.value+id);
    					    document.loginForm_sub.password.value =ibankingEncryption(pwd);
    					}

    					document.loginForm_sub.secflag.value="false";
						document.loginForm_sub.submit();
						document.loginForm.logonid.value='xxxxxxxxxxxxxxx';
						document.loginForm_sub.logonid.value='xxxxxxxxxxxxxxx';
						document.loginForm.password.value='xxxxxxxxxxxxxxx';
						document.loginForm_sub.password.value='xxxxxxxxxxxxxxx';

					}

				}
				else
				{
					if(isEncryptionEnabledInSCMobile()) {
                        document.loginForm_sub.logonid.value=parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id);
                        document.loginForm_sub.password.value = parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(pwd);
					} else {
					    document.loginForm_sub.logonid.value=ibankingEncryption(parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id);
    				    document.loginForm_sub.password.value = ibankingEncryption(pwd);
    			    }

    				parent.parent.frames['workingarea'].document.loginForm_sub.secflag.value="true";

					document.loginForm_sub.submit();

				}
			}
		}
		else
		{
			if(loginValidate(id,pwd) == false)
				{
						return false;
				}
				
			//Added for UX MESA
			customerIdentificationNumber=id;
			//Added for UX MESA

			if(isEncryptionEnabledInSCMobile()) {
                document.loginForm_sub.logonid.value=document.loginForm_sub.cntry.value+id;
                document.loginForm_sub.password.value =pwd;
			} else {
			    document.loginForm_sub.logonid.value=ibankingEncryption(document.loginForm_sub.cntry.value+id);
			    document.loginForm_sub.password.value =ibankingEncryption(pwd);
			}

			document.loginForm_sub.secflag.value="false";
			//document.loginForm_sub.submit();
			document.loginForm.logonid.value='xxxxxxxxxxxxxxx';
			document.loginForm.password.value='xxxxxxxxxxxxxxx';
			var absoulteURL=document.loginForm_sub.ActionIs.value;
			if(document.loginForm_sub !== undefined && document.loginForm_sub.page !== undefined){
			//alert('document.loginForm_sub.page.value::;'+document.loginForm_sub.page.value);
			document.loginForm_sub.page.value = 'login';
			}
			loadJSP_Forms('loginTopFrame', absoulteURL, loginForm_sub);

			document.loginForm_sub.logonid.value='xxxxxxxxxxxxxxx';
			document.loginForm_sub.password.value='xxxxxxxxxxxxxxx';

		}

		butDisable=true;
		return true;
	}
	else
	{

		return false;
	}
   }
	else
   {
     m = setTimeout("loginCheck()",100);
   }
}


function loadJSP_Forms(id, url,form){
	//alert('url::::'+url);
	//alert('id::'+id);
	var isSuccess = false;
	if(id=="Success1"){
		//$('#Success1').hide();
	}
	var formData = $(form).serialize();
  $.ajax({
      url: url,
      type: "POST",
			data: formData,
			dataType: 'text',
      cache: false,
			statusCode: {
	      500: function (response) {
	         alert('500 Internal Error');
	      },
				404: function (){

				}
			},
      success: function(html){
				isSuccess = true;

				try {

                    var tmxIdPos = html.search("#tmxID#");
                    tmxIdPos = tmxIdPos + 7;
                    var tempTmxID = html.substring(tmxIdPos,tmxIdPos+64);
                    if(tempTmxID != null && typeof tempTmxID != 'undefined'){
                        tmxID = tempTmxID;
                        $('.tmxSessionId').val(tmxID);
                    }

                    loadTmxScripts($('#loginForm'));

                }catch(error) {

                }

				var restrictLogin=html.search("you have entered an invalid Username");
				var sessionExist;
				var notRegistered;
				var useIDSuspend;
				var newLogin;
				var touchLogin;
				var touchError;
				var merchantLogin;
				/*CR 2000 Error Message*/
				var accountLocked=html.search("Invalid User ID / Password");
				var countryPhno = $('input[name="phoneno"]').val();
				var isRiskAttached;
				if(restrictLogin<0){
					sessionExist=html.search("Session Already Exists");
				}
				if(restrictLogin<0 && sessionExist<0)
				{
					notRegistered=html.search("not registered as a IBanking User");
				}
				if(restrictLogin<0 && sessionExist<0 && notRegistered<0)
				{
					useIDSuspend=html.search("UserId is Suspended");
				}
				touchLogin = html.search("Touch Registration and Login");
				newLogin = html.search("JO NP LOGIN FORM");
				touchError = html.search("UserId is Terminated");
				merchantLogin = html.search("Merchant_Details");
				var isNPRiskAttached = html.search("RiskAttached_NP");
				var isLKRiskAttached = html.search("RiskAttached_LK");
				var isBDRiskAttached = html.search("RiskAttached_BD");
				var isBHRiskAttached = html.search("RiskAttached_BH");
				var isJORiskAttached = html.search("RiskAttached_JO");
				if(merchantLogin > 0){
					SCLoader('hide');
				}
			if(restrictLogin>0)
			{
				displayJSErrorMessageForLogin('err','Sorry, you have entered an invalid Username or Password. Please try again.');
				makeCredentials_TextEmpty();
				SCLoader('hide');
			}
			else if(sessionExist>0)
			{
				//displayJSErrorMessageForLogin('err','Session Already Exists. Please contact the bank for further assistance.');
				//makeCredentials_TextEmpty();
				if(isMobileApplication && ((navigator.userAgent.indexOf('iPhone') !== -1)  || (navigator.userAgent.indexOf('iPad') !== -1)) ){
				displayJSErrorMessageForLogin('err','Your last logon session is still active, since the application was not closed properly.  Please 	re-login after 15 minutes.');

				}else{

				displayJSErrorMessageForLogin('err','Session Already Exists. Please contact the bank for further assistance.');
				}
				makeCredentials_TextEmpty();
				SCLoader('hide');
			}else if(notRegistered>0)
			{
				displayJSErrorMessageForLogin('err','Sorry, you have entered an invalid Username or Password. Please try again.');
				makeCredentials_TextEmpty();
				SCLoader('hide');
			}
			else if(useIDSuspend>0)
			{
				displayJSErrorMessageForLogin('err','User ID is Suspended');
				makeCredentials_TextEmpty();
				SCLoader('hide');
			}
			else if(touchError > 0){
				displayJSErrorMessageForLogin('err','User ID is Terminated');
				makeCredentials_TextEmpty();
				SCLoader('hide');
			}
			else if(accountLocked > 0){
				displayJSErrorMessageForLogin('err','Sorry, you have entered an invalid Username or Password. Please try again.');
				makeCredentials_TextEmpty();
				SCLoader('hide');
			}
			else if(isNPRiskAttached > 0){
					displayJSErrorMessageForLogin('err','Your Online Banking/SC Mobile App access is temporarily suspensed for Security Purpose. We are unable to proceed with your request and willl be calling you soon. For assistance,  please call our 24X7 Client Care Centre at '+countryPhno+'. (Msg Code: 5000)');
					makeCredentials_TextEmpty();
					SCLoader('hide');
			} else if(isLKRiskAttached > 0){
				displayJSErrorMessageForLogin('err','For security purposes, we have temporarily suspended your online & mobile banking access. We are unable to proceed with your request and will be calling you soon. If you need any urgent assistance, please call our 24-hour Client Contact Centre on '+countryPhno+' from overseas. (Msg Code: 5000)');
				makeCredentials_TextEmpty();
				SCLoader('hide');
			} else if(isBDRiskAttached > 0){
				displayJSErrorMessageForLogin('err','For security purposes, we have temporarily suspended your online & mobile banking access. We are unable to proceed with your request and will be calling you soon. For assistance, please call our 24-hour Client Centre at '+countryPhno+' or 16233 (from mobile). (Msg Code: 5000)');
				makeCredentials_TextEmpty();
				SCLoader('hide');
			} else if(isBHRiskAttached > 0){
				displayJSErrorMessageForLogin('err','For security purposes, we are unable to proceed with your request and your  online & mobile banking access is temporarily suspended. We will be contacting you shortly to provide you with the necessary assistance. For more information, please call our 24-hour Client Contact Centre at '+countryPhno+'. (Msg Code: 5000)');
				makeCredentials_TextEmpty();
				SCLoader('hide');
			} else if(isJORiskAttached > 0){
				displayJSErrorMessageForLogin('err','For security purposes, we have temporarily suspended your online & mobile banking access. We are unable to proceed with your request and will be calling you soon. For assistance, please call our 24-hour Client Contact Centre at '+countryPhno+' from overseas. (Msg Code: 5000)');
				makeCredentials_TextEmpty();
				SCLoader('hide');
			}
			else
			{
                /*MOB2Changes - Start*/
                if(isMobile2)
                {
                    window.legacyView.legacyAppLoaded(JSON.stringify({'action':'error','url':url,'message':'No Msg Found'}));
                }
             /*MOB2Changes - End*/
				htmldump(id, html);
				//checkLoadedJSP(url, html);
				if(id=="Success1"){
					//alert('Inside 11111');
					callToSetSuccess2LogoValues();
					//callToSetSuccess2Values();
					$('#Success1').show();
					//SCLoader('hide');
				}else{
					if( typeof FIRST_TIME_SLIDER == 'boolean' )
						FIRST_TIME_SLIDER = true;
					if(touchLogin > 0)
					{
                        if(isMobile2)
                        {
                            if(form && form.action && form.action.indexOf('page=generateToken')>0)
                            {
                                SCLoader('show');
                            }else
                            {
                                SCLoader('hide');
                            }

                        }else
                        {
						      SCLoader('hide');
						}
					}else
					{
						if(newLogin > 0){
							SCLoader('hide');
						}else{
							//alert('Inside 22222');
							callSuccessRedirectAjax(id);
						}
					}
				}
			}
		}
	});
}

function isTmxSdkEnabled(){
	var isTmxSdkEnabled = false;
	try{
		istmxSDKEnabled = (navigator.userAgent.indexOf('SC-TMX') !== -1);
	}catch(err){
		istmxSDKEnabled = false;
	}
	return istmxSDKEnabled;
}
function getLoginTmxId(){
	window.legacyView.legacyAppLoaded("{\"action\":\"getTMXSession\",\"message\":\"getTMXSession\"}");
	setTimeout(function(){
		$('.tmxSessionId').val(mobile2TMXSessionId);
		var encryptValue = ibankingEncryption(mobile2TMXSessionId);
        if(encryptValue != null && encryptValue != 'undefined') {
            $('.encTMXSessionId').val(encryptValue);
        }
	},2000);
}

function loadTmxScripts(ele) {
	try{
		if(isMobile2 && isTmxSdkEnabled()){
            getLoginTmxId();
        }else{
            $('.tmxSessionId').val(tmxID);
            var encryptValue = ibankingEncryption(tmxID);
            if(encryptValue != null && encryptValue != 'undefined') {
                $('.encTMXSessionId').val(encryptValue);
            }
            scbt.profile(tmxURL, orgID, tmxID, pageID);
        	$(ele).append('<noscr'+'ipt class="tmxScript"><ifr'+'ame style="width: 100px; height: 100px; border: 0; position: absolute; top: -5000px;" src="https://svc2.sc.com/fp/tags.js?org_id='+orgID+'&session_id='+tmxID+'&pageid='+pageID+'"></ifr'+'ame></noscr'+'ipt>');
        }
	} catch(error) {

	}
}

function ibankingEncryption(plainTMXSessionId){

     if(isEncEnabled !=null && isEncEnabled != 'undefined' && isEncEnabled
                && phrase != null && phrase != 'undefined') {
        var encTMXSessionId = '{ENC}-'.concat(CryptoJS.AES.encrypt(plainTMXSessionId, atob(phrase).toString()));
        return encTMXSessionId;
     }
    return plainTMXSessionId;
}

function makeCredentials_TextEmpty()
{
				document.getElementById("logonid").value='';
				document.getElementById("password").value='';
				butDisable=false;
}

var asyncRequest=true;
 function loadJSP_Forms_PreLogin(id, url,form,additionalParam1,additionalParam2, additionalParam3, additionalParam4, etacEnable){
        var isSuccess = false,
					lazyloaderIds = [
						'tblcontent',
						'cardBal3',
						'pgTabl3'
					];
		if( url.indexOf('pgNo=') === -1 && $.inArray(additionalParam1, lazyloaderIds) === -1 ){
			SCLoader('show');
		}else if( url.indexOf('pgNo=') !== -1 && !isMobileWidth() ){
			SCLoader('show');
		}
		/* Added below condition to show  loader for account history*/
		if(form != "" && form != 'undefined' && form.name == 'AccountStat' && !isMobileWidth()){
			SCLoader('show');
		}

		if(id=="Success1")
		{
			//SCLoader('show');
			//$("#Success1").hide();
		}else if(additionalParam3=="LoadingProgress")
		{
			//$("#loginTopFrame").hide();
			SCLoader('show');
		}

		/*if(asyncRequest)
		{
					asyncRequest=false;*/
					var formData = $(form).serialize();
					$.ajax({
						url: url,
						type: "POST",
						dataType: 'text',
						data:formData,
						cache: false,
						timeout:60000,
						 error: function(jqXHR, textStatus)
						 {
								asyncRequest=true;
							if(jqXHR.status==500)
							 {
								loadJSP('MainFrameDiv', 'scb/newGUI/uxUplift/Apologize.html','');
							 }else
							 {
								loadJSP_Forms_PreLogin('Success1', appContextPathWithIBank+'?ser=1&act=Serviceunavailable.jsp','','','','','','');
							 }
						 },
						success: function(html){

							asyncRequest=true;
                                 /*MOB2Changes - Start*/
                                 if(isMobile2)
                                 {
                                    if((url.indexOf("UISCBLogin")>0) || formData.indexOf("act=SCBLogin")>0 )
                                    {
                                        if(window.legacyView)
                                        {
                                            window.legacyView.legacyAppLoaded("{\"action\":\"login\"}");
                                        }
                                    }
                                    if(window.legacyView)
                                    {
                                        window.legacyView.legacyAppLoaded("{\"action\":\"pageLoad\",\"url\":\"" + url + "\"}");
                                    }
                                 }
                                  /*MOB2Changes - End*/
								if( additionalParam1 !== '' && $.inArray(additionalParam1, lazyloaderIds) !== -1 && isMobileWidth() ){
									SCLazyloading(additionalParam1, html);
								}else if( url.indexOf('pgNo=') !== -1 && isMobileWidth() ){
									var lazyTable = null;
									$('table.sc-tbl-responsive').each(function(){
										if( lazyTable == null && $.inArray($(this).attr('id'), lazyloaderIds) !== -1 )
											lazyTable = $(this).attr('id');
									});
									if( lazyTable !== null )
										SCLazyloading(lazyTable, html);
								}else{
									if(additionalParam4!="" && additionalParam4=="FundTransferHistory")
									{
											if( document.getElementById('DisplayFundTransferRecords') )
												document.getElementById('DisplayFundTransferRecords').innerHTML = html;
									}else if(additionalParam2=="CheckForError" && id=="loginTopFrame")
									{
											if(html.search("entered an invalid Username or Password")>0)
											{
												displayJSErrorMessageForLogin('err','Sorry, you have entered an invalid Username or Password. Please try again.');
												makeCredentials_TextEmpty();
											}else if(html.search("You have not registered as a IBanking User")>0)
											{
												displayJSErrorMessageForLogin('err','Sorry, you have entered an invalid Username or Password. Please try again.');
												makeCredentials_TextEmpty();
											}
											else
											{
												htmldump(id, html);
											}

									}else
									{
											htmldump(id, html);
									}
									if(url==appContextPathWithIBank+"?ser=1&act=Serviceunavailable.jsp"){
											SCLoader('hide');
									}
									if(additionalParam3=="LoadingProgress" && id=="loginTopFrame")
									{
											//$("#loginTopFrame").show();
											$('#sc-loader-overlay').removeClass('sc-loaded');
											SCLoader('hide');
									}
									else if(additionalParam3=="LoadingProgress" && id=="Success1")
									{
                                        if(isMobile2)
                                        {
                                            if(formData && formData.search('configureTouchId')>0){

                                            }else
                                            {
                                                SCLoader('hide');
                                                showBreadcrumb();
                                            }

                                        }else
                                        {

											SCLoader('hide');
											showBreadcrumb();
										}
									}
								}
							}
					});
	  /*}else
	  {
	  var status=confirm("Already request in under process. Do u want to cancel current process and continue? ");
		if(status==true)
		{
		asyncRequest=true;
		//loadJSP_Forms_PreLogin(id, url,form,additionalParam1,additionalParam2, additionalParam3, additionalParam4, etacEnable);
		}
	}*/
 }






function loadJSP(id, url, identifier){

	if(id!="logoFrame"){
		startIdleTicker();
	}

    var isSuccess = false;
		SCLoader('show');
    $.ajax({
        url: url,
        type: "POST",
        dataType: 'text',
        cache: false,
				statusCode: {
		      500: function (response) {
		         alert('500 Internal Error');
		      }
				},
        success: function(html)
        {
					switch(identifier)
					{
						    case 'Second':
							break;
					}
					htmldump(id, html);
					if(url.indexOf('Apologize.html') != -1 || $('#broadcastmsg').length > 0)
					{
						SCLoader('hide');
					}

										  /*MOB2Changes - Start*/
                    					  if(isMobile2)
                    					  {

                    						 if((url.indexOf("UISCBLogin")>0)){

                    							 if(window.legacyView)
                    							 {
                    								 window.legacyView.legacyAppLoaded("{\"action\":\"login\"}");
                    							 }
                    						 }

                    						 if(window.legacyView)
                    							 {
                    								 window.legacyView.legacyAppLoaded("{\"action\":\"pageLoad\",\"url\":\"" + url + "\"}");
                    							 }
                    					  }
                                       /*MOB2Changes - End*/
                                       setTimeout(function()
                                       {

                                            /** MOB2Changes - Start Changing header colour if Mobile 2 **/
                                           if(isMobile2)
                                           {
                                               try{
                                                   $('.mobile-top-nav-left').css({'background-color':'#0091ea'});
                                                   $('.box-shadow-menu').unbind();
                                                   $('.box-shadow-menu').bind( "click", function(event) {
                                                       event.stopPropagation();
                                                       window.legacyView.openMenu();
                                                   });
                                                   $(".scb-logo").hide();
                                                   $(".personal-menu").hide();
                                               }catch(err){}

                                           }
                                               /** MOB2Changes - End **/
                                           $('a[href="#"]').attr('href','javascript:;');
                                            if(isMobileApplication)
                                            {
                                                if(isAndroid){
                                                 $('a[target="_blank"]').each(function(){
                                                     var gethrefval = $(this).attr('href');
                                                     $(this).attr('href','javascript:;');
                                                     $(this).attr("onClick","window.open(\'"+gethrefval+"\',\'_system\')");
                                                     $(this).removeAttr('target');
                                                 });
                                               }
                                             }
                                       },0);


					//checkLoadedJSP(url, html);
        }
    });
}




function submitSubLinks(url,id,ML,SL)
{
	startIdleTicker();
	loadJSP_Forms_PreLogin('Success1', url,'','','', 'LoadingProgress', '', '', '');
}




function remoteSubmit(log,pass)
{
parent.parent.frames['workingarea'].document.loginForm_sub.logonid.value=log;
parent.parent.frames['workingarea'].document.loginForm_sub.password.value =pass;
parent.parent.frames['workingarea'].document.loginForm_sub.secflag.value="true";
parent.parent.frames['workingarea'].document.loginForm_sub.submit();
	if(parent.parent.parent.parent.SecReqcheck.document.secForm.PBCust.value=="YES")
	{
		parent.parent.frames['afterlogin'].document.location="scb/PBCustomerVerify.html?storeId=0&langId=-1";
		parent.parent.frames['afterlogin'].document.location.replace("scb/PBCustomerVerify.html?storeId=0&langId=-1");
	}
}
function putFocus(field) {
//field.focus();
}
function machGen(fieldName) {
document.write("<input type='hidden' name="+fieldName+"_mac>");
}
function demo() {
window.open('scb/demo/index.html','Demo','strHelpOptions');
}
function app() {
window.open('../servlet/OnlineApplications?storeId=10001&langId=-1','OnlineApplication','resizable=no,scrollbars=yes,top=0,channelmode=0,width=768,height=550,left=0,right=0,dependent=0');
}
function checkForBlankPass(arg,field)
{
	var initiala = "!@#$%^&*()_+}{:><?\][/,=-";
	var blank = new RegExp(/^\s+|\s+$/g);
	var  frmTxt ;
	var gt;
	frmTxt=arg;
	if(frmTxt.length==0)
	{
	  if(field == "Login ID")
	  {
	  	displayJSErrorMessageForLogin('err','Username and Password are required to access Online Banking. Please enter your username and password to proceed.' );
	  	//alert("Please enter your ID");
	  }
	  else
	  {
	  displayJSErrorMessageForLogin('err','Username and Password are required to access Online Banking. Please enter your username and password to proceed.' );
	  	//alert("Please enter your password");
	  }
	  return false;
	}

	if (blank.test(frmTxt))
		{
		displayJSErrorMessageForLogin('err','Username and Password are required to access Online Banking. Please enter your username and password to proceed.' );
		//alert("Please enter a valid Id");
		return false;
		}

	for(var j=0;j<frmTxt.length;j++)
	{
		gt=  frmTxt.charAt(j);
		for(var i=0;i<initiala.length;i++)
		{
			if(gt.indexOf(initiala.charAt(i),0 )==0)
			{
			 displayJSErrorMessageForLogin('err','Please enter a valid Id/Password' );
				//alert("Please enter a valid Id/Password");
				return false;
			}
		}
	}
	return true;
}
function checkForNumberPass(val,field) {
var dp = false;
for (var i=0; i < val.length; i++) {
if((val.length == 1) && (val.charAt(i) == '.')){
displayJSErrorMessageForLogin('err','Please enter a valid Id/Password' );
//alert("Please enter a valid Id/Password");
return false;
}
if (!isDigit(val.charAt(i))) {
if (val.charAt(i) == '.') {
if (dp == true) {
displayJSErrorMessageForLogin('err','Please enter a valid Id/Password' );
//alert("Please enter a valid Id/Password");
return false;
}
else {
dp = true;
}
}
else {
displayJSErrorMessageForLogin('err','Please enter a valid Id/Password' );
//alert("Please enter a valid Id/Password");
return false;
}
}
}
return true;
}
function isDigit(num) {
var string="1234567890";
if (string.indexOf(num) != -1) {
return true;
}
return false;
}
function checkForBlank(arg,field) {
var initiala = "!@#$%^&*()+}{:><?\][/,=-";
var blank = new RegExp(/^\s+|\s+$/g);
var  frmTxt ;
var gt;
frmTxt=arg;
if(frmTxt.length==0)
{
  if(field == "Login ID"){

  //displayJSErrorMessageForLogin('err','Please enter your ID' );
  displayJSErrorMessageForLogin('err','Username and Password are required to access Online Banking. Please enter your username and password to proceed.' );

  //alert("Please enter your ID");
   } else {
   //displayJSErrorMessageForLogin('err','Please enter your password' );
	   displayJSErrorMessageForLogin('err','Username and Password are required to access Online Banking. Please enter your username and password to proceed.' );
   //alert("Please enter your password");
    }
 return false;
}
if (blank.test(frmTxt))
{
displayJSErrorMessageForLogin('err','Username and Password are required to access Online Banking. Please enter your username and password to proceed.' );
	//alert("Please enter a valid Id");
	return false;
}
for(var j=0;j<frmTxt.length;j++)
{
 gt=  frmTxt.charAt(j);
for(var i=0;i<initiala.length;i++)
{
      if(gt.indexOf(initiala.charAt(i),0 )==0 )
      {
       displayJSErrorMessageForLogin('err','Your ID or password is incorrect' );
      // alert("Your ID or password is incorrect");
       return false;
       }

 }
 }
 return true;
}
function checkForNumber(val,field)
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
	}	}	else
	{

	//	alert("Your ID or password is incorrect");
	 displayJSErrorMessageForLogin('err','Your ID or password is incorrect' );
	return false;	}	}	}
	return true;}

function isSecurityFlagChange()
{
return document.secForm.isSecChg.value;
}
//prelogin Enable disable
function loginCheckTouchIdPostLog(EnableDisable, biometricEnable=false)
{
	//alert('EnableDisable');
	SCLoader('show');
	//alert('Inside js post login enable login');
	var id=document.loginForm_reg_sub.logonId.value;
	//var pwd=document.loginForm.password.value;
	//alert('id:::'+id);
	//alert('document.loginForm_sub.page.value::'+document.loginForm_sub.page.value);

	if(biometricEnable && isMobileApplication && isMobile2 && isiOS){
        window.legacyView.legacyAppLoaded("verifyHash");
    }

     if(isSecurityFlagChange()!='NO')
     {
     clearTimeout(m);
     butDisable = false;
     //alert('butDisable::::::::'+butDisable);
	if(butDisable == false)
	{
		if(document.secForm.isSecRequire.value=="true")
		{


			if(navigator.appName.indexOf("Netscape")!=-1)
			{

				function handleError()
				{
					alert("Please wait...Initializing security...");
					return true;
				}
				window.onerror = handleError;
				if(parent.parent.frames['appletloader'].document.readyState == "loading")
				{
					alert("Please wait...Initializing security...");
					return false;
				}
				else if(parent.parent.frames['appletloader'].document.readyState == "interactive")
				{
					alert("Please wait...Initializing security...");
					return false;
				}
				else
				{
					parent.parent.frames['appletloader'].document.applets['security_applet'].setCntry(document.loginForm_reg_sub.cntry.value);

					/*if(loginValidate(id,pwd) == false)
					{
						return false;
					}*/

					if(parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver()==false)
					{
						parent.parent.afterlogin.keyExchange();

					}
					else
					{

						document.loginForm_reg_sub.logonId.value=parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id);
						//document.loginForm_reg_sub.password.value =parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(pwd);
						document.loginForm_reg_sub.secflag.value='true';
						document.loginForm_reg_sub.submit();
						document.loginForm.logonid.value='xxxxxxxxxxxxxxx';
						document.loginForm_sub.logonId.value='xxxxxxxxxxxxxxx';
					//	document.loginForm.password.value='xxxxxxxxxxxxxxx';
					//	document.loginForm_sub.password.value='xxxxxxxxxxxxxxx';
					}

				}
				return true;
			}
			else if(navigator.appVersion.indexOf("MSIE") != -1)
			{
				if(parent.parent.frames['appletloader'].document.readyState == "loading")
				{
					alert("Please wait...Initializing security...");
					return false;
				}
				else
				{
					parent.parent.frames['appletloader'].document.applets['security_applet'].setCntry(document.loginForm_reg_sub.cntry.value);
				/*	if(loginValidate(id,pwd) == false)
					{
						return false;
					}
					else
					{

						document.loginForm_sub.logonid.value=parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id;
						document.loginForm_sub.password.value=pwd;
						parent.parent.frames['workingarea'].document.loginForm_sub.secflag.value="true";
					}*/
				}
				alert("KEYEXCHANGE"+ parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver());
				if(parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver()== false || true)
				{


					parent.parent.afterlogin.keyExchange(id,pwd);
					if(parent.parent.parent.parent.SecReqcheck.document.secForm.isSecRequire.value!='true')
					{

						document.loginForm_reg_sub.logonId.value=document.loginForm_reg_sub.cntry.value+id;
						//document.loginForm_sub.password.value =pwd;
						document.loginForm_reg_sub.secflag.value="false";
						document.loginForm_reg_sub.submit();
						document.loginForm.logonid.value='xxxxxxxxxxxxxxx';
						document.loginForm_reg_sub.logonId.value='xxxxxxxxxxxxxxx';
						//document.loginForm.password.value='xxxxxxxxxxxxxxx';
						//document.loginForm_sub.password.value='xxxxxxxxxxxxxxx';

					}

				}
				else
				{
					document.loginForm_reg_sub.logonId.value=parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id);
					document.loginForm_reg_sub.password.value = parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(pwd);
					parent.parent.frames['workingarea'].document.loginForm_reg_sub.secflag.value="true";

					document.loginForm_reg_sub.submit();

				}
			}
		}
		else
		{
			/*if(loginValidate(id,pwd) == false)
				{
						return false;
				}*/
			//Added for UX MESA
			customerIdentificationNumber=id;
			//Added for UX MESA
			document.loginForm_reg_sub.logonId.value=id;
			//document.loginForm_sub.password.value =pwd;
			document.loginForm_reg_sub.secflag.value="false";
			//document.loginForm_sub.submit();
			//alert('absoulteURL:::Test');
			/*if(document.loginForm != 'undefined' && document.loginForm.logonid != 'undefined'){
				alert('absoulteURL:::Test1');
			document.loginForm.logonid.value='xxxxxxxxxxxxxxx';
			}*/
			//alert('absoulteURL:::Test2');
			//document.loginForm.password.value='xxxxxxxxxxxxxxx';
			var absoulteURL=document.loginForm_reg_sub.ActionIs.value;
			//alert('absoulteURL:::'+absoulteURL);
			loadJSP_Forms('loginTopFrame', absoulteURL, loginForm_reg_sub);

			document.loginForm_reg_sub.logonId.value='xxxxxxxxxxxxxxx';
			document.loginForm_reg_sub.password.value='xxxxxxxxxxxxxxx';

			//$('#loadingBottomFrame').show();
		}

		//butDisable=true;
		return true;
	}
	else
	{

		return false;
	}
   }
	else
   {
     m = setTimeout("loginCheckTouchIdPostLog('EnableDisable')",100);
   }
}
//postLogin enable disable
function loginCheckTouchIdForConf(configureTouchIdVar)
{
	//alert('configureTouchIdVar');
	SCLoader('show');

	//alert('inside js'+document.loginForm_reg_sub.page.value);
	//var id=document.loginForm.logonid.value;
	//var pwd=document.loginForm.password.value;
	//document.loginForm_reg_sub.deviceId.value="c87661b14548e783";
//document.loginForm_reg_sub.devicename.value="SAMSUNG";
	//Added for UX Change
	//document.loginForm_reg_sub.configureTouchId.value = "true";
	var urll=document.loginForm_reg_sub.URL.value;
	var reLogonURLl=document.loginForm_reg_sub.reLogonURL.value;
	document.loginForm_reg_sub.page.value = 'generateToken';
	//alert('document.loginForm_reg_sub.page.value:::'+document.loginForm_reg_sub.page.value);
	/* alert("urll"+urll); */
	/* alert("reLogonURLl"+reLogonURLl); */

	//Added for UX change
     if(isSecurityFlagChange()!='NO')
     {
	/* alert("inside if!"); */
     clearTimeout(m);
	 butDisable = false;
	/* alert("butDisable : "+butDisable); */
	if(butDisable == false)
	{
		if(document.secForm.isSecRequire.value=="true")
		{

			if(navigator.appName.indexOf("Netscape")!=-1)
			{

				function handleError()
				{
					//alert("Please wait...Initializing security...");
					get('please_wait');
					return true;
				}
				window.onerror = handleError;
				if(parent.parent.frames['appletloader'].document.readyState == "loading")
				{
					//alert("Please wait...Initializing security...");
					get('please_wait');
					return false;
				}
				else if(parent.parent.frames['appletloader'].document.readyState == "interactive")
				{
					//alert("Please wait...Initializing security...");
					get('please_wait');
					return false;
				}
				else
				{
					parent.parent.frames['appletloader'].document.applets['security_applet'].setCntry(document.loginForm_reg_sub.cntry.value);

					/*if(loginValidate(id,pwd) == false)
					{
						return false;
					}*/

					if(parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver()==false)
					{
						parent.parent.afterlogin.keyExchange();

					}
					else
					{

						//document.loginForm_reg_sub.logonid.value=parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id);
						//document.loginForm_reg_sub.password.value =parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(pwd);
						document.loginForm_reg_sub.secflag.value='true';
						document.loginForm_reg_sub.submit();
						//alert("Action 1 : "+document.loginForm_reg_sub.action);
						//loadJSP_Post('Success1', document.loginForm_reg_sub.action);
						//document.loginForm.logonid.value='xxxxxxxxxxxxxxx';
						//document.loginForm_reg_sub.logonid.value='xxxxxxxxxxxxxxx';
						//document.loginForm.password.value='xxxxxxxxxxxxxxx';
						//document.loginForm_reg_sub.password.value='xxxxxxxxxxxxxxx';
					}

				}
				return true;
			}
			else if(navigator.appVersion.indexOf("MSIE") != -1)
			{
				if(parent.parent.frames['appletloader'].document.readyState == "loading")
				{
						//alert("Please wait...Initializing security...");
					get('please_wait');
					return false;
				}
				else
				{
					parent.parent.frames['appletloader'].document.applets['security_applet'].setCntry(document.loginForm_reg_sub.cntry.value);
					/*if(loginValidate(id,pwd) == false)
					{
						return false;
					}
					else
					{

						document.loginForm_reg_sub.logonid.value=parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id;
						document.loginForm_reg_sub.password.value=pwd;
						parent.parent.frames['workingarea'].document.loginForm_reg_sub.secflag.value="true";
					}*/
				}
				alert("KEYEXCHANGE"+ parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver());
				if(parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver()== false || true)
				{


					//parent.parent.afterlogin.keyExchange(id,pwd);
					if(parent.parent.parent.parent.SecReqcheck.document.secForm.isSecRequire.value!='true')
					{

						//document.loginForm_reg_sub.logonid.value=document.loginForm_reg_sub.cntry.value+id;
						//document.loginForm_reg_sub.password.value =pwd;
						document.loginForm_reg_sub.secflag.value="false";
						document.loginForm_reg_sub.submit();
						//document.loginForm_reg_sub.submit();
						//alert("Action 2 : "+document.loginForm_reg_sub.action);
						//loadJSP_Post('Success1', document.loginForm_reg_sub.action);
						//document.loginForm.logonid.value='xxxxxxxxxxxxxxx';
						//document.loginForm_reg_sub.logonid.value='xxxxxxxxxxxxxxx';
						//document.loginForm.password.value='xxxxxxxxxxxxxxx';
						//document.loginForm_reg_sub.password.value='xxxxxxxxxxxxxxx';

					}

				}
				else
				{
					//document.loginForm_reg_sub.logonid.value=parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id);
					document.loginForm_reg_sub.password.value = parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(pwd);
					parent.parent.frames['workingarea'].document.loginForm_reg_sub.secflag.value="true";

					document.loginForm_reg_sub.submit();
					//document.loginForm_reg_sub.submit();
						//alert("Action 3 : "+document.loginForm_reg_sub.action);
						//loadJSP_Post('Success1', document.loginForm_reg_sub.action);
				}
			}
		}
		else
		{
			/*if(loginValidate(id,pwd) == false)
				{
						return false;
				}*/

			//document.loginForm_reg_sub.logonid.value=document.loginForm_reg_sub.cntry.value+id;
			//document.loginForm_reg_sub.password.value =pwd;
			document.loginForm_reg_sub.secflag.value="false";
			//document.loginForm_reg_sub.submit();
			var absoulteURL=document.loginForm_reg_sub.ActionIs.value;
			//document.getElementById("loadingBottomFrame").style.display='block';
			//document.loginForm.logonid.value='xxxxxxxxxxxxxxx';
			//document.loginForm.password.value='xxxxxxxxxxxxxxx';
			//document.getElementById("EnableLoginButton").style.display='none';
			//document.getElementById("disableLoginButton").style.display='block';
			//customerIdentificationNumber=id;
			if(absoulteURL.indexOf("postLogin") != -1){
				loadJSP_Forms('loginTopFrame', absoulteURL, loginForm_reg_sub);
			}else{
				submitExistingForm(loginForm_reg_sub,absoulteURL,'','');
			}
			//document.loginForm_reg_sub.logonid.value='xxxxxxxxxxxxxxx';
			//document.loginForm_reg_sub.password.value='xxxxxxxxxxxxxxx';


			//document.getElementById('password').disabled = true;
			//document.getElementById('logonid').disabled = true;

			// /document.getElementById('login-btn').disabled = true;
			//document.getElementById('login-btn').value = document.getElementById('login-btn').value + " ...";

			//$('#loadingBottomFrame').show();
		}

		//butDisable=true;
		return true;
	}
	else
	{
		return false;
	}
   }
	else
   {
   //alert("inside else!");
     m = setTimeout("loginCheckTouchIdForConf('configureTouchIdVar')",100);
   }
}

//postlogin touch sensor
function loginCheckTouchIdForConfig()
{
    /*MOB2Changes - Start*/
    if(isMobile2)
    {
        try
        {
            document.loginForm_reg_sub.deviceId.value=device.uuid;
            document.loginForm_reg_sub.devicename.value=device.manufacturer;
            document.loginForm_reg_sub.devicemodel.value=device.model;
        }catch(err)
        {
        }
    }
    /*MOB2Changes - End*/
	SCLoader('show');
	//Added for UX change
     if(isSecurityFlagChange()!='NO')
     {
	/* alert("inside if!"); */
     clearTimeout(m);
	 butDisable = false;
	/* alert("butDisable : "+butDisable); */
	if(butDisable == false)
	{
		if(document.secForm.isSecRequire.value=="true")
		{

			if(navigator.appName.indexOf("Netscape")!=-1)
			{

				function handleError()
				{
					//alert("Please wait...Initializing security...");
					get('please_wait');
					return true;
				}
				window.onerror = handleError;
				if(parent.parent.frames['appletloader'].document.readyState == "loading")
				{
					//alert("Please wait...Initializing security...");
					get('please_wait');
					return false;
				}
				else if(parent.parent.frames['appletloader'].document.readyState == "interactive")
				{
					//alert("Please wait...Initializing security...");
					get('please_wait');
					return false;
				}
				else
				{
					parent.parent.frames['appletloader'].document.applets['security_applet'].setCntry(document.loginForm_reg_sub.cntry.value);

					/*if(loginValidate(id,pwd) == false)
					{
						return false;
					}*/

					if(parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver()==false)
					{
						parent.parent.afterlogin.keyExchange();

					}
					else
					{

						//document.loginForm_reg_sub.logonid.value=parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id);
						//document.loginForm_reg_sub.password.value =parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(pwd);
						document.loginForm_reg_sub.secflag.value='true';
						document.loginForm_reg_sub.submit();
						//alert("Action 1 : "+document.loginForm_reg_sub.action);
						//loadJSP_Post('Success1', document.loginForm_reg_sub.action);
						//document.loginForm.logonid.value='xxxxxxxxxxxxxxx';
						//document.loginForm_reg_sub.logonid.value='xxxxxxxxxxxxxxx';
						//document.loginForm.password.value='xxxxxxxxxxxxxxx';
						//document.loginForm_reg_sub.password.value='xxxxxxxxxxxxxxx';
					}

				}
				return true;
			}
			else if(navigator.appVersion.indexOf("MSIE") != -1)
			{
				if(parent.parent.frames['appletloader'].document.readyState == "loading")
				{
						//alert("Please wait...Initializing security...");
					get('please_wait');
					return false;
				}
				else
				{
					parent.parent.frames['appletloader'].document.applets['security_applet'].setCntry(document.loginForm_reg_sub.cntry.value);
					/*if(loginValidate(id,pwd) == false)
					{
						return false;
					}
					else
					{

						document.loginForm_reg_sub.logonid.value=parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id;
						document.loginForm_reg_sub.password.value=pwd;
						parent.parent.frames['workingarea'].document.loginForm_reg_sub.secflag.value="true";
					}*/
				}
				alert("KEYEXCHANGE"+ parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver());
				if(parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver()== false || true)
				{


					//parent.parent.afterlogin.keyExchange(id,pwd);
					if(parent.parent.parent.parent.SecReqcheck.document.secForm.isSecRequire.value!='true')
					{

						//document.loginForm_reg_sub.logonid.value=document.loginForm_reg_sub.cntry.value+id;
						//document.loginForm_reg_sub.password.value =pwd;
						document.loginForm_reg_sub.secflag.value="false";
						document.loginForm_reg_sub.submit();
						//document.loginForm_reg_sub.submit();
						//alert("Action 2 : "+document.loginForm_reg_sub.action);
						//loadJSP_Post('Success1', document.loginForm_reg_sub.action);
						//document.loginForm.logonid.value='xxxxxxxxxxxxxxx';
						//document.loginForm_reg_sub.logonid.value='xxxxxxxxxxxxxxx';
						//document.loginForm.password.value='xxxxxxxxxxxxxxx';
						//document.loginForm_reg_sub.password.value='xxxxxxxxxxxxxxx';

					}

				}
				else
				{
					//document.loginForm_reg_sub.logonid.value=parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id);
					document.loginForm_reg_sub.password.value = parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(pwd);
					parent.parent.frames['workingarea'].document.loginForm_reg_sub.secflag.value="true";

					document.loginForm_reg_sub.submit();
					//document.loginForm_reg_sub.submit();
						//alert("Action 3 : "+document.loginForm_reg_sub.action);
						//loadJSP_Post('Success1', document.loginForm_reg_sub.action);
				}
			}
		}
		else
		{
			/*if(loginValidate(id,pwd) == false)
				{
						return false;
				}*/

			//document.loginForm_reg_sub.logonid.value=document.loginForm_reg_sub.cntry.value+id;
			//document.loginForm_reg_sub.password.value =pwd;
			document.loginForm_reg_sub.secflag.value="false";
			//document.loginForm_reg_sub.submit();
			var absoulteURL=document.loginForm_reg_sub.ActionIs.value;
			//document.getElementById("loadingBottomFrame").style.display='block';
			//document.loginForm.logonid.value='xxxxxxxxxxxxxxx';
			//document.loginForm.password.value='xxxxxxxxxxxxxxx';
			//document.getElementById("EnableLoginButton").style.display='none';
			//document.getElementById("disableLoginButton").style.display='block';
			//customerIdentificationNumber=id;
			loadJSP_Forms('loginTopFrame', absoulteURL, loginForm_reg_sub);
			//document.loginForm_reg_sub.logonid.value='xxxxxxxxxxxxxxx';
			//document.loginForm_reg_sub.password.value='xxxxxxxxxxxxxxx';


			//document.getElementById('password').disabled = true;
			//document.getElementById('logonid').disabled = true;

			// /document.getElementById('login-btn').disabled = true;
			//document.getElementById('login-btn').value = document.getElementById('login-btn').value + " ...";

			//$('#loadingBottomFrame').show();
		}

		//butDisable=true;
		return true;
	}
	else
	{
		return false;
	}
   }
	else
   {
   //alert("inside else!");
     m = setTimeout("loginCheckTouchIdForConfig()",100);
   }
}
//prelogin touch sensor
function loginCheckTouchIdPostLogin()
{
	SCLoader('show');
	var id=document.loginForm_reg_sub.logonId.value;
    /*MOB2Changes - Start*/
     if(isMobile2)
    {
        try
        {
            document.loginForm_reg_sub.deviceId.value=device.uuid;
            document.loginForm_reg_sub.devicename.value=device.manufacturer;
            document.loginForm_reg_sub.devicemodel.value=device.model;
        }catch(err)
        {
        }
    }
    /*MOB2Changes - end*/

     if(isSecurityFlagChange()!='NO')
     {
     clearTimeout(m);
     butDisable = false;
     //alert('butDisable::::::::'+butDisable);
	if(butDisable == false)
	{
		if(document.secForm.isSecRequire.value=="true")
		{


			if(navigator.appName.indexOf("Netscape")!=-1)
			{

				function handleError()
				{
					alert("Please wait...Initializing security...");
					return true;
				}
				window.onerror = handleError;
				if(parent.parent.frames['appletloader'].document.readyState == "loading")
				{
					alert("Please wait...Initializing security...");
					return false;
				}
				else if(parent.parent.frames['appletloader'].document.readyState == "interactive")
				{
					alert("Please wait...Initializing security...");
					return false;
				}
				else
				{
					parent.parent.frames['appletloader'].document.applets['security_applet'].setCntry(document.loginForm_reg_sub.cntry.value);

					/*if(loginValidate(id,pwd) == false)
					{
						return false;
					}*/

					if(parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver()==false)
					{
						parent.parent.afterlogin.keyExchange();

					}
					else
					{

						document.loginForm_reg_sub.logonId.value=parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id);
						//document.loginForm_reg_sub.password.value =parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(pwd);
						document.loginForm_reg_sub.secflag.value='true';
						document.loginForm_reg_sub.submit();
						document.loginForm.logonid.value='xxxxxxxxxxxxxxx';
						document.loginForm_sub.logonId.value='xxxxxxxxxxxxxxx';
					//	document.loginForm.password.value='xxxxxxxxxxxxxxx';
					//	document.loginForm_sub.password.value='xxxxxxxxxxxxxxx';
					}

				}
				return true;
			}
			else if(navigator.appVersion.indexOf("MSIE") != -1)
			{
				if(parent.parent.frames['appletloader'].document.readyState == "loading")
				{
					alert("Please wait...Initializing security...");
					return false;
				}
				else
				{
					parent.parent.frames['appletloader'].document.applets['security_applet'].setCntry(document.loginForm_reg_sub.cntry.value);
				/*	if(loginValidate(id,pwd) == false)
					{
						return false;
					}
					else
					{

						document.loginForm_sub.logonid.value=parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id;
						document.loginForm_sub.password.value=pwd;
						parent.parent.frames['workingarea'].document.loginForm_sub.secflag.value="true";
					}*/
				}
				alert("KEYEXCHANGE"+ parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver());
				if(parent.parent.frames['appletloader'].document.applets['security_applet'].isKeyExchangeOver()== false || true)
				{


					parent.parent.afterlogin.keyExchange(id,pwd);
					if(parent.parent.parent.parent.SecReqcheck.document.secForm.isSecRequire.value!='true')
					{

						document.loginForm_reg_sub.logonId.value=document.loginForm_reg_sub.cntry.value+id;
						//document.loginForm_sub.password.value =pwd;
						document.loginForm_reg_sub.secflag.value="false";
						document.loginForm_reg_sub.submit();
						document.loginForm.logonid.value='xxxxxxxxxxxxxxx';
						document.loginForm_reg_sub.logonId.value='xxxxxxxxxxxxxxx';
						//document.loginForm.password.value='xxxxxxxxxxxxxxx';
						//document.loginForm_sub.password.value='xxxxxxxxxxxxxxx';

					}

				}
				else
				{
					document.loginForm_reg_sub.logonId.value=parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(parent.parent.frames['appletloader'].document.applets['security_applet'].getCntry()+id);
					document.loginForm_reg_sub.password.value = parent.parent.frames['appletloader'].document.applets['security_applet'].encrypt(pwd);
					parent.parent.frames['workingarea'].document.loginForm_reg_sub.secflag.value="true";

					document.loginForm_reg_sub.submit();

				}
			}
		}
		else
		{
			//Added for UX MESA
			customerIdentificationNumber=id;
			//Added for UX MESA
			document.loginForm_reg_sub.logonId.value=id;
			document.loginForm_reg_sub.secflag.value="false";
			var absoulteURL=document.loginForm_reg_sub.ActionIs.value;
             /*MOB2Changes - Start*/
                 if(isMobile2)
                 {
                     try
                     {
                         document.loginForm_reg_sub.deviceId.value=device.uuid;
                         document.loginForm_reg_sub.devicename.value=device.manufacturer;
                         document.loginForm_reg_sub.devicemodel.value=device.model;
                     }catch(err)
                     {
                     }
                 }
              /*MOB2Changes - End*/
			loadJSP_Forms('loginTopFrame', absoulteURL, loginForm_reg_sub);
			document.loginForm_reg_sub.logonId.value='xxxxxxxxxxxxxxx';
			document.loginForm_reg_sub.password.value='xxxxxxxxxxxxxxx';
		}

		return true;
	}
	else
	{

		return false;
	}
   }
	else
   {
     m = setTimeout("loginCheckTouchIdPostLogin()",100);
   }
}
