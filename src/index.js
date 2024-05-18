import { app } from "./app";
import dotenv from 'dotenv'
import { dbClient } from "./db/dbClient";

dotenv.config()

dbClient().then(() => {
    const port = process.env.MONGODB_URI || 4050
    app.listen(port, () => {
        console.log(`The Server is running on ${port}`);
    })
}).catch((error) => {
    console.log('The Server failed to run', error);
})