import { ModulesDemoPage } from './app.po';

describe('modules-demo App', () => {
  let page: ModulesDemoPage;

  beforeEach(() => {
    page = new ModulesDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
