class ProductObjects {
    get menuButton() {
        return $('#react-burger-menu-btn');
    }

    get resetAppState() {
        return $('#reset_sidebar_link');
    }

    get closeMenu() {
        return $('#react-burger-cross-btn');
    }

    get logoutLink() {
        return $('#logout_sidebar_link');
    }

    get cartIcon() {
        return $('.shopping_cart_link');
    }

    get addToCartButtons() {
        return $$('button.btn_inventory');
    }

    get allItems() {
        return $$('.inventory_item');
    }
    
    itemName(itemElement) {
        return itemElement.$('.inventory_item_name');
    }

    itemPrice(itemElement) {
        return itemElement.$('.inventory_item_price');
    }

    itemAddToCartButton(itemElement) {
        return itemElement.$('button.btn_inventory');
    }

}

module.exports = new ProductObjects();
