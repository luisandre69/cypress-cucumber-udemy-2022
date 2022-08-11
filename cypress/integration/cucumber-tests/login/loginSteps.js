import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open login page', () => {
    LoginPage.visitLoginPage()
})

When('I submit login', () => {
    LoginPage.fillUsername('username')
    LoginPage.fillPassword('password')
    LoginPage.submit()
})

When('I fill username with {string}', username => {
    LoginPage.fillUsername(username)
})

When('I fill password with {string}', password => {
    LoginPage.fillPassword(password)
})

When('I click on submit login', () => {
    LoginPage.submit()
})

Then('I should see homepage', () => {
    LoginPage.homepageVisible()
})

Then('I should see error message', () => {
    LoginPage.errorMessage('Login and/or password are wrong')
})

