var touchIDWrapper = {};
var tokenIDkey = 'tokenID'; //Touch_ID
var isFaceIDAvailable;
var touchfail = 'Login with Touch ID failed. Please login with username and password.'; 
var touchfailreg = 'Your registration is not authorized. For added safety, Touch ID for SC Mobile has been disabled. If you wish to enable Touch ID, please check your registered fingerprints on the device and try again.';
var newTouchADios = "Touch ID Change detected. For added safety, Touch ID has been disabled. If you wish to re-enable Touch ID, please select 'Configure' below"; //Touch_Id_Not_Enabled
var newTouchAD = "New Fingerprint added / deleted. Your Fingerprint login disabled.";
var noFinger = "Please enable Touch ID to use this feature."; //Enable_Touch_Id*
var enableTouch = "Please note Touch ID has not been enabled for this device. To use this feature, please enable Touch ID in your device settings."; //Touch_Id_Not_Enabled
var scannermsg = 'Use Touch ID to login'; //Touch_Id_Login
var scannermsgSamsung = 'SC Touch Login';
var tryagain = 'Try again';
var touchok = 'Ok';
var tconfigure = 'Configure';
var touchcancel = 'Cancel';
// To check touch id is available or not
touchIDWrapper.isTouchAvailable = function(successCallback, errorCallback) {

    if (isSamsung) {
        SamsungPass.checkSamsungPassSupport(function(success) {
            successCallback(true);
        }, function(error) {
            errorCallback(error);
        });

    } else {
        window.plugins.touchid.isAvailable(function(success) {
             if (success === "FACE_ID") {
                    isFaceIDAvailable = true;
                } else {
                    isFaceIDAvailable = false;
                }
                successCallback(true);
            },
            function(error) {
                //if no finger registered "No FP availabile"
                if (error === "No FP availabile") {
                    successCallback(true);
                } else if (isiOS && error === "FACE_ID not available") {
                    isFaceIDAvailable = true;
                    successCallback(true);
                }  else if (isiOS && error === "TOUCH_ID not available") {
                    isFaceIDAvailable = false;
                    successCallback(true);
                } else {
                    errorCallback(error);
                }
            });
    }

};

touchIDWrapper.FaceIDMsgChanges = function(faceidchanges){
    if(faceidchanges){
        touchfail = 'Login with Face ID failed. Please login with username and password.';
        touchfailreg = 'Your registration is not authorized. For added safety, Face ID for SC Mobile has been disabled. If you wish to enable Face ID, please check your registered Face ID on the device and try again.';
        newTouchADios = "Face ID Change detected. For added safety, Face ID has been disabled. If you wish to re-enable Face ID, please select 'Configure' below";
        newTouchAD = "New Face ID added / deleted. Your Face ID login disabled.";
        noFinger = "Please enable Face ID to use this feature.";
        enableTouch = "Please note Face ID has not been enabled for this device. To use this feature, please enable Face ID in your device settings.";
        scannermsg = 'Use Face ID to login';
    }else if(!faceidchanges){
        touchfail = 'Login with Fingerprint failed. Please login with username and password.';
        touchfailreg = 'Your registration is not authorized. For added safety, Fingerprint for SC Mobile has been disabled. If you wish to enable Fingerprint, please check your registered fingerprints on the device and try again.';
        newTouchADios = "Fingerprint Change detected. For added safety, Fingerprint has been disabled. If you wish to re-enable Fingerprint, please select 'Configure' below";
        newTouchAD = "New Fingerprint added / deleted. Your Fingerprint login disabled.";
        noFinger = "Please enable Fingerprint to use this feature.";
        enableTouch = "Please note Fingerprint has not been enabled for this device. To use this feature, please enable Fingerprint in your device settings.";
        scannermsg = 'Use Fingerprint to login';
    }

}

touchIDWrapper.checkForRegisteredFinger = function(successCallback, errorCallback) {

    if (isSamsung) {
        SamsungPass.checkForRegisteredFingers(function(success) {
                successCallback(true);
            },
            function(error) {
                errorCallback(error);
            });

    } else {
        window.plugins.touchid.isAvailable(function(success) {
                successCallback(true);
            },
            function(error) {
                errorCallback(error);
            });
    }

};


