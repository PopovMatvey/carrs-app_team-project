@withdraval
Feature: Нахождение формы связи

  @success
  Scenario: Пользователь ищет форму связи
    Given  Пользователь переходит на основную страницу
    When Пользователь скроллит вниз
    Then Пользователь нашёл форму

  @fail
  Scenario: Пользователь ищет форму связи
    Given Пользователь переходит на основную страницу
    When Пользователь скроллит вниз
    Then Пользователь не нашёл форму

