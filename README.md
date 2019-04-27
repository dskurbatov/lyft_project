# Lyft Apprenticeship Application

The app accepts a *POST* request to the route **“/test”** which
accepts one argument **“string_to_cut”** and returns a JSON object
with the key **“return_string"** and a string containing every third
letter from the original string.<br>
E.g. if you POST
```js
{"string_to_cut": "iamyourlyftdriver"}
```
it will return: 
```js
{"return_string": "muydv"}
```
## Installation

```sh
$ git clone https://github.com/dskurbatov/lyft_project.git
$ cd lyft_project
$ npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

### `npm test`

Runs unit tests.<br>

***

When the app is running you can test it by using curl

```sh
$ curl -X POST http://localhost:3000/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'
```
 or [Postman](https://www.getpostman.com/)