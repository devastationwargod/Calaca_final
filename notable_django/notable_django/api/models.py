from django.db import models

class Note(models.Model):
    curso = models.CharField(max_length=200, default='Esto es curso')
    title = models.CharField(max_length=200, default='Esto es un Titulo')
    description = models.CharField(max_length=2000, default='This is a default Description')
    tipo = models.CharField(max_length=30, default='This is a default Tipo')
    imagen = models.CharField(max_length=2000, default='This is a default Imagen')
    body = models.TextField()
    responsible = models.CharField(max_length=60, default='Esto es Responsible')
    instructor = models.CharField(max_length=60, default='Esto es un Instructor')
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return '%s' % (self.title)

