# Feedback App:app

@author Banzai DevOps
@date 2019-09-28

## Check the app

1. Start the api app in local envirnoment

2. API feedback get:

```bash
$ curl -v http://localhost:5100/api/feedback
[]
```

3. API feedback post:

```bash
$ curl -X POST -H "Content-Type: application/json" http://localhost:5100/api/feedback -d "{\"name\":\"Bob Esponja\",\"description\":\"Desc 1\"}" 
{"error":{"message":{"_id":"5d9512c730649d6211c4cc8f","name":"Bob Esponja","description":"Desc 1","__v":0}}}
```

**Note: Validate with a get.**

4. API feedback put:

```bash
$ curl -X PUT -H "Content-Type: application/json" http://localhost:5100/api/feedback -d "{\"name\":\"Patricio Star\",\"description\":\"Desc 2\"}" 
{"error":{"message":{"_id":"5d9512c730649d6211c4cc8f","name":"Patricio Star","description":"Desc 2","__v":0}}}
```

**Note: Validate with a get.**

5. API feedback delete:

```bash
$ curl -X DELETE http://localhost:5100/api/feedback/5d8f3b83d3bae76b64ce538b
```
**Note: Validate with a get.**
