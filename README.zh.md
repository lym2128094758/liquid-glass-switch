# Liquid Glass Switch 多平台插件

这是完整的可移植插件包，包含玻璃滑块组件、教 AI 代理如何适配组件的 Skill，以及 Codex、Claude Code、DeepSeek Harness（DSH）的原生接入配置。

组件支持双选项切换、连续反向拖动、70% 拖动切换阈值、单侧最多 20px 的弹性越界，并尊重系统减少动态效果设置。

## 接入 Codex

在 Codex 桌面版的插件目录添加本仓库：

```sh
codex plugin marketplace add lym2128094758/liquid-glass-switch
```

随后在 Codex 的「Plugins」中选择 Liquid Glass Switch 并安装。

## 接入 Claude Code

```sh
claude plugin marketplace add lym2128094758/liquid-glass-switch
claude plugin install liquid-glass-switch@liquid-glass-switch-marketplace
```

## 接入 DeepSeek Harness（DSH）

命令行 Web 配置：

```sh
dsh plugin --profile web add git+https://github.com/lym2128094758/liquid-glass-switch.git
```

DSH Desktop 可在插件页面添加这个 GitHub 仓库地址。安装后，该包会把 `liquid-glass-switch` Skill 注册到 DSH Agent 的技能目录中。

## 在网页项目里使用组件

复制 `skills/liquid-glass-switch/assets/liquid-controls.js` 和 `liquid-controls.css` 到网页项目，然后采用下面的结构：

```html
<div class="view-switch" role="group" aria-label="显示模式">
  <button class="view-button active" type="button" aria-pressed="true">平面</button>
  <button class="view-button" type="button" aria-pressed="false">球体</button>
</div>
<link rel="stylesheet" href="liquid-controls.css">
<script defer src="liquid-controls.js"></script>
```

应用需要在按钮点击时更新 `.active` 和 `aria-pressed`。暗色玻璃使用 `data-theme="dark"`。更多 React、Vue、Canvas 和 Harness 接入方式见 Skill 的 `references/harness-porting.md`。

## 插件包含内容

- `plugin.json` 和 `.agents/plugins/marketplace.json`：Codex 插件入口。
- `.claude-plugin/`：Claude Code 插件与 Marketplace 清单。
- `index.js` 和 `cordis.patch.yml`：DSH Bundle 插件入口。
- `skills/liquid-glass-switch/`：共享 Agent Skill、适配参考文档和组件资源。

Codex 和 Claude 插件会给编程代理添加 Skill 与组件资源，供它修改用户授权且可编辑的网页项目；它们不会直接替换或改造 Codex/Claude 自身的应用外壳。DSH 插件会将同一 Skill 注册到 DSH Agent。

MIT License
