from django.db import models


class Cars(models.Model):
    """Карточка автомобиля - набор информации о конкретном автомобиле"""
    car_name = models.CharField('Марка автомобиля', max_length=50)
    gear = models.CharField('Трансмиссия', max_length=50)
    engine = models.CharField('Объем двигателя', max_length=3)
    places = models.IntegerField('Количество мест')
    image = models.CharField('Ссылка на изображение автомобиля', max_length=100, blank=True)

    class Meta:
        verbose_name = 'Автомобиль'
        verbose_name_plural = "Автомобили"

    def __str__(self):
        return self.car_name
