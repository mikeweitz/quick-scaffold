# Spin up NextJS w Styletron

Quick scaffold for prototyping a react app in NextJS w Styletron

## Install

Run the installer to clone base files and install packages.

```bash
./init.sh
```

## local dev

install will add the default NextJS scripts to package.json  
for localhost run

```bash
npm run dev
```

## What's Set up already:

- NextJS,
- React,
- Styletron for styled components
- A CSS reset under the Static folder
- A quick Node scaffold util for fetching some boilerplate code NextJS needs for supporting SSR with the Styletron engine

## Learning:

For CSS reset, just request a static asset via Link in the
head of `_document.js` right before the call to Nextjs's `getStyleSheets()`

```html
<link rel="stylesheet" type="text/css" href="/static/styles/normalize.css" />
```
