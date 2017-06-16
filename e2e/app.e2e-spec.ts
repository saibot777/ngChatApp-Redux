import { ChatAppRxJSPage } from './app.po';

describe('chat-app-rx-js App', () => {
  let page: ChatAppRxJSPage;

  beforeEach(() => {
    page = new ChatAppRxJSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
