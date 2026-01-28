# textlint-filter-rule-footnote

[![npm](https://img.shields.io/npm/v/textlint-filter-rule-footnote.svg)](https://www.npmjs.com/package/textlint-filter-rule-footnote)
[![test](https://github.com/erutobusiness/textlint-filter-rule-footnote/actions/workflows/test.yml/badge.svg)](https://github.com/erutobusiness/textlint-filter-rule-footnote/actions/workflows/test.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

textlint filter rule that ignores errors in footnotes.

This filter specifically ignores errors from specified rules (default: `ja-technical-writing/no-mix-dearu-desumasu`) when they occur inside footnotes.

## Installation

```bash
npm install textlint-filter-rule-footnote
```

## Usage

Add this rule to your `.textlintrc` (or `.textlintrc.json`).

```json
{
    "filters": {
        "footnote": true
    },
    "rules": {
        "preset-ja-technical-writing": true
    }
}
```

## Configuration

| Option | Type | Default | Description |
|---|---|---|---|
| `ruleId` | `String` \| `String[]` | `"ja-technical-writing/no-mix-dearu-desumasu"` | Rule ID(s) to ignore in footnotes. |

### Example

To ignore `textlint-rule-no-doubled-joshi` in footnotes:

```json
{
    "filters": {
        "footnote": {
            "ruleId": "no-doubled-joshi"
        }
    }
}
```

## Recommended Combination

It is highly recommended to use this rule together with [textlint-rule-footnote-dearu-desumasu](https://github.com/erutobusiness/textlint-rule-footnote-dearu-desumasu).

This combination allows you to:
1.  Ignore global rules (like main text style) inside footnotes using this filter rule.
2.  Enforce strict "Dearu/Desumasu" style inside footnotes using the recommended rule.

## Development

Contributions are welcome!

1.  Clone the repository:
    ```bash
    git clone https://github.com/erutobusiness/textlint-filter-rule-footnote.git
    cd textlint-filter-rule-footnote
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run tests & lint:
    ```bash
    npm test
    npm run lint
    npm run format
    ```

## License

MIT © [erutobusiness](https://github.com/erutobusiness)
