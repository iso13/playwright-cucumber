import { Locator, Page } from 'playwright';
import { BasePage } from './BasePage';

export abstract class BaseLoginPage extends BasePage {
  readonly envUrl: string;

  get username() {
    return this.page.locator('#userid');
  }
  get password() {
    return this.page.locator('#password');
  }

  signInButton!: Locator;
  errorValidationMsg!: Locator;

  protected constructor(envUrl: string, page: Page) {
    super(page);
    this.envUrl = envUrl;
  }

  abstract login(username: string, password: string): void;
}
