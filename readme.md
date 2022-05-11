#### Docker compose in detached mode

docker-compose up -d

---

#### Remove all running containers

> docker-compose down --rmi all

> docker-compose up -d

---

##### docker compose up

> docker-compose up --build

> docker-compose up -d

#### Note: if ou run the following command:

> docker-compose up and its not working try run docker-compose up --build

#### docker-compose.yml

```yml
version: '3.9'
services:
  # MOngodb services
  mongo_db:
    container_name: db_container
    image: mongo:latest
    restart: always
    ports:
      - 2717:27017
    volumes:
      - mongo_db:/data/db

  # Node api services
  api:
    build: .
    ports:
      - 4000:3001
    environment:
      PORT: 3001
      MONGO_URI: mongodb://mongo_db:27017
      DB_NAME: dockerdb
    depends_on:
      - mongo_db

volumes:
```

---

```yml
FROM node
WORKDIR /usr/src/app
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm", "start"]
```

---

##### Connect to local mongo instance

> mongosh --port 2717

#### mongosh commands

> show dbs
> show collections
> use db_name

---

#### To map moongodb container_port to local host port in compass

mongodb://localhost:2717
