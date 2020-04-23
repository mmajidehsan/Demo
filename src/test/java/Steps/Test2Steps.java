package Steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class Test2Steps {
  @When("User calls POST employee API with name {string} and salary {int} and age {int}")
  public void abc(String name, int salary, int age) {
    log.info(name);
    log.info("" + salary);
    log.info("" + age);
  }

  @Then("response code should be {int}")
  public void responseCodeShouldBe(int responseCode) {
    log.info("" + responseCode);
  }

  @And("status should be {string}")
  public void statusShouldBe(String status) {
    log.info(status);
  }

  @And("body contains new employee with valid data")
  public void bodyContainsNewEmployeeWithValidData() {

  }


}
