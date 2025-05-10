const product = require('./productObjects');

class ProductActions {

    async openMenu() {
        await product.menuButton.waitForClickable();
        await product.menuButton.click();
    }
    
    async resetAppState() 
    {
        await product.resetAppState.click();
        await product.closeMenu.click();
    }

    async addFirstNProductsToCart() 
    {
        const buttons = await product.addToCartButtons;
        const count = buttons.length;

        if (count < 3) 
        {
            throw new Error("Not enough products to add 3 to cart.");
        }

        const allItems = await product.allItems;
        const randomIndices = [];

        while (randomIndices.length < 3) {
            const rand = Math.floor(Math.random() * count);
            if (!randomIndices.includes(rand)) {
                randomIndices.push(rand);
            }
        }

        const selectedProductsName = [];
        const selectedProductsPrice = [];

        for (let i = 0; i < 3; i++) 
        {
            const index = randomIndices[i];
            const item = allItems[index];

            const name = await (await product.itemName(item)).getText();
            const price = await (await product.itemPrice(item)).getText();

            selectedProductsName.push(name);
            selectedProductsPrice.push(price);

            const button = await product.itemAddToCartButton(item);
            await button.click();
            await browser.pause(1000);
        }

        return {selectedProductsName, selectedProductsPrice};
    }


    async goToCart() {
        await product.cartIcon.click();
    }

    async logout() {
        await product.logoutLink.click();
    }


}

module.exports = new ProductActions();
