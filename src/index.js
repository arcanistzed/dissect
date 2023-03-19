import { DissectSheet } from "./view/DissectSheet.js";

import "../styles/init.scss";

// Register sheet
DocumentSheetConfig.registerSheet(Adventure, "dissect", DissectSheet, {
	label: () => game.i18n.localize("dissect.appTitle"),
	makeDefault: true,
});
