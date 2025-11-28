# Study Tracker API

A small backend project focused on learning API architecture and modern tooling.  
The goal is to build a clean and scalable API that exposes the same domain model through both **REST** and **GraphQL**, using **Node.js**, **Express** and **Prisma ORM**.

## 📌 Objectives
- Build a REST API and a GraphQL API over the same data source
- Apply backend best practices
- Design a clean project structure
- Integrate a real database using Prisma ORM
- Practice database migrations and versioning
- Prepare for public deployment

## 🛠 Tech Stack (planned)
- Node.js
- Express
- REST API
- GraphQL
- Prisma ORM
- SQLite (development)
- TypeScript *(optional)*

## 🗂 Planned Features (initial)

- Users
- Courses
- Enrollments
- Progress tracking
- REST endpoints
- GraphQL schema & resolvers 

## 🚀 Getting Started
1. Clone the repository  
   ```bash
   git clone https://github.com/yourusername/study-tracker-api.git
   ```

2. Navigate to the project directory  
   ```bash
   cd study-tracker-api
   ```

3. Verify you have node +20 installed, if you have nvm you can run:  
   ```bash
   nvm use
   ```

4. Install dependencies  
   ```bash
   npm install
   ```

5. Generate Prisma client and run migrations  
    ```bash
    npm run prisma:generate
    npm run prisma:migrate ## Give a name to the migration when prompted
    ```

6. Start the development server  
   ```bash
   npm run dev
   ```

## 📄 Documentation

- REST API documented with OpenAPI/Swagger 
  - Accessible at: `http://localhost:3001/docs`
  - REST endpoints available under `http://localhost:3001/api`;

- GraphQL schema available via GraphiQL interface  
  - Accessible at: `http://localhost:3001/query`