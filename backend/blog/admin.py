from django.contrib import admin
from .models import Blog

class BlogAdmin(admin.ModelAdmin):
      exclude = ('slug', )
      list_display = ('id', 'title', 'category', 'created_at')
      list_display_links = ('id', 'title')
      search_fields = ('title', )

admin.site.register(Blog,BlogAdmin)