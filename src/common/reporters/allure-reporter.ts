import { IFormatterOptions } from '@cucumber/cucumber';
import { AllureRuntime, CucumberJSAllureFormatter } from 'allure-cucumberjs';
import { getEnvProp } from '../env/config';

export default function Reporter(options: IFormatterOptions) {
  return new CucumberJSAllureFormatter(
    options,
    new AllureRuntime({ resultsDir: getEnvProp('ALLURE_RESULTS_PATH') }),
    {
      labels: [
        {
          pattern: [/@feature:(.*)/],
          name: 'epic',
        },
        {
          pattern: [/@severity:(.*)/],
          name: 'severity',
        },
      ],
      links: [
        {
          pattern: [/@issue=(.*)/],
          type: 'issue',
          urlTemplate: 'http://localhost:8080/issue/%s',
        },
        {
          pattern: [/@tms=(.*)/],
          type: 'tms',
          urlTemplate: 'http://localhost:8080/tms/%s',
        },
      ],
    }
  );
}
Reporter.prototype = Object.create(
  CucumberJSAllureFormatter.prototype
) as CucumberJSAllureFormatter;

Reporter.prototype.constructor = Reporter;
