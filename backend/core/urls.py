from django.urls import path

from . import views


urlpatterns = [

    path('students/', views.StudentView.as_view(), name='students'),
    path('students/<str:pk>/', views.StudentView.as_view(), name='students'),
    path('upload-csv/', views.UploadCSV.as_view(), name='csv-upload'),

]
