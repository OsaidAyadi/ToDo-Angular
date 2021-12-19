import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  // test
  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
