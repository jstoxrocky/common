from flask import (
    Flask,
    jsonify,
    render_template,
)
from common.controllers import (
    search,
)
from common.exceptions import (
    InvalidUsage,
)
from common import (
    root_dir,
)
import os


template_dir = os.path.join(root_dir, 'dist/')
application = Flask(
    __name__,
    template_folder=template_dir,
    static_folder=template_dir,
)
API_PREFIX = '/api/v1'
application.register_blueprint(search.blueprint, url_prefix=API_PREFIX)


@application.errorhandler(404)
def invalid_route(error):
    response = jsonify({'message': "Invalid route"})
    response.status_code = 404
    message = "Page not found"
    return render_template(
        'error.html',
        status_code=response.status_code,
        message=message,
    )


@application.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    response = jsonify({'message': error.message})
    response.status_code = error.status_code
    message = "Something went wrong..."
    return render_template(
        'error.html',
        status_code=response.status_code,
        message=message,
    )


@application.route('/', methods=['GET'])
def index():
    return render_template('index.html')


if __name__ == '__main__':
    application.run(threaded=True)
