# 📝 textlint-filter-rule-footnote

> A textlint filter rule that ignores errors in footnotes.

![npm](https://img.shields.io/npm/v/textlint-filter-rule-footnote)
![license](https://img.shields.io/npm/l/textlint-filter-rule-footnote)

**textlint-filter-rule-footnote** allows you to mix writing styles by automatically ignoring specific textlint rules within footnotes. This is especially useful for Japanese technical writing where the main text uses "Dearu" style and footnotes use "Desumasu" style.

## Features

- **🛡️ Ignore Specific Rules**: Automatically suppress errors from specified rules inside footnotes.
- **🇯🇵 Japanese Context**: Solves the common conflict between "Dearu" (Body) and "Desumasu" (Footnotes).
- **⚙️ Configurable**: Easily define which rule IDs to ignore via `.textlintrc`.

## Installation

```bash
npm install textlint-filter-rule-footnote
# or
yarn add textlint-filter-rule-footnote
# or
pnpm add textlint-filter-rule-footnote
```

## Usage

Via `.textlintrc` (Recommended):

```json
{
    "filters": {
        "footnote": true
    }
}
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `ruleId` | `String` \| `String[]` | `"ja-technical-writing/no-mix-dearu-desumasu"` | Rule ID(s) to ignore in footnotes. |

If you want to ignore other rules in footnotes, you can set the `ruleId` option:

```json
{
    "filters": {
        "footnote": {
            "ruleId": "textlint-rule-no-doubled-joshi"
        }
    }
}
```

## Practical Use Case

In Japanese technical writing, it is common to use **"Dearu" style** (da/de-aru) for the main text and **"Desumasu" style** (desu/masu) for footnotes.

However, rules like `textlint-rule-no-mix-dearu-desumasu` (included in `textlint-rule-preset-ja-technical-writing`) report errors for mixed styles.

This filter rule automatically ignores `no-mix-dearu-desumasu` errors within footnotes, allowing you to mix styles appropriately without manual `<!-- textlint-disable -->` comments.

## Development

Contributions are welcome!

1. Clone the repository:
   ```bash
   git clone https://github.com/erutobusiness/textlint-filter-rule-footnote.git
   cd textlint-filter-rule-footnote
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run tests:
   ```bash
   npm test
   ```

## License

MIT © [erutobusiness](https://github.com/erutobusiness)
