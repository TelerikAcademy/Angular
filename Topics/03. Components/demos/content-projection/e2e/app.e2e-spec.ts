import { ContentProjectionPage } from './app.po';

describe('content-projection App', () => {
  let page: ContentProjectionPage;

  beforeEach(() => {
    page = new ContentProjectionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
