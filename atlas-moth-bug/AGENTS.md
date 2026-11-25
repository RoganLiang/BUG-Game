# Atlas reverse-time prototype: engineering instructions

User authority: 2026-11-18 specification supersedes older requirements within this independent mode. Preserve the existing game, its saves, and unpublished author drafts. No new artwork, purchased services or API charges; await author reference images.

Use vanilla modules with relative paths. Keep UI text separate from internal data. Public-facing prose must not explain the assignment rules or option evaluation. Do not claim that client-side source is confidential. Do not label simulated nodes as real online players or invent audience statistics. All events are fictional; no operational instructions for dangerous real-world tasks.

Database contract: data/schema.json. Maintain 200 base pairs / 400 direction instances unless explicitly changing the versioned scope. Distinguish seed, procedural and imported content. Generated instances are not human-reviewed chapters. Keep empty answer fields playable and treat input as untrusted text.

Run root npm run build, npm run check, npm test and existing browser suites. New tests: node --test atlas-moth-bug/tests/engine.test.js and python atlas-moth-bug/tests/browser.py. Browser environment: ATLAS_BASE_URL / ATLAS_ARTIFACT_DIR. No dependencies or remote assets are required at runtime.

Keep three choices stable during reading; shuffle at scene entry. Respect reduced motion, min-height 48px controls and muted default. Clock progression must survive reload and time away. Save keys are independent of legacy versions. UI should consume engine.view(), not the data model.

The author appointed Claude as final reviewer. Do not merge this mode into main or overwrite public Pages until actual external sign-off is supplied. Codex tests are not Claude approval. The deployment workflow requires the author-maintained CLAUDE_APPROVED_SHA variable to equal the actual published SHA; this is a manual audit record, not proof of reviewer identity. Never set it as a substitute for review. Report source, implementation, tests, Git, preview, deployment and physical-device verification separately.
