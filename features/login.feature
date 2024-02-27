@LoginFeature
Feature: Login - Swag Labs website

  Background: Initial step is as a User who is already on the Login page
    Given I am on the Login page

  @LoginPositiveTC1
  Scenario Outline: As a user, I can log into the Swag Labs website successfully
    When I login with "standard_user" credential
    Then I should see the Home page


  @LoginNegativeTC1
  Scenario: As a user, I should get error message
    When I login with "locked_out_user" credential
    Then I should see error of "Epic sadface: Sorry, this user has been locked out."