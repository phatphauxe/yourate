import { YouRateAppPage } from './app.po';

describe('you-rate-app App', function() {
  let page: YouRateAppPage;

  beforeEach(() => {
    page = new YouRateAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