touchIDWrapper.touchIdSave = function(encryptedPassword, successCallback, errorCallback) {
    if (encryptedPassword.toLowerCase().indexOf("null") >= 0 || encryptedPassword.toLowerCase().indexOf("undefined") >= 0) {
        errorCallback(false);
    } else {
        if (isAndroid) {
            //save data in pref
            sharedpreferences.getSharedPreferences(tokenIDkey, 'MODE_PRIVATE', function(result) {
                sharedpreferences.putString(tokenIDkey, encryptedPassword, function(result) {
                    successCallback(true);
                }, function(result) {
                    errorCallback(result);
                });
            }, function(result) {
                errorCallback(result);
            });

        } else {
            //for ios
            window.plugins.touchid.save(tokenIDkey, encryptedPassword, function() {
                     /*alert('save password success' + encryptedPassword);*/
                    successCallback(true);
                },
                function(error) {
                     /*alert('save password error' + error);*/
                    errorCallback(error);
                });
        }

    }
};

// To check touch id is available or not
touchIDWrapper.touchIdFirstTimeConfig = function(encryptedPassword, successCallback, errorCallback) {

    if (isSamsung) {
        successCallback(true);
    } else {
        window.plugins.touchid.isAvailable(function() {
            window.plugins.touchid.save(tokenIDkey, encryptedPassword, function(result) {
                if (isAndroid) {
                    //save data in pref
                    //while saving fingerprint scanner overcome
                    sharedpreferences.getSharedPreferences(tokenIDkey, 'MODE_PRIVATE', function(result) {
                        sharedpreferences.putString(tokenIDkey, encryptedPassword, function(result) {
                            successCallback(result);
                        }, function(result) {
                            errorCallback(result);
                        });
                    }, function(error) {
                        errorCallback(error);
                    });
                } else {
                    //for ios
                    successCallback(result);
                }

            }, function(error) {
                errorCallback(error);

            });

        });
    }


};


//Access the fingerprint scanner and get the anuthentication 
//toget the encrypted content we need to save this return token
touchIDWrapper.touchIDAuth = function(successCallback, errorCallback) {
    //first param will be the Key for shared pref

    if (isSamsung) {
        SamsungPass.startIdentifyWithDialog(scannermsgSamsung,function(success) {
            /*alert("success " + success);*/
            sharedpreferences.getSharedPreferences(tokenIDkey, 'MODE_PRIVATE', function(result) {
                    sharedpreferences.getString(tokenIDkey, function(result) {

                        if (result.toLowerCase().indexOf("null") >= 0 || result.toLowerCase().indexOf("undefined") >= 0) {
                            errorCallback(result);
                        } else {
                            /* alert('samsung current token' + result);*/
                            successCallback(result);
                        }

                    }, function(result) {
                        errorCallback(result);
                    });
                },
                function(result) {
                    errorCallback(result);
                });
        }, function(error) {
            /* alert("error " + error);*/
            errorCallback(error);

        });
    } else {
        window.plugins.touchid.verify(tokenIDkey, scannermsg, // this will be shown in the native scanner popup
            function(result) {
                /*// alert('ok touch: ' + result);*/
                if (isAndroid) {
                    sharedpreferences.getSharedPreferences(tokenIDkey, 'MODE_PRIVATE', function(result) {
                            sharedpreferences.getString(tokenIDkey, function(result) {
                                if (result.toLowerCase().indexOf("null") >= 0 || result.toLowerCase().indexOf("undefined") >= 0) {
                                    errorCallback(result);
                                } else {
                                    successCallback(result);
                                }
                            }, function(error) {
                                errorCallback(error);
                            });
                        },
                        function(error) {
                            errorCallback(error);
                        });
                } else {
                    //for ios
                    successCallback(result);
                }


            },
            function(error) {
                errorCallback(error);
            });

    }

};

touchIDWrapper.touchIDKeyHasCheck = function(successCallback, errorCallback) {
    //first param will be the Key for shared pref
    if (isAndroid) {
        /*// alert('touchIDKeyHasCheck called');*/
        sharedpreferences.getSharedPreferences(tokenIDkey, 'MODE_PRIVATE', function(result) {
            sharedpreferences.getString(tokenIDkey, function(result) {
                /*// alert('touchIDKeyHasCheck ==> ' + result);*/
                if (result.toLowerCase().indexOf("null") >= 0 || result.toLowerCase().indexOf("undefined") >= 0) {
                    errorCallback(false);
                } else {
                    /*alert("touchIDKeyHasCheck ==>" + result);*/
                    successCallback(result);
                }
            }, function(result) {
                errorCallback(result);
            });
        }, function(error) {
            errorCallback(error);
        });
    } else {
        window.plugins.touchid.has(tokenIDkey, function(result) {
            if (result.toLowerCase().indexOf("null") >= 0 || result.toLowerCase().indexOf("undefined") >= 0) {
                errorCallback(false);
            } else {
                successCallback(result);
            }
        }, function(error) {
            errorCallback(error);
        });
    }
};

