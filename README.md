# NewNew Upload Api

## Description
This project was built in Node.js, Express.

## Project Features
- Only one file can be uploaded at a time
- Only Image / Video can be upload
- Maximum File Size is 10MB
- Files are saved to localstorage
- Supported file formats are (jpeg|jpg|png|heic|gif|mov|quicktime|avi|mkv|webm|mp4)

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

# API documentation:
API End points and documentation can be found at:
[Postman Documentation](https://documenter.getpostman.com/view/18065951/UV5c8uRj).

List of all API endpoint:

>POST /api/files