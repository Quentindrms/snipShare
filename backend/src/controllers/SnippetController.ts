import {Controller} from '../libs/Controller';
import { SnippetRepository } from '../repositories/SnippetRepository';

export class SnippetController extends Controller{

    createSnippet(){
        const repository = new SnippetRepository();
        repository.createSnippet(this.request.body);
    }

    browseSnippet(){
        this.response.json('Affichage des snippets');
    }

    async fetchLanguages(){
        const repository = new SnippetRepository();
        const languages = await repository.fetchLanguages();
        this.response.json(languages);
    }

}