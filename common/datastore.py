import string
from common.client import (
    fetch,
)


class Datastore():

    def __init__(self):
        pass

    def _read_data(self):
        data = fetch()
        return data

    def _prepare_term(self, term):
        # Replace punctuation with space
        translator = str.maketrans(
            string.punctuation, ' ' * len(string.punctuation)
        )
        term = term.translate(translator)
        # Condense multipel spaces to single space
        term = ' '.join(term.split())
        # Make lowercase
        term = term.lower()
        return term

    def query(self, term):
        term = self._prepare_term(term)
        data = self._read_data()
        matches = []
        for result in data:
            name = result['name']
            name = self._prepare_term(name)
            if term in name:
                matches.append(result)
        return matches
