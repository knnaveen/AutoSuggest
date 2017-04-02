import { SampleAutoSuggestPage } from './app.po';

describe('sample-auto-suggest App', function() {
  let page: SampleAutoSuggestPage;

  beforeEach(() => {
    page = new SampleAutoSuggestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
