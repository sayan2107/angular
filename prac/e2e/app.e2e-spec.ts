import { PracPage } from './app.po';

describe('prac App', () => {
  let page: PracPage;

  beforeEach(() => {
    page = new PracPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
