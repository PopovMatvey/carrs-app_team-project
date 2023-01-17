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

public class GoToFirstCar extends DefaultSteps {
    @Before
    public void before(){ init(); }

    @After
    public void after(){ close(); }

    @Given("Переход на страницу с автомобилем")
    public void Переход_На_Страницу_С_Автомобилем(){
        driver.get("http://localhost:3000/");
        Assert.assertEquals(driver.getTitle(),"Аренда Автомобилей");
    }

    @When("Пользователь нажимает на кнопку первой карточки")
    public void Пользователь_Нажимает_На_Кнопку_Первой_Карточки(){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(By.className("carCardHref1")));
    }

    @When("Пользователь нажимает на кнопку второй карточки")
    public void Пользователь_Нажимает_На_Кнопку_Второй_Карточки(){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(By.className("carCardHref2")));
    }

    @When("Пользователь нажимает на кнопку третей карточки")
    public void Пользователь_Нажимает_На_Кнопку_Третей_Карточки(){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(By.className("carCardHref3")));
    }

    @When("Пользователь нажимает на кнопку четвёртую карточки")
    public void Пользователь_Нажимает_На_Кнопку_Четвёртую_Карточки(){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(By.className("carCardHref4")));
    }

    @Then("Пользователь перешёл к форме заполнения данных")
    public void Пользователь_Перешёл_К_Форме_Заполнения_Данных(){
        WebElement formBlock = driver.findElement(By.className("reserve-form_container"));
    }

    @Then("Пользователь не перешёл к форме заполнения данных")
    public void Пользователь_Не_Перешёл_К_Форме_Заполнения_Данных(){
        WebElement formBlock = driver.findElement(By.className("reserve-form_container"));
    }



}
