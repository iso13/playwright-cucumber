@launchGoogle
Feature: Launch Google
    As a Crazy Quality Engineer
    I want to be able launch the Google site
    So I can say that I automated getting to Google

    Background:
    Given I login to "TEST" application as a "TEST" user

    @MANUAL @JIRA-1 @smoke @dave
    Scenario: Access Google site
        When I create a commodities fund in my account
        Then the commodities should be created

    @AMANUAL @JIRA-2
    Scenario: Access
        When I create a mutual fund in my account
        Then the mutual fund should be created
        And I do something cool

    @AUTOMATED @JIRA-3
    Scenario: Create an exchange-traded fund
        When I create a asset funds in my account
        Then the exchange-traded fund should be created
