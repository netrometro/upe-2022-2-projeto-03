import express from 'express';

const app = express();
// const router = express.Router();

app.use(express.json());


app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!');
});

// router.get('/', async (req, res) => {
//   return 'okay';
// });