# Activity 0

## Introduction
- This activity involves installing the following tools:
    - Express: Lightweight web framework for Node.js that makes building servers and APIs easier.
    - NodeJS - Allows JavaScript to run on your computer or server, so you can build backend applications.
    - TypeScript: Adds types to JavaScript.
    
    These will be used to execute a simple Hello World RESTful API.

## Node and NPM versions
![NodeJS Verification](images\Nodejs.png)

## NodeJS "Hello World" Application
![Hello World](images\helloworld.png)

## Express "Hello Express" Application
![Hello World Serv](images\helloworldserv.png)

![NodeMonitor](images\NodeMonitor.png)

## Node.js with TypeScript
```java
//TypeScript block
import express, { Request, Response } from 'express';

const app = express();

const port = 3000;

// Make sure you understand the following line of code.

app.get('/', (req: Request, res: Response) => {

res.send('Hello World from TypeScript!');

});

app.listen(port, () => {

console.log(`Example app listening at http://localhost:${port}`)

});
```
![TypeScript](images\TypeScript.png)
