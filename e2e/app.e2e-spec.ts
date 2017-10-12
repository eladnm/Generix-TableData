import { A4appPage } from './app.po';

describe('generix App', () => {
  let page: generixPage;

  beforeEach(() => {
    page = new generixPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
