const assert = require('assert');

it('should check base URL', async () => {
 await browser.url('https://webdriver.io');
  const url = await browser.getUrl();
  assert.ok(url.includes('saucedemo.com'), 'URL does not contain expected text');
});
