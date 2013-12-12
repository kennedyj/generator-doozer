import doozer


class <%= _.capitalize(doozerName) %>(doozer.Doozer):
    # Called to prepare the form. If no changes are needed just return data
    # or omit this method all together
    def form(self, data):
        return data

    # The form data is passed in.
    # This method can return a dictionary for success, an integer for failure
    # or a flask response.
    def results(self, data):
        # The column id's and names for the generated table
        headers = [
            {
                "id": "name",
                "text": "Name"
            },
            {
                "id": "value",
                "text": "Value"
            }
        ]

        # Results is an array of key value pairs, the table headers define
        # what id's will be used when generating the table.
        results = [{
            "name": "My Name",
            "value": "<%= _.capitalize(doozerName) %>"
        }]

        return {
            "headers": headers,
            "results": results
        }


if __name__ == '__main__':
    # run still needs to be called, port is optional (default is 5000).
    doozer.run()
