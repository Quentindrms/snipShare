import { Router } from "express";

const router = Router();

router.get('/', (request, response) => {
    response.send('Backend fonctionnel');
})

export default router;