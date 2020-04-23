package Steps.Base;

import cucumber.api.java.en.Given;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class StepsBase {

  @Given("user do nothing")
  public void userDoNothing() {
    log.info("Doing nothing");
  }
}
