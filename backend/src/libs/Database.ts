import {Pool} from 'pg';

/** Singleton retournant la pool de connexion à la base de données */

export class Database {

    private static pool: Pool;

    /** Constructeur privé pour singleton */
    private constructor(){}

    static getPool(): Pool{
        if(!Database.pool){
            Database.pool = new Pool({
                user: process.env.PGUSER,
                password: process.env.PGPASSWORD,
                host: process.env.PGHOST,
                database: process.env.PGDATABASE,
            })
        }
        return Database.pool;
    }
}