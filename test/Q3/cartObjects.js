class CartObjects {
    // Cart Page
    get checkoutButton() {
        return $("//button[@id='checkout']");
    }

    // Checkout Step One
    get firstNameField() {
        return $('#first-name');
    }

    get lastNameField() {
        return $('#last-name');
    }

    get postalCodeField() {
        return $('#postal-code');
    }

    get continueButton() {
        return $('#continue');
    }


    // Checkout Step Two (Overview)
    get checkoutNames() {
        return $$("//div[@class='inventory_item_name']")[0];
    }

    get checkoutPrices() {
        return $$("//div[@class='inventory_item_price']")[0];
    }

    get itemTotal() {
        return $('.summary_subtotal_label');
    }

    get finishButton() {
        return $('#finish');
    }

    // Checkout Complete
    get successMessage() {
        return $('.complete-header');
    }

    get backHomeButton() {
        return $('#back-to-products');
    }
}

module.exports = new CartObjects();
