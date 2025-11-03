import { Repository } from "../libs/Repository";
import { LanguageDbRow } from "../types/Database";
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
            console.error(err);
        }
        return null;
    }

    fetchLanguages = async(): Promise<LanguageDbRow[] | undefined> => {
        const query = {
            name: 'fetch-languages',
            text: 'SELECT * FROM snippet_language',
        };
        try{
            const result = await this.pool.query<LanguageDbRow>(query);
            const language = result.rows;
            console.log(language);
            return language;
        } catch(err){
            console.error(err);
        }
        return undefined;
    }

}