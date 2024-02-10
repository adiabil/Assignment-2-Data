# Counseling Session Management API
## Overview
This project implements a RESTful API for managing counseling sessions, providing capabilities to create, retrieve, update, and delete counseling session records. Built with Node.js and Express, and utilizing MongoDB for data storage, this API is designed to support counseling service providers in managing session details efficiently.
## Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose
- Body-parser for request parsing
- Dotenv for environment variable management
- Winston for logging
## Getting Started
### Prerequisites
- Node.js
- MongoDB account and cluster
### Installation
1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install` in the project directory.
3. Create a `.env` file in the root directory with the following variables:
- `DB_HOST`  
- `DB_USER` 
- `DB_PASS` 
- `PORT` 
(The details appear on the model)
4. The server will run on the port specified in the `server.js`.
## API Endpoints
### Sessions
- **GET /api/counselingSession**: Read all counseling sessions.
- **GET /api/counselingSession/:id**: Read a specific counseling session by ID.
- **POST /api/counselingSession**: Create a new counseling session.
- **PUT /api/counselingSession/:id**: Update a specific counseling session by ID.
- **DELETE /api/counselingSession/:id**: Delete a specific counseling session by ID.

The API supports various operations through the following endpoints:

### Create a Session

- **POST** `/api/counselingSession`

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

- **GET** `/api/sessions`

Fetches a list of all counseling sessions.

### Read a Specific Session

- **GET** `/api/counselingSession/:id`

Retrieves detailed information about a specific counseling session by its unique identifier.

### Update a Session

- **PUT** `/api/counselingSession/:id`

Updates the details of an existing session.

**Body** (json)

```bash
{
  "clientName": "Jane Smith",
  "sessionStatus": "in process",
}
```
### Delete a Session

- **DELETE** `/api/sessions/:id`


## Logs
The application uses a logger to log the proper data to a `combined.log` file using Winston.
## Error Handling
The application includes error handling for 404 (Not Found) and 500 (Internal
Server Error) status codes, providing appropriate messages to the client.

## Testing

This project contains integration tests for the API endpoints using Jest and Supertest. To ensure that the API behaves as expected, run the tests with the following command:

```bash
npm test
```
