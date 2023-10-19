import { Page } from 'playwright';

export abstract class BasePage {
  readonly page: Page;

  protected constructor(page: Page) {
    this.page = page;
  }
}
