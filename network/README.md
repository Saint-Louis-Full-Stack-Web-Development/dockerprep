launch postgres by default first

remove port mapping in the docker-compose

uncomment docker-compose block

change db-user to 'postgres'

rebuild the docker containers and relaunch

> docker-compose up --rebuild

> docker-compose down

######

uncomment networks: blocks

rebuild again

> docker network ls

> docker network inspect

> docker-compose up -d

> docker-compose logs

> docker-compose down
