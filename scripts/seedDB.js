const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    title: "Harry Potter and the Goblet of Fire",
    authors: ["J. K. Rowling", "Mary GrandPré"],
    description:
      "Young wizard-in-training Harry Potter prepares for…ishes above all to be a normal fourteen-year-old.",
    image:
      "http://books.google.com/books/content?id=oPIMmQEAC…J&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    link:
      "http://books.google.com/books/content?id=oPIMmQEAC…J&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    date: new Date(Date.now()),
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
