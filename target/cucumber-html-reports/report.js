$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/CreateEmployeeAPI/Test2.feature");
formatter.feature({
  "name": "Testing create employee API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "API is creating new employee record",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user do nothing",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsBase.userDoNothing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User calls POST employee API with name \"Mike\" and salary 2500 and age 29",
  "keyword": "When "
});
formatter.match({
  "location": "Test2Steps.abc(String,int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Test2Steps.responseCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status should be \"success\"",
  "keyword": "And "
});
formatter.match({
  "location": "Test2Steps.statusShouldBe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "body contains new employee with valid data",
  "keyword": "And "
});
formatter.match({
  "location": "Test2Steps.bodyContainsNewEmployeeWithValidData()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/Features/SeeAllEmployeeAPI/Test1.feature");
formatter.feature({
  "name": "Testing API employees",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Testing API returns correct response",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user do nothing",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsBase.userDoNothing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User GET calls employee API",
  "keyword": "When "
});
formatter.match({
  "location": "Test1Steps.userCallsEmployeeAPI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Test1Steps.responseCodeIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all users are returned",
  "keyword": "And "
});
formatter.match({
  "location": "Test1Steps.allUsersAreReturned()"
});
formatter.result({
  "status": "passed"
});
});