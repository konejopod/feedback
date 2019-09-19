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

#### Configure MongoDB

1. Configure into the host both **ENV VARS**
 * $MONGO_USER
 * $MONGO_PWD
 ```
 export MONGO_USER=myUsername
 export MONGO_PWD=myPassword
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