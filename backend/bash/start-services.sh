#/bin/bash

sh stop-services.sh "$@"
sh build-backend.sh "$@"

echo "Start new microservices"

cd ../build/common/application

node users.js


