## Feedback App

## How to install

### Requirements

- Docker: https://docs.docker.com/install/
- Docker compose: https://docs.docker.com/compose/install/
- NodeJS: https://nodejs.org/en/
  - NVM (optional): https://github.com/nvm-sh/nvm
- JDK11: https://www.oracle.com/technetwork/java/javase/downloads/index.html

### Install

1. Clone the project: `$ git clone https://github.com/peppelin/feedback.git`

#### Install API

1. Go to the project API dir: `$ cd .../feedback/api`
2. Install dependencies with: `$ ./gradlew build`
3. Build the jar file with: `$ ./gradlew jar`

#### Install View

1. Go to the project view dir: `$ cd .../feedback/view`
2. Install dependencies with: `$ npm i`
3. Build the project with: `$ npm run build`

#### Conffigure MongoDB

1. Export the two ENV VARS needed ffor the docker-compose to run
```
export MONGO_USER=myUser
export MONGO_PWD=myPwd
export MONGO_DB=myDB
```

## How to run

1. Go to the project deploy dir: `$ cd .../feedback/deploy`
2. Execute: `$ docker-compose up -d`
3. Access view URL: http://localhost
4. Access API health URL: http://localhost/api/actuator/health

## TODO

1. Setup a Jenkins
   1.1. Configure Jenkins server
   1.2. Update deploy/Jenkinsfile
2. 







--- TEMPORAL ---

a) Project 'api'

$ cd api
$ npm i
$ npm run start

- http://localhost:5100
- http://localhost:5100/api/feedback

b) Project 'view'

$ cd view
$ npm i
$ npm run start

- http://localhost:3000


--- TEMPORAL ---

a) local environment

$ cd docker
$ export UID=$(id -u)
$ export GID=$(id -g)
$ docker-compose --compatibility -f docker-compose-local.yml up -d --force-recreate
$ docker-compose -f docker-compose-local.yml down

a.1) Check mongodb

$ docker exec -it fb_mongodb /bin/bash
/# mongo -u admin -p secret
...
> show dbs
...
> use fb_mdb
...
> db.people.save({ firstname: "Nic", lastname: "Raboy" })
...
> db.people.find({ firstname: "Nic" })
...
> exit
/# exit

