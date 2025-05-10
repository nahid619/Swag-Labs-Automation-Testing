const cartObjects = require('./cartObjects');
const productActions = require('../Q2/productActions');
const filterActions = require('./filterActions');
const assert = require('assert');

class CartActions {
    
    async proceedToCheckout() {
        await cartObjects.checkoutButton.waitForClickable();
        await cartObjects.checkoutButton.click();
    }

    async enterCheckoutInfo(firstName = "Test", lastName = "User", zip = "12345") {
        await cartObjects.firstNameField.setValue(firstName);
        await cartObjects.lastNameField.setValue(lastName);
        await cartObjects.postalCodeField.setValue(zip);
        await cartObjects.continueButton.click();
    }

    async verifyProductsAndTotal() 
    {
        // Get names and prices from the checkout page
        const checkoutNames = await cartObjects.checkoutNames;
        const checkoutPrices = await cartObjects.checkoutPrices;

        // Verify the name and price for the first product on the checkout page
        const name = await checkoutNames.getText();
        if (name !== filterActions.productName) {
            throw new Error(`Product name mismatch! Expected: ${filterActions.productName}, Found: ${name}`);
        }

        const priceText = await checkoutPrices.getText();
        const price = parseFloat(priceText.replace('$', '').trim());
        if (price !== filterActions.productPrice) {
            throw new Error(`Product price mismatch! Expected: $${filterActions.productPrice}, Found: $${price}`);
        }

        // Verify the subtotal (before tax) matches the product price
        const itemTotal = await cartObjects.itemTotal.getText();
        const subtotal = parseFloat(itemTotal.replace('Item total: $', '').trim());
        if (subtotal !== filterActions.productPrice) {
            throw new Error(`Subtotal mismatch! Expected: $${filterActions.productPrice}, Found: $${subtotal}`);
        }
    }


    async finishCheckout() {
        await cartObjects.finishButton.waitForClickable();
        await cartObjects.finishButton.click();
    }

    async verifySuccessMessage() {
        const message = await cartObjects.successMessage.getText();
        if (message !== 'Thank you for your order!') {
            throw new Error(`Unexpected success message: ${message}`);
        }
    }

    async backToHome() {
        await cartObjects.backHomeButton.click();
    }
}

module.exports = new CartActions();
