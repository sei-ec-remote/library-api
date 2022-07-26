# Movies

All movie endpoints require a valid `Bearer` style token header. 

| HTTP Method   | URL Path      | Action           | CRUD     |
|:--------------|:--------------|:-----------------|----------|
| GET           | /movies       | index or list    | `R`ead   |
| GET           | /movies/`:id` | show or retrieve | `R`ead   |
| POST          | /movies       | create           | `C`reate |
| PATCH         | /movies/`:id` | update           | `U`pdate |
| DELETE        | /movies/`:id` | destroy          | `D`elete |

### GET /movies

Curl Request:

```sh
#!/bin/bash

curl "https://library-express-api.herokuapp.com/movies" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \

echo
```

Example Terminal Command:

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa sh curl-scripts/movies/index.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"movies": [{"id":1,"title":"Here is an movie"},{"id":2,"title":"Another movie lives!"},{"id":3,...}]}
```

**Note:** You will receive more than 3 movies within a successful response.

---

### GET /movies/:id

Curl Request:

```sh
#!/bin/bash

curl "https://library-express-api.herokuapp.com/movies/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \

echo
```

Example Terminal Command:

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa ID=5 sh curl-scripts/movies/show.sh
```

Example API Response:

```md
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 197
ETag: W/"c5-zLwb58eZnfgF211eyncDMrrOJ2U"
Date: Thu, 16 Apr 2020 20:47:20 GMT
Connection: keep-alive

{
  "movie": {
    "_id": "5e98c447ff42b1107a02c694",
    "title": "hi",
    "director": "hello",
    "owner": "5e5fe896c6aeaea8cbff68ca",
    "createdAt": "2020-04-16T20:47:03.057Z",
    "updatedAt": "2020-04-16T20:47:03.057Z",
    "__v": 0
  }
}
```

---

### POST /movies

Curl Request:

```sh
#!/bin/bash

curl --include --request POST "https://library-express-api.herokuapp.com/movies/" \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "movie": {
      "title": "'"${TITLE}"'",
      "director": "'"${DIRECTOR}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa TITLE="hi" DIRECTOR="hello" sh curl-scripts/movies/create.sh
```

Example API Response:

```md
HTTP/1.1 201 Created
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 197
ETag: W/"c5-56eofohghvkbZvFde64C/NwhOUU"
Date: Thu, 16 Apr 2020 20:40:02 GMT
Connection: keep-alive

{
  "movie": {
    "_id" : "5e98c2a201e6cb0f515171d2",
    "title": "hi",
    "director": "hello",
    "owner": "5e5fe896c6aeaea8cbff68ca",
    "createdAt": "2020-04-16T20:40:02.409Z",
    "updatedAt": "2020-04-16T20:40:02.409Z",
    "__v": 0
  }
}
```

---

### PATCH /movies/:id

Curl Request:

```sh
#!/bin/bash

curl --include --request PATCH "https://library-express-api.herokuapp.com/movies/${ID}" \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "movie": {
      "title": "'"${TITLE}"'",
      "director": "'"${DIRECTOR}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
ID=5e5fe896c6aeaea8cbff68ca TOKEN=33ad6372f795694b333ec5f329ebeaaa TITLE="My updated movie" DIRECTOR="Joe Shmoe" sh curl-scripts/movies/update.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Date: Thu, 16 Apr 2020 20:44:42 GMT
Connection: keep-alive
```

---

### DELETE /movies/:id

Curl Request:

```sh
#!/bin/bash

curl --include --request DELETE "https://library-express-api.herokuapp.com/movies/${ID}" \
  --header "Authorization: Bearer ${TOKEN}" \

echo
```

Example Terminal Command:

```sh
ID=5e5fe896c6aeaea8cbff68ca TOKEN=33ad6372f795694b333ec5f329ebeaaa sh curl-scripts/movies/destroy.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Date: Thu, 16 Apr 2020 20:46:18 GMT
Connection: keep-alive
```