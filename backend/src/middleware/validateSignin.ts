import { NextFunction, Request, Response } from "express";
import {z} from "zod";

export function validateSignin(request: Request, response:Response, next:NextFunction){

    const parsed = signinSchema.safeParse(request.body);
    if(!parsed.success){
        const message = parsed.error.issues[0]?.message || 'Données utilisateur invalide';
        return response.status(400).json({message});
    }

    request.body = parsed.data;
    next();
}

    const signinSchema = z.object({
        nom_utilisateur: z.string().min(5, "Le nom d'utilisateur doit comporter minimum 5 caractères").max(25 ,"Le nom d'utilisateur doit comporter maximum 25 caractères"),
        prenom: z.string().min(5, "Un prénom doit comporter au minimum 5 caractères").max(50 ,"Un prénom ne peut pas comporter plus de 50 caractères"),
        nom: z.string().min(5, "Un nom doit comporter au moins 5 caractères").max(50, "Un nom ne peut pas comporter plus de 50 caractères"),
        email: z.email("Format d'email invalide"),
        mot_de_passe: z.string().min(10 ,"Un mot de passe doit contenir au moins 10 caractères").max(100, "Un mot de passe ne peut pas comporter plus de 100 caractères"),
    })