import { ComponentsAdvancedPage } from './app.po';

describe('components-advanced App', () => {
  let page: ComponentsAdvancedPage;

  beforeEach(() => {
    page = new ComponentsAdvancedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
