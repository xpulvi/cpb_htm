import time
import json
from pprint import pprint
import cheshire_cat_api as ccat


config = ccat.Config(user_id="Petya")

cat_client = ccat.CatClient(config)

def start_convo():
    cat_client.send(
        message="How was the Colosseum built?",
        user_info={
            "age": 10,
            "country": "Bulgaria"
        }
    )

def message_callback(msg):
    msg_data = json.loads(msg)

    if msg_data["type"] == "chat":
        pprint(msg_data["content"])
    
    # go on with conversation (you need to control for stop conditions)
    #cat_client.send("Thanks")

cat_client.on_open = start_convo
cat_client.on_message = message_callback

cat_client.connect_ws()