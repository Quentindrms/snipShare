import {Pool} from 'pg';

/** Singleton retournant la pool de connexion à la base de données */

export class Database {

    private static pool: Pool;

    /** Constructeur privé pour singleton */
    private constructor(){}

    static getPool(): Pool{
        if(!Database.pool){
            Database.pool = new Pool({
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                host: process.env.POSTGRES_HOST,
                database: process.env.POSTGRES_DB,
            })
        }
        return Database.pool;
    }
}