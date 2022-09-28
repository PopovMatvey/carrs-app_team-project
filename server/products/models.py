from django.db import models


class Cars(models.Model):
    """Карточка автомобиля - набор информации о конкретном автомобиле"""
    car_name = models.CharField('Марка автомобиля', max_length=50)
    gear = models.CharField('Трансмиссия', max_length=50)
    engine = models.CharField('Объем двигателя', max_length=3)
    places = models.IntegerField('Количество мест')
    image = models.ImageField(upload_to='cars_images', blank=True)

    class Meta:
        verbose_name = 'Автомобиль'
        verbose_name_plural = "Автомобили"

    @property
    def photo_url(self):
        if self.image and hasattr(self.image, 'url'):
            return self.image.url

    def __str__(self):
        return self.car_name
