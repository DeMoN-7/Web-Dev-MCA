const { MongoClient } = require("mongodb");

// MongoDB connection URL
const uri = "mongodb://localhost:27017"; // Change if needed
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("testdb"); // Database name
        const collection = db.collection("users1"); // Collection name

        // CREATE - Insert a document
        const newUser = { name: "John Doe", age: 25, city: "New York" };
        const result = await collection.insertOne(newUser);
        console.log("Inserted:", result.insertedId);
        const newUser1 = { name: "Ayush Singh", age: 25, city: "New York" };
        const result1 = await collection.insertOne(newUser1);
        console.log("Inserted:", result.insertedId);

        // READ - Find all documents
        const users = await collection.find().toArray();
        console.log("Users:", users);

        // UPDATE - Update a document
        const updateResult = await collection.updateOne(
            { name: "John Doe" },
            { $set: { age: 26 } }
        );
        console.log("Updated:", updateResult.modifiedCount);

        // DELETE - Delete a document
        const deleteResult = await collection.deleteOne({ name: "John Doe" });
        console.log("Deleted:", deleteResult.deletedCount);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
