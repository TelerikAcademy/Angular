import { ViewEncapsulationStrategiesPage } from './app.po';

describe('view-encapsulation-strategies App', () => {
  let page: ViewEncapsulationStrategiesPage;

  beforeEach(() => {
    page = new ViewEncapsulationStrategiesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
