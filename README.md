If you have docker installed just run:

`docker-compose up --build -V`

To execute the tests make sure to have the database first running and seeded since I couldn't create some database mocks,
so this assumes a live test database (which in this case is the same development database):

```
npm install
npm test
```
