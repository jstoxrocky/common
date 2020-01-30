import json
from common.application import (
    API_PREFIX,
)


def test_returns_correct_results(app, mocker):
    match = 'Iron Buckets, Green'
    not_match = 'Dinosaur, red'
    mocker.patch(
        'common.datastore.Datastore._read_data'
    ).return_value = [{'name': match}, {'name': not_match}]
    term = 'buckets green'
    expected = {'results': [{'name': match}]}
    url = API_PREFIX + '/search'
    query_string = {'term': term}
    response = app.get(url, query_string=query_string)
    actual = json.loads(response.data)
    assert actual == expected
