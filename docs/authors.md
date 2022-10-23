# Authors

| HTTP Method   | URL Path       | Action            | CRUD     |
|:--------------|:---------------|:------------------|----------|
| GET           | /authors       | index or list     | `R`ead   |
| GET           | /authors/`:id` | show or retrieve  | `R`ead   |
| POST          | /authors       | create            | `C`reate |
| PATCH         | /authors/`:id` | update            | `U`pdate |
| DELETE        | /authors/`:id` | destroy           | `D`elete |

### GET /authors

Example Curl Request:

```sh
#!/bin/bash

API="https://seiecremotelibrary.fly.dev"
URL_PATH="/authors"

curl  "${API}${URL_PATH}"\
  --include \
  --request GET \

echo
```

Example Terminal Command:

```sh
sh curl-scripts/authors/index.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "authors": [
    {
      "_id": "5e8ce58b144491a81bab1e62",
      "first_name": "Leon",
      "last_name": "Noel",
      "createdAt": "2020-04-07T20:41:47.316Z",
      "updatedAt": "2020-04-07T20:41:47.316Z",
      "__v": 0
    }
  ]
}
```


---

### GET /authors/:id

Example Curl Request:

```sh
#!/bin/bash

API="https://seiecremotelibrary.fly.dev"
URL_PATH="/authors"

curl  "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \

echo

```

Example Terminal Command:

```sh
ID=5e8ce58b144491a81bab1e62 sh curl-scripts/authors/show.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 170
ETag: W/"aa-YVtdydWaszA0ZL1HQ3Ran1h79zE"
Date: Tue, 07 Apr 2020 20:45:03 GMT
Connection: keep-alive

{
  "author": {
    "_id": "5e8ce58b144491a81bab1e62",
    "first_name": "Leon",
    "last_name": "Noel",
    "createdAt": "2020-04-07T20:41:47.316Z",
    "updatedAt": "2020-04-07T20:41:47.316Z",
    "__v": 0
  }
}

```

---

### POST /authors

Example Curl Request:

```sh
#!/bin/bash

API="https://seiecremotelibrary.fly.dev"
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
```

Example Terminal Command:

```sh
FIRST="Leon" LAST="Noel" sh curl-scripts/authors/create.sh
```

Example API Response:

```md
HTTP/1.1 201 Created
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 170
ETag: W/"aa-YVtdydWaszA0ZL1HQ3Ran1h79zE"
Date: Tue, 07 Apr 2020 20:41:47 GMT
Connection: keep-alive

{
  "author": {
    "_id": "5e8ce58b144491a81bab1e62",
    "first_name": "Leon",
    "last_name": "Noel",
    "createdAt": "2020-04-07T20:41:47.316Z",
    "updatedAt": "2020-04-07T20:41:47.316Z",
    "__v": 0
  }
}
```

---

### PATCH /authors/:id

Example Curl Request:

```sh
#!/bin/bash

API="https://seiecremotelibrary.fly.dev"
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
```

Example Terminal Command:

```sh
ID=5e8ce58b144491a81bab1e62 FIRST="Leon" LAST="Noels" sh curl-scripts/authors/update.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Date: Tue, 07 Apr 2020 20:48:09 GMT
Connection: keep-alive

```

---

### DELETE /authors/:id

Example Curl Request:

```sh
#!/bin/bash

curl --include --request DELETE "https://seiecremotelibrary.fly.dev/authors/${ID}"

echo
```

Example Terminal Command:

```sh
ID=5e8ce58b144491a81bab1e62 sh curl-scripts/authors/destroy.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
```