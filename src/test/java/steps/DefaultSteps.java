package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;


public class DefaultSteps {
    public WebDriver driver;
    public WebDriverWait wait;

    public void init(){
        System.setProperty("webdriver.chrome.driver", "C:\\driver\\chromedriver.exe");
        driver = new ChromeDriver();
        wait = new WebDriverWait(driver,10);
    }

    public void close(){
        driver.quit();
    }

//    public void auth(String email,String password ){
//        driver.get("http://localhost:3000/");
//
//        WebElement emailInput = driver.findElement(By.id("email"));
//        WebElement passwordInput = driver.findElement(By.id("password"));
//        WebElement buttonSingIn = driver.findElement(By.xpath("//*[@id=\"root\"]/main/div/form/button"));
//
//        emailInput.sendKeys(email);
//        passwordInput.sendKeys(password);
//        buttonSingIn.click();
//    }
}
