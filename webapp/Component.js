/* global document */
sap.ui.define([
		"sap/ui/core/UIComponent",
		"sap/m/routing/Router"
	], function (UIComponent, Router) {
		"use strict";
		
		return UIComponent.extend("de.integrata.training.opentext.Component", {
			metadata : {
				rootView: {
					viewName: "de.integrata.training.opentext.view.App",
					type: "XML"
				},
				routing: {
					config: {
						routerClass: Router,
						viewType: "XML",
						viewPath: "de.integrata.training.opentext.view",
						controlId: "IdSplitApp",
						controlAggregation: "detailPages",
						transition: "slide",
						async: true
					},
					routes: [
						{
							pattern: "",
							name: "main",
							target: [
								"master",
								"details"
							]					
						}
					],
					targets: {
						master: {
							controlAggregation: "masterPages",
							viewName: "Master"
						},
						details: {
							viewName: "Detail"
						}
					}
				}
			},
			
			/**
			 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
			 * In this method, the device models are set and the router is initialized.
			 * @public
			 * @override
			 */
			init : function () {
				UIComponent.prototype.init.apply(this, arguments);
				this.getRouter().initialize();
			}
		});
	}
);