from common.application import (
    API_PREFIX,
)


def test_404(app):
    url = API_PREFIX + '/not_a_real_route'
    query_string = {'term': 'shoes'}
    response = app.get(url, query_string=query_string)
    assert response.status_code == 200
    assert b"404" in response.data
    assert b"Page not found" in response.data


def test_page_term_too_long(app):
    url = API_PREFIX + '/search'
    query_string = {'term': 'a'*51 }
    response = app.get(url, query_string=query_string)
    assert response.status_code == 200
    assert b"500" in response.data
    assert b"Something went wrong..." in response.data


def test_page_empty_term(app):
    url = API_PREFIX + '/search'
    query_string = {'term': ''}
    response = app.get(url, query_string=query_string)
    assert response.status_code == 200
    assert b"500" in response.data
    assert b"Something went wrong..." in response.data


def test_page_no_term(app):
    url = API_PREFIX + '/search'
    query_string = {}
    response = app.get(url, query_string=query_string)
    assert response.status_code == 200
    assert b"500" in response.data
    assert b"Something went wrong..." in response.data
