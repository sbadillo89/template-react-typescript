const CracoAlias = require("craco-alias");

module.exports = { 
    eslint : {
        enabled: false
    },
    typescript: {
        enableTypeChecking: false /* (default value)  */
    },plugins: [
      {
        plugin: CracoAlias,
        options: {
          source: "tsconfig",
          baseUrl: "./src",
          tsConfigPath: "./tsconfig.extend.json"
        }
      }
    ],
};