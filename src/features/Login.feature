@loginEFTPS
Feature: Login EFTPS
  As an hard earn taxpayer
  I need to access EFTPS
  So I can give my hard earn money away

  @smoke
  Scenario: Login as an Individual
    Given I launch EFTPS
    When I fill in my credentials
    Then I should be logged in