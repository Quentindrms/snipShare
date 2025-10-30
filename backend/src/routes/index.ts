import { Router } from "express";
import snippetRouter from "./Snippet";

const router = Router();

router.get('/', (request, response) => {
    response.send('Backend fonctionnel');
})

router.use('/snippets', snippetRouter);

export default router;