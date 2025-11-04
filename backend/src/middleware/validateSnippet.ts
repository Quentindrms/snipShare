import type {Request, Response, NextFunction} from "express";
import {z} from "zod";

export function validateSnippet(request:Request, response:Response, next:NextFunction){

    const parsed = snippetSchema.safeParse(request.body);
    if(!parsed.success){
        const message = parsed.error.issues[0]?.message || 'Données du snippet invalide';
        return response.status(400).json({message});
    }

    request.body = parsed.data;
    next();
}

const snippetSchema = z.object({
    snippetName: z.string().min(5, 'Le nom du snippet doit être supérieur à 5 caractères').max(100, 'Le nom du snippet ne peut pas dépasser 100 caractères'),
    snippetTag: z.array(z.string().min(5, 'Un tag doit comporter au minimum 5 caractères').max(50, 'Un tag ne peut pas comporter plus de 50 caractères')),
    snippetDetails: z.string().min(20, 'La description doit compter minimum 20 caractères').max(10000, 'La description ne peut pas dépasser 10 000 caractères'),
    snippetCode: z.string().min(10, 'Le code du snippet doit comporter au minimum 10 caractères').max(10000, 'Le code du snippet ne peut pas comporter plus de 10 000 caractères'),
    language: z.string('Un snippet doit comporter un language'),
    identifiant_utilisateur: z.int("L'identifiant utilisateur doti être un chiffre")
})