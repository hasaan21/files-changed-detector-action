# Files changed detector
Github action to detect file being changed.

## Usage

```
- name: Detect changed files
  uses: hasaan21/files-changed-detector-action@v1
  with:
    github-token: ${{ env.BUNDLER_ACCESS_TOKEN }}
```

## Development
Run `npm run build` before you merge as it will pick up on the `dist/index.js` that is compiled. This should be automated in the future.
