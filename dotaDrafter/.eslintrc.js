const { join } = require("path");
module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "plugin:angular/johnpapa", //ESLint rules for your angular project with checks for best-practices, conventions or potential errors.
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:rxjs/recommended",
        "prettier"
    ],
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        project: join(__dirname, "./tsconfig.json"),
        sourceType: "module" // Allows for the use of imports
    },
    settings: {
        angular: {
            "version": "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    root: true,
    env: {
        node: true,
        jest: true
    },
    rules: {
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "rxjs/finnish": [
            "error",
            {
                "functions": true,
                "methods": true,
                "names": {
                    "^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$": false
                },
                "parameters": true,
                "properties": true,
                "strict": true,
                "types": {
                    "^EventEmitter$": false
                },
                "variables": true
            }
        ]
    },
    ignorePatterns: ["/*.*"]
}
