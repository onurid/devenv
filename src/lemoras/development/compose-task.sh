docker-compose --file docker-compose-gateway.yml --file docker-compose-webhost.yml --file docker-compose-webapi.yml down 
docker-compose --file docker-compose-gateway.yml --file docker-compose-webhost.yml --file docker-compose-webapi.yml build 
docker-compose --file docker-compose-gateway.yml --file docker-compose-webhost.yml --file docker-compose-webapi.yml up -d 
