# PHONE BOOOK

This project is a CRUD using React, Node, Prisma, and SQLite.
To create a contact, just click on "Add contact" button.
To view, it's just go to the main page.
To update a contact, doble click in it's card.
To delete, just click the trash button.

## Running the project

This project are divided in two parts, the front and the api, so you need to install both separate.

### Running the api

cd into phone-book-api directory
````bash
cd phone-book-api
````

Create the .env file like the env.template
````bash
cp .env.template .env
````

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

### Runnig the front

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
npm run start
````
