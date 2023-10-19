import { Page } from 'playwright';
import { BaseLoginPage } from './BaseLoginPage';

export class TestLoginPage extends BaseLoginPage {
  constructor(envUrl: string, page: Page) {
    super(envUrl, page);
    this.signInButton = this.page.locator('#btnActive');
    this.errorValidationMsg = this.page.locator('[class^=warningContentBlock]');
  }

  async login(username: string, password: string) {
    await this.page.goto(this.envUrl, { timeout: 60000 });
    await this.username.waitFor({ state: 'visible' });
    await this.username.type(username);
    await this.password.type(password);
    await this.signInButton.click();
  }
}
