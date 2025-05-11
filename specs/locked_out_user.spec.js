const login = require('../test/Q1/loginActions');
const assert = require('assert');


describe('Q1 - Locked Out User Login Test', () => {

        it('Case 1: should open the website', async () => {
                await browser.url('/');
                await browser.pause(1000)
        });
        it('Case 2: should display an error for locked_out_user', async () => {
                //await browser.url('/');
                await login.login('locked_out_user', 'secret_sauce');
                const error = await login.getErrorMessage();
                assert.strictEqual(error, 'Epic sadface: Sorry, this user has been locked out.');
                await browser.pause(1000)
        });

        
});

