import { Router } from "express";
import { SnippetController } from "../controllers/SnippetController";

export const snippetRouter = Router();

snippetRouter.post('/post-snippet', (request, response) => {
    const controller = new SnippetController(request, response);
    controller.createSnippet();
})

snippetRouter.get('/browse-snippet', (request, response) => {
    const controller = new SnippetController(request, response);
    controller.browseSnippet();
})

export default snippetRouter;