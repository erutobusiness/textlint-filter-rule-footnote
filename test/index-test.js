const assert = require("assert");
const { TextlintKernel } = require("@textlint/kernel");
const ruleNoTodo =
  require("textlint-rule-no-todo").default || require("textlint-rule-no-todo");
const filterRule = require("../index");
const markdownPlugin =
  require("@textlint/textlint-plugin-markdown").default ||
  require("@textlint/textlint-plugin-markdown");

const kernel = new TextlintKernel();

describe("textlint-filter-rule-footnote", () => {
  const lint = (text) => {
    return kernel.lintText(text, {
      ext: ".md",
      plugins: [
        {
          pluginId: "markdown",
          plugin: markdownPlugin,
        },
      ],
      rules: [
        {
          ruleId: "no-todo",
          rule: ruleNoTodo,
          options: {},
        },
      ],
      filterRules: [
        {
          ruleId: "footnote",
          rule: filterRule,
          options: {
            ruleId: "no-todo",
          },
        },
      ],
    });
  };

  context("when footnote contains TODO", () => {
    it("should not report error", async () => {
      const text = `本文。脚注[^1]

[^1]: TODO: 脚注内のTODOは無視される
`;
      const result = await lint(text);
      const todoErrors = result.messages.filter(
        (m) => m.ruleId === "no-todo",
      );
      assert.strictEqual(todoErrors.length, 0);
    });
  });

  context("when body contains TODO", () => {
    it("should report error", async () => {
      const text = `TODO: 本文のTODOはエラーになる
`;
      const result = await lint(text);
      assert.strictEqual(result.messages.length, 1);
      assert.strictEqual(
        result.messages[0].message,
        "Found TODO: 'TODO: 本文のTODOはエラーになる'",
      );
    });
  });

  context("when both body and footnote contain TODO", () => {
    it("should report error only for body", async () => {
      const text = `本文。脚注[^1]

[^1]: TODO: 脚注内のTODOは無視される

TODO: 本文のTODOはエラーになる
`;
      const result = await lint(text);
      const todoErrors = result.messages.filter(
        (m) => m.ruleId === "no-todo",
      );
      assert.strictEqual(todoErrors.length, 1);
      assert.ok(todoErrors[0].message.includes("本文のTODO"));
    });
  });

  context("when multiple footnotes exist", () => {
    it("should filter all footnote errors", async () => {
      const text = `本文[^1]と[^2]。

[^1]: TODO: 最初の脚注

[^2]: TODO: 二番目の脚注
`;
      const result = await lint(text);
      const todoErrors = result.messages.filter(
        (m) => m.ruleId === "no-todo",
      );
      assert.strictEqual(todoErrors.length, 0);
    });
  });
});
