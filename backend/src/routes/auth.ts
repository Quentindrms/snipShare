import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { validateSignin } from "../middleware/validateSignin";

const authRouter = Router();

authRouter.get('/signin', validateSignin, (request, response) => {
    const authController = new AuthController(request, response);
    authController.signin();
})

authRouter.get('/signin', (request, response) => {
    const authController = new AuthController(request, response);
    authController.signup();
})

export default authRouter;