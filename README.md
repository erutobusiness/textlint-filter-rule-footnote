# textlint-filter-rule-footnote

A textlint filter rule that ignores errors in footnotes.

## Install

Install with [npm](https://www.npmjs.com/):

```
npm install textlint-filter-rule-footnote
```

## Usage

Via `.textlintrc`(Recommended):

```json
{
    "filters": {
        "footnote": true
    }
}
```

### Options

* `ruleId`: String | String[]
  * Target rule ID to ignore in footnotes.
  * Default: `"ja-technical-writing/no-mix-dearu-desumasu"`

If you want to ignore other rules in footnotes, you can set `ruleId` option.

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

In Japanese technical writing, it is common to use "Dearu" style (da/de-aru) for the main text and "Desumasu" style (desu/masu) for footnotes.
However, `textlint-rule-no-mix-dearu-desumasu` (included in `textlint-rule-preset-ja-technical-writing`) reports errors for mixed styles.

This filter rule automatically ignores `no-mix-dearu-desumasu` errors within footnotes, allowing you to mix styles appropriately without manual `<!-- textlint-disable -->` comments.

## License

MIT
