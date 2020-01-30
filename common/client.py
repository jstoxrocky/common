import requests

URLS = [
    'https://api.jsonbin.io/b/5e2b66793d75894195de548e',  # ABC Furniture  # noqa: E501
    'https://api.jsonbin.io/b/5e2b666350a7fe418c533306',  # Mikes Kitchen Supply Store  # noqa: E501
    'https://api.jsonbin.io/b/5e2b68903d75894195de55c4',  # Stuff N' Things  # noqa: E501
]


def fetch():
    results = []
    for url in URLS:
        response = requests.get(url)
        data = response.json()
        results += data
    return results
