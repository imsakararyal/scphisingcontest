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
		window.open(url,title,common);
		}
else {
window.open(url,title,"directories=no,location=no,menubar=no,resizable=no,scrollbars=yes,personalBar=no,screenX=window.outerHeight/2,screenY=window.outerWidth/2,dependent=0,top=75,channelmode=0,width=770,height=500,dependent=0,status=yes,right=0,left=0");
}
}

function disableRightClick(){
document.body.oncontextmenu=new Function("document.body.oncontextmenu=new Function('if (document.body.onclick) document.body.onclick(); return false;'); return false;");    
}

function openNewInstance1(url,title)
{
				var common = "location=no";
				common += ",toolbar=no";common += ",menubar=no";common += ",status=no";
				common += ",scrollbars=yes";common += ",hotkeys=no";common += ",resizable=No";common += ",top=0";common += ",left=0";
				common += ",right=0";common += ",screenX=window.outerHeight/2";common += ",screenY=window.outerWidth/2";
				common += ",width=600";common += ",height=200";
				if (navigator.appVersion.indexOf("MSIE") != -1)
				{
				url=url;
				window.open(url,title,common);
				}else {
				window.open(url,title,"directories=no,location=no,menubar=no,resizable=no,personalBar=no,screenX=window.outerHeight/2,screenY=window.outerWidth/2,dependent=0,top=0,channelmode=0,width=770,height=500,dependent=0,status=yes,right=0,left=0");
				}
			}
function argClose()
	{
	if(parent.SecReqcheck.document.secForm.isclose.value=='main')
		{
		var cntry=parent.SecReqcheck.document.secForm.cntryy.value;
		window.opener = self;
		self.close();
		window.open ("/Init/foa?ser=1&act=Error.jsp&cntry="+cntry+"&PB=no","WindowClosingcheck","resizable=no,scrollbars=no,width=850,height=700,top=0,left=0,channelmode=0,right=0,dependent=0,status=yes");
		}
	}

// var message="Feature Disabled"; 
var message=" "; 
if(document.layers) {
document.captureEvents(Event.MOUSEDOWN);
document.captureEvents(Event.KEYDOWN);
}
//Fixes for right click disable
function clickIE(){if (document.all){(message);return false;}}
function clickNS(e) {
if(document.layers||(document.getElementById&&!document.all)){if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers) {document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
document.oncontextmenu=new Function("return false")

function clicks(doc) {

$('form').prop('autocomplete','off');

window.status="Welcome to Standard Chartered Bank";
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

function rtclickcheck(keyp) {
 if (navigator.appName == "Netscape" && keyp.which == 3) {//alert(message);
	return false;
	}
	else if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) {//alert(message);
	return false;
	}if(document.keyCode == 93) {
	//alert(message);
	return false;
	}
}
function document_onkeydown() {
	if (navigator.appName == "Netscape" && keyp.which == 3) {//alert(message);
	}
	else if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) {
		if(event.keyCode == 93) {//alert(message);
		}	
	}
}
function processing() {
var i;
if(document.readyState == "loading")
	for(i=0;i<parent.document.frames.length;i++)
	{
		parent.document.getElementById(parent.document.frames[i].name).style.cursor="wait";
	}
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
            else if (event.ctrlKey && (event.keyCode == 78 || 
			event.keyCode == 82)) {                
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
   
 //newly added  
 function setLinksEnable(){
   if(parent.parent.loginlinksFrame.document.getElementById('linksDisableEnable')){
		parent.parent.loginlinksFrame.document.getElementById('linksDisableEnable').value="0";
	}
}
 function setLinksDisable(){
   if(parent.parent.loginlinksFrame.document.getElementById('linksDisableEnable')){
		parent.parent.loginlinksFrame.document.getElementById('linksDisableEnable').value="1";
	}	
}


//newly added 
function showStatus()
{
window.status="Welcome to Standard Chartered Online Banking";
}

function setCurrentYear(yr){
	parent.parent.parent.parent.SecReqcheck.document.secForm.currentYear.value=yr;
}
function setPhoneBanking(phoneno){
	parent.parent.parent.parent.SecReqcheck.document.secForm.phoneno.value=phoneno;
}
function hideLoadingProgress(){

    $('form').prop('autocomplete','off');

	window.status="Welcome to Standard Chartered Online Banking";
	parent.parent.workingarea.document.body.rows = "*, 0";
	parent.parent.workingarea.frames['loadingBottomFrame'].location.href="scb/newGUI/blank.html";
	setLinksEnable();
	resizeIframe();
}

function showContactAppForms(redirectPage,cntry)
{
	if(document.getElementById("linksDisableEnable").value=="0")
	{
		if(redirectPage=="contactUs")
                 parent.workingarea.location.href="/Init/foa?ser=100&act=Contact_us_a&typeNo=13&cntry="+cntry;
	              else if(cntry=="LB")
			{
                parent.workingarea.location.href="/Init/foa?ser=100&act=OnlineApplications.jsp&typeNo=&prgId=p100&cntry="+cntry+"&mode=cardservices";
			}
                      else if(cntry=="BN")
                        {
                parent.workingarea.location.href="/Init/foa?ser=100&act=OnlineApplications_BN.jsp&typeNo=&prgId=p100&cntry="+cntry+"&mode=all";
                        }
			else if(cntry=="OM")
		    {
			 parent.workingarea.location.href="/Init/foa?ser=100&act=OnlineApplications_OM.jsp&typeNo=&prgId=p100&cntry="+cntry+"&mode=all";
			}

		   	else
	          parent.workingarea.location.href="/Init/foa?ser=100&act=OnlineApplications.jsp&typeNo=&prgId=p100&cntry="+cntry+"&mode=accountservices";

				
			}
}

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
                findPositiveAction();
                event.keyCode = 0
              }
           }
         }
   }

 document.onkeypress=doClick;
  function findPositiveAction()
  {
    var elms = document.getElementsByTagName("A");
    for(i = 0; i < elms.length; i++)
    {
        var obj=elms[i];
             if(obj.firstChild.innerHTML=='Login' || obj.firstChild.innerHTML=='Agree' || obj.firstChild.innerHTML=='Submit' || obj.firstChild.innerHTML=='Confirm' || 
obj.firstChild.innerHTML=='Proceed' || obj.firstChild.innerHTML=='Next' || obj.firstChild.innerHTML=='Register' || obj.firstChild.innerHTML=='Generate eTAC'  || 
obj.firstChild.innerHTML=='Update Changes')

           {
              obj.onclick();
              return false;
           }

       
    }
}


function resizeIframe(){
var currentfr=parent.parent.parent.document.getElementById('iframename');
if (currentfr && !window.opera){
currentfr.style.display="block"
if (parent.parent.workingarea.loginTopFrame.document && parent.parent.workingarea.loginTopFrame.document.body.scrollHeight)
{ 
 if(parent.parent.workingarea.loginTopFrame.document.body.scrollHeight > parent.parent.loginlinksFrame.document.body.scrollHeight)
 currentfr.height = parent.parent.workingarea.loginTopFrame.document.body.scrollHeight;
 else
 currentfr.height = parent.parent.loginlinksFrame.document.body.scrollHeight;
}
}
}