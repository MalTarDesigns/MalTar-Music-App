import { MalTarMusicAppPage } from './app.po';

describe('mal-tar-music-app App', function() {
  let page: MalTarMusicAppPage;

  beforeEach(() => {
    page = new MalTarMusicAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
