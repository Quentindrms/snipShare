import argon2 from "argon2";
import { Controller } from "../libs/Controller";
import { UserDbRow } from "../types/Database";
import { UsersRepository } from "../repositories/UsersRepository";
import { check } from "zod";

export class AuthController extends Controller {

    /**
     * Inscription
     */
    async signin() {

        const usersRepository = new UsersRepository();

        const unregistredUser: UserDbRow = {
            nom_utilisateur: this.request.body.nom_utilisateur,
            prenom: this.request.body.prenom,
            nom: this.request.body.nom,
            mot_de_passe_hash: await argon2.hash(this.request.body.mot_de_passe),
            email: this.request.body.email,
            snippet_favoris: [],
            snippet_like: []
        }

        const checkUser = await usersRepository.getUser(unregistredUser.email);
        if (!checkUser) {
            console.log("L'utilisateur n'existe pas, création");
            usersRepository.createUser(unregistredUser);
            this.response.status(200).json('Compte crée avec succès');
        }
        else {
            console.log("L'utilisateur existe déjà");
            this.response.status(400).json("Un utilisateur similaire existe déjà");
        }
    }

    /**
     * Connexion
     */

    signup() {

    }

}