"use strict";

module.exports = (context, options) => {
  const { shouldIgnore, Syntax } = context;
  // Default: ignore no-mix-dearu-desumasu in footnotes
  const targetRuleIds = Array.isArray(options.ruleId)
    ? options.ruleId
    : [options.ruleId || "ja-technical-writing/no-mix-dearu-desumasu"];

  return {
    // FIX: Syntax.FootnoteDefinition is undefined/broken in some versions
    [Syntax.FootnoteDefinition || "footnoteDefinition"](node) {
      // Ignore the target rules in the range of the footnote definition
      // FIX: Broaden range as node.range might not cover the reported error exact position in some parsers
      // We use a safe padding of +/- 10 characters to ensure expected coverage
      const range = [Math.max(0, node.range[0] - 10), node.range[1] + 10];
      for (const ruleId of targetRuleIds) {
        shouldIgnore(range, {
          ruleId: ruleId,
        });
      }
    },
  };
};
