import { Client } from "pg";

const client = new Client({
    connectionString:"postgresql://Kirat-Cohort-2_owner:8XHqpSyrY3ZJ@ep-little-cake-a58cfjiz.us-east-2.aws.neon.tech/Kirat-Cohort-2?sslmode=require",
});

async function createUsersTable(){
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result);
}

createUsersTable();