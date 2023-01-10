package steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SendData extends  DefaultSteps {
    @Before
    public void before(){ init(); }

    @After
    public void after(){ close(); }

    @Given("Пользователь находит форму")
    public void Пользователь_Находит_Форму(){
        driver.get("http://localhost:3000/");
        Assert.assertEquals(driver.getTitle(),"Аренда Автомобилей");
        WebElement formBlock = driver.findElement(By.className("reserve-form_container"));
    }

    @When("Пользователь вводит данные")
    public void Пользователь_Водит_Данные(){
        WebElement nameInput = driver.findElement(By.id(("nameInput")));
        WebElement phoneInput = driver.findElement(By.id(("phoneInput")));
        WebElement carInput = driver.findElement(By.id(("carInput")));

        nameInput.sendKeys("fds");
        phoneInput.sendKeys("9156273829");
        carInput.sendKeys("fds");
    }

    @Then("Пользователь отправляет данные")
    public void Пользователь_Отправляет_Данные(){
        WebElement nameInput = driver.findElement(By.id(("nameInput")));
        WebElement phoneInput = driver.findElement(By.id(("phoneInput")));
        WebElement carInput = driver.findElement(By.id(("carInput")));

        nameInput.sendKeys("fds");
        phoneInput.sendKeys("9156273829");
        carInput.sendKeys("fds");

        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"submitButton\"]")));
    }

    @Then("Пользователь не отправляет данные")
    public void Пользователь_Не_Отправляет_Данные(){
        WebElement nameInput = driver.findElement(By.id(("nameInput")));
        WebElement phoneInput = driver.findElement(By.id(("phoneInput")));
        WebElement carInput = driver.findElement(By.id(("carInput")));

        nameInput.sendKeys("fds");
        phoneInput.sendKeys("9156273829");
        carInput.sendKeys("fds");
    }

}
