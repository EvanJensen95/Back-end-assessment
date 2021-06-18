const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

// app.get("/api/compliment", (req, res) => {
//   const compliments = ["Gee, you're a smart cookie!",
// 					 "Cool shirt!",
// 					 "Your Javascript skills are stellar.",
  // ];

  // choose random compliment
  // let randomIndex = Math.floor(Math.random() * compliments.length);
  // let randomCompliment = compliments[randomIndex];



//   res.status(200).send(randomCompliment);
  
// });

app.get('/api/fortunes', (req, res) => {
  const fortunes = ['A beautiful, smart, and loving person will be coming into your life.',
  'A gambler not only will lose what he has, but also will lose what he doesn’t have.',
  'A hunch is creativity trying to tell you something.','A light heart carries you through all the hard times.',
  'A smile is your personal welcome mat.', 'All your hard work will soon pay off.']

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);

});

app.get('/api/rating', (req, res) => {
  const rating = ['100', '1000', '10000', '100000', '1000000', '100000000']

  let randomIndex = Math.floor(Math.random() * rating.length);
  let randomRating = rating[randomIndex];
  
  res.status(200).send(randomRating);
})

const compliments = [
  {
      id: 0,
      title : 'You are great'
  },
  {
      id: 1,
      title : 'You are pretty cool!'
  },
  {
      id: 2,
      title : 'You are doing amazing'
  },
  {
      id: 3,
      title : 'You da BOMB!'
  }
];

app.get('/api/compliments', (req, res) => {
  console.log('someone got all the compliments');
  res.status(200).send(compliments)
});

res.status(200).send(compliments[+req.params.complimentIndex]);
  

app.listen(4000, () => console.log("The best server running on 4000"));
