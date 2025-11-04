import { Repository } from "../libs/Repository";
import { LanguageDbRow, SnippetDbRow } from "../types/Database";
import SnippetType from "../types/SnippetType";

export class SnippetRepository extends Repository {

    createSnippet = async (snippet: SnippetType): Promise<number | null> => {
        const query = {
            name: 'create-snippet',
            text: 'INSERT INTO snippet (titre, description, tags, code, visibilite, identifiant_language, identifiant_utilisateur) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING identifiant_snippet',
            values: [
                snippet.snippetName,
                snippet.snippetDetails,
                snippet.snippetTags,
                snippet.snippetCode,
                snippet.visibilite,
                snippet.language,
                snippet.identifiant_utilisateur,
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
            return language;
        } catch(err){
            console.error(err);
        }
        return undefined;
    }

    fetchSnippet = async(): Promise<SnippetDbRow[] | undefined> => {
        const query = {
            name: 'fetch-snippet',
            text: 'SELECT * FROM snippet'
        };
        try{
            const result = await this.pool.query<SnippetDbRow>(query);
            const snippets = result.rows;
            return snippets;
        }catch(err){
            console.log(err);
        }
        return undefined;
    }

}