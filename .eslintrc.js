module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console":"off",
    "no-debugger": "off",
    "semi": ["error", "always" ],
    "no-extra-semi": "error",        
    "comma-style": ["error", "last" ],        
    "comma-dangle": [0],  
    "padded-blocks": ["error", "never"],        
    "comma-dangle": [0],
    "default-case": 0,
    "linebreak-style": 0,
    "import/imports-first": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "no-async-promise-executor": 0,
    camelcase: "error",
    complexity: ["error", { max: 9 }],
    "max-nested-callbacks": ["error", 3],
    "new-cap": ["error", { capIsNew: true }],
    "operator-linebreak": "off",
    "implicit-arrow-linebreak": 0,
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": [1, "as-needed"],
    "consistent-return": 0,
    "prefer-destructuring": 0,
    "vue/html-indent": ["error", 2],
    "vue/max-attributes-per-line": "off",
    "vue/html-closing-bracket-newline": ["error", { multiline: "always" }],
    "vue/html-closing-bracket-spacing": "error",
    "vue/html-self-closing": ["error", { html: { normal: "any", void: "always" } }],
    "vue/singleline-html-element-content-newline": "off"
  },
};