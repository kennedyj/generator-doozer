FROM totem/python-base:2.7

ADD . /opt/doozer
RUN pip install -r /opt/doozer/requirements.txt

EXPOSE 5000

ENTRYPOINT ["python", "/opt/doozer/main.py"]

CMD [""]
