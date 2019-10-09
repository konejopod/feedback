#!/bin/bash

export USERID=$(id -u)
export GROUPID=$(id -g)
docker-compose --compatibility up -d --force-recreate