import { app } from "./app.js";
import dotenv from 'dotenv'
import { dbClient } from "./db/dbClient.js";

dotenv.config()

dbClient().then(() => {
    const port = process.env.PORT || 4050
    app.listen(port, () => {
        console.log(`The Server is running on ${port}`);
    })
}).catch((error) => {
    console.log('The Server failed to run', error);
})