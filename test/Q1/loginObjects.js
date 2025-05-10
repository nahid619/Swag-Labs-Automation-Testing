class LoginObjects {
    get usernameInput() {
        return $("//input[@id='user-name']");
    }

    get passwordInput() {
        return $("//input[@id='password']");
    }

    get loginButton() {
        return $("//input[@id='login-button']");
    }

    get errorMessage() {
        return $(".error-message-container");
    }
}

module.exports = new LoginObjects();
