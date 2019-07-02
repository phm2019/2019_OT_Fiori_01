sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("de.integrata.training.opentext.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf de.integrata.training.opentext.view.Detail
		 */
			onInit: function() {
				sap.ui.core.UIComponent.getRouterFor(this).getRoute("details").attachPatternMatched(this._onRouteMatched, this);
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf de.integrata.training.opentext.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf de.integrata.training.opentext.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf de.integrata.training.opentext.view.Detail
		 */
		//	onExit: function() {
		//
		//	}
		
		_onRouteMatched: function(oEvent) {
			var sCustomerId =  oEvent.getParameter("arguments").CustomerId;
			
			this.getView().bindElement({
				path: "/FlugkundeSet('" + sCustomerId + "')",
				parameters: {expand: "Flugbuchungen"}
			});
			
			// Bessere Syntax
			// var oModel = this.getView().getModel();
			// var sPath = oModel.createKey("/FlugkundeSet", {
			// 	Customerid: sCustomerId
			// });
			// this.getView().bindElement({
			// 	path: sPath,
			//  parameters: {expand: "Flugbuchungen"}
			// });
		}
	});

});