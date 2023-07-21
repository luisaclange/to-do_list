## About the app

To-do List is a application thats using Vue.JS, Quasar, Laravel and MySQL.

You can add a task, edit your description, mark it as done and you can delete it too.

## How to run the application

After you clonning the repository in a folder on your computer, run this steps:

1. Install the dependencies of your back-end project:

```sh
yarn
yarn install
```

2. Run the migrations

Verify your .env file to connect your back-end to MySQL:

```sh
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

And run the migrations:

```sh
yarn migrations
```

3. Run your database

```sh
yarn server
```

4. Run your front-end

Enter the to-do_list folder

```sh
cd \@to-do_list\
```

Install the dependencies and run the server

```sh
yarn
yarn dev
```
