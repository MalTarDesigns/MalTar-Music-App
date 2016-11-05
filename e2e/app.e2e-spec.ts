import { MalTarMusicPage } from './app.po';

describe('mal-tar-music App', function() {
  let page: MalTarMusicPage;

  beforeEach(() => {
    page = new MalTarMusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
