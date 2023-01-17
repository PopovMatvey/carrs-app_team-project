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

public class GoToDataSendForm extends  DefaultSteps{
    @Before
    public void before(){ init(); }

    @After
    public void after(){ close(); }

    @Given("Пользователь находит пункт 'Бронирование авто' в меню")
    public void Пользователь_Находит_Пункт_Бронирование_Авто_В_Меню(){
        driver.get("http://localhost:3000/");
        Assert.assertEquals(driver.getTitle(),"Аренда Автомобилей");
        WebElement formBlock = driver.findElement(By.className("header-menu_item"));
    }

    @When("Пользователь нажимает на пункт 'Бронирование авто'")
    public void Пользователь_Нажимает_На_Пункт_Бронирование_Авто(){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/header/div[2]/ul/li[3]/a")));
    }

    @Then("Пользователь перешёл к форме отправки данных")
    public void Пользователь_Перешёл_К_Форме_Отправки_Данных(){
        WebElement formBlock = driver.findElement(By.className("reserve-form_container"));
    }

    @Then("Пользователь не перешёл к форме отправки данных")
    public void Пользователь_Не_Перешёл_К_Форме_Отправки_Данных(){
        WebElement formBlock = driver.findElement(By.className("reserve-form_container"));
    }
}
