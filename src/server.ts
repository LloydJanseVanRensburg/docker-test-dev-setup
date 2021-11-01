import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import db from './config/db';

// import User from './models/User';
// User.sync({ force: true });

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
});

const PORT = 5000;

db.authenticate()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err: any) => {
    console.log(err);
    process.exit(1);
  });
