from django.db import models

class Activity(models.Model):
    what = models.CharField(max_length=200, null=False)
    when = models.CharField(max_length=200, null=False)
    where = models.CharField(max_length=200, null=False)
    # category = models.ForeignKey(Category)

# class Category(models.Model):
#     name = models.CharField(max_length=200, null=False)

