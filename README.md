# Feedback App

@author Banzai DevOps
@date 2019-09-28

## How to install

### Requirements

- docker: https://docs.docker.com/install/
- docker compose: https://docs.docker.com/compose/install/
- nvm: https://github.com/nvm-sh/nvm
- nodeJS: https://nodejs.org/en/
    - Install by nvm
    - Version to install: 12.10.0

### Install

1. Clone the project: 

```bash
$ git clone https://github.com/peppelin/feedback.git
```

2. Install and run the api app:

```bash
$ cd api
$ npm run clean
$ npm run start
```

**Note: You must start the mongodb docker container.**

3. Install and run the view app:

```bash
$ cd view
$ npm run clean
$ npm run start
```

## Run in local environment to develop

1. Local environment clean:

```bash
$ cd local
$ npm run clean
```

2. Local environment start:

```bash
$ cd local
$ npm run start
```

3. Start only mongodb:

```bash
$ cd local
$ npm run mongodb:start
```

4. Check mongodb:

```bash
$ docker exec -it fb_mongodb /bin/bash
/# mongo -u admin -p secret
...
> show dbs
...
> use fb_mdb
...
> show collections
...
> db.people.save({ firstname: "Nic", lastname: "Raboy" })
...
> db.people.find()
...
> db.people.find({ firstname: "Nic" })
...
> exit
/# exit
```

5. Check apps started:

- http://localhost:5100
- http://localhost:5100/api/feedback
- http://localhost:3000


6. Check nginx:

- http://localhost
- http://localhost/api
- http://localhost/api/feedback

7. Local environment stop:

```bash
$ cd local
$ npm run stop
```

## Package and deploy

--- TBD ---

$ cd api
$ npm run package

$ cd view
$ npm run package
