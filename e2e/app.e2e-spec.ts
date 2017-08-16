import { Seccion3Page } from './app.po';

describe('seccion3 App', function() {
  let page: Seccion3Page;

  beforeEach(() => {
    page = new Seccion3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
