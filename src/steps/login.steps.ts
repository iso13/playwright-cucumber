import { Given, Then } from '@cucumber/cucumber';
import {ENVIRONMENT_PROPS, getEnvProp, getPasswordPropForApp, getUserNamePropForApp,} from '../common/env/config';
import { CustomWorld } from '../common/cucumber/custom-world';
import { TestLoginPage } from '../pages/TestLoginPage';
import { expect } from '@playwright/test';

// Configuration of browser, credentials and environments are found under /playwright-cucumber/.env
Given('I login to {string} application as (a)(an) {string} user',
  async function (this: CustomWorld, appName: string, userName: string) {
    const {playwrightConfig: { page },} = this;
    const app = 'test';
    const creds = {
      username: getUserNamePropForApp(app, userName),
      password: getPasswordPropForApp(app),
    };
    await new TestLoginPage(
      getEnvProp(ENVIRONMENT_PROPS.TEST_URL),
      page
    ).login(creds.username, creds.password);
  }
);

Then('I should be logged in', async function (this: CustomWorld) {
  const {
    playwrightConfig: { page },
  } = this;
  await expect(page.locator('Welcome')).toBeVisible();
});
