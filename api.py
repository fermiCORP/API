import requests

# Replace 'YOUR_API_KEY' with your Steam API key
api_key = 'A81C7776E81C3AA69809784CEE3C8030'

# Replace 'angry' with the tag you're interested in
tag_to_search = 'angry'

# URL for the endpoint to get the list of all games on Steam
url_app_list = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/'
response_app_list = requests.get(url_app_list)

# Check if the request was successful (status code 200)
if response_app_list.status_code == 200:
    data_app_list = response_app_list.json()

    # Iterate through the list of games
    for game in data_app_list['applist']['apps']:
        app_id = game['appid']

        # URL for the endpoint to get tags for a specific game
        url_tags = f'https://store.steampowered.com/api/appdetails?appids={app_id}'
        response_tags = requests.get(url_tags)

        # Check if the request was successful (status code 200)
        if response_tags.status_code == 200:
            data_tags = response_tags.json()

            # Print data to examine the structure
            print(f"Data for App ID {app_id}: {data_tags}")

            # Check if the game ID has information about tags
            if str(app_id) in data_tags and 'data' in data_tags[str(app_id)]:
                tags = data_tags[str(app_id)]['data'].get('tags', [])

                # Check if the game has the specific tag
                if tag_to_search in tags:
                    print(f"{game['name']} (App ID: {app_id})")
            else:
                print(f"Tag information not available for App ID {app_id}")

        else:
            print(f"Error in tag request for App ID {app_id}: {response_tags.status_code}")

else:
    print(f"Error in the request for the list of games: {response_app_list.status_code}")