@withdraval
  Feature:Проверить пункт меню 'Бронирование авто'
    @sucsess
    Scenario: Пользователь переходит к форме отправки данных
      Given Пользователь находит пункт 'Бронирование авто' в меню
      When Пользователь нажимает на пункт 'Бронирование авто'
      Then  Пользователь перешёл к форме отправки данных
    @fail
     Scenario: Пользователь не переходит к форме отправки данных
      Given Пользователь находит пункт 'Бронирование авто' в меню
      When Пользователь нажимает на пункт 'Бронирование авто'
      Then  Пользователь не перешёл к форме отправки данных


