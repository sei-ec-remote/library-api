require('dotenv').config()
const mongodb = require("mongodb").MongoClient
const csvtojson = require("csvtojson")
const bookCsv = './data/books.csv'
console.log('bookCsv', bookCsv)
let bookData
csvtojson()
  .fromFile(bookCsv)
  .then(csvData => {
    console.log(csvData)
    bookData = csvData
  })
  .catch(err => console.log(err))

const mongoUrl = process.env.MONGODB_URI

mongodb.connect(
  mongoUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) throw err;
    client
      .db("library")
      .collection("books")
      .insertMany(bookData, (err, res) => {
        if (err) throw err;
        console.log(`Inserted: ${res.insertedCount} rows`);
        client.close();
      });
  }
)