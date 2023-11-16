module.exports = {
  root: true,
  extends: ["universe/native"],
  rules: {
    "import/order": "off",
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
  },
};
