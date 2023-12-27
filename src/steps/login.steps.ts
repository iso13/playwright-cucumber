import { Given, When, Then } from "@cucumber/cucumber";
import { Browser, chromium } from "playwright";

let browser: Browser;

Given('I launch the application', async function () {
 browser = await chromium.launch();
 const context =await browser.newContext()
  const page =await context.newPage()
});

When('I fill in my credentials', async function () {

});

Then('I should be logged in', async function () {

});
