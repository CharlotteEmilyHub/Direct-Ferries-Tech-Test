Feature: Direct Ferries Italian homepage

    Scenario: Popular operators appear
        Given I am on the Italian homepage
        Then I see popular operators

    Scenario: Top destinations appear
        Given I am on the Italian homepage
        Then I see top destinations
    
    Scenario: Latest offers appear
        Given I am on the Italian homepage
        Then I see latest offers