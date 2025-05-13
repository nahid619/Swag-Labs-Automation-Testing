const filter = require('./filterObjects');

class FilterActions {

    productName = '';
    productPrice =0;

    async resetAppState() {
        await filter.hamburgerMenu.click();
        await filter.resetAppState.click();
        await filter.closeMenu.click();
    }

    async sortByNameZtoA() {
        await filter.productSortDropdown.waitForClickable();
        await filter.productSortDropdown.selectByVisibleText('Name (Z to A)');
    }

    async addFirstProductToCart() 
    {

        this.productName = await filter.firstProductName.getText(); 
        const priceText = await filter.firstProductPrice.getText();
        this.productPrice = parseFloat(priceText.replace('$', '').trim());
        await filter.firstProductAddToCartbutton.waitForClickable();
        await filter.firstProductAddToCartbutton.click();
    }

    async logout(){
        await filter.logoutLink.click();
    }

    async goToCart() {
        await filter.cartIcon.click();
    }

}

module.exports = new FilterActions();
