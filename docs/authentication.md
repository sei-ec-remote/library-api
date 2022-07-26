# Authentication

| HTTP Method | URL Path               |
|:------------|:-----------------------|
| POST        | `/sign-up`             |
| POST        | `/sign-in`             |
| PATCH       | `/change-password`     |
| DELETE      | `/sign-out`            |

### POST /sign-up

Curl Request:

```sh
#!/bin/bash

curl "https://library-express-api.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
EMAIL="an@example.email" PASSWORD="anexamplepassword" sh curl-scripts/auth/sign-up.sh
```

Example API Response:

```md

{
  "user":{
    "_id": "5e8b3c8297f0d299da2e3321",
    "email": "an@example.email",
    "createdAt": "2020-04-06T14:17:19.008Z",
    "updatedAt": "2020-04-06T14:17:19.008Z",
    "__v": 0
  }
}
```

---

### POST /sign-in

Curl Request:

```sh
#!/bin/bash

curl "https://library-express-api.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
EMAIL="an@example.email" PASSWORD="anexamplepassword" sh curl-scripts/auth/sign-in.sh
```

Example API Response:

```md
HTTP/1.1 201 Created
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 196
ETag: W/"c4-yZ6x9/cvSAMPqE2e41IgM2gV0JU"
Date: Mon, 06 Apr 2020 14:33:02 GMT
Connection: keep-alive

{
  "user":{
    "_id": "5e8b3c8297f0d299da2e3321",
    "email": "an@example.email",
    "createdAt": "2020-04-06T14:28:18.238Z",
    "updatedAt": "2020-04-06T14:33:02.180Z",
    "__v": 0,
    "token": "329f92f69b83512316c3a8c921ac280e"
  }
}
```

---

### PATCH /change-password

Curl Request:

```sh
#!/bin/bash

curl "https://library-express-api.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
```

Example Terminal Command:

```sh
TOKEN="329f92f69b83512316c3a8c921ac280e" OLDPW="anexamplepassword" NEWPW="newpassword" sh curl-scripts/auth/change-password.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Date: Mon, 06 Apr 2020 14:52:57 GMT
Connection: keep-alive
```

---

### DELETE /sign-out

Curl Request:

```sh
#!/bin/bash

curl "https://library-express-api.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"

echo
```

Example Terminal Command:

```sh
TOKEN="329f92f69b83512316c3a8c921ac280e" sh curl-scripts/auth/sign-out.sh
```

Example API Response:

```md
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:7165
Vary: Origin
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Date: Mon, 06 Apr 2020 14:54:07 GMT
Connection: keep-alive
```