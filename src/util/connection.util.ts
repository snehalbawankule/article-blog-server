import { Sequelize } from "sequelize";
//import { ParamStoreUtil } from '../util/aws-config.util';
//import config from 'config';
//const dbConfig: any = config.get('db');

/*const dbNameParamName: string = config.get('db.dbNameParamName');
const userParamName: string = config.get('db.userParamName');
const passwordParamName: string = config.get('db.passwordParamName');
const portParamName: string = config.get('db.portParamName');
const hostParamName: string = config.get('db.hostParamName');

let params = {
	Names: [userParamName, passwordParamName, hostParamName, portParamName, dbNameParamName],
	WithDecryption: true
};
*/
const sequelize = new Sequelize("user-info", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  logging: true,
});

export { sequelize };
