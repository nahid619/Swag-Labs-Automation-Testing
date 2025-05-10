const loginObjects = require('./loginObjects');

class LoginActions {
    async login(username, password) 
    {
        await loginObjects.usernameInput.setValue(username);
        await loginObjects.passwordInput.setValue(password);
        await loginObjects.loginButton.click();
    }

    async getErrorMessage() {
        return await loginObjects.errorMessage.getText();
    }
}

module.exports = new LoginActions();
