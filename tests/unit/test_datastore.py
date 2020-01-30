from common.datastore import (
    Datastore,
)

def test_prepare_term():
    term = 'Bucket, Green Red,Blue'
    expected = 'bucket green red blue'
    actual = Datastore()._prepare_term(term)
    assert actual == expected

def test_query(mocker):
    match = 'Iron Buckets, Green'
    not_match = 'Dinosaur, red'
    mocker.patch(
        'common.datastore.Datastore._read_data'
    ).return_value = [{'name': match}, {'name': not_match}]
    term = 'buckets green'
    expected = [{'name': match}]
    actual = Datastore().query(term)
    assert actual == expected
