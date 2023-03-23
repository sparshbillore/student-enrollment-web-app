import csv
from django.shortcuts import render
from rest_framework.response import Response
from .serializers import StudentSerializer
from .models import Student
from rest_framework.views import APIView
from rest_framework import status
import random
from datetime import datetime


class StudentView(APIView):
    def get(self, request, pk=None, format=None):
        id = pk
        if id is not None:
            stu = Student.objects.get(enrollment_id=id)
            serializer = StudentSerializer(stu)
            return Response(serializer.data)

        stu = Student.objects.all()
        serializer = StudentSerializer(stu, many=True)
        return Response(serializer.data)
    

    def post(self, request, formate = None):
        print('doc', request.data)
        student_name = request.data['name'].split()[0]
        date_string = request.data['doj']
        doj = datetime.strptime(date_string, '%Y-%m-%d')
        date_of_joining = doj.strftime('%d%m%y')
        random_number = str(random.randint(1, 999)).zfill(3)
        enrollment_id = date_of_joining + student_name[:3].upper() + random_number

        request.data['enrollment_id'] = enrollment_id
        serializer = StudentSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Student Registered successfully' }, status=status.HTTP_201_CREATED)
        
        return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    

class UploadCSV(APIView):

    def post(self, request):
        print(request.__dict__)
        file = request.FILES.get('csvFile')
        if file and not file.name.endswith('.csv'):
            return Response({'error': 'Invalid file format, please upload a CSV file.'}, status=status.HTTP_400_BAD_REQUEST)

        decoded_file = file.read().decode('utf-8').splitlines()
        reader = csv.DictReader(decoded_file)
        print(reader)
        for row in reader:
            student_data = {
                'name': row['name'],
                'gender': row['gender'],
                'adhar_card_number': row['adhar_card_number'],
                'dob': row['dob'],
                'identification_marks': row['identification_marks'],
                'category': row['category'],
                'height': row['height'],
                'weight': row['weight'],
                'mail_id': row['mail_id'],
                'contact_detail': row['contact_detail'],
                'address': row['address'],
                'father_name': row['father_name'],
                'father_qualification': row['father_qualification'],
                'father_profession': row['father_profession'],
                'father_designation': row['father_designation'],
                'father_aadhar_card': row['father_aadhar_card'],
                'father_mobile_number': row['father_mobile_number'],
                'father_mail_id': row['father_mail_id'],
                'mother_name': row['mother_name'],
                'mother_qualification': row['mother_qualification'],
                'mother_profession': row['mother_profession'],
                'mother_designation': row['mother_designation'],
                'mother_aadhar_card': row['mother_aadhar_card'],
                'mother_mobile_number': row['mother_mobile_number'],
                'mother_mail_id': row['mother_mail_id'],
                'class_name': row['class_name'],
                'section': row['section'],
                'doj': row['doj'],
            }

            student_name = student_data['name'].split()[0]
            date_string = student_data['doj']
            doj = datetime.strptime(date_string, '%Y-%m-%d')
            date_of_joining = doj.strftime('%d%m%y')
            random_number = str(random.randint(1, 999)).zfill(3)
            enrollment_id = date_of_joining + student_name[:3].upper() + random_number

            student_data['enrollment_id'] = enrollment_id

            



            student_serializer = StudentSerializer(data=student_data)
            if not student_serializer.is_valid():
                return Response({'errors': student_serializer.errors})
            if student_serializer.is_valid():
                student = student_serializer.save()
                

            
            
        return Response({'success': 'CSV file uploaded successfully.'}, status=status.HTTP_201_CREATED)
        
        