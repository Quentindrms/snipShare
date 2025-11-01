import {Controller} from '../libs/Controller';

export class SnippetController extends Controller{

    createSnippet(){
        console.log(this.request.body);
    }

    browseSnippet(){
        this.response.json('Affichage des snippets');
    }

}