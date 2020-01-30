from marshmallow import (
    Schema,
    fields,
)


class Payload(Schema):
    term = fields.String(required=True, validate=(
        lambda x: len(x) > 0 and len(x) <= 50)
    )
