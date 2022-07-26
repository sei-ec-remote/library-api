#!/bin/bash

API="http://localhost:8000"
URL_PATH="/authors"

curl "${API}${URL_PATH}" \
--include \
--request POST \
  --header "Content-type: application/json" \
  --data '{
    "author": {
      "first_name": "'"${FIRST}"'",
      "last_name":  "'"${LAST}"'"
    }
  }'

echo