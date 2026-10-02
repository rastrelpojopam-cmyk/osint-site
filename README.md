# Osint-Tools

A lightweight catalog of OSINT tools for XZX SQUAD. It brings useful services together and makes it easy to find the right tool.

## Features

- Browse tools by category and search the catalog.
- Sort tools alphabetically.
- Switch between Russian and English.
- Choose a dark or light theme; your preference is saved in the browser.

## Run

No dependencies or build step are required. Open `index.html` in a browser.

## Updating the catalog

The tool list and Russian descriptions are in the `TOOLS` array in `script.js`. English descriptions are defined in `TOOL_DESCRIPTIONS_EN` in the same file. After changing the catalog, increment the `script.js?v=...` version in `index.html` to prevent browsers from displaying a cached copy.