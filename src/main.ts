import express from 'express';
import { sequelize } from './services/database';
import bodyParser from 'body-parser';
import routes from './routes/charactersRoute';
import armasRoutes from './routes/armasRoutes'

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(routes);
app.use(armasRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});