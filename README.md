# User Data Collection API

Web API for managing user data built using NestJS..

## Tech Stack

- **Programming Language**:
  NestJS (v11.0.1)  
- **ORM**: Prisma (v6.13.0) 
- **Database**: PostgreSQL (v16.9)

---

## Setup Instructions

### 1. Open Terminal / Console

Start by opening your terminal or command prompt.

### 2. Clone the Repository

   ```bash
   git clone https://github.com/fericopasaribu/api-pendataan-user.git
   cd api-pendataan-user
   ```
### 3. Project Setup

- Open your terminal and navigate to the folder where the cloned project is located.
  
- Run the following command to install dependencies
    ```bash
    npm i
    ```
- Rename ``` .env.example ``` file to ``` .env ``` 
    
- Open the ``` .env ``` file and update the ``` DATABASE_URL ``` configuration to match your PostgreSQL username, password, and database name.
    ```bash
    DATABASE_URL="postgresql://username:password@localhost:5432/db_user?schema=public"
    ```
    
- Run the following command to apply the database migrations
    ```bash
    npx prisma migrate dev
    ```
    
- Run the following command in the terminal
    ```bash
    npm run start:dev
    ```