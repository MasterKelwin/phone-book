import Express from 'express';
import Cors from 'cors';
import ContactController from './controllers/ContactController';
import router from './router';

const app = Express();
app.use(Express.json());
app.use(Cors());

const PORT = 8000;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`)
})