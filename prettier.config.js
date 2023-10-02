const config = {
  plugins: [require.resolve("prettier-plugin-go-template")],
  trailingComma: "none",
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template",
        goTemplateBracketSpacing: true,
        bracketSameLine: true
      }
    },
    {
      files: ["*.js"],
      options: {
        trailingComma: "none",
        tabWidth: 2,
        printWidth: 120
      }
    }
  ]
};

module.exports = config;
