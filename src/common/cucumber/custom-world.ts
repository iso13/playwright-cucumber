import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { GlobalConfig, GlobalVariables } from './global-types';


export class CustomWorld extends World {
  constructor(options: IWorldOptions) {
    super(options);
    this.globalConfig = options.parameters as GlobalConfig;
    this.globalVariables = {};
  }

  globalConfig: GlobalConfig;
  globalVariables: GlobalVariables;

}

setWorldConstructor(CustomWorld);
