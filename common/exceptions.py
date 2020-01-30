class InvalidUsage(Exception):
    status_code = 500

    def __init__(self):
        Exception.__init__(self)


class ValidationError(InvalidUsage):
    message = 'Validation Error'
