import { Router } from "express";
import { SnippetController } from "../controllers/SnippetController";
import { validateSnippet } from "../middleware/validateSnippet";

export const snippetRouter = Router();

snippetRouter.post('/post-snippet', validateSnippet, (request, response) => {
    const controller = new SnippetController(request, response);
    controller.createSnippet();
})

snippetRouter.get('/browse-snippet', (request, response) => {
    const controller = new SnippetController(request, response);
    controller.browseSnippet();
})

snippetRouter.get('/fetch-languages', (request, response) => {
    const controller = new SnippetController(request, response);
    controller.fetchLanguages();
})

export default snippetRouter;