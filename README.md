If you have docker installed just run:

`docker-compose up --build -V`

If you want to run it outside of Docker, make sure to have Postgres running and configure its env variables on .env (first rename .env.example to .env)

To execute the tests make sure to have the database first running and seeded since I couldn't create some database mocks,
so this assumes a live test database (which in this case is the same development database):

First rename .env.example to .env (it is used for the tests) and then run:

```
npm install
npm test
```

Swagger to test also available on `/swagger`. I have set it up statically through JSON so it assumes that the API is on `localhost:3000`
