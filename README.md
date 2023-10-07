# PHONE BOOOK

This project is a CRUD using React, Node, Prisma, and SQLite.

## Running the project

This project are divided in two parts, the front and the api, so you need to install both separate.

### Running the API

cd into phone-book-api directory
> cd api

Create the .env file like the env.template

download the dependencies

````bash
npm i -D
````

create the database

````bash
npx prisma migrate dev
````

Run the api
````bash
npm run dev
````

### Runnig the client

From root directory, cd into client

````bash
cd phone-book-front
````

Install the dependencies

````bash
npm i -D
````

Run the project

````bash
npm run dev
````
