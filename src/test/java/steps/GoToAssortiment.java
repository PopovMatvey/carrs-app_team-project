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

public class GoToAssortiment extends  DefaultSteps {
    @Before
    public void before(){ init(); }

    @After
    public void after(){ close(); }

    @Given("Переход на страницу")
    public void Переход_На_Страницу(){
        driver.get("http://localhost:3000/");
        Assert.assertEquals(driver.getTitle(),"Аренда Автомобилей");
    }

    @When("Пользователь нажал на начачальную кнопку")
    public void Пользователь_Нажал_На_Начачальную_Кнопку(){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"mainScreen\"]/div/div[2]/a")));
    }

    @When("Пользователь нажимает на пункт 'Автомобили'")
    public void Пользователь_Нажимает_На_Пункт_Автомобили(){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(By.className("header-menu_item")));
    }

    @Then("Пользователь перешёл к ассортименту")
    public void Пользователь_Перешёл_К_Ассортименту(){
        WebElement assortimentBlock = driver.findElement(By.className("cars-assortiment"));
    }

    @Then("Пользователь не перешёл к ассортименту")
    public void Пользователь_Не_Перешёл_К_Ассортименту(){
        WebElement assortimentBlock = driver.findElement(By.className("beginner-screen"));
    }



}
