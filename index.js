"use strict";

module.exports = (context, options) => {
  const { shouldIgnore } = context;
  // Default: ignore no-mix-dearu-desumasu in footnotes
  const targetRuleIds = Array.isArray(options.ruleId)
    ? options.ruleId
    : [options.ruleId || "ja-technical-writing/no-mix-dearu-desumasu"];

  return {
    // Use literal string: Syntax.FootnoteDefinition is undefined in
    // @textlint/ast-node-types because footnoteDefinition is a remark-gfm
    // extension, not part of the core AST spec.
    footnoteDefinition(node) {
      for (const ruleId of targetRuleIds) {
        shouldIgnore(node.range, {
          ruleId: ruleId,
        });
      }
    },
  };
};
