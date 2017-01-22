import { MercuryA3Page } from './app.po';

describe('mercury-a3 App', function() {
  let page: MercuryA3Page;

  beforeEach(() => {
    page = new MercuryA3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
