
all: install clean run

install:
	@echo "# installing depedencies"
	@pip install -r requirements.txt

test: clean unittest lint

unittest:
	@nosetests --with-coverage --cover-html --cover-erase --cover-branches --cover-package=main

clean:
	@find . -name "*.pyc" -delete

lint:
	@find . -name "*.py" -exec flake8 {} \;

run: clean
	@python main.py

.PHONY: install clean test lint unittest run
