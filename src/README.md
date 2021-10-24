# Node.js Express API

## Description
This project was built in Node.js, Express.

## Running the API
Create an `.env` file using the command. You can use the default config or change it for your purposes. 

```bash
cp .env.example .env
```

### Environment
Configure for environment based on your configuration

```  
APP_PORT=<APP_PORT>
APP_URL=<APP_URL>
```

### With Docker 
To run the API, you must install:
- **Docker** (https://www.docker.com/products/docker-desktop)
                                           
```
docker build -t newnew-api .
```

```
docker run -p 3001:3001 newnew-api
```

### Without Docker 
To run the API, you must install:
- **Node.js** (https://nodejs.org/en/download/)

Install Dependencies
```
npm install
```

Start the application in dev env:
```
npm run start
```

Express server listening on http://localhost:3001/
