import { Controller } from '../libs/Controller';
import { SnippetRepository } from '../repositories/SnippetRepository';

export class SnippetController extends Controller {

    createSnippet() {
        console.log(this.request.body);
        const repository = new SnippetRepository();
        repository.createSnippet(this.request.body);
    }

    /** 
     * Fetch tous les langages disponibles 
    */

    async fetchLanguages() {
        const repository = new SnippetRepository();
        const languages = await repository.fetchLanguages();
        this.response.json({ data: languages });
    }

    /**
     * Fetch tous les snippets disponibles en base de données
     */

    async fetchSnippets(){
        const repository = new SnippetRepository();
        const snippets = await repository.fetchSnippets();
        this.response.json({data: snippets});
    }

    /** 
     * Fetch un snippet selon son ID 
     */

    async fetchSnippet(identifiant: number){
        const repository = new SnippetRepository();
        const snippet = await repository.fetchSnippet(identifiant);
        this.response.json({data: snippet});
    }

}