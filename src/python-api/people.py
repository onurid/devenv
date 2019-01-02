from datetime import datetime
import json

def get_timestamp():
    return datetime.now().strftime(("%Y-%m-%d %H:%M:%S"))

# Data to serve with our API


# Create a handler for our read (GET) people
def read():
    """
    This function responds to a request for /api/people
    with the complete lists of people

    :return:        sorted list of people
    """
    # Create the list of people from our data
  #   json_data = json.load(open('./data/config.json'))  

    with open('data/config.json') as json_data:
      d = json.load(json_data)

    return d
    