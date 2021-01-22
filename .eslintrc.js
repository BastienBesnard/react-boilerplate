module.exports = {
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parser: "babel-eslint",
    env: {
        browser: true,
        node: true
    },
    rules: {},
    settings: {
        react: {
            version: "detect"
        }
    }
};
