package sumOfDigits;

import SumOfDigtsOfGivenNumber.DigitsOperation;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class SumOfDigitsStepDefs {
    DigitsOperation digitsOperation = new DigitsOperation();
   int actualResult;
    @When("Passed {int}")
    public void passed(int inputNumber) {
        actualResult = digitsOperation.getSumOfDigitsOfGivenNumber(inputNumber);

    }

    @Then("it returns {int}")
    public void it_returns(int expectedSumOfDigits) {
        Assert.assertEquals(actualResult,expectedSumOfDigits);
    }
}
