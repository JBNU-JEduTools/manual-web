# next-kata-docs

> Documentation website for Kata Products

Welcome to the GitHub project for [Kata](https://kata.ai) Documentations (Kata Docs 2.0) using [Next.js](https://nextjs.org/).
We've built this site from the ground-up with performance, accessibility, and fanciness in mind.
It contains documentation from all across the Kata Products:

- [Kata Platform](https://docs.kata.ai/kata-platform)
- [Kata CLI](https://github.com/kata-ai/kata-cli)
- [Kata Omnichat](https://docs.kata.ai/kata-omnichat)
- [Business Dashboard](https://docs.kata.ai/business-dashboard)
- [Qios](https://docs.kata.ai/qios)

Mainly, you can access the documentation website at https://docs.kata.ai

---

## How to run

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (8.0.0+)
-   [Yarn](https://yarnpkg.com) (Optional. You can still use `npm` if you want)

### Initial setup

Clone this repository.

```
git clone `link here`
```

`cd` to the generated project. Here we'll have to install our node dependencies. To do so, run (one of) the following command(s).

```bash
# npm
npm install
# yarn
yarn
```

### Running the server

To start working on this documentation, you need to start a development server.

```bash
# npm
npm run dev
# yarn
yarn dev
```

### Commit message guidelines

We use [Commitizen](https://github.com/commitizen/cz-cli) with the [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) standard. We included the Commitizen CLI inside the repository so that you can generate a formatted commit message simply by typing `yarn commit` (or `npm commit`).

#### Format

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The first line must contain a commit type, an _optional_ scope, and the subject of the commit.

The message body contains a longer description of the change. This is reserved for any information that won't fit inside the subject line of a commit message. Note that each line of the commit message should not be longer than 72 characters.

Footer is optional, and contains any additional information for the commit (e.g. issues fixed, breaking changes).

#### Commit types

We use the following conventional-changelog commit types:

```
feat:     A new feature
fix:      A bug fix
docs:     Documentation only changes
style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor: A code change that neither fixes a bug nor adds a feature
perf:     A code change that improves performance
test:     Adding missing tests or correcting existing tests
build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
ci:       Changes to our CI configuration files and scripts (example scopes: travis, circle)
chore:    Other changes that don't modify src or test files
revert:   Reverts a previous commit
```

---

## Authors

-   Izzan Nuruddin ([@IzzanNurdin](https://github.com/IzzanNurdin)) – [Kata.ai](https://kata.ai)
-   Steven Evan ([@stevenevan](https://github.com/stevenevan)) - [Kata.ai](https://kata.ai)
-   Mirza Zanuar ([@zanuarmirza](https://github.com/zanuarmirza)) - [Kata.ai](https://kata.ai)
