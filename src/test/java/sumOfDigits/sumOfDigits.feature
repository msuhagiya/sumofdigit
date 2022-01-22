@test
Feature: Find the sum of digits of given number

  Scenario Outline: Correct count of digits

    When Passed <Input>
    Then it returns <expectedSumOfDigits>
    Examples:
      | Input | expectedSumOfDigits |
      | 1205  | 8                   |
      | -2354 | 14                  |
      | 2435  | 14                  |
      | -1234 | 10                  |
      | 5642  | 17                  |
