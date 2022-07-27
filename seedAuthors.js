require('dotenv').config()
const mongodb = require("mongodb").MongoClient
const csvtojson = require("csvtojson")
const authorCsv = './data/authors.csv'
console.log('authorCsv', authorCsv)
let authorData
csvtojson()
  .fromFile(authorCsv)
  .then(csvData => {
    console.log(csvData)
    authorData = csvData
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
      .collection("authors")
      .insertMany(authorData, (err, res) => {
        if (err) throw err;
        console.log(`Inserted: ${res.insertedCount} rows`);
        client.close();
      });
  }
)