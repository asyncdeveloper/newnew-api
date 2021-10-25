# NewNew Upload Api

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
APP_URL=<APP_URL>
APP_PORT=<APP_PORT>
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

Start the application
```
npm run start
```

Express server listening on http://localhost:3001/


## Testing
To run integration tests:
```bash
npm test
```