import { Sequelize } from 'sequelize';

const dbConnectionURI = process.env.POSTGRES_URI!;

export default new Sequelize(dbConnectionURI);
