import { Repository } from "../libs/Repository";
import SnippetType from "../types/SnippetType";

export class SnippetRepository extends Repository {

    createSnippet = async (snippet: SnippetType): Promise<number | null> => {
        const query = {
            name: 'create-snippet',
            text: 'INSERT INTO snippet (titre, description, tags, code) VALUES ($1, $2, $3, $4) RETURNING identifiant_snippet',
            values: [
                snippet.name,
                snippet.details,
                snippet.tags,
                snippet.code
            ]
        };
        try {
            const result = await this.pool.query<{ id: number }>(query);
            return result.rows[0].id;
        } catch (err) {
            console.log(err);
        }
        return null;
    }

}