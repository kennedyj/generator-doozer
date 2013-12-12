import unittest
import main


class TestMain(unittest.TestCase):
    def setUp(self):
        self.view = main.<%= _.capitalize(doozerName) %>()

    def test_form(self):
        """ Test the results method to make sure it does what you want """
        form = self.view.form({})

        self.assertEqual(form, {})

    def test_results(self):
        """ Test the results method to make sure it does what you want """
        results = self.view.results({})

        self.assertEqual(results, {
            "headers": [{
                "id": "name",
                "text": "Name"
            }, {
                "id": "value",
                "text": "Value"
            }],
            "results": [{
                "name": "My Name",
                "value": "<%= _.capitalize(doozerName) %>"
            }]
        })
