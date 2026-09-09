# Publishing and the pipeline

The repository is named `mrsantiago4.github.io`, so GitHub Pages serves it at the account's root address without a repository subpath.

## One-time Pages setup

In the repository, open **Settings → Pages → Build and deployment → Source**, and choose **GitHub Actions**. The repository must support Pages for the account's plan; a public portfolio repository supports the free Pages option.

## Normal update flow

1. Edit a file locally.
2. Run `pnpm check`.
3. Commit and push a branch; open a pull request.
4. GitHub installs the locked dependencies, checks TypeScript, lints the app, and compiles the static site.
5. Review and merge into `main`.
6. The pipeline uploads only `dist/client` and deploys it to GitHub Pages.
7. Open the successful deployment link in the Actions run.

You can also trigger the pipeline using **Actions → Check and deploy portfolio → Run workflow** on `main`. Pull requests and non-main branches never publish. A failing build stops deployment and preserves the previous live version.

## Files versus compiled output

The repository contains editable source code and guides. The pipeline produces compiled HTML, CSS, and JavaScript and stores them as a Pages artifact. Generated output and `node_modules` are intentionally ignored by Git. You do not need to upload built files manually.

## Permissions

The ordinary build only reads the repository. The deploy job gets `pages: write` and `id-token: write` for GitHub Pages. GitHub provides short-lived job credentials automatically; no personal token or password belongs in the code.

## First source import

If the initial source was delivered through the browser as `portfolio-source.zip`, a temporary first-run step extracts the local source archive and commits its files. That initial import uses repository write permission. The regular deployment workflow should replace the temporary import workflow after initialization; everyday updates use the read-only build described above.

## Undo a mistake

Use GitHub Desktop's history to revert the problematic commit, then push the revert. This creates a new recorded change and runs the pipeline again. Avoid force-pushing or deleting history. For larger work, create a branch and pull request before touching the live branch.

## Troubleshooting

- Build fails: open the failed step in Actions and read the first error.
- Pages says “not found”: confirm Settings → Pages uses GitHub Actions, then rerun the workflow.
- Permissions error: confirm Pages is enabled and the workflow's deploy permissions match the checked-in file. Organization policy may require an administrator.
- Site looks stale: wait for the deployment to succeed, then refresh.
- Renaming the repository to something other than `mrsantiago4.github.io` requires configuring the framework's base path for the new URL. The current version intentionally targets the account root.

The private Sites copy is separate. GitHub commits update Pages automatically; updating the Sites copy requires another Sites publish.

Official reference: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
