import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@omnistack-r76vq.mongodb.net/semana09?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// GET, POST, PUT, DELETE

// req.query = Acessar query params (Para filtros)
// req.params = Acessar route params (Para add e edit)
// req.body = Acessar corpo da requisição (Para add e edit)

app.use(express.json());
app.use(routes);

app.listen(3333);
