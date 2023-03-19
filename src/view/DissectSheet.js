import { SvelteApplication } from "@typhonjs-fvtt/runtime/svelte/application";

import DissectSheetShell from "./DissectSheetShell.svelte";

export class DissectSheet extends SvelteApplication {
/** @override */
	static get defaultOptions() {
		return mergeObject(super.defaultOptions, {
			id: "dissect",
			title: "dissect.appTitle",
			classes: ["dissect"],
			width: Math.max(window.innerWidth * (2 / 3), 800),
			height: Math.max(window.innerHeight * (2 / 3), 580),
			resizable: true,
			sheetConfig: true,
			minWidth: 800,
			minHeight: 580,

			svelte: {
				class: DissectSheetShell,
				target: document.body,
			},
		});
	}
}

globalThis.DissectSheet = DissectSheet;
