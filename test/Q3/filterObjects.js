class FilterObjects {
    get productSortDropdown() 
    {
        return $('.product_sort_container');
    }

    get firstProductName() {
        return $$('.inventory_item_name')[0]; // First product's name (using class)
    }
    get firstProductPrice(){
        return $$(".inventory_item_price")[0];
    }

    get firstProductAddToCartbutton() 
    {
        return $$('button.btn_inventory')[0];
    }

    get cartIcon() {
        return $('.shopping_cart_link');
    }

    get logoutLink() {
        return $('#logout_sidebar_link');
    }

    get hamburgerMenu() {
        return $('#react-burger-menu-btn');
    }

    get resetAppState() {
        return $('#reset_sidebar_link');
    }

    get closeMenu() {
        return $('#react-burger-cross-btn');
    }
}

module.exports = new FilterObjects();
