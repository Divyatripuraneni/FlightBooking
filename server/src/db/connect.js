const mongoose = require("mongoose");
// Middleware
const db = 'mongodb+srv://Reshma:Reshma@cluster0.szg7uxh.mongodb.net/?retryWrites=true&w=majority'

// Connect to MongoDB using the conneccdtion string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017

