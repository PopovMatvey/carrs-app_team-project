//package run;
//
//import org.junit.After;
//import org.junit.Assert;
//import org.junit.Before;
//import org.junit.Test;
//import org.openqa.selenium.By;
//import org.openqa.selenium.Keys;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
//
//import cucumber.api.CucumberOptions;
//import cucumber.api.SnippetType;
//import cucumber.api.junit.Cucumber;
//import org.junit.runner.RunWith;
//@RunWith(Cucumber.class)
//@CucumberOptions (
//        features = "src/test/resources/features",
//        glue = "steps",
//        tags = "@withdraval",
//        snippets = SnippetType.CAMELCASE,
//        plugin = {"pretty", "html:target/cucumber",
//                "junit:target/surefire-reports/junit-report.xml"}
//
//)
//
////import static java.lang.System.setProperty;
//
//public class TTest {
//    private WebDriver driver;
//    private WebDriver ffDriver;
//
//    @Before
//    public void start()
//    {
//        System.setProperty("webdriver.chrome.driver", "C:\\driver\\chromedriver.exe");
//        driver = new ChromeDriver();
//    }
//
//    @Test
//    public void fTest()
//    {
//
//        driver.get("https://google.ru");
////        WebElement element = driver.findElement(By.name("q"));
////        element.sendKeys("WebDriver");
////        element.sendKeys(Keys.ENTER);
////        Assert.assertTrue(driver.getTitle().contains("WebDriver"));
//
////        ffDriver.get("https://google.ru");
////        WebElement element2 = ffDriver.findElement(By.name("q"));
////        element2.sendKeys("WebDriver");
////        element2.sendKeys(Keys.ENTER);
////        Assert.assertTrue(ffDriver.getTitle().contains("WebDriver"));
//    }
//
//    @After
//    public void stop()
//    {
//       // driver.quit();
//        //driver = null;
//    }
//
//}

package run;

        import org.junit.After;
        import org.junit.Assert;
        import org.junit.Before;
        import org.junit.Test;
        import org.openqa.selenium.By;
        import org.openqa.selenium.Keys;
        import org.openqa.selenium.WebDriver;
        import org.openqa.selenium.WebElement;
        import org.openqa.selenium.chrome.ChromeDriver;
        import org.openqa.selenium.firefox.FirefoxDriver;

        import cucumber.api.CucumberOptions;
        import cucumber.api.SnippetType;
        import cucumber.api.junit.Cucumber;
        import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions (
        features = "src/test/resources/features",
        glue = "steps",
        plugin = {"pretty", "html:target/cucumber",
                "junit:target/surefire-reports/junit-report.xml"}
)

public class TTest {


}

