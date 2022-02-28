from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField

class Category(models.TextChoices):
    TECHNOLOGY = 'Technology'
    PROGRAMMING = 'Programming'
    HEALTH = 'Health'
    ENVIRONMENT = 'Environment'
    BUSINESS = 'Business'
    STYLE = 'Style'
    TRAVEL = 'Travel'

class Blog(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=200)
    content = RichTextField(blank=True, null=True)
    category = models.CharField(
        max_length=50, choices=Category.choices, default=Category.TECHNOLOGY)
    thumbnail = models.ImageField(upload_to='blogimages/')
    author = models.ForeignKey(to=User,db_column="author", on_delete=models.CASCADE, default=True, null=False)
    excerpt = models.CharField(max_length=150)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=2)
    year = models.CharField(max_length=4)
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        # it will add - between the title like -> functions-in-python
        original_slug = slugify(self.title)
        queryset = Blog.objects.all().filter(
            slug__iexact=original_slug).count()  # check duplicacy
        count = 1
        slug = original_slug
        while(queryset):  # run untill the value is 0
            slug = original_slug + '-' + str(count)  # functions-in-python-1
            count += 1
            # check anymore dublicate slug exists
            queryset = Blog.objects.all().filter(slug__iexact=slug).count()
        self.slug = slug
        if self.featured:
            try:
                blog = Blog.objects.get(featured=True)
                if self != blog:
                    blog.featured = False
                    blog.save()
            except Blog.DoesNotExist:
                pass
        super(Blog, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
