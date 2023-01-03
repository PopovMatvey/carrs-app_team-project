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
formatter.step({
  "name": "Пользователь переходит на основную страницу",
  "keyword": "Given "
});
formatter.match({
  "location": "MySteps.ПользовательПереходиНаОсновнуюСтраницу()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь скроллит вниз",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.ПользовательCкроллитВниз()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь нашёл форму",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.ПользовательНашёлФорму()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Пользователь переходит на основную страницу",
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
formatter.step({
  "name": "Пользователь переходит на основную страницу",
  "keyword": "Given "
});
formatter.match({
  "location": "MySteps.ПользовательПереходиНаОсновнуюСтраницу()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь скроллит вниз",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.ПользовательCкроллитВниз()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Пользователь не нашёл форму",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.ПользовательНеНашёлФорму()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});