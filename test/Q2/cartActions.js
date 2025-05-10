const cartObjects = require('./cartObjects');
const productActions = require('./productActions');
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

   async verifyProductsAndTotal(selectedNames, selectedPrices) 
   {
        if (!Array.isArray(selectedNames)) 
        {
            throw new Error(`Expected selectedProducts to be an array, got: ${typeof selectedNames}`);
        }

        if (!Array.isArray(selectedPrices)) 
        {
            throw new Error(`Expected selectedprices to be an array, got: ${typeof selectedPrices}`);
        }

        // Get product names, prices values from checkoutpage page as array.
        let nameElements = await cartObjects.checkoutNames;
        nameElements = Array.isArray(nameElements) ? nameElements : [nameElements];

        let priceElements = await cartObjects.checkoutPrices;
        priceElements = Array.isArray(priceElements) ? priceElements : [priceElements];

        let count = nameElements.length;
        let overviewpricetotal = 0;

        if(nameElements.length != selectedNames.length){
            throw new Error(`selected products and checkout page products dont match.!`);
        }

        //select each elemnt and get text from that and compare them with slected once
        for(let i=0; i<count; i++)
        {
            const name = await nameElements[i].getText();
            const price = await priceElements[i].getText();

            assert.strictEqual(name,selectedNames[i]);
            assert.strictEqual(price,selectedPrices[i]);

            const overviewprice = price.replace(/[^0-9.]/g, '');
            const overviewpriceparsed = parseFloat(overviewprice); 


            overviewpricetotal = overviewpricetotal + overviewpriceparsed;
        }
        

        const actualTotalText = await cartObjects.itemTotal.getText();
        const actualTotal = parseFloat(actualTotalText.replace('Item total: $', ''));

        if (overviewpricetotal.toFixed(2) !== actualTotal.toFixed(2)) {
            throw new Error(`Total price mismatch! Expected: $${overviewpricetotal.toFixed(2)}, Actual: $${actualTotal.toFixed(2)}`);
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
