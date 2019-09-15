## Feedback Tool

## How to install

### Requirements

- Docker: https://docs.docker.com/install/
- Docker compose: https://docs.docker.com/compose/install/
- NodeJS: 
- JDK11:

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

## How to run

1. Go to the project deploy dir: `$ cd .../feedback/deploy`
2. Execute: `$ docker-compose up -d`
3. Access URL: http://localhost
