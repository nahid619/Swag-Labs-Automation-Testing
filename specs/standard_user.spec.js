const loginActions = require('../test/Q1/loginActions');
const productActions = require('../test/Q2/productActions');
const cartActions = require('../test/Q2/cartActions');
const assert = require('assert');
//let selectedProductName = [];
let selectedProductsName =[];
let selectedProductsPrice = [];

describe('Q2 - End-to-End Purchase Journey with standard_user', () => {
    it('Case 1: Should log in successfully with standard_user', async () => {
        // browser.url('/');
        await loginActions.login('standard_user', 'secret_sauce');
    });

    it('Case 2: Should reset app state after login', async () => {
        await productActions.openMenu();
        await productActions.resetAppState();
    });


    it('Case 3: Should add 3 products to the cart', async () => {
        // Add products to the cart and store the product names and prices globally
        const { selectedProductsName: names, selectedProductsPrice: prices } = await productActions.addFirstNProductsToCart();
        selectedProductsName = names;
        selectedProductsPrice = prices;
    });

    it('Case 4: Navigate to checkout page', async () => {
        await productActions.goToCart();
        await cartActions.proceedToCheckout();
    });

    it('Case 5: Verify product names and total price', async () => {
        await cartActions.enterCheckoutInfo();
        await cartActions.verifyProductsAndTotal(selectedProductsName, selectedProductsPrice);

    });



    it('Case 6: Finish the purchase journey and verify the successful order message', async () => {
        await cartActions.finishCheckout();
        await cartActions.verifySuccessMessage();
    });

    it('Case 7: Reset app', async () => {
        await cartActions.backToHome();
        await productActions.openMenu();
        await productActions.resetAppState();
    });

    it('Case 8: Successful log out', async () => {
        await productActions.openMenu();
        await productActions.logout();
    });
});


