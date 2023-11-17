import isCI from "is-ci";

const config = {
  paths: ["src/features/**/*.feature"],
  requireModule: ["ts-node/register"],
  require: ["src/steps/**/*.ts", "src/common/**/*.ts"],
  format: [
    "json:reports/cucumber-report.json",
    "html:reports/report.html"
  ],
  formatOptions: { snippetInterface: "async-await" },
  worldParameters: {},
  retry: isCI ? 1 : 0
};

/*
if (process.env.USE_ALLURE === 1) {
  config.format.push('./src/common/reporters/allure-reporter.ts');
} else {
  config.format.push('@cucumber/pretty-formatter');
}
*/

export default config;
