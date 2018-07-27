sap.ui.define([
	"sap/m/Button",
	"sap/m/Dialog",
	"sap/m/Text",
	"sap/ui/core/mvc/Controller"
], function (Button,Dialog,Text,Controller) {
	"use strict";

	return Controller.extend("ns.TestCourier.controller.App", {

		onInit: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("RouteApp").attachPatternMatched(this.renderPage, this);
		},

		onPolicyCheck: function (oEvent) {
			var dialog = new Dialog({
				title: 'Policies',
				type: 'Message',
					content: new Text({
						text: "All the policies listed here"
					}),
				beginButton: new Button({
					text: 'OK',
					press: function () {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});

			dialog.open();
		},
		
		onLogin: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Login");
		}

	});
});