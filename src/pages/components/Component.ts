import { PlaywrightEntityContext } from '../types';

export abstract class Component<Context extends PlaywrightEntityContext> {
  protected readonly playwrightContext: Context;

  protected constructor(playwrightContext: Context) {
    this.playwrightContext = playwrightContext;
  }
}
