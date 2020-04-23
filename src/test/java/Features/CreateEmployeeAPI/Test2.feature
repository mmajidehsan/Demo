Feature: Testing create employee API

  Scenario: API is creating new employee record
    Given user do nothing
    When User calls POST employee API with name "Mike" and salary 2500 and age 29
    Then response code should be 200
    And status should be "success"
    And body contains new employee with valid data