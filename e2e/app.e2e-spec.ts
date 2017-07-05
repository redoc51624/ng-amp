import { NgAmpPage } from './app.po';

describe('ng-amp App', () => {
  let page: NgAmpPage;

  beforeEach(() => {
    page = new NgAmpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
