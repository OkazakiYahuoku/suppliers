# Repository Guidelines

## Project Structure & Module Organization
- Root hosts `index.html` or `main.ts` for Live Preview; keep the entry uncluttered.
- Place web app code under `src/` (for example, `src/components/` and `src/styles/`) with feature assets collocated.
- Shared static assets live in `public/`, and automation helpers or fixtures belong in `tests/`.

## Build, Test, and Development Commands
- `Terminal > Run Task > Live Preview: Run Server` starts the auto-refresh dev loop defined in `.vscode/tasks.json`.
- `npx live-server . --port=4173` mirrors the preview outside VS Code; stop the server with `Ctrl+C`.
- Publish future build or lint scripts in `package.json` so every agent works from the same command set.

## Coding Style & Naming Conventions
- Use 2-space indentation across HTML, CSS/SCSS, and TypeScript files.
- Prefer trailing commas in multi-line literals and keep imports ordered by path depth.
- Name reusable components in PascalCase (`SupplierTable.ts`), utilities in camelCase, and assets in kebab-case (`supplier-card.png`).
- Run `npx prettier . --write` and `npx eslint . --fix` before committing; configure both once tooling lands.

## Testing Guidelines
- Create unit specs with Vitest or Jest under `tests/` using the pattern `feature-name.spec.ts`.
- For user journeys, add Playwright suites in `tests/e2e/` targeting `http://127.0.0.1:3000`.
- Seed tests with deterministic mocks and maintain at least smoke coverage for new supplier views.
- Expose repeatable test commands through `npm test` once scripts exist.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (`feat:`, `fix:`, `chore:`), keeping scope focused and messages action oriented.
- Include behavior notes or migration instructions in the body when functionality shifts.
- Pull requests should explain user impact, list executed test commands, link relevant issues, and attach UI captures when visuals change.
- Wait for automated checks to pass and request review from another maintainer before merging.

## Tooling & Environment
- Target Node.js 18+ and npm 9+; capture the chosen runtime in `.nvmrc` or `.volta` once finalized.
- Keep secrets out of the repository; provide sample keys in `.env.example` and access them with `import.meta.env`.
- Live Preview does not inject environment variables, so mock remote data locally during UI prototyping.

## 独自設定
- 日本語で簡潔かつ丁寧に回答してください