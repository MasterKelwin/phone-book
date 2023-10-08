import Express from 'express';
import Cors from 'cors';
import router from './router';
import dotenv from 'dotenv';

const app = Express();
app.use(Express.json());
app.use(Cors());
dotenv.config();

const PORT = process.env.PORT || 8000;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`)
})