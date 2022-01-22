package sumOfDigits;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = ".",tags = "@test",plugin = {"pretty", "html:target/cucumber/report.html"})
public class RunCuke {
}
