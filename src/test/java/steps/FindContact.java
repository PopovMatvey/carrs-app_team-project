package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class FindContact extends  DefaultSteps {

    @Before
    public void before(){ init(); }

    @After
    public void after(){ close(); }

    @Given("Пользователь переходит на основную страницу")
    public void ПользовательПереходиНаОсновнуюСтраницу() {
        driver.get("http://localhost:3000/");
        Assert.assertEquals(driver.getTitle(),"Аренда Автомобилей");
    }

    @When("Пользователь скроллит вниз")
    public void ПользовательCкроллитВниз() {
        WebElement formBlock = driver.findElement(By.className("reserve-form_container"));
    }

    @Then("Пользователь нашёл форму")
    public void ПользовательНашёлФорму() {
        WebElement formBlock = driver.findElement(By.className("reserve-form_container"));
    }

    @Then("Пользователь не нашёл форму")
    public void ПользовательНеНашёлФорму() {
        WebElement formBlock = driver.findElement(By.className("reserve-form_container"));
    }



}
