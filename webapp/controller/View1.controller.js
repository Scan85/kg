sap.ui.define(["sap/ui/core/mvc/Controller"], 
	function (Controller) {
	"use strict";
	
	return Controller.extend("KundenGeschenk.controller.View1", {
		onInit: function(oEvent) {
			//var session = this.getSessionContext();
			/** TODO ODATA CALL
			 * var ServiceURL = "<OData_ServiceURL>";
			 * oUpdateModel = new sap.ui.model.odata.ODataModel(ServiceURL);
			*/
		},
		
		onAfterRendering: function (oEvent) {
			/** TODO remove MOCKING */
			var userName = "Musermann";
			var userFirstName = "Max";
			var userAdress = "Musterstra\xDFe 12";
			var userPlace = "Musterstadt";
			var userZip = "12345";
			var userCountry = "Deutschland";
			var userBday = "01.01.1960";
			var userId = "123456789";
			//Text Fields
			sap.ui.getCore().byId("__xmlview0--textName").setText(userName);
			sap.ui.getCore().byId("__xmlview0--textFirstName").setText(userFirstName);
			sap.ui.getCore().byId("__xmlview0--textAdress").setText(userAdress);
			sap.ui.getCore().byId("__xmlview0--textPlace").setText(userPlace);
			sap.ui.getCore().byId("__xmlview0--textZip").setText(userZip);
			sap.ui.getCore().byId("__xmlview0--textCountry").setText(userCountry);
			sap.ui.getCore().byId("__xmlview0--textBday").setText(userBday);
			sap.ui.getCore().byId("__xmlview0--textId").setText(userId);
			//Input Fields
			sap.ui.getCore().byId("__xmlview0--input0").setValue(userName);
			sap.ui.getCore().byId("__xmlview0--input1").setValue(userFirstName);
			sap.ui.getCore().byId("__xmlview0--input2").setValue(userAdress);
			sap.ui.getCore().byId("__xmlview0--input3").setValue(userPlace);
			sap.ui.getCore().byId("__xmlview0--input4").setValue(userZip);
			sap.ui.getCore().byId("__xmlview0--input5").setValue(userCountry); 
			/** TODO END */
		},
		/**
		 *@memberOf KundenGeschenk.controller.View1
		 */
		refreshUserData: function (oEvent) {
			/** TODO remove MOCKING */
			// Text Values
			sap.ui.getCore().byId("__xmlview0--textName").setText("Mustermann");
			sap.ui.getCore().byId("__xmlview0--textFirstName").setText("Max");
			sap.ui.getCore().byId("__xmlview0--textAdress").setText("Musterstra\xDFe 12");
			sap.ui.getCore().byId("__xmlview0--textPlace").setText("Musterstadt");
			sap.ui.getCore().byId("__xmlview0--textZip").setText("12345");
			sap.ui.getCore().byId("__xmlview0--textCountry").setText("Deutschland");
			sap.ui.getCore().byId("__xmlview0--textBday").setText("01.01.1960");
			sap.ui.getCore().byId("__xmlview0--textId").setText("123456789"); // Input Values
			/** TODO END */
		},
		/**
		 *@memberOf KundenGeschenk.controller.View1
		 */
		changeUserData: function (oEvent) {
			/** TODO remove MOCKING */
			var userName = sap.ui.getCore().byId("__xmlview0--input0").getValue();
			var userFirstName = sap.ui.getCore().byId("__xmlview0--input1").getValue();
			var userAdress = sap.ui.getCore().byId("__xmlview0--input2").getValue();
			var userPlace = sap.ui.getCore().byId("__xmlview0--input3").getValue();
			var userZip = sap.ui.getCore().byId("__xmlview0--input4").getValue();
			var userCountry = sap.ui.getCore().byId("__xmlview0--input5").getValue();
			//set text values
			sap.ui.getCore().byId("__xmlview0--textName").setText(userName);
			sap.ui.getCore().byId("__xmlview0--textFirstName").setText(userFirstName);
			sap.ui.getCore().byId("__xmlview0--textAdress").setText(userAdress);
			sap.ui.getCore().byId("__xmlview0--textPlace").setText(userPlace);
			sap.ui.getCore().byId("__xmlview0--textZip").setText(userZip);
			sap.ui.getCore().byId("__xmlview0--textCountry").setText(userCountry); /** TODO END */
		},
		/**
		 *@memberOf KundenGeschenk.controller.View1 
		 */
		onChangeUserCall: function (oEvent) {
			/** TODO remove MOCKING */
			//Text values
			var userName = sap.ui.getCore().byId("__xmlview0--textName").getText();
			var userFirstName = sap.ui.getCore().byId("__xmlview0--textFirstName").getText();
			var userAdress = sap.ui.getCore().byId("__xmlview0--textAdress").getText();
			var userPlace = sap.ui.getCore().byId("__xmlview0--textPlace").getText();
			var userZip = sap.ui.getCore().byId("__xmlview0--textZip").getText();
			var userCountry = sap.ui.getCore().byId("__xmlview0--textCountry").getText();
			//Input values
			var userNameText = sap.ui.getCore().byId("__xmlview0--input0");
			var userFirstNameText = sap.ui.getCore().byId("__xmlview0--input1");
			var userAdressText = sap.ui.getCore().byId("__xmlview0--input2");
			var userPlaceText = sap.ui.getCore().byId("__xmlview0--input3");
			var userZipText = sap.ui.getCore().byId("__xmlview0--input4");
			var userCountryText = sap.ui.getCore().byId("__xmlview0--input5");
			//Change text data
			userName.setValue(userNameText);
			userFirstName.setValue(userFirstNameText);
			userAdress.setValue(userAdressText);
			userPlace.setValue(userPlaceText);
			userZip.setValue(userZipText);
			userCountry.setValue(userCountryText);
		},
		/**
		 *@memberOf KundenGeschenk.controller.View1
		 */
		refreshInputValues: function (oEvent) {
			/** TODO remove MOCKING */
			//Text Fields
			var userNameText = sap.ui.getCore().byId("__xmlview0--textName").getText();
			var userFirstNameText = sap.ui.getCore().byId("__xmlview0--textFirstName").getText();
			var userAdressText = sap.ui.getCore().byId("__xmlview0--textAdress").getText();
			var userPlaceText = sap.ui.getCore().byId("__xmlview0--textPlace").getText();
			var userZipText = sap.ui.getCore().byId("__xmlview0--textZip").getText();
			var userCountryText = sap.ui.getCore().byId("__xmlview0--textCountry").getText();
			//Input Fields
			var userName = sap.ui.getCore().byId("__xmlview0--input0");
			var userFirstName = sap.ui.getCore().byId("__xmlview0--input1");
			var userAdress = sap.ui.getCore().byId("__xmlview0--input2");
			var userPlace = sap.ui.getCore().byId("__xmlview0--input3");
			var userZip = sap.ui.getCore().byId("__xmlview0--input4");
			var userCountry = sap.ui.getCore().byId("__xmlview0--input5");
			//Set new values
			userName.setValue(userNameText);
			userFirstName.setValue(userFirstNameText);
			userAdress.setValue(userAdressText);
			userPlace.setValue(userPlaceText);
			userZip.setValue(userZipText);
			userCountry.setValue(userCountryText);
		}
	});
});