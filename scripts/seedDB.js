const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    googleID: "ScKBDstVq4YC",
    title: "The Secret Pulse of Time",
    authors: ["Stefan Klein"],
    description:
      "From one of Europe's leading science journalists, and author of the international bestseller The Science of Happiness (Scribe, 2006), comes a fascinating, wonderful book about time. The Secret Pulse of Time answers fundamental questions about time. Why does time fly when we are happy? Why do minutes pass so slowly when we are waiting impatiently? How can we truly appreciate the present moment despite leading over-extended lives? Stefan Klein brings a journalist's eye for detail to illuminate the highways and byways of time - always with the goal of guiding us to better master time (and to understand why we so often fail to do so). Woven into his narrative are dozens of ways to do just this, including how not to lose your head when a deadline is quickly approaching; how the present becomes a memory, and vice versa; how to attune your inner clock for more productive, satisfying days; and how to prevent each day's fast tempo from having a detrimental effect on your overall enjoyment of life.",
    image:
      "http://books.google.com/books/content?id=ScKBDstVq4YC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    link:
      "http://books.google.com.au/books?id=ScKBDstVq4YC&dq=stefan+klein&hl=&source=gbs_api",
    date: new Date(Date.now()),
  },
  {
    googleID: "_ewvL93kFx4C",
    title: "Long Walk To Freedom",
    authors: ["Nelson Mandela"],
    description:
      "These memoirs from one of the great leaders of our time are 'essential reading for anyone who wants to understand history - and then go out and change it' Barack Obama The riveting memoirs of the outstanding moral and political leader of our time, Long Walk to Freedom brilliantly re-creates the drama of the experiences that helped shape Nelson Mandela's destiny. Emotive, compelling and uplifting, Long Walk to Freedom is the exhilarating story of an epic life; a story of hardship, resilience and ultimate triumph told with the clarity and eloquence of a born leader. 'Enthralling . . . Mandela emulates the few great political leaders such as Lincoln and Gandhi, who go beyond mere consensus and move out ahead of their followers to break new ground' Sunday Times 'The authentic voice of Mandela shines through this book . . . humane, dignified and magnificently unembittered' The Times 'Burns with the luminosity of faith in the invincible nature of human hope and dignity . . . Unforgettable' Andre Brink",
    image:
      "http://books.google.com/books/content?id=_ewvL93kFx4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    link:
      "https://play.google.com/store/books/details?id=_ewvL93kFx4C&source=gbs_api",
    date: new Date(Date.now()),
  },
  {
    googleID: "9oCJDwAAQBAJ",
    title: "Climbing",
    authors: ["Ron Funderburke"],
    description:
      "This continuation of FalconGuides’ progressive climbing series invites single pitch climbers to responsibly venture beyond the chains, into the realm of multi-pitch climbing. The farther from the ground a climb leads, the more technical proficiency and careful planning will make the difference between a worthy adventure and miserable epic. Climbing: From Single Pitch to Multi-Pitch complements instruction, ground school, and practice with a procedural approach to planning and preparation, leading anchoring and belaying, transitions, technical descent, and emergency preparedness. Before you get in way way over your head, make sure the essential skills outlined in this book have been reviewed, rehearsed, and individualized.",
    image:
      "http://books.google.com/books/content?id=9oCJDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    link:
      "https://play.google.com/store/books/details?id=9oCJDwAAQBAJ&source=gbs_api",
    date: new Date(Date.now()),
  },
  {
    googleID: "uLQHz9m0k-IC",
    title: "America (the Book)",
    authors: ["Jon Stewart", "Ben Karlin", "David Javerbaum"],
    description:
      "The host of the award-winning humorous news program offers tongue-in-cheek insight into American democracy with coverage of such topics as the republican qualities of ancient Rome, the antics of our nation's founders, and the ludicrous nature of today's media.",
    image:
      "http://books.google.com/books/content?id=uLQHz9m0k-IC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    link:
      "http://books.google.com.au/books?id=uLQHz9m0k-IC&dq=America&hl=&source=gbs_api",
    date: new Date(Date.now()),
  },
  {
    googleID: "t9_dr8m6Z3AC",
    title: "April Fool's Day",
    authors: ["Bryce Courtenay"],
    description:
      "In the end, love is more important than everything and it will conquer and overcome anything. Or that's how Damon saw it, anyway. Damon wanted a book that talked a lot about love. Damon Courtenay died on the morning of April Fool's Day. In this tribute to his son, Bryce Courtenay lays bare the suffering behind this young man's life. Damon's story is one of lifelong struggle, his love for Celeste, the compassion of family, and a fight to the end for integrity. A testimony to the power of love, April Fool's Day is also about understanding: how when we confront our worst, we can become our best. This life-affirming book will change the way you think. Visit brycecourtenay.com",
    image:
      "http://books.google.com/books/content?id=t9_dr8m6Z3AC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    link:
      "http://books.google.com.au/books?id=t9_dr8m6Z3AC&dq=bryce+courtney&hl=&source=gbs_api",
    date: new Date(Date.now()),
  },

  {
    googleID: "P8ZW-seRqiMC",
    title: "Lionheart",
    authors: ["Jesse Martin"],
    description:
      "The story of Jesse Martin who, at the age of 18, was the youngest person to sail solo and unassisted around the world. A young man who didn't know the meaning of impossible.",
    image:
      "http://books.google.com/books/content?id=P8ZW-seRqiMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    link:
      "http://books.google.com.au/books?id=P8ZW-seRqiMC&dq=lionheart&hl=&source=gbs_api",
    date: new Date(Date.now()),
  },
  {
    googleID: "-utBWluSbDUC",
    title: "Madness Explained",
    authors: ["Richard P Bentall"],
    description:
      "Today most of us accept the consensus that madness is a medical condition: an illness, which can be identified, classified and treated with drugs like any other. In this ground breaking and controversial work Richard Bentall shatters the myths that surround madness. He shows there is no reassuring dividing line between mental health and mental illness. Severe mental disorders can no longer be reduced to brain chemistry, but must be understood psychologically, as part of normal behaviour andhuman nature. Bentall argues that we need a radically new way of thinking about psychosis and its treatment. Could it be that it is a fear of madness, rather than the madness itself, that is our problem?",
    image:
      "http://books.google.com/books/content?id=-utBWluSbDUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    link:
      "https://play.google.com/store/books/details?id=-utBWluSbDUC&source=gbs_api",
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
