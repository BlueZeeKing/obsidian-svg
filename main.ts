import {
	App,
	Editor,
	MarkdownPostProcessorContext,
	MarkdownView,
	Modal,
	Notice,
	Plugin,
	PluginSettingTab,
	Setting,
} from "obsidian";
import * as DOMPurify from "dompurify";

// Remember to rename these classes and interfaces!

export default class SVGPlugin extends Plugin {
	postProcessor = (
		source: string,
		element: HTMLElement,
		context: MarkdownPostProcessorContext
	) => {
		element.innerHTML = DOMPurify.sanitize(source, {
			USE_PROFILES: { svg: true, html: false, mathMl: false },
		});
	};

	async onload() {
		this.registerMarkdownCodeBlockProcessor("svg", this.postProcessor);
	}

	onunload() {}
}
