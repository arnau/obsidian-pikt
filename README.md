## Obsidian Pikt

A plugin to parse [Pikchr] codeblocks.


## Changelog

- **0.1.0**:
  - Add plugin with pikt render logic.


## Configuration

This plugin will insert the generated SVG into the DOM with a class `pikt`. By
design [Pikchr] expects colours to be defined as part of the script and
similarly does this plugin.

By default this plugin inverts colours when the Obsidian theme is dark. You can
counter that by:

```css
.theme-dark svg.pikt {
  filter: invert(0%);
}
```

## Usage

This plugin will attempt to render any codeblock with the language set to
`pikt`, For example:

    ```pikt
    box "A simple Pikchr box"
    ```

If you are not familiar with the Pikchr script, the [Pikchr] website is the
best place to get started. The [Tutorial Analysis Of A Pikchr Diagram] is
particularly nice.


By default, Pikchr takes as much space as possible for the diagram, sometimes
though, the result is too big. If this is the case, I recommend using a `scale
= 1.2` for better sized diagrams. For example:

```pikchr
scale = 1.2

box "Pikt"
```


## Installation

From Obsidian:

- Ensure Community Plugins are enabled.
- Browse community plugins searching for **pikt**.
- Click install.
- Enable the plugin in the “Community Plugins” Settings section.
- Open a file (notice that previously opened files won't get the effects of the plugin until reopened or changed).

From release:

- Download the `obsidian-pikt-{version}.zip` file from the chosen release, for example the [latest release].
- Ensure “Community Plugins” are enabled in Settings.
- Ensure the `.obsidian/plugins/` directory exists in your vault directory.
- Expand the zip file into the `.obsidian/plugins/` directory such that an `obsidian-pikt` directory is a direct child of `plugins`.
- Enable the plugin in the “Community Plugins” Settings section.
- Open a file (notice that previously opened files won't get the effects of the plugin until reopened or changed).

From source:

- Clone the [source repository].
- Run `npm install`.
- Run `npm run build`.
- Create a `obsidian-pikt` under your vault's `.obsidian/plugins/` directory.
- Copy over `main.js`, `styles.css`, `versions.json` and `manifest.json`.
- Enable the plugin in the “Community Plugins” Settings section.
- Open a file (notice that previously opened files won't get the effects of the plugin until reopened or changed).


## Licence

Arnau Siches under the [MIT License](./LICENCE)



[Pikchr]: https://pikchr.org/
[Tutorial Analysis Of A Pikchr Diagram]: https://pikchr.org/home/doc/trunk/doc/teardown01.md
[latest release]: https://github.com/arnau/obsidian-pikt/releases/latest
[source repository]: https://github.com/arnau/obsidian-pikt
