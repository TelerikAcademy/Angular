import { DIPage } from './app.po';

describe('di App', () => {
  let page: DIPage;

  beforeEach(() => {
    page = new DIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
