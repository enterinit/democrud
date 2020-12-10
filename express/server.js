const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();
const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
    },
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());


app.get('/', (req, res) => {
  db.select('*')
      .from('hotdogs')
      .then((data) => {
          console.log(data);
          res.json(data);
      })
      .catch((err) => {
          console.log(err);
      });
});

/*
app.get('/:hotdogId', (req, res) => {
  const hotdogId = req.params.hotdogId;
  db.select('*')
      .from('hotdogs')
      .where('hotdog_id', '=', hotdogId)
      .then((data) => {
          console.log(data);
          res.json(data);
      })
      .catch((err) => {
          console.log(err);
      });
});
*/

app.post('/add-hotdog', (req, res) => {
  const { name, title, description, image } = req.body;
  db('hotdogs')
      .insert({
        name: name,
        title: title,
        description: description,
        image: image,
      })
      .then(() => {
          console.log('hotdog Added');
          return res.json({ msg: 'hotdog Added' });
      })
      .catch((err) => {
          console.log(err);
      });
});


app.delete('/delete-hotdog', (req, res) => {
  const hotdogId = req.body;
  const hotdogIdToDelete = (hotdogId.hotdogId);
  console.log(hotdogIdToDelete);
  db('hotdogs')
      .where('hotdog_id', '=', hotdogIdToDelete)
      .del()
      .then(() => {
          console.log('hotdog Deleted');
          return res.json({ msg: 'hotdog Deleted' });
      })
      .catch((err) => {
          console.log(err);
      });
});


app.put('/update-hotdog', (req, res) => {
    const hotdogId = req.body;
    const name= req.body;
    const title = req.body;
    const description = req.body;
    const image = req.body;
    const hotdogIdToDelete = (hotdogId.hotdogId);
  db('hotdogs')
      .where('hotdog_id', '=', hotdogIdToDelete)
      .update({       name: name.name,
        title: title.title,
        description: description.description,
        image: image.image })
      .then(() => {
          console.log('hotdog Updated');
          return res.json({ msg: 'hotdog Updated' });
      })
      .catch((err) => {
          console.log(err);
      });
});

app.use('/.netlify/functions/server', router);
module.exports = app;
module.exports.handler = serverless(app);