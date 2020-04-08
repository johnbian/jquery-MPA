module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb-base",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        jquery: true
    },
    "rules": {
        "no-tabs": 0,
        "indent": [2, "tab"],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-underscore-dangle": ["off", "always"]
    }
};