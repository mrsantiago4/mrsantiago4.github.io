# Your first edit

## 1. Understand the tools

- **VS Code** is the editor where you change files.
- **Node.js** runs the development tools on your computer.
- **pnpm** installs the libraries this website uses.
- **Git** saves snapshots of your code. A snapshot is called a commit.
- **GitHub** stores those snapshots online.
- **GitHub Pages** hosts the compiled website.
- **GitHub Actions** checks and publishes changes automatically.

Download Node.js 22 LTS or newer from https://nodejs.org/ and VS Code from https://code.visualstudio.com/. Install Git from https://git-scm.com/ if it is not available. Node includes npm; open a terminal and run `npm install --global pnpm@11.19.0`.

Clone the repository with GitHub Desktop or run:

```sh
git clone https://github.com/mrsantiago4/mrsantiago4.github.io.git
cd mrsantiago4.github.io
pnpm install
pnpm dev
```

Open the address printed by the last command. To stop the preview, press Ctrl+C in the terminal.

## 2. Make one easy change

Open `app/portfolio-content.ts`. Find `description` in `profile` and replace the sentence inside the quotation marks. Save the file. Your local browser updates automatically.

If your text includes an apostrophe, use double quotes around the whole sentence, for example `description: "I'm learning by building.",`. Keep the comma at the end of the property.

The online site does not change until you commit and push. Experiment locally as much as you like.

## 3. Change a color

Open `app/globals.css`. At the top, find `--accent:#d0fc78`. Change only the color value, save, and preview. The letters and numbers after `#` describe the color. Keep text readable against its background.

## 4. Add a project

In `app/portfolio-content.ts`, copy one complete object inside `projects`, including its surrounding braces. Paste it after another entry, separated by a comma. Change the title, category, status, description, href, and linkLabel. Use a real project link. The current design has special visual treatments for the first two projects; customize the visual condition in `app/page.tsx` when adding more.

Do not label planned work as complete. Add screenshots, outcomes, and a live link once you have them.

## 5. Check and publish

Run `pnpm check`. If it fails, read the first error, fix that problem, and run it again. Then use GitHub Desktop to review the changes, write a short summary such as “Update my introduction”, commit, and push.

For safer larger changes, create a branch in GitHub Desktop first. Publish the branch and open a pull request. The checks run without publishing. Merge into `main` when ready; the deployment pipeline then publishes it.

## When something goes wrong

- “pnpm not found”: install pnpm, then restart the terminal.
- “Address already in use”: your preview may already be running. Use its address or stop that terminal with Ctrl+C.
- Red error after editing: check for missing quotes, commas, braces, or closing JSX tags.
- Online page unchanged: inspect the latest run in the repository's Actions tab; failed runs do not replace the last successful deployment.
- Need help: copy the first error and name the file you changed. Never paste access tokens or passwords.
