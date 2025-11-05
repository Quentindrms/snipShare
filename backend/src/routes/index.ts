import { Router } from "express";
import snippetRouter from "./Snippet";
import authRouter from "./auth";

const router = Router();

router.use('/snippets', snippetRouter);
router.use('/authentification', authRouter);

export default router;