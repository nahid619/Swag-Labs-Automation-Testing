const login = require('../test/Q1/loginActions');
const filter = require('../test/Q3/filterActions');
const cart = require('../test/Q3/cartActions');
const assert = require('assert');

describe('Q3 - Purchase Flow for performance_glitch_user', () => {

    it('Case 1: Login with performance_glitch_user', async () => {
        await login.login('performance_glitch_user', 'secret_sauce');
    });

    it('Case 2: Reset App State', async () => {
        await filter.resetAppState();
    });

    it('Case 3: Use sort filter: Name (Z to A)', async () => {
        await filter.sortByNameZtoA();
    });

    it('Case 4: Add first product from sorted list to cart', async () => {
        await filter.addFirstProductToCart();
    });

    it('Case 5: Navigate to final checkout page', async () => {
        await filter.goToCart();
        await cart.proceedToCheckout();
    });

    it('Case 6: Verify product name and total price', async () => {
        await cart.enterCheckoutInfo();
        await cart.verifyProductsAndTotal();
    });

    it('Case 7: Finish the purchase and verify order success message', async () => {
        await cart.finishCheckout();
        await cart.verifySuccessMessage();
    });

    it('Case 8: Reset App State again', async () => {
        await filter.resetAppState();
    });

    it('Case 9: Log out', async () => {
        await filter.logout();
    });
});
