#!/bin/bash

API="http://localhost:8000"
URL_PATH="/authors"

curl  "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \

  
echo