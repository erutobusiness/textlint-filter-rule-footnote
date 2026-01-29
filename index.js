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
      for (const ruleId of targetRuleIds) {
        shouldIgnore(node.range, {
          ruleId: ruleId,
        });
      }
    },
  };
};
