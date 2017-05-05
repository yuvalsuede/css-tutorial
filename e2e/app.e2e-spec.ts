import { CssCoursePage } from './app.po';

describe('css-course App', () => {
  let page: CssCoursePage;

  beforeEach(() => {
    page = new CssCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
