# Generated by Django 4.2.2 on 2024-01-17 02:33

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        (
            "main",
            "0001_first_migration_created_Teacher_CourseCategory_Course_Student_tables",
        ),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="coursecategory",
            options={"verbose_name_plural": "Course_Categories"},
        ),
    ]