touchIDWrapper.touchIDDelete = function(successCallback, errorCallback) {
    touchIDWrapper.touchIDKeyHasCheck(
        function(success1) {
            if (isAndroid) {
                sharedpreferences.remove(tokenIDkey, function(success) {
                    if (!isSamsung) {
                        window.plugins.touchid.delete(tokenIDkey, function(success) {
                            successCallback(success);
                        }, function(error) {
                            errorCallback(error);
                        });
                    } else {
                        successCallback(success);
                    }

                }, function(error) {
                    errorCallback(error);
                });
            } else {
                window.plugins.touchid.delete(tokenIDkey, function(success) {
                    successCallback(success);
                }, function(error) {
                    errorCallback(error);
                });
            }
        },
        function(error) {
            errorCallback(error);
        });
};


touchIDWrapper.didFingerprintDatabaseChange = function(successCallback, errorCallback) {
    /*// alert('didFingerprintDatabaseChange called');*/
    if (isiOS) {
        /*// alert('ios didFingerprintDatabaseChange');*/
        window.plugins.touchid.didFingerprintDatabaseChange(function(changed) {
            /*// alert('fingerprint changed ios' + changed);*/
            if (changed) {
                successCallback(changed);
            } else {
                /*// alert('fingerprint no change ios');*/
                errorCallback(error);
            }
        }, function(error) {
            /*// alert('fingerprint no change ios');*/
            errorCallback(error);

        });
    } else {
        //note for android this validated in auth function
        errorCallback(error);
    }

};


