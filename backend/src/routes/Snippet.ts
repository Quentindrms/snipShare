import { Router } from "express";
import { SnippetController } from "../controllers/SnippetController";
import { validateSnippet } from "../middleware/validateSnippet";

export const snippetRouter = Router();

snippetRouter.post('/post-snippet', validateSnippet, (request, response) => {
    const controller = new SnippetController(request, response);
    controller.createSnippet();
})

snippetRouter.get('/fetch-languages', (request, response) => {
    const controller = new SnippetController(request, response);
    controller.fetchLanguages();
})

snippetRouter.get('/fetch-snippets', (request, response) => {
    const controller = new SnippetController(request, response);
    controller.fetchSnippets();
})

snippetRouter.get('/fetch-snippet/:id', (request, response) => {
    const controller = new SnippetController(request, response);
    const query = request.params.id;
    controller.fetchSnippet(parseInt(query));
})

export default snippetRouter;