import { Repository } from "../libs/Repository";
import { SnippetDbRow, UserDbRow } from "../types/Database";

export class UsersRepository extends Repository {

    createUser = async (user: UserDbRow): Promise<number | null> => {
        console.log('Création user');
        const query = {
            name: 'create-user',
            text: 'INSERT INTO utilisateur (nom_utilisateur, prenom, nom, mot_de_passe_hash, email, snippets_favoris, snippet_like) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING identifiant_utilisateur',
            values: [
                user.nom_utilisateur,
                user.prenom,
                user.nom,
                user.mot_de_passe_hash,
                user.email,
                user.snippet_favoris,
                user.snippet_like
            ]
        };
        try {
            const result = await this.pool.query<{ id: number }>(query);
            console.log("User crée");
            return result.rows[0].id;
        } catch (err) {
            console.log(err);
        }
        return null;
    }

    getUser = async (email: string): Promise<UserDbRow[] | undefined> => {
        const query = {
            name: 'get-user',
            text: 'SELECT * FROM utilisateur WHERE email=$1',
            values: [
                email
            ]
        };
        try {
            const result = await this.pool.query<UserDbRow[]>(query);
            const user = result.rows;
            return user[0];
        } catch (err) {
            console.error(err);
        }
        return undefined;
    }

}