touchIDWrapper.touchIDRegistration = function(token) {

    touchIDWrapper.checkForRegisteredFinger(function(success) {

        /*Finger print change data check and save*/
        touchIDWrapper.didFingerprintDatabaseChange(function(success) {

        }, function(error) {

        });
        touchIDWrapper.touchIdFirstTimeConfig(token, function(success) {
                if (isSamsung) {
                    SamsungPass.startIdentifyWithDialog(scannermsgSamsung,function(success) {
                        /*alert("success " + success);*/
                        sharedpreferences.getSharedPreferences(tokenIDkey, 'MODE_PRIVATE', function(result) {
                                sharedpreferences.putString(tokenIDkey, token, function(result) {
                                    document.loginForm_reg_sub.tokenId.value = token;
                                    if (isTouchConfigPostLogin) {
                                        loginCheckTouchIdForConfig();
                                    } else {
                                        loginCheckTouchIdPostLogin();
                                    }
                                }, function(result) {
                                    /*errorCallback(result);*/
                                });
                            },
                            function(result) {
                                /* errorCallback(result);*/
                            });
                    }, function(error) {
                        /*alert("error " + error);*/
                        if (error === "MAX_COUNT3") {
                            touchIdexceptions(touchfailreg,tryagain);
                        } else if (error === "FINGER_CHANGED") {
                            sharedpreferences.getSharedPreferences(tokenIDkey, 'MODE_PRIVATE', function(result) {
                                    sharedpreferences.putString(tokenIDkey, token, function(result) {
                                        document.loginForm_reg_sub.tokenId.value = token;
                                        if (isTouchConfigPostLogin) {
                                            loginCheckTouchIdForConfig();
                                        } else {
                                            loginCheckTouchIdPostLogin();
                                        }
                                    }, function(result) {
                                        /*errorCallback(result);*/
                                    });
                                },
                                function(result) {
                                    /* errorCallback(result);*/
                                });

                        }

                    });

                } else if (isiOS) {
                    touchIDWrapper.touchIDAuth(function(success) {
                        document.loginForm_reg_sub.tokenId.value = token;
                        if (isTouchConfigPostLogin) {
                            loginCheckTouchIdForConfig();
                        } else {
                            loginCheckTouchIdPostLogin();
                        }
                    }, function(error) {
                        document.loginForm_reg_sub.tokenId.value = "";
                        touchIDWrapper.touchIDDisable(function(success) {
                            /* alert('Invalid FingerPrint touchIDRegistration' + success);*/
                        }, function(error) {

                        });
                        if (isiOS && error == -1) {
                            /* IOS wrong attatment failure*/
                            touchIdexceptions(touchfailreg,tryagain);
                        } else {
                            /* alert("Auth Error" + error);*/
                            /* touchIdexceptions(touchfail);*/
                            /*// alert('Invalid FingerPrint ==>' + error);*/
                        }
                    });
                } else if (isAndroid) {
                    document.loginForm_reg_sub.tokenId.value = token;
                    if (isTouchConfigPostLogin) {
                        loginCheckTouchIdForConfig();
                    } else {
                        loginCheckTouchIdPostLogin();
                    }
                    /* // alert('android called');*/
                }

            },
            function(error) {
                /* document.loginForm_reg_sub.tokenId.value = "";*/
                /* loginCheckTouchIdPostLogin();*/
                /* // alert('Invalid FingerPrint ' + error);*/
            });
    }, function(error) {
        touchIdexceptions(noFinger,touchok);
        /*errorCallback(error);*/
    });
}
touchIDWrapper.touchIDLogin = function() {
    /*touchIdexceptions('Error_home_user_pass_not_found_newavtfix');*/
    /*// alert('touchIDLogin');*/
    touchIDWrapper.checkForRegisteredFinger(function(success) {

            /*// alert('touch id Available');*/
            touchIDWrapper.touchIDKeyHasCheck(
                function(success1) {
                    /*// alert('login called touchIDKeyHasCheck' + success1);*/
                    /* the below line is used for other user validation purpose*/
                    document.loginForm_reg_sub.tokenId.value = success1;
                    touchIDWrapper.touchIDAuth(function(success) {
                            /*// alert("touchIDAuth token is: " + success);*/
                            touchIDWrapper.didFingerprintDatabaseChange(
                                function(success) {
                                    /*// alert('didFingerprintDatabaseChange success');*/
                                    touchIDWrapper.touchIDDisable(function(success) {

                                        touchIdAddwarn(newTouchADios,tconfigure,touchcancel);
                                        /*// alert('New finger added / deleted ');*/
                                    });

                                },
                                function(error) {
                                    loginCheckTouchIdPostLogin();
                                });


                        },
                        function(error) {
                            document.loginForm_reg_sub.tokenId.value = "";
                            if (isAndroid && error == 'KeyPermanentlyInvalidatedException') {
                                /*// alert("auth err  add/del new finger ==> " + error);*/
                                touchIDWrapper.touchIDDisable(function(success) {
                                    /*// alert("New finger added / deleted");*/
                                    touchIdAddwarn(newTouchADios,tconfigure,touchcancel);
                                });
                            } else if (isSamsung && error === "MAX_COUNT3") {
                                touchIdexceptions(touchfailreg,tryagain);
                            } else if (isSamsung && error === "FINGER_CHANGED") {
                                touchIDWrapper.touchIDDisable(function(success) {
                                    /*// alert("New finger added / deleted");*/
                                    touchIdAddwarn(newTouchADios,tconfigure,touchcancel);
                                });
                            } else if (isiOS && error == -1) {
                                /* IOS wrong attatment failure*/
                                touchIdexceptions(touchfail,touchok);
                            } else {
                                /* alert("Auth Error" + error);*/
                                /* touchIdexceptions(touchfail);*/
                                /*// alert('Invalid FingerPrint ==>' + error);*/
                            }


                        });
                },
                function(error) {
                    document.loginForm_reg_sub.tokenId.value = "";
                    /*// alert('touchIdFirstTimeConfig needs to call');*/


                });
        },
        function(error) {
            touchIdexceptions(noFinger,touchok);
            touchIDWrapper.touchIDDelete(function(success) {
                //this will delete tokens from mobile
            });
        });




}
touchIDWrapper.touchIDDisable = function(successCallback, errorCallback) {
    touchIDWrapper.touchIDKeyHasCheck(
        function(success1) {
            /*disableRegisteredTouchId(success1);*/
            touchIDWrapper.touchIDDelete(function(success) {
                successCallback(true);
            });
        },
        function(error) {
            errorCallback(error);
        });


};
module.exports = touchIDWrapper;