$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/findContactForm.feature");
formatter.feature({
  "name": "Нахождение формы связи",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@withdraval"
    }
  ]
});
formatter.scenario({
  "name": "Пользователь ищет форму связи",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@withdraval"
    },
    {
      "name": "@success"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь переходит на основную страницу",
  "keyword": "Given "
});
formatter.match({
  "location": "FindContact.ПользовательПереходиНаОсновнуюСтраницу()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь скроллит вниз",
  "keyword": "When "
});
formatter.match({
  "location": "FindContact.ПользовательCкроллитВниз()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь нашёл форму",
  "keyword": "Then "
});
formatter.match({
  "location": "FindContact.ПользовательНашёлФорму()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Пользователь ищет форму связи",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@withdraval"
    },
    {
      "name": "@fail"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь переходит на основную страницу",
  "keyword": "Given "
});
formatter.match({
  "location": "FindContact.ПользовательПереходиНаОсновнуюСтраницу()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь скроллит вниз",
  "keyword": "When "
});
formatter.match({
  "location": "FindContact.ПользовательCкроллитВниз()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь не нашёл форму",
  "keyword": "Then "
});
formatter.match({
  "location": "FindContact.ПользовательНеНашёлФорму()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/sendDataForm.feature");
formatter.feature({
  "name": "Отправка данных с формы",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@withdraval"
    }
  ]
});
formatter.scenario({
  "name": "Пользователь отправляет данные с формы",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@withdraval"
    },
    {
      "name": "@success"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь находит форму",
  "keyword": "Given "
});
formatter.match({
  "location": "SendData.Пользователь_Находит_Форму()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь вводит данные",
  "keyword": "When "
});
formatter.match({
  "location": "SendData.Пользователь_Водит_Данные()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (616, 2103)\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027POPOV-PC\u0027, ip: \u0027192.168.1.56\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_352\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.22 (ec46c90f5938..., userDataDir: C:\\Users\\F062~1\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:58124}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 62f802edce9be7ec560be251cf084e5f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat steps.SendData.Пользователь_Водит_Данные(SendData.java:36)\r\n\tat ✽.Пользователь вводит данные(src/test/resources/features/sendDataForm.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Пользователь отправляет данные",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Пользователь не может отправить данные",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@withdraval"
    },
    {
      "name": "@fail"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь находит форму",
  "keyword": "Given "
});
formatter.match({
  "location": "SendData.Пользователь_Находит_Форму()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь вводит данные",
  "keyword": "When "
});
formatter.match({
  "location": "SendData.Пользователь_Водит_Данные()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (616, 2101)\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027POPOV-PC\u0027, ip: \u0027192.168.1.56\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_352\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.22 (ec46c90f5938..., userDataDir: C:\\Users\\F062~1\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:58168}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 14be007dc5ed01220cf9790ec9c85c08\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat steps.SendData.Пользователь_Водит_Данные(SendData.java:36)\r\n\tat ✽.Пользователь вводит данные(src/test/resources/features/sendDataForm.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Пользователь не отправляет данные",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});