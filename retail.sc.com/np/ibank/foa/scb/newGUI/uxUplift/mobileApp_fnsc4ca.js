var docType = "";
function downloadReportinApp(type,documentUrl,fileName,id,token){
	SCLoader('show');
	id = id.substring(2, id.length-2);
	let decipher = salt => {
		let textToChars = text => text.split('').map(c => c.charCodeAt(0))
		let saltChars = textToChars(salt)
		let applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code)
		return encoded => encoded.match(/.{1,2}/g)
		.map(hex => parseInt(hex, 16))
		.map(applySaltToChar)
		.map(charCode => String.fromCharCode(charCode))
		.join('')
		};
		let myDecipher = decipher(token)
		id = myDecipher(id);

	if(type == "pdf"){
		docType = "application/pdf";
	}else{
		if(isAndroid){
			docType = "text/plain";
		}else{
			docType = "text/csv";
		}
	}
	if(isiOS){
		window.requestFileSystem(
		    LocalFileSystem.PERSISTENT, 0,
		    function onFileSystemSuccess(fileSystem) {
		        fileSystem.root.getFile(
		            "dummy.html", {
		                create: true,
		                exclusive: false
		            },
		            function gotFileEntry(fileEntry) {
						var sPath = fileEntry.nativeURL.replace("dummy.html", "");
						var fileTransfer = new FileTransfer();
                        var uri = "";
                        if(isMobile2){
                            uri = encodeURI(documentUrl);
                        }else{
                            uri = documentUrl;
                        }
		                fileEntry.remove();
		                fileTransfer.download(
		                    uri,
		                    sPath +fileName+"."+type,
		                    function(theFile) {
		                    	SCLoader('hide');
                                if(isMobile2)
                                {
                                    if(type !== 'pdf'){
                                       showLink(theFile.toURL());
                                    }
                                    else{
                                     showLinkMob2(theFile.toURL());
                                    }
                                }
                                else
                                {
		                            showLink(theFile.toURL());
		                        }
		                    },
		                    function(error) {
		                    	SCLoader('hide');
		                    },
							true,
							{
								headers: {
									"Cookie":"JSESSIONID="+id
								}
							}


		                );
		            });
		});
	}
	else if(isAndroid){
		var fileTransfer = new FileTransfer();
		fileName = fileName+"-"+getFormattedTime();
		window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory+"Download", onGetDirectorySuccess, onError);

		function onError(e) {
			SCLoader('hide');
		    alert("Error : Downloading Failed");
		};

		function onFileSystemSuccess(fileSystem) {
		    var entry = fileSystem;
		    entry.getDirectory("Cordova", {
		        create: true,
		        exclusive: false
		    }, onGetDirectorySuccess, onGetDirectoryFail);
		};
		function onGetDirectoryFail(error){
			SCLoader('hide');
		}
		function onGetDirectorySuccess(dir) {
		    cdr = dir;
		    dir.getFile(fileName+"."+type, {
		        create: true,
		        exclusive: false
		    }, gotFileEntry, errorHandler);
		};
		function gotFileEntry(fileEntry) {
		    var uri = encodeURI(documentUrl);
		    fileTransfer.download(uri, cdr.nativeURL +fileName+"."+type,
		        function(entry) {
		        	SCLoader('hide');
                    if(isMobile2)
                    {
                        showLinkMob2(entry.toURL());
                    }
                    else
                    {
		        	    showLink(entry.toURL());
		        	}
		        },
		        function(error) {
		        	SCLoader('hide');
		            alert(ajaxErrorMsg);
		        },
		        true
		    );
		};
		function errorHandler(error){
			SCLoader('hide');
		}
	}
}

function showLink(uri){
	cordova.plugins.fileOpener2.open(
	uri,
    docType,
    {
        error : function(e) {
        	alert('Error status: ' + e.status + ' - Error message: ' + e.message);
        },
        success : function () {
        }
    }
);
}

function mobile2Download(documentUrl)
{
	alert(documentUrl);
	var options={"message":"","subject":"","files":[],"url":documentUrl,"chooserTitle":"","appPackageName":"","iPadCoordinates":""};
	window.plugins.socialsharing.shareWithOptions(options,function (){
	},function(e) {
	});
}

function showLinkMob2(uri)
{
	var options={files:[uri],chooserTitle:"Select an app"};
	window.plugins.socialsharing.shareWithOptions(options,function (){
	},function(e) {
	});
}


function changeStatusBar(style){
	if(isMobileApplication && isiOS)
	{
         try
         {
            if(style==="default")
            {
                window.StatusBar.styleDefault();
            }
            else
            {
                window.StatusBar.styleBlackTranslucent();
            }
         }catch(err){}

	}
}

function hasNotch(){
	if(isMobileApplication && isiOS){
		var iosNotchModels = ["10,3", "10,6", "11,2", "11,6", "11,4", "11,8","12,1","12,3","12,5","13,1","13,2","13,3","13,4","14,2","14,3","14,4","14,5","14,7","14,8","15,2","15,3"];
		var deviceModel = window.device.model.split("iPhone")[1];
		if(iosNotchModels.indexOf(deviceModel) != -1){
			$('body').addClass("has-notch");
		}
	}
}

function getFormattedTime() {
    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth() + 1;
    var d = today.getDate();
    var h = today.getHours();
    var mi = today.getMinutes();
    var s = today.getSeconds();
    return y + "" + m + "" + d + "" + h + "" + mi + "" + s;
}

$(window).on('load', function(e){
setTimeout(function(){
if(isMobileApplication && isiOS){
	window.open = cordova.InAppBrowser.open;
}
changeStatusBar("white");
hasNotch();
},1000);
});
