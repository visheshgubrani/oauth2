import mongoose from "mongoose"

const dbClient = async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
    } catch (error) {
        console.log('MongoDb Connection Error', error);
        process.exit(1)
    }
}

export {dbClient}