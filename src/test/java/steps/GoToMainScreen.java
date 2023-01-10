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

public class GoToMainScreen extends  DefaultSteps {
    @Before
    public void before(){ init(); }

    @After
    public void after(){ close(); }

    @Given("Пользователь находит пункт 'Главная' в меню")
    public void Пользователь_Находит_Пункт_Главная_В_Меню(){
        driver.get("http://localhost:3000/");
        Assert.assertEquals(driver.getTitle(),"Аренда Автомобилей");
    }

    @When("Пользователь нажимает на пункт 'Главная'")
    public void Пользователь_Нажимает_На_Пункт_Главная(){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(By.className("header-menu_item")));
    }

    @Then("Пользователь перешёл к главному экрану")
    public void Пользователь_Перешёл_К_Главному_Экрану(){
        WebElement assortimentBlock = driver.findElement(By.className("beginner-screen"));
    }

    @Then("Пользователь не перешёл к главному экрану")
    public void Пользователь_Не_Перешёл_К_Ассортименту(){
        WebElement assortimentBlock = driver.findElement(By.className("cars-assortiment"));
    }
}
