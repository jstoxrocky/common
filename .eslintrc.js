module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest/globals": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "plugin:@typescript-eslint/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "jest"
    ],
    "rules": {
        "import/extensions": [
           "error",
           "ignorePackages",
           {
             "js": "never",
             "jsx": "never",
             "ts": "never",
             "tsx": "never"
           }
        ],
        'react/jsx-filename-extension': [
            2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] 
        }]
     },
    "settings": {
        "import/resolver": {
            "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
};
