import { ServicesDemoPage } from './app.po';

describe('services-demo App', function() {
  let page: ServicesDemoPage;

  beforeEach(() => {
    page = new ServicesDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
