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



#######

run docker network test

> docker-compose up -d

make a new network

> docker network create test-network

launch secondary container

> docker-compose up -f test.yaml

show which network it joined

> docker-comopose inspect container

> docker network inspect network

show that it can't ping the other machines

> docker exec -it <test_container> /bin/bash
> more /etc/hosts
> ping postgres

join container to network
 
> docker network connect test-network postgres

launch another container and see that it can connect to the network

> docker-compose up test-reddit

show that it connects correctly in the logs

> docker-compose logs <test-reddit> container

disconnect from the network  

> docker network disconnect test-network postgres

bring everything down

> docker-compose down  

 

