#/bin/bash

echo "Auto deploying PROD environment"
if [ ! -d node_modules ] && [ ! -d typings ]; then
   echo "Installing dependencies"
   sh install-backend.sh "$@" 
fi

sh stop-services.sh "$@"
sh build-backend.sh "$@"

echo "Start new microservices"

environment="PROD"
if [ "$#" -eq 1 ]; then
	environment=$1
fi

mkdir -p logs
cd ../build/common/application

sleep 1
pm2 start users.js --name="M-USERS-Service" --log-date-format 'DD-MM HH:mm:ss.SSS' 







