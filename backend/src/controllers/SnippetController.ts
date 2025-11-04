import { Controller } from '../libs/Controller';
import { SnippetRepository } from '../repositories/SnippetRepository';

export class SnippetController extends Controller {

    createSnippet() {
        console.log(this.request.body);
        const repository = new SnippetRepository();
        repository.createSnippet(this.request.body);
    }

    browseSnippet() {
        this.response.json('Affichage des snippets');
    }

    async fetchLanguages() {
        const repository = new SnippetRepository();
        const languages = await repository.fetchLanguages();
        this.response.json({ data: languages });
    }

    async fetchSnippets(){
        const repository = new SnippetRepository();
        const snippets = await repository.fetchSnippet();
        this.response.json({data: snippets});
    }

}