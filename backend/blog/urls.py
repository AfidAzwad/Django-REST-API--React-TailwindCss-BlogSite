from django.urls import path
from .views import BlogListView, BlogFeaturedView, BlogDetailView, BlogCategoryView

urlpatterns = [
    path('', BlogListView.as_view()),
    path('featured', BlogFeaturedView.as_view()),
    path('category', BlogCategoryView.as_view()),
    path('<slug>', BlogDetailView.as_view()), 
]
