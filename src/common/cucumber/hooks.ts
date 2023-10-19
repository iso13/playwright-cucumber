import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  setDefaultTimeout
} from "@cucumber/cucumber";
import { CustomWorld } from "./custom-world";

import { PlaywrightConfigurator } from "../playwright/PlaywrightConfigurator";

const pwConfig = new PlaywrightConfigurator();

setDefaultTimeout(30 * 1000);

BeforeAll(async function() {
  await pwConfig.setupPlaywright();
});

Before(async function(this: CustomWorld) {
  const pwEntities = {
    browser: await pwConfig.getBrowserInstance(),
    context: await pwConfig.getBrowserContext(),
    apiContext: await pwConfig.getApiContext(),
    page: await pwConfig.getPage()
  };
  this.init(pwEntities);
  await pwConfig.startTracing();
});

After(async function(this: CustomWorld, scenario) {
  const {
    playwrightConfig: { page }
  } = this;

  const scenarioStatus = scenario.result?.status;

  if (scenarioStatus === "FAILED") {
    const screenshot = await page.screenshot({
      path: `${getEnvProp("SCREENSHOT_PATH")}${scenario.pickle.name}.png`
    });
    this.attach(screenshot, "image/png");
  }
  await pwConfig.killBrowserContext();
});

AfterAll(async function() {
  await pwConfig.killBrowser();
});
