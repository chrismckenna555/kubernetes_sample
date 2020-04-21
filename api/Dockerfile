FROM python:3.6-slim 

#create app dir
WORKDIR /app

#copy app source
COPY . .

#install dependencies
RUN pip3 install -r ./requirements.txt

#start app
EXPOSE 5000
CMD ["python3", "app.py"]