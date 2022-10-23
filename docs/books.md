# Books

| HTTP Method   | URL Path     | Action           | CRUD     |
|:--------------|:-------------|:-----------------|----------|
| GET           | /books       | index or list    | `R`ead   |
| GET           | /books/`:id` | show or retrieve | `R`ead   |
| POST          | /books       | create           | `C`reate |
| PATCH         | /books/`:id` | update           | `U`pdate |
| DELETE        | /books/`:id` | destroy          | `D`elete |

### GET /books

Curl Request:

```sh
#!/bin/bash

API="https://seiecremotelibrary.fly.dev"
URL_PATH="/books"

curl  "${API}${URL_PATH}"\
  --include \
  --request GET \

echo

```

Example Terminal Command:

```sh
sh curl-scripts/books/index.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 187
ETag: W/"bb-l3ErxVPRu5FFQuvOTx34ZMLs0eE"
Date: Tue, 07 Apr 2020 20:03:30 GMT
Connection: keep-alive

{
  "books": [
    {
      "_id": "5e8cdc8c144491a81bab1e61",
      "title": "Webster's Dictionary",
      "author": "Noah Webster",
      "createdAt": "2020-04-07T20:03:24.630Z",
      "updatedAt": "2020-04-07T20:03:24.630Z",
      "__v": 0
    }
  ]
}
```


---

### GET /books/:id

Curl Request:

```sh
#!/bin/bash

API="https://seiecremotelibrary.fly.dev"
URL_PATH="/books"

curl  "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \

echo
```

Example Terminal Command:

```sh
ID=5e8cdc8c144491a81bab1e61 sh curl-scripts/books/show.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 184
ETag: W/"b8-CIPTryebUUdTCIqyaD9ZiGGtnw8"
Date: Tue, 07 Apr 2020 20:04:56 GMT
Connection: keep-alive

{
  "book": {
    "_id": "5e8cdc8c144491a81bab1e61",
    "title": "Webster's Dictionary",
    "author": "Noah Webster",
    "createdAt": "2020-04-07T20:03:24.630Z",
    "updatedAt": "2020-04-07T20:03:24.630Z",
    "__v": 0
  }
}
```

---

### POST /books

Curl Request:

```sh
#!/bin/bash

API="https://seiecremotelibrary.fly.dev"
URL_PATH="/books"

curl "${API}${URL_PATH}" \
--include \
--request POST \
  --header "Content-type: application/json" \
  --data '{
    "book": {
      "title": "'"${TITLE}"'",
      "author":  "'"${AUTHOR}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
TITLE="Webster's Dictionary" AUTHOR="Noah Webster" sh curl-scripts/books/create.sh
```

Example API Response:

```md
HTTP/1.1 201 Created
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 184
ETag: W/"b8-CIPTryebUUdTCIqyaD9ZiGGtnw8"
Date: Tue, 07 Apr 2020 20:03:24 GMT
Connection: keep-alive

{
  "book": {
    "_id": "5e8cdc8c144491a81bab1e61",
    "title": "Webster's Dictionary",
    "author": "Noah Webster",
    "createdAt": "2020-04-07T20:03:24.630Z",
    "updatedAt": "2020-04-07T20:03:24.630Z",
    "__v": 0
  }
}
```

---

### PATCH /books/:id

Curl Request:

```sh
#!/bin/bash

API="https://seiecremotelibrary.fly.dev"
URL_PATH="/books"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "book": {
      "title": "'"${TITLE}"'",
      "author": "'"${AUTHOR}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
ID=5e8cdc8c144491a81bab1e61 TITLE="Merriam-Webster Dictionary" AUTHOR="Webster & Merriam" sh curl-scripts/books/update.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Date: Tue, 07 Apr 2020 20:12:26 GMT
Connection: keep-alive
```

---

### DELETE /books/:id

Curl Request:

```sh
#!/bin/bash

API="https://seiecremotelibrary.fly.dev"
URL_PATH="/books"

curl "${API}${URL_PATH}/${ID}" \
--include \
--request DELETE \

echo
```

Example Terminal Command:

```sh
ID=5e8cdc8c144491a81bab1e61 sh curl-scripts/books/destroy.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Date: Tue, 07 Apr 2020 20:19:18 GMT
Connection: keep-alive
```