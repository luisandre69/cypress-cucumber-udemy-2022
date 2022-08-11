const URL = 'http://zero.webappsecurity.com/login.html'
const usernameInput = '#user_login'
const passwordInput = '#user_password'
const submitButton = 'input[name="submit"]'
const accountTab = '#account_summary_tab'
const errorAlert = '.alert'


class LoginPage { 

    static visitLoginPage() {
        cy.visit(URL)
    }

    static fillUsername(name) {
        cy.get(usernameInput).type(name)
    }

    static fillPassword(password) {
        cy.get(passwordInput).type(password)
    }

    static submit() {
        cy.get(submitButton).click()
    }

    static homepageVisible() {
        cy.get(accountTab).should('be.visible')
    }

    static errorMessage(error) {
        cy.get(errorAlert).should('include', error)
    }

}

export default LoginPage