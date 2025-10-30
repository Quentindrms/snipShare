import {Controller} from '../libs/Controller';

export class SnippetController extends Controller{

    createSnippet(){
    
    }

    browseSnippet(){
        this.response.json('Affichage des snippets');
    }

}