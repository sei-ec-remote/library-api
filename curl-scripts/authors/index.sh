#!/bin/bash

API="http://localhost:8000"
URL_PATH="/authors"

curl  "${API}${URL_PATH}"\
  --include \
  --request GET \

echo