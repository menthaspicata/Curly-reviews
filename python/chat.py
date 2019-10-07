import json
from telethon import TelegramClient, sync, events
import pprint

chat_id = "@curly_chat"
user_id = 308478154


client = TelegramClient('session_name', API_ID, API_HASH)
client.start()


# client.download_profile_photo(photo)

# with open('profiles_from_chat.json', 'r') as f:
#   json_str = json.load(f)

# for photo_ava in json_str:
#   photo_ava_id = photo_ava['photo']['photo_id']
#   print(photo_ava_id)
  # client.download_profile_photo(photo_ava_id)


f = open('../src/app/messages_from_chat_ru.json', 'w')
f.write('[')
for message in client.iter_messages(chat_id, search='#отзыв'):
    f.write(message.to_json())
    f.write(',')
f.write(']')
f.close()


# f = open('profiles_from_chat.json', 'w')
# f.write('[')
# for user in client.iter_participants(chat_id):
#   f.write(user.to_json())
#   f.write(',')
# f.write(']')
# f.close()


