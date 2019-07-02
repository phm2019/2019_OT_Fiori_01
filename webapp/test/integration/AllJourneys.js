/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 FlugkundeSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"de/integrata/training/opentext/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"de/integrata/training/opentext/test/integration/pages/App",
	"de/integrata/training/opentext/test/integration/pages/Browser",
	"de/integrata/training/opentext/test/integration/pages/Master",
	"de/integrata/training/opentext/test/integration/pages/Detail",
	"de/integrata/training/opentext/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "de.integrata.training.opentext.view."
	});

	sap.ui.require([
		"de/integrata/training/opentext/test/integration/MasterJourney",
		"de/integrata/training/opentext/test/integration/NavigationJourney",
		"de/integrata/training/opentext/test/integration/NotFoundJourney",
		"de/integrata/training/opentext/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});