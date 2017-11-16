#!/bin/bash


   echo "Started building FRONT-END"
   echo "Moving into instagramtask directory"
   cd ..
   ls
   echo "Check if node_modules directory exist"   
   if [ -d node_modules ]; then
      echo "node_modules directory exist (npm install)"
	 
   else
      echo "node_modules not installed"
      echo "runing npm install command" 
      npm install
   fi
   echo "runing typings install command" 
   typings install
  
   if [ $1 = -watch ]; then
      echo "running development watch process"
      npm run start
   else
      if [ $1 = -PROD ]; then
      echo "USING PROD ENVIRONMENT"
	  cp src/modules/core/typescript/environments/environment_PROD.ts src/modules/core/typescript/config/environment.ts
     
	  elif [ $1 = -LOCAL ]; then
      echo "USING LOCAL ENVIRONMENT"
	  cp src/modules/core/typescript/environments/environment_LOCAL.ts src/modules/core/typescript/config/environment.ts
      fi
	  echo "BUILDING..."
      npm run build
   fi    
