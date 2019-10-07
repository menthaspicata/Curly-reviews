import json

# json_str = open('messages_from_chat.json')
# with json_str as f:
#     data = json.loads(f.read())
#     print(data[0]['message'])


with open('../src/app/messages_from_chat.json', 'r') as f:
    json_str = json.load(f)

for distro in json_str:
    print(distro['message'])
    print('\n\n')
