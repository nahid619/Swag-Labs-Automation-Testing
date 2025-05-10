const login = require('../test/Q1/loginActions');
const assert = require('assert');


describe('Q1 - Locked Out User Login Test', () => {

        it('should display an error for locked_out_user', async () => {
                //await browser.url('/');
                await login.login('locked_out_user', 'secret_sauce');
                const error = await login.getErrorMessage();
                assert.strictEqual(error, 'Epic sadface: Sorry, this user has been locked out.');
        });

        
});

