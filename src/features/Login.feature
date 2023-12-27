@loginApplication
Feature: Login Application
  As an hard earn taxpayer
  I need to access the application
  So I can give my hard earn money away

  @smoke
  Scenario: Login as an Individual
    Given I launch the application
    When I fill in my credentials
    Then I should be logged in