import {
  MarkdownPostProcessorContext,
  Plugin,
} from 'obsidian';
import { render as piktRender } from '@arnau/pikt';


async function piktHandler(source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext): Promise<any> {
  const svg = await piktRender(source, { classes: "pikt" });

  el.innerHTML = svg;
}


export default class PiktPlugin extends Plugin {
  async onload() {
    this.registerMarkdownCodeBlockProcessor('pikt', piktHandler);
    this.registerMarkdownCodeBlockProcessor('pikchr', piktHandler);
  }
}
