sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ns.TestCourier.controller.Login", {

		onInit: function(){
			//var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//oRouter.getRoute("Login").attachPatternMatched(this.renderPage, this);
		},
		
		onNavBack: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteApp");
		}

	});

});