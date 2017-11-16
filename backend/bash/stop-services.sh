#/bin/bash

echo "Stop old microservices"
environment="LOCAL"

if [ "$#" -eq 1 ]; then
    environment=$1
fi
echo "..."

pm2 stop all
pm2 delete all

if [ "$environment" = "LOCAL" ]; then
	ps -ef | grep node | awk '{print $2}' | xargs kill -9
	fi

if [ "$environment" != "LOCAL" ]; then
	ps aux | grep node | awk '{print $2}' | xargs kill -9
	fi
echo "Old microservices stoped"