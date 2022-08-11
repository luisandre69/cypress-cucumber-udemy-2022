Feature: Login to Application
    As a valid user
    I want to log in into Application

    Scenario: Invalid login
        Given I open login page
        When I fill username with "Invalid username"
        And I fill password with "Invalid password"
        And I click on submit login
        Then I should see error message

    @focus
    Scenario: Valid login
        Given I open login page
        And I want to wait 2000 milliseconds
        And I see "Zero - Log in" in the title
        And I see "/login" in the url
        When I fill username with "username"
        And I fill password with "password"
        And I click on submit login
        Then I should see homepage
        And I reload the browser