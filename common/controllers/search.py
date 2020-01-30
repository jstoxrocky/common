from flask import (
    jsonify,
    Blueprint,
    request,
)
from marshmallow import (
    ValidationError as MarshallowValidationError,
)
from common.exceptions import (
    ValidationError,
)
from common import (
    schemas,
)
from common import (
    datastore,
)


blueprint = Blueprint('route', __name__)


@blueprint.route('/search', methods=['GET'])
def index():
    try:
        payload = schemas.Payload().load(request.args)
    except MarshallowValidationError:
        raise ValidationError
    term = payload.get('term')
    results = datastore.Datastore().query(term)
    payload = {'results': results}
    return jsonify(payload)
