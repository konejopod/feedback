# Feedback App:app

@author Banzai DevOps
@date 2019-09-28

## Check the app

1. Start the api app in local envirnoment

2. API feedback get:

```bash
$ curl -X GET http://localhost:5100/api/feedback
[]
```

3. API feedback post:

```bash
$ curl -X POST http://localhost:5100/api/feedback -d "{name:\"Bob Esponja\",description:\"Desc 1\"}" 
{"error":false,"feedback":{"_id":"5d8f3b83d3bae76b64ce538b","__v":0}}
```

**Note: Validate with a get.**

4. API feedback put:

```bash
$ curl -X PUT http://localhost:5100/api/feedback/5d8f3b83d3bae76b64ce538b -d "{name:\"Patricio Star\"}" 
{"error":false,"feedback":{"_id":"5d8f3b83d3bae76b64ce538b","__v":0}}
```

**Note: Validate with a get.**

5. API feedback delete:

```bash
$ curl -X DELETE http://localhost:5100/api/feedback/5d8f3b83d3bae76b64ce538b
```
**Note: Validate with a get.**
