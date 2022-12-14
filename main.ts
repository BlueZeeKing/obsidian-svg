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

// Remember to rename these classes and interfaces!

export default class SVGPlugin extends Plugin {
	postProcessor = (
		source: string,
		element: HTMLElement,
		context: MarkdownPostProcessorContext
	) => {
		element.innerHTML = source;
	};

	async onload() {
		this.registerMarkdownCodeBlockProcessor("svg", this.postProcessor);
	}

	onunload() {}
}
