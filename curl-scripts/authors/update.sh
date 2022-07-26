#!/bin/bash

API="http://localhost:8000"
URL_PATH="/authors"

curl  "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-type: application/json" \
  --data '{
    "author": {
      "first_name": "'"${FIRST}"'",
      "last_name": "'"${LAST}"'"
    }
  }'

echo