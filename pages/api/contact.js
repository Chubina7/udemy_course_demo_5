import { MongoClient } from "mongodb"

const handler = async (req, res) => {
  if (req.method === "POST") {
    // 1) Getting data from request
    const { email, name, message } = req.body;

    // 2) Validation
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." })
      return;
    }

    // 3) Storing in DataBase
    const newMessage = { email, name, message }
    let client;

    // Trying to connect the client
    try {
      client = await MongoClient.connect(process.env.MONGO_CLIENT)
    } catch (error) {
      res.status(500).json({ message: "Could not connect to a database" })
      return
    }
    // connect to the database
    const db = client.db()
    // Connect to the collection and put the data
    try {
      const result = await db.collection("messages").insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      client.close()
      res.status(500).json({ message: "Storing message failed." })
      return;
    }

    client.close()

    res.status(201).json({ message: "Successfully stored message!", message: newMessage })
  }
};

export default handler;
