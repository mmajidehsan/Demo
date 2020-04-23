Feature: Testing API employees

  Scenario: Testing API returns correct response
    Given user do nothing
    When User GET calls employee API
    Then response code is 200
    And all users are returned