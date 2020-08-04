import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3030, () => {
  console.log('Aplicação rodando na porta 3030');
  console.log('http://localhost:3030');
});
