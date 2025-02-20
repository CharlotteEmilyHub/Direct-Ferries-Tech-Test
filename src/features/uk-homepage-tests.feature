Feature: Direct Ferries UK homepage

    Scenario: Popular operators appear
        Given I am on the UK homepage
        Then I see popular operators

    Scenario: Top destinations appear
        Given I am on the UK homepage
        Then I see top destinations
    
    Scenario: Latest offers appear
        Given I am on the UK homepage
        Then I see latest offers