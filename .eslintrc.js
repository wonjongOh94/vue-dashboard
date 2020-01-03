module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:vue/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "parser": "babel-eslint"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
    },
    "settings": {
        "import/resolver": {
            "node": {
                "path": ["src"]
            },
            "import/extensions": [
                ".js",
                ".jsx",
                ".mjs",
                ".ts",
                ".tsx",
                ".vue"
            ]
        },
        
    }
};