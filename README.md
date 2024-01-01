# Playwright Knowledge Base

In this knowledge base we have aggregated the team's knowledge and experience in UI and E2E testing with Playwright and BDD, created the documentation and gathered in this document.

It's purpose - to bring the information needed for successful and painless coding in Cucumber Playwright framework right to your fingertips.

Table of Contents
=================
* [Before we start](#before-we-start)
* [Environment Configuration](#environment-configuration)
  * [Configure URLs/Creds, browsers and paths](#where-are-the-urls-and-user-creds)
  * [Run it](#run)
  * [Device emulation](#emulation)
* [Before we commit](#before-we-commit)
  * [Linters](#linters)
  * [Formatting](#formatting)
  * [Husky Hooks](#husky-hooks)
* [Code review](#code-review)
* [Reporters](#reporters)
* [Accessibility testing](#accessibility)

# Before we start 

[BDD Testing Practice](https://TBD)

[Cucumber Guide](https://TBD)

# Environment Configuration
## MacOS

1. [Homebrew](https://docs.brew.sh/Installation) - package manager for installing apps on your Mac.

2. Install nodejs

```$xslt
install nodejs 19.8.1
```
3. Install yarn - alternative to managing node packages
```$xslt
npm install --global yarn
```

## PC and Mac Alt

Install [NodeJS](https://nodejs.org/en/download/) directly (requires admin account on pc)

## Setup

1. Clone the repository

```$xslt
https://github.com/iso13/playwright-cucumber
```

2. Go to the Project root and install the dependencies

```$xslt
yarn install
```

3. Prep report structure, this will build out your report directory
```$xslt
npm run precucumber
```

## Where are the URLs and user creds?

Environments and users data are managed by two packages:
- [dotenv](https://www.npmjs.com/package/dotenv): a zero-dependency module that loads environment variables from a `.env` file into the Node's `process.env` object
- [cross-env](https://www.npmjs.com/package/cross-env): makes possible to set environment variables work across multiple environments via CLI

```$javascript
const screenshotPath = env('SCREENSHOT_PATH');
```

## Run

Run by tag: 
```npm run cucumber -- --tags @smoke```

Rub by tag expressions:
```npm run cucumber -- --tags "@smoke and not @wip"```

Run via command line prompt:
```npm run test```
![](../../.github/commandRun.jpg)

Run using Playwright debug mode:
```npm run cucumber:debug```

## Emulation

You could run tests across different devices and browser resolutions.

> ⚠ **Keep in mind: emulation $\neq$ simulator.**
> Think of that as simulating resolutions of various devices so we can emulate look, feel and function of our website.

Currently Playwright offers the following list of available devices: [here](https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json)

Current implementation allows you to run tests:

1. By default it will use `browser` with standard screen resolution:
```$shell
EMULATION=browser
BROWSER_WIDTH=1280
BROWSER_HEIGHT=720
```

2. Change EMULATION variable in `.env` file to whatever you like from the Playwright device list, e.g. `iPhone 11 Pro` and it will pick up corresponding resolution for a selected device:
```$shell
EMULATION=iPhone 11 Pro
```


# Before we commit

## Linters

As we're a multi-team project very important to keep our code styled in the same way and have common rules for writing it,
to keep it clean, readable and avoid common mistakes

We use 2 linters:
- [gherkin-lint](https://github.com/vsiakka/gherkin-lint)
- [eslint](https://eslint.org/docs/user-guide/)

By default, in this repo linters automatically check files that have been staged for commit.

However, if you have the need to launch linting check on another scope, just run the following commands:

**Gherkin Lint**
```
npx gherkin-lint <path-to-folder-or-file-to-lint>
```
**ESLint**
```
npx eslint <path-to-folder-or-file-to-lint>
```

For ESLint we use **@typescript-eslint/recommended**, **@typescript-eslint/recommended-requiring-type-checking** sets of rules as main ones.

**Worthy Docs**

ESlint documentation that explains which rules belong to which set, furthermore _each rule description_ has pretty good examples of _Correct_ and _Wrong_ code.
[Check it out](https://typescript-eslint.io/rules/)

## Formatting

As a default formatter we use **[Prettier](https://prettier.io/docs/en/index.html)**

Here are the guides on how to configure it for your IDE:

- [JetBrains-made Intellij IDEA, Web Storm etc.](https://www.jetbrains.com/help/idea/prettier.html)
- [VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

<a name="husky-hooks"></a>
## Husky Hooks
# [Info about Husky](https://typicode.github.io/husky/) 

We have a `pre-commit` and `post-merge` hooks in place.

 - `pre-commit` hook is responsible for running `eslint`, `gherkin-lint`, `tsc` compilation and `prettier` formatting on files that are staged for commit.

 - `post-merge` hook makes sure `npm install` runs every time after merge has been done. Merge happens after new changes has been pulled from any branch, so `npm install` will make sure all updated dependencies are in place after another pull.

 # Code review

We believe that **Code Review** is a very important part of any development process.

Every development project, product team, startup, enterprise company should have an aligned view of their own result, to do that they should have some kind of compass, a list of standards and a process which would apply those standards and make sure that product corresponds to the company's vision.

Playwright Cucumber's code is our product and **Code Review** is a process which allows applying standards to it and keep team members aligned on those standards.

Those standards seem to be common, but in reality they vary between teams, not only in Test Automation.

For making that alignment smooth and simple we've prepared a [**Code Review Checklist**](TBD) which describes those standards. We strongly recommend reading it, before performing Code Review. 

 # Reporters

 ## Run Cucumber reports locally

To view the html report of the last run:
```javascript
npm run report:open
```

 ## Test result artifacts

We are capturing videos and screenshots (on failure) under `./reports` folder where you can go and analyze them. Screenshot is embedded into allure report.

## To choose a reporter

The last reporter/formatter found on the cucumber-js command-line wins:

```text
--format summary --format @cucumber/pretty-formatter
```

In [cucumber.mjs](cucumber.mjs) file, modify the options.


To use Allure dashboard reporting, you can run with env param: `USE_ALLURE=1` that is set in `package.json` file, after test run is finished you could use the `npm run allure:dashboard` to show the report on the Allure server dashboard.
If you set `USE_ALLURE=0` allure result assets won't be generated under `./reports/allure-results` folder and you won't be able to see allure dashboard on the server.

## To view html allure report manually in the browser
- run the command `npm run report:open`.


