# Liquid Glass Switch Plugin

A cross-agent plugin package with the glass switch implementation, a reusable adaptation skill, and native installation entry points for Codex, Claude Code, and DeepSeek Harness (DSH).

The component is a dependency-free, two-option segmented switch with an Apple-inspired frosted-glass lens. Dragging supports continuous reversals and bounded elastic overhang (20 px maximum per side). It respects reduced-motion preferences and uses keyboard-accessible native buttons.

[简体中文](README.zh.md)

## Install in Codex

In the Codex desktop app, add this repository as a plugin marketplace:

```sh
codex plugin marketplace add lym2128094758/liquid-glass-switch
```

Then open Codex **Plugins**, select the Liquid Glass Switch marketplace, and install the plugin. Its bundled skill helps the agent adapt the actual component to a project or harness UI that you can edit.

## Install in Claude Code

```sh
claude plugin marketplace add lym2128094758/liquid-glass-switch
claude plugin install liquid-glass-switch@liquid-glass-switch-marketplace
```

## Install in DeepSeek Harness (DSH)

For the CLI web profile:

```sh
dsh plugin --profile web add git+https://github.com/lym2128094758/liquid-glass-switch.git
```

For DSH Desktop, add the GitHub repository URL from its **Plugins** page. The DSH package registers the same bundled `liquid-glass-switch` skill in its agent skill catalog.

## Use the component in a web project

Copy `skills/liquid-glass-switch/assets/liquid-controls.js` and `liquid-controls.css` into the project and use this markup:

```html
<div class="view-switch" role="group" aria-label="Display mode">
  <button class="view-button active" type="button" aria-pressed="true">Plane</button>
  <button class="view-button" type="button" aria-pressed="false">Sphere</button>
</div>
<link rel="stylesheet" href="liquid-controls.css">
<script defer src="liquid-controls.js"></script>
```

The script inserts the animated glass lens. Your app updates `.active` and `aria-pressed` from its own state in the buttons' click handlers. Use `data-theme="dark"` for dark glass. Keep ancestors from clipping the 20 px elastic overhang.

## Included files

- `plugin.json`: portable Agent Plugins manifest for Codex-compatible hosts.
- `.claude-plugin/`: Claude Code plugin and marketplace manifests.
- `skills/liquid-glass-switch/`: shared Agent Skill, references, and copyable component assets.
- `index.js` and `cordis.patch.yml`: DSH bundle that exposes the skill to DSH agents.
- `demo.html`: standalone light/dark browser demo.

**Important scope:** Codex and Claude plugins add the skill and component resources to the coding agent; they do not replace or restyle Codex/Claude's own application chrome. The agent uses the skill to change an editable web project or harness. DSH likewise exposes the skill to its agents through a native bundle plugin.

## Development

Open `demo.html` in a browser to preview the component. The elastic overhang defaults to `20` CSS pixels per side and the drag threshold is `70%`; both are in `skills/liquid-glass-switch/assets/liquid-controls.js`.

## License

MIT
