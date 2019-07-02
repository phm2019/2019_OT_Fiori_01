/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"de/integrata/training/opentext/test/integration/NavigationJourneyPhone",
		"de/integrata/training/opentext/test/integration/NotFoundJourneyPhone",
		"de/integrata/training/opentext/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});