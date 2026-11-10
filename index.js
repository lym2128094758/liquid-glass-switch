import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const packageRoot = dirname(fileURLToPath(import.meta.url))
const skillDirectory = join(packageRoot, 'skills', 'liquid-glass-switch')
const skillFile = join(skillDirectory, 'SKILL.md')
const skillSource = readFileSync(skillFile, 'utf8')
const skillContent = skillSource.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')

export const name = 'dsh-liquid-glass-switch'
export const inject = ['skills']

export function apply(ctx) {
  ctx.skills.register({
    name: 'liquid-glass-switch',
    description: 'Add or adapt a draggable liquid-glass segmented switch in a web app or AI coding harness UI. Use when implementing two-option view or mode controls with a moving glass lens, drag threshold, bounded elastic overscroll, or plane/sphere transitions.',
    source: 'bundled',
    invocation: { modelInvocable: true, userInvocable: true },
    resourceBase: { kind: 'directory', path: skillDirectory },
    content: skillContent,
  })
}
