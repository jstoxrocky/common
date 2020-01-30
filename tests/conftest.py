import pytest
from common.application import (
    application,
)


@pytest.fixture(scope="module")
def app():
    app = application.test_client()
    app.testing = True
    return app
