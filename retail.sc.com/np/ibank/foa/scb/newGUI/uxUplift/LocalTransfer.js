
	function getBranchByBankName(){
		if($('input#localCntryCd').val() == 'LK' || $('input#localCntryCd').val() == 'BD'){
			$("#ser").attr('value', '3');
			$("#act").attr('value', '54');
			$("#option").attr('value', 'ft_local_transfers_addentry_selectbranch');
			$("#benefType").attr('value','IBFT');			
			var branchName = $('#benefBranchName option:selected').val();
			submitLoadingProgress($("#ft_local_transfers_addentry"),appContextPathWithIBank);
		}
	}
	function hiddenBranchName(){
		var branchName = $('#benefBranchName option:selected').val();
		document.getElementById("benefRoutingNo").value=branchName; 
		$('input#branchName').val(branchName);
		
	}
		function gotoOverViewScr() {
			$("#ser").attr('value', '3');
			$("#act").attr('value', '54');
			$("#option").attr('value', 'ft_local_transfers_overview');
			//alert('Test:::'+$('input#localCntryCd').val());
			//alert('Testtt'+$('#benefType').val());
			if ($('input#localCntryCd').val() == 'BD') {
				$('#benefType').attr('value',
						'IBFT');
			} 			
			submitLoadingProgress($("#ft_local_transfers_addentry"),appContextPathWithIBank);
		}
		//Added for DFS project
		function trimSpace(x) {
		return x.replace(/^\s+|\s+$/gm,'');
		}
		
		function onload() {
			//alert('Inside onload1');
			
						if($('input#localCntryCd').val() == 'BH' && $('#benefTypeIndex')
								.val() == '1'){
							var x=$('#benefCurrencyIndex').val();
									$('#benefCurrencyIndex').prop('disabled', true);
									
									
									}
						if($('input#localCntryCd').val() == 'BH'){
							
							$('#benefAddress').alphanum();
						} else {
							$('#benefAddress').alphanum();
						}
						
						if($('input#localCntryCd').val() == 'BH'){
							
							$('#branchName').alphanum();
							}else {
						$('#branchName').alphanum({
							allow: "-,.",
							disallow: "\!#$%^&*()_+-=][{}:;?'><,.@\""
						});
							}
						$('#benefAccNumber').alphanum({
							allow: "-,.",
							disallow: "\!#$%^&*()_+-=][{}:;?'><,.@\""
						});
						$('#benefNickName').alphanum();
						
						if($('input#localCntryCd').val() == 'BH' ){
							$('#benefName').alpha();
						}else {
							$('#benefName').alphanum();
						}
						
						if($('input#localCntryCd').val() == 'KE' || $('input#localCntryCd').val() == 'BH' ){
							$('#swiftOrBicCode').alphanum();
						}
						else{
														$('#swiftSortCode').alphanum();
						}
						if($('input#localCntryCd').val() == 'BH' ){
						$('#benefAccNumber').alphanum();
						}else {
							$('#benefAccNumber').numeric();
							}
						if ($('input:radio[name=search]:checked').val() == 'searchByBank') {
							if($('input#localCntryCd').val() == 'KE' || $('input#localCntryCd').val() == 'BH' || $('input#localCntryCd').val() == 'LK'){
								$('#swiftOrBicCode').attr('disabled', true);
							}
							else{
								$('#swiftSortCode').attr('disabled', true);
							}
							$('#branchName').attr('disabled', false);
							$('#benefBankNameIndex').attr('disabled',false);
						} else {
							if($('input#localCntryCd').val() != 'BD'){
							$('div.searchByBank').attr('disabled', true);
							$('#branchName').attr('disabled', true);
							$('#benefBankNameIndex').attr('disabled',true);
							}
						}
						$('input:radio[name=search]')
								.click(
										function() {
											if ($(
													'input:radio[name=search]:checked')
													.val() == 'searchByBank') {
												//Added for Sort code CR
												if($('input#localCntryCd').val() == 'KE' || $('input#localCntryCd').val() == 'BH'  || $('input#localCntryCd').val() == 'LK'){
													$('#swiftOrBicCode').attr(
															'disabled', true);
												}else{
													$('#swiftSortCode').attr(
															'disabled', true);
												}
												
												$('div.searchByBank').attr(
														'disabled', false);
												$('#branchName').attr(
														'disabled', false);
											} else {
												$('div.searchByBank').attr(
														'disabled', true);
												$('#branchName').attr(
														'disabled', true);
												//Added for Sort code CR
												if($('input#localCntryCd').val() == 'KE' || $('input#localCntryCd').val() == 'BH'  || $('input#localCntryCd').val() == 'LK'){
													$('#swiftOrBicCode').attr(
															'disabled', false);
												}else{
													$('#swiftSortCode').attr(
															'disabled', false);
												}
											}
										});
						
						//Added for DFS project
						$("#beneficiaryCountryIndex").change(
						function (){
							//alert($('#beneficiaryCountryIndex :selected').val());
							var cntryDropDwnKey = $('#beneficiaryCountryIndex :selected').val();
							if(cntryDropDwnKey.indexOf("\|") != -1){
								$('#beneficiaryCountry').attr('value',cntryDropDwnKey.substring(0,cntryDropDwnKey.indexOf("\|")-1));
								$('#beneficiaryCountryDesc').attr('value',cntryDropDwnKey.substring(cntryDropDwnKey.indexOf("\|")+1));
								$('#beneficiaryCountryDisp').attr('value',$('#beneficiaryCountryIndex :selected').text());
								//alert($('#beneficiaryCountry').val());
								//alert($('#beneficiaryCountryDesc').val());
								//alert(trimSpace($('#beneficiaryCountryDesc').val()).length);
							}else{
								$('#beneficiaryCountry').attr('value','');
								$('#beneficiaryCountryDesc').attr('value','');
								$('#beneficiaryCountryDisp').attr('value','');
							}
							var newlength = Number("104") - trimSpace($('#beneficiaryCountryDesc').val()).length;
									//alert($('#beneficiaryCountry').val());
												//alert(trimSpace($('#beneficiaryCountryDesc').val()).length);
							//alert(newlength);
								//alert('address length before ->'+ $('#benefAddress').val().length);
							$('#benefAddress').attr('value','');
							//alert('address length after ->'+ $('#benefAddress').val().length);
							$('#benefAddress').attr('maxlength',newlength);
							//alert($('#benefAddress').attr('maxlength',newlength));
								}
						);
						$("#benefTypeIndex")
								.change(
										function() {
											if($('input#localCntryCd').val() == 'BH' && $('#benefTypeIndex')
													.val() == '1'){
												var x=$('#benefCurrencyIndex').val();
														$('#benefCurrencyIndex').prop('disabled', true);
														
														
														}
											if ($('#localBeneTypeIndex').val() == '0'
													&& $('#benefTypeIndex')
															.val() == '1') {
												//Fix for bene address position
												if($('input#localCntryCd').val() !== 'BH'){
													$('.DFSPart :input#benefAddress').prop( "disabled", false );
													$('.DFSPart').removeClass('hide');
													$('.DFSPart').show();
													$('.dfsAddressLbl').addClass('hide');
													$('.dfsAddressLbl').hide();
													
													
													if($('input#localCntryCd').val() !== 'BD'){
														$('.NonDFSPart').addClass('hide');
														$('.NonDFSPart').hide();
														$('.NonDFSPart :input#benefAddress').prop( "disabled", true ); 
													}

												 	}else{
								
												$('.DFSPart').removeClass('hide');
												$('.DFSPart').show();
												$('.DFSPart :input#benefAddress').prop( "disabled", true );
												$('.dfsAddress').show();
												$('.dfsAddress :input#benefAddress').prop( "disabled", false );
													$('.dfsAddressLbl').show();
												
												
												} 
												return false;
											}

											$("#ser").attr('value', '3');
											$("#act").attr('value', '54');
											$("#option").attr('value',
													'getBeneSpecificCurryency');
											if ($('#benefTypeIndex').val() == '1' || $('input#localCntryCd').val() == 'BD') {
												$('#benefType').attr('value',
														'IBFT');
											} else {
												$('#benefType').attr('value',
														'IFT');
											}											
											submitLoadingProgress($("#ft_local_transfers_addentry"),appContextPathWithIBank);
										}
								);
						
						//Added for address fix
						if ($('#benefTypeIndex').val() == '1') {
							//Fix for bene address position
							
						if( ($('input#localCntryCd').val() !== 'BH') || ($('input#localCntryCd').val() !== 'LK')){
								$('.DFSPart :input#benefAddress').prop( "disabled", false );
								$('.dfsAddressLbl').hide();
								$('.NonDFSPart').addClass('hide');
								$('.NonDFSPart :input#benefAddress').prop( "disabled", true );
						 }else{
							$('.DFSPart').show();
							$('.DFSPart :input#benefAddress').prop( "disabled", false );
							$('.dfsAddress').show();
							$('.dfsAddress :input#benefAddress').prop( "disabled", false );
						} 
						} else{
								
								//Fix for bene address position
								$('.NonDFSPart :input#benefAddress').prop( "disabled", false );
								$('.NonDFSPart').removeClass('hide');
								$('.DFSPart').addClass('hide');
								$('.DFSPart :input#benefAddress').prop( "disabled", true );
								
						}
													
						//addition ends
						$("#ft_local_transfers_addentry")
								.validate(
										{
											onfocusout : false,
											onkeyup : false,
											onclick : false,
											rules : {
												benefName : {
													required : true,
													maxlength : 35,
													alphaNumericWithSpace : true
												},
												benefAccNumber : {
													required : true
												},
												benefNickName : {
													required : false,
													alphaNumericWithSpace : true
												},
												//Modified for DFS KE project
											benefAddress : {
													required : function(){
													if($('#benefType').val() == 'IBFT' && $('input#localCntryCd').val() !== 'BH'){
															return true;
															}
														else{
															return false;
															}
													}
											},
												benefEmail : {
													required : '#emailFlag:checked',
													email : true
												},
												//Modified for Sort Code CR
												swiftOrBicCode : {
													required : function(){
														if($('input#localCntryCd').val() == 'KE' || $('input#localCntryCd').val() == 'BH'){
															if('#bicCodeSearch:checked'){
																return true;
															}
														}else{
																return false;
														}
													},
													minlength : 8
												},
												swiftOrBicCode : {
													required : function(){
														if($('input#localCntryCd').val() == 'LK'){
															if('#bicCodeSearch:checked'){
																return true;
															}
														}else{
																return false;
														}
													},
													
													minlength : 5
													
												},
												//Added for Sort Code CR
												swiftSortCode : {
													required : function(){
														if($('input#localCntryCd').val() == 'KE' || $('input#localCntryCd').val() == 'BH' || $('input#localCntryCd').val() == 'LK'){
																return false;
														}else{
															if('#CodeSearch:checked'){
																return true;
															}
														}
													},
													minlength : 5
												}
											},
											
											messages : {
												benefName : {
													required : "Please enter the Beneficiary Name",
													maxlength : "Beneficiary Name should not exceed 35 characters",
													alphaNumericWithSpace : "Beneficiary Name should not have special character"
												},
												benefAccNumber : {
												required : function(){

													if($('input#localCntryCd').val() == 'BH'){
														return "Please enter a valid IBAN number without Spaces";
													}else if($('input#localCntryCd').val() == 'BD'){
														return "Please enter the Beneficiary Account/Card Number";	
													}else{
														return "Please enter the Beneficiary Account Number / IBAN";
													}	

													},

													
													number : "Please enter a valid Beneficiary Account Number / IBAN"
												},
												benefNickName : {
													alphaNumericWithSpace : "Beneficiary Nickname should not have special character or blank spaces"
												},
												benefEmail : {
													required : "Please enter email",
													email : "Please enter valid email"
												},
												swiftOrBicCode : {
													required : function(){
														if($('input#localCntryCd').val() == 'LK'){
															return "Please enter SWIFT/BIC/Local Clearing Code";
														}else{
															return "Please enter SWIFT/BIC Code";
															}
													},
													minlength : function(){
														if($('input#localCntryCd').val() == 'LK'){
															return "Invalid Swift/BIC/Local Clearing code";
														}else{
															return "Invalid Swift/BIC code";
															}
													}
													/* required : "Please enter SWIFT/BIC Code",
													minlength : "Invalid Swift/BIC code" */
												},
												//Added for Sort Code CR
												swiftSortCode : {
													required : "Please enter SWIFT/BIC/Local Clearing Code",
													minlength : "Invalid Swift/BIC/Local Clearing code"
												},
											//Added for DFS KE project
											benefAddress : {
												required : "Please enter the beneficiary address"
											}
	
																						},
											showErrors : function(errorMap,
													errorList) {
												i = 0;
												$.each(errorList, function(
														name, value) {
													if (i == 0) {
														displayJSErrorMessageForLogin('err',this.message);
														$('.error:not(".server-error")').addClass('hide');
														//alert(this.message);
														i++;
													} else {
														i++;
													}
												});
											}
										});
						$.validator.addMethod("alphaNumericWithSpace",
								function(value, element) {
									return this.optional(element)
											|| /^[\w\s]+$/i.test(value);
								});
				
		}
		
		function validateBenefDetails() {

			if ($('#benefTypeIndex').val() <= 0) {
				if ($('input#localCntryCd').val() == 'BD'){
					Uialert("Please select beneficiary account type");
				}else{
				    Uialert("Please select beneficiary type");
			    }
										return false;
									} else if ($('input#localCntryCd').val() == 'BD'){
										$('#benefType').attr('value', 'IBFT');
										if ($('#benefTypeIndex').val() == '1') {
											$('#benefAccType').attr('value', 'Account');
										}else{
											$('#benefAccType').attr('value', 'Card');
										}
										
									} else if ($('#benefTypeIndex').val() == '1') {
										$('#benefType').attr('value', 'IBFT');
									} else {
										$('#benefType').attr('value', 'IFT');
									}
										
										//Added for DFS KE project
			if ($('#benefType').val() == 'IBFT' && $('input#localCntryCd').val() !== 'BH' ) {
											if($('#beneficiaryCountryIndex option:selected').val() == 'NOSEL'){
												//alert('Please select Beneficiary Country(Country of Residence)');
												displayJSErrorMessageForLogin('err',"Please select Beneficiary Country(Country of Residence)");
																return false;
											} if($('#beneficiaryCountryIndex option:selected').val() != 'NOSEL' && $('#benefAddress').val().length == 0){
												//alert('Please enter Beneficiary Address');
												displayJSErrorMessageForLogin('err',"Please enter Beneficiary Address");
												return false;
											}
										}
										
			if ($("#ft_local_transfers_addentry").valid() == true) {

										if ($("#emailFlag").is(":checked")) {
											$("#benefEmailFlag").attr('value', 'Yes');
										} else {
											$("#benefEmailFlag").attr('value', 'No');
										}
										if($('input#localCntryCd').val() == 'BD' ){
											if ($('#benefBankNameIndex option:selected').val() == 'NOSEL') {
												//alert('Please select Beneficiary Bank Name');
												displayJSErrorMessageForLogin('err',"Please select Beneficiary Bank Name");
												return false;
											}

												if ($('#benefBranchName option:selected').val() ==  'NOSEL'){
													//alert('Please select Beneficiary Branch Name');
													displayJSErrorMessageForLogin('err',"Please select Bene Bank Branch Name");
													return false;
												}else{
													var branchName = $('#benefBranchName option:selected').val();
													$('input#branchName').val(branchName);
												}

										}
										if ($('input:radio[name=search]:checked').val() == "searchByBank") {
											if ($('#benefBankNameIndex option:selected').val() == 'NOSEL') {
												//alert('Please select Beneficiary Bank Name');
												displayJSErrorMessageForLogin('err',"Please select Beneficiary Bank Name");
												return false;
											}
											if($('input#localCntryCd').val() == 'LK' ) {
												if ($('#benefBranchName option:selected').val() ==  'NOSEL'){
													//alert('Please select Beneficiary Branch Name');
													displayJSErrorMessageForLogin('err',"Please select Beneficiary Branch Name");
													return false;
												}else{
													var branchName = $('#benefBranchName option:selected').val();
													$('input#branchName').val(branchName);
												}
											}
										}

				if($('input#localCntryCd').val() == 'BH' ) 
				{
					if ($('#benefAddress').val().length==0){
						$('#benefAddress').attr('value','');
					}
					var validVal = true;
					if($('#benefAccNumber').val().lenght==0){
						validVal = false;
					}
					var val =$('#benefAccNumber').val();
					for(var i=0;i<val.length;i++){
						if (val.charAt(i) == ' ') 
						{
							validVal=false;
						}
					}
					if(validVal==false){
						alert("Please enter a valid IBAN number without Spaces");
						return false;
					}
				}

										var serarOption = $('input:radio[name=search]:checked').val();
										$("#ser").attr('value', '3');
										$("#act").attr('value', '54');
										$("#option").attr('value', 'ft_local_transfers_validatebene');
										$('#searchOption').attr('value', serarOption);										
										submitLoadingProgress($("#ft_local_transfers_addentry"),appContextPathWithIBank);
									}
								}
		function UIUplift_Transform() {
			//alert('inside uplift');

			$.scx.transformInit({
					notes: {
							showTitle: true,
							listStyle: 'paragraph'
					},
					successMessage: {
							showMessage: false
					},
					cleanup: {
							removeColspanValuesFromTds: false
					},
					title: {
						className:".page-title"
					}
			});
			
	$('#ErrorMsgToDisplay').hide();
		$.scx.transformSteps('.page-steps');
	$.scx.transformRadioButtonStyle();
		var colspanItems = document.querySelectorAll('[data-colspan]');
		var nohideRows = document.querySelectorAll('[data-hide]');
			$(colspanItems).each(function(i,item){
				$(item).attr('colspan',$(this).data('colspan'));
			});
			$(nohideRows).each(function(i,item){
				$(item).find('td').removeClass('hide');
			});
			$('.no_hide').removeClass('hide');

/* Search by Bank / Swift code fields enable/disable */
			$('input:radio[name=search]').on('change',function(){
				if($(this).val() == "searchByBank"){
					if($('input#localCntryCd').val() == 'KE' || $('input#localCntryCd').val() == 'BH'  || $('input#localCntryCd').val() == 'LK'){
						$('#swiftOrBicCode').attr('disabled', true);
					}else{
						$('#swiftSortCode').attr('disabled', true);
					}
					$("#branchName").attr('disabled',false);
					$("#benefBankNameIndex").attr('disabled',false);
				}else{
					$("#branchName").attr('disabled',true);
					$("#benefBankNameIndex").attr('disabled',true);
					if($('input#localCntryCd').val() == 'KE' || $('input#localCntryCd').val() == 'BH'  || $('input#localCntryCd').val() == 'LK'){
									$('#swiftOrBicCode').attr(
											'disabled', false);
								}else{
									$('#swiftSortCode').attr(
											'disabled', false);
								}
				}
			});
		}
