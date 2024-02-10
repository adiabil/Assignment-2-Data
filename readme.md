# Counseling Session Management API
## Overview
This project implements a RESTful API for managing counseling sessions, providing capabilities to create, retrieve, update, and delete counseling session records. Built with Node.js and Express, and utilizing MongoDB for data storage, this API is designed to support counseling service providers in managing session details efficiently.

## Features
-CRUD Operations: Perform Create, Read, Update, and Delete operations on counseling sessions.
-Data Validation: Ensures all session data is correctly formatted and validated before storage.
-Error Handling: Robust error handling for improved debugging and user feedback.
-Logging: Integrates logging for tracking API usage and errors.

## Getting Started
### Prerequisites
- Node.js
- MongoDB account and cluster
-npm
### Installation
Create a `.env` file in the root directory with the following variables:
- `DB_HOST`  
- `DB_USER` 
- `DB_PASS` 
- `PORT` 
(The details appear on the model)
4. The server will run on the port specified in the `server.js`.
## API Endpoints
The API supports the following endpoints for managing counseling sessions:
- GET /counselingSession: Retrieve all counseling sessions.
- GET /counselingSession/:id: Retrieve a single counseling session by its ID.
- POST /counselingSession: Create a new counseling session.
- PUT /counselingSession/:id: Update an existing counseling session by its ID.
- DELETE /counselingSession/:id: Delete an existing counseling session by its ID.

The API supports various operations through the following endpoints:

### Create a Session

- **POST** POST `/counselingSession`

  Creates a new counseling session with specified details.

  **Body** (json)
  ```json
    {
        "id": 10,
        "crisis": "family problem",
        "clientName": "lior cohen",
        "counslerName": "shani perez",
        "date": "2024-04-20",
        "sessionStatus": "in process",
    }
### Read All Sessions

- **GET** `/counselingSessions`

Fetches a list of all counseling sessions.

### Read a Specific Session

- **GET** `/counselingSession/:id`

Retrieves detailed information about a specific counseling session by its unique identifier.

### Update a Session

- **PUT** `/counselingSession/:id`

Updates the details of an existing session.

**Body** (json)

```bash
{
  "clientName": "may cohen",
  "sessionStatus": "in process",
}
```
### Delete a Session

- **DELETE** `/counselingSession/:id`


## Logging
Logging is implemented to track API usage and errors. Logs are written to the console and can be configured to write to external logging services or files for production use.
## Error Handling
The application includes error handling for 404 (Not Found), 400,and 500 (Internal
Server Error) status codes, providing appropriate messages to the client.

## Testing

This project contains integration tests for the API endpoints using Jest and Supertest. To ensure that the API behaves as expected, run the tests with the following command:

```bash
npm test
```
