# API Documentation

This document provides an overview of the API architecture and the available interfaces.  
The project exposes the same domain model through **two different approaches**:

- **REST API** — a traditional HTTP-based interface following standard CRUD conventions.  
- **GraphQL API** — a flexible query language interface that allows clients to request exactly the data they need.

Both interfaces interact with the same underlying database using **Prisma ORM**.

---

## 📌 Architecture Overview

- **Node.js + Express** as the HTTP server  
- **REST** for standard resource-based operations  
- **GraphQL** (coming soon) for more flexible querying  
- **Prisma ORM** as the data access layer  
- **SQLite** as the local development database  

The goal is to provide two parallel ways to consume the same resources, demonstrating how REST and GraphQL can coexist in the same backend.

---

## 📁 Documentation Structure

This documentation is divided into two main sections:

### 1. REST API
Here you'll find:
- Endpoint definitions  
- Request and response formats  
- Query parameters  
- Error handling  
- Examples  

Example resources:
- `Users` API (completed)  
- `Courses` API (coming soon)  
- `Enrollments` API (coming soon)  

### 2. GraphQL API
Once implemented, this section will include:
- Schema definition  
- Queries  
- Mutations  
- Resolver architecture  
- Example GraphQL queries and mutations  

---

## 📘 API

### Users API

#### GET /api/users

Retrieves a paginated list of users, optionally filtered by name and/or email.

##### Query Parameters
| Parameter | Type | Required | Description |
|----------|------|----------|-------------|
| `page` | number | no | Page number |
| `limit` | number | no | Number of users per page |
| `name` | string | no | Filters users whose name contains the given value |
| `email` | string | no | Filters users whose email contains the given value |

##### Example Request

```http
GET /api/users?page=1&limit=10&name=john&email=gmail
```
##### Example Response (200)
```json
{
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@gmail.com",
      "createdAt": "2025-11-27T00:00:00.000Z",
      "updatedAt": "2025-11-27T00:00:00.000Z"
    }
  ],
  "total": 1
}
```
#### POST /api/users

Creates a new user.

##### Request Body
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | The user's full name |
| `email` | string | yes | Must be a valid and unique email address |

##### Example Request
```http
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@gmail.com"
}
```

##### Example Response (201)
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@gmail.com",
  "createdAt": "2025-11-27T00:00:00.000Z",
  "updatedAt": "2025-11-27T00:00:00.000Z"
}
```

#### GET /api/users/:id

Returns a single user by ID.

##### Path Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | number | yes | The ID of the user to retrieve |

##### Example Request
```http
GET /api/users/1
```

##### Example Response (200)
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@gmail.com",
  "createdAt": "2025-11-27T00:00:00.000Z",
  "updatedAt": "2025-11-27T00:00:00.000Z"
}
```

#### PUT /api/users/:id

Updates an existing user.

##### Path Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | number | yes | The ID of the user to update |

##### Request Body
At least one field is required.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `name` | string | no | New name of the user |
| `email` | string | no | New email of the user |

##### Example Request
```http
PUT /api/users/1
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "updated_email@example.com"
}
```
##### Example of Response (200)
```json
{
  "id": 1,
  "name": "Updated Name",
  "email": "updated_email@example.com",
  "createdAt": "2025-11-27T00:00:00.000Z",
  "updatedAt": "2025-11-27T12:30:45.000Z"
}
```

#### DELETE /api/users/:id

Deletes a user by ID.

##### Path Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | number | yes | The ID of the user to delete |

##### Example Request
```http
DELETE   /api/users/1
```

Response 204 (No content returned)

